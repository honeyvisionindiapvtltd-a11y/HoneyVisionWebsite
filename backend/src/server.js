import "dotenv/config";
import app from "./app.js";
import connectDB from "./config/db.js";
import { seedInitialProductsIfEmpty } from "./utils/seedProducts.js";

const PORT = Number(process.env.PORT) || 5000;

const startServer = async () => {
  try {
    console.log("");
    console.log("========================================");
    console.log("STARTING HONEYVISION BACKEND");
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

    console.log("");
    console.log("Connecting to MongoDB...");

    // IMPORTANT:
    // Do not start Express until MongoDB is connected.
    await connectDB();

    console.log("✅ MongoDB connected successfully");

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

    const server = app.listen(
      PORT,
      "0.0.0.0",
      () => {
        console.log("");
        console.log("========================================");
        console.log("✅ SERVER STARTED SUCCESSFULLY");
        console.log("========================================");

        console.log(
          `Server listening on port ${PORT}`
        );

        console.log(
          `Health: /api/health`
        );

        console.log(
          `Products: /api/products`
        );

        console.log("========================================");
        console.log("");
      }
    );

    server.on("error", (error) => {
      console.error(
        "❌ HTTP server error:",
        error
      );

      process.exit(1);
    });

    const shutdown = async (signal) => {
      console.log(
        `${signal} received. Shutting down...`
      );

      server.close(async () => {
        try {
          await import("mongoose").then(
            ({ default: mongoose }) =>
              mongoose.connection.close()
          );
        } catch (error) {
          console.error(
            "MongoDB shutdown error:",
            error.message
          );
        }

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
    console.error("");
    console.error("========================================");
    console.error("❌ APPLICATION STARTUP FAILED");
    console.error("========================================");
    console.error(
      error.message || error
    );
    console.error("========================================");

    process.exit(1);
  }
};

process.on(
  "unhandledRejection",
  (reason) => {
    console.error(
      "❌ Unhandled Promise Rejection:",
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

startServer();