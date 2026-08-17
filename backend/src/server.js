import "dotenv/config";
import app from "./app.js";
import connectDB from "./config/db.js";
import { seedInitialProductsIfEmpty } from "./utils/seedProducts.js";

const PORT = Number(process.env.PORT) || 5000;

// MongoDB connection state
let mongoDBConnected = false;

/**
 * Print startup diagnostics without exposing credentials
 */
const printStartupDiagnostics = () => {
  console.log("");
  console.log("========================================");
  console.log("APPLICATION STARTUP DIAGNOSTICS");
  console.log("========================================");
  console.log("NODE_ENV:", process.env.NODE_ENV || "development");
  console.log("PORT:", PORT);
  console.log("MONGODB_URI exists:", Boolean(process.env.MONGODB_URI));
  
  if (process.env.MONGODB_URI) {
    try {
      const parsed = new URL(process.env.MONGODB_URI);
      console.log("MongoDB hostname:", parsed.hostname);
      console.log("MongoDB database:", parsed.pathname.replace("/", "") || "default");
    } catch {
      console.log("MongoDB URI: <invalid format>");
    }
  }
  console.log("========================================");
  console.log("");
};

/**
 * Attempt MongoDB connection with retry logic
 * Does not crash the process if connection fails
 */
const connectToMongoDB = async (attempt = 1, maxAttempts = 10) => {
  if (mongoDBConnected) {
    return true;
  }

  try {
    const isProduction = process.env.NODE_ENV === "production";
    
    if (!isProduction || attempt === 1) {
      console.log(`[MongoDB] Connection attempt ${attempt}/${maxAttempts}...`);
    }
    
    await connectDB();
    mongoDBConnected = true;
    console.log("✅ MongoDB connected successfully");
    
    // Seed products after successful connection
    try {
      await seedInitialProductsIfEmpty();
    } catch (seedError) {
      console.warn("⚠️  Product seeding skipped:", seedError.message);
    }
    
    return true;
  } catch (error) {
    const isProduction = process.env.NODE_ENV === "production";
    
    if (!isProduction) {
      console.error(`❌ MongoDB connection attempt ${attempt} failed:`, error.message);
    } else if (attempt === 1 || attempt % 3 === 0) {
      // In production, log every 3rd attempt to reduce noise
      console.error(`❌ MongoDB attempt ${attempt}/${maxAttempts} failed (retrying...)`);
    }
    
    // Don't retry indefinitely
    if (attempt < maxAttempts) {
      const delayMs = Math.min(5000 * attempt, 30000); // 5s, 10s, 15s... up to 30s
      
      setTimeout(() => {
        connectToMongoDB(attempt + 1, maxAttempts);
      }, delayMs);
    } else {
      console.error(`❌ MongoDB: Max connection attempts (${maxAttempts}) reached. Will keep retrying in background.`);
    }
    
    return false;
  }
};

/**
 * Start HTTP server immediately, regardless of MongoDB connection status
 * This ensures GoDaddy's health check passes and app stays alive
 */
const startServer = async (port = PORT) => {
  try {
    // Print diagnostics before starting
    printStartupDiagnostics();

    // Start HTTP server immediately (don't wait for MongoDB)
    const server = app.listen(port, "0.0.0.0", () => {
      console.log("");
      console.log("✅✅✅ HTTP SERVER STARTED ✅✅✅");
      console.log("");
      console.log(`Server running on 0.0.0.0:${port}`);
      console.log(`Frontend: http://localhost:${port}`);
      console.log(`API: http://localhost:${port}/api/health`);
      console.log("");
      console.log("Attempting MongoDB connection in background...");
      console.log("");
    });

    // Handle server errors (e.g., port already in use)
    server.on("error", async (error) => {
      if (error.code === "EADDRINUSE") {
        const fallbackPort = Number(port) + 1;
        console.warn(`⚠️  Port ${port} is already in use. Trying ${fallbackPort} instead.`);
        server.close();
        await startServer(fallbackPort);
        return;
      }

      console.error("❌ Server error:", error.message);
      process.exit(1);
    });

    // Handle graceful shutdown
    process.on("SIGTERM", () => {
      console.log("SIGTERM received, shutting down gracefully...");
      server.close(() => {
        console.log("Server closed");
        process.exit(0);
      });
    });

    process.on("SIGINT", () => {
      console.log("SIGINT received, shutting down gracefully...");
      server.close(() => {
        console.log("Server closed");
        process.exit(0);
      });
    });

    // Attempt MongoDB connection in the background
    // This doesn't block server startup
    connectToMongoDB();

  } catch (error) {
    console.error("❌ Failed to start server:", error.message || error);
    process.exit(1);
  }
};

// Handle unhandled promise rejections
process.on("unhandledRejection", (reason, promise) => {
  console.error("⚠️  Unhandled Rejection at:", promise, "reason:", reason);
  // Don't exit - let the process continue
});

// Start the application
startServer();
