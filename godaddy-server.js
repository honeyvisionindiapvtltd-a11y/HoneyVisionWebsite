import "dotenv/config";
import app from "./backend/src/app.js";
import connectDB from "./backend/src/config/db.js";

const PORT = Number(process.env.PORT) || 5000;

console.log("");
console.log("========================================");
console.log("HoneyVision GoDaddy Deployment");
console.log("========================================");
console.log(`NODE_ENV: ${process.env.NODE_ENV || "development"}`);
console.log(`PORT: ${PORT}`);
console.log(`Frontend dist: ./frontend/dist`);
console.log("========================================");
console.log("");

// Attempt MongoDB connection on startup
let mongoDBConnected = false;
const connectToMongoDB = async (attempt = 1, maxAttempts = 5) => {
  if (mongoDBConnected) return true;

  try {
    console.log(`[MongoDB] Connection attempt ${attempt}/${maxAttempts}...`);
    await connectDB();
    mongoDBConnected = true;
    console.log("✅ MongoDB connected successfully");
    return true;
  } catch (error) {
    console.error(`❌ MongoDB attempt ${attempt} failed:`, error.message);

    if (attempt < maxAttempts) {
      const delayMs = Math.min(5000 * attempt, 30000);
      console.log(`Retrying in ${delayMs / 1000}s...`);
      setTimeout(() => connectToMongoDB(attempt + 1, maxAttempts), delayMs);
    } else {
      console.error(
        `❌ Max connection attempts (${maxAttempts}) reached. MongoDB will retry in background.`
      );
    }
    return false;
  }
};

// Start server on 0.0.0.0 for GoDaddy compatibility
const server = app.listen(PORT, "0.0.0.0", () => {
  console.log("");
  console.log("========================================");
  console.log("✅ HTTP SERVER STARTED");
  console.log("========================================");
  console.log(`Server listening on 0.0.0.0:${PORT}`);
  console.log(`Frontend: http://localhost:${PORT}`);
  console.log(`API Health: http://localhost:${PORT}/api/health`);
  console.log("MongoDB connection running in background...");
  console.log("========================================");
  console.log("");
});

// Attempt MongoDB connection in background
connectToMongoDB();

// Graceful shutdown
process.on("SIGTERM", () => {
  console.log("\n[SIGTERM] Shutting down gracefully...");
  server.close(() => {
    console.log("Server closed");
    process.exit(0);
  });
});

process.on("SIGINT", () => {
  console.log("\n[SIGINT] Shutting down gracefully...");
  server.close(() => {
    console.log("Server closed");
    process.exit(0);
  });
});