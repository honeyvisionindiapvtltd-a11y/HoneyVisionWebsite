import "dotenv/config";
import app from "./app.js";
import connectDB from "./config/db.js";
import { seedInitialProductsIfEmpty } from "./utils/seedProducts.js";

const PORT = Number(process.env.PORT) || 5000;

let mongoDBConnected = false;

/* =========================================================
   STARTUP DIAGNOSTICS
========================================================= */

const printStartupDiagnostics = () => {
  console.log("");
  console.log("========================================");
  console.log("APPLICATION STARTUP DIAGNOSTICS");
  console.log("========================================");

  console.log(
    "NODE_ENV:",
    process.env.NODE_ENV || "development"
  );

  console.log("PORT:", PORT);

  console.log(
    "MONGODB_URI exists:",
    Boolean(process.env.MONGODB_URI)
  );

  if (process.env.MONGODB_URI) {
    try {
      const parsed = new URL(
        process.env.MONGODB_URI
      );

      console.log(
        "MongoDB hostname:",
        parsed.hostname
      );

      console.log(
        "MongoDB database:",
        parsed.pathname.replace("/", "") ||
          "default"
      );
    } catch {
      console.log(
        "MongoDB URI: <invalid format>"
      );
    }
  }

  console.log("========================================");
  console.log("");
};

/* =========================================================
   MONGODB CONNECTION
========================================================= */

const connectToMongoDB = async (
  attempt = 1,
  maxAttempts = 10
) => {
  if (mongoDBConnected) {
    return true;
  }

  try {
    const isProduction =
      process.env.NODE_ENV === "production";

    console.log(
      `[MongoDB] Connection attempt ${attempt}/${maxAttempts}...`
    );

    await connectDB();

    mongoDBConnected = true;

    console.log(
      "✅ MongoDB connected successfully"
    );

    /*
      Seed products only after MongoDB connects.
    */
    try {
      await seedInitialProductsIfEmpty();

      console.log(
        "✅ Initial product check completed"
      );
    } catch (seedError) {
      console.warn(
        "⚠️ Product seeding skipped:",
        seedError.message
      );
    }

    return true;
  } catch (error) {
    const isProduction =
      process.env.NODE_ENV === "production";

    if (!isProduction) {
      console.error(
        `❌ MongoDB connection attempt ${attempt} failed:`,
        error.message
      );
    } else if (
      attempt === 1 ||
      attempt % 3 === 0
    ) {
      console.error(
        `❌ MongoDB attempt ${attempt}/${maxAttempts} failed:`,
        error.message
      );
    }

    if (attempt < maxAttempts) {
      const delayMs = Math.min(
        5000 * attempt,
        30000
      );

      console.log(
        `MongoDB retrying in ${delayMs / 1000}s...`
      );

      setTimeout(() => {
        connectToMongoDB(
          attempt + 1,
          maxAttempts
        );
      }, delayMs);
    } else {
      console.error(
        `❌ MongoDB: Max connection attempts (${maxAttempts}) reached.`
      );

      console.error(
        "MongoDB will continue retrying in the background."
      );
    }

    return false;
  }
};

/* =========================================================
   START SERVER
========================================================= */

const startServer = async () => {
  try {
    printStartupDiagnostics();

    /*
      IMPORTANT:
      Use exactly process.env.PORT on Render/GoDaddy.
    */
    const server = app.listen(
      PORT,
      "0.0.0.0",
      () => {
        console.log("");
        console.log(
          "========================================"
        );
        console.log(
          "✅ HTTP SERVER STARTED"
        );
        console.log(
          "========================================"
        );

        console.log(
          `Server listening on 0.0.0.0:${PORT}`
        );

        console.log(
          `Health: http://localhost:${PORT}/api/health`
        );

        console.log(
          `Products: http://localhost:${PORT}/api/products`
        );

        console.log(
          "MongoDB connection running in background..."
        );

        console.log(
          "========================================"
        );
        console.log("");
      }
    );

    /* =====================================================
       SERVER ERROR
    ===================================================== */

    server.on("error", (error) => {
      console.error(
        "❌ Server error:",
        error
      );

      process.exit(1);
    });

    /* =====================================================
       GRACEFUL SHUTDOWN
    ===================================================== */

    const shutdown = (signal) => {
      console.log(
        `${signal} received, shutting down gracefully...`
      );

      server.close(() => {
        console.log(
          "HTTP server closed."
        );

        process.exit(0);
      });
    };

    process.on(
      "SIGTERM",
      () => shutdown("SIGTERM")
    );

    process.on(
      "SIGINT",
      () => shutdown("SIGINT")
    );

    /* =====================================================
       DATABASE CONNECTION
    ===================================================== */

    connectToMongoDB();

  } catch (error) {
    console.error(
      "❌ Failed to start server:",
      error.message || error
    );

    process.exit(1);
  }
};

/* =========================================================
   UNHANDLED ERRORS
========================================================= */

process.on(
  "unhandledRejection",
  (reason) => {
    console.error(
      "⚠️ Unhandled Promise Rejection:",
      reason
    );
  }
);

process.on(
  "uncaughtException",
  (error) => {
    console.error(
      "❌ Uncaught Exception:",
      error
    );

    process.exit(1);
  }
);

/* =========================================================
   START APPLICATION
========================================================= */

startServer();