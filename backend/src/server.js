import "dotenv/config";
import app from "./app.js";
import connectDB from "./config/db.js";
import { seedInitialProductsIfEmpty } from "./utils/seedProducts.js";

const PORT = Number(process.env.PORT) || 5000;

let mongoDBConnected = false;
let isConnecting = false;

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
      const parsed = new URL(process.env.MONGODB_URI);

      console.log(
        "MongoDB hostname:",
        parsed.hostname
      );

      console.log(
        "MongoDB database:",
        parsed.pathname.replace("/", "") || "default"
      );
    } catch {
      console.log(
        "MongoDB URI format could not be parsed."
      );
    }
  }

  console.log("========================================");
  console.log("");
};


/* =========================================================
   MONGODB CONNECTION WITH RETRY
========================================================= */

const connectToMongoDB = async () => {
  if (mongoDBConnected || isConnecting) {
    return mongoDBConnected;
  }

  isConnecting = true;

  let attempt = 1;

  while (!mongoDBConnected) {
    try {
      console.log(
        `[MongoDB] Connection attempt ${attempt}...`
      );

      await connectDB();

      mongoDBConnected = true;
      isConnecting = false;

      console.log("");
      console.log(
        "========================================"
      );
      console.log(
        "✅ MONGODB CONNECTED SUCCESSFULLY"
      );
      console.log(
        "========================================"
      );
      console.log("");

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
      mongoDBConnected = false;

      console.error(
        `❌ MongoDB connection attempt ${attempt} failed:`
      );

      console.error(
        error.message || error
      );

      const delayMs = Math.min(
        5000 * attempt,
        30000
      );

      console.log(
        `⏳ Retrying MongoDB connection in ${delayMs / 1000} seconds...`
      );

      await new Promise((resolve) =>
        setTimeout(resolve, delayMs)
      );

      attempt += 1;
    }
  }

  isConnecting = false;

  return false;
};


/* =========================================================
   START SERVER
========================================================= */

const startServer = async () => {
  try {
    printStartupDiagnostics();

    /*
      IMPORTANT:
      Try MongoDB first.

      The HTTP server will still start if MongoDB
      temporarily fails, but MongoDB will keep retrying.
    */

    connectToMongoDB().catch((error) => {
      console.error(
        "❌ MongoDB background connection error:",
        error
      );
    });


    /* =====================================================
       START HTTP SERVER
    ===================================================== */

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
          "MongoDB connection status:",
          mongoDBConnected
            ? "CONNECTED"
            : "CONNECTING..."
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

    const shutdown = async (signal) => {
      console.log("");
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