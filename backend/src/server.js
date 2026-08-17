import "dotenv/config";
import app from "./app.js";
import connectDB from "./config/db.js";
import { seedInitialProductsIfEmpty } from "./utils/seedProducts.js";

const PORT = Number(process.env.PORT) || 5000;

const startServer = async (port = PORT) => {
  try {
    const dbConnected = await connectDB();

    if (!dbConnected) {
      throw new Error("MongoDB connection failed. Server startup aborted.");
    }

    await seedInitialProductsIfEmpty();

    const server = app.listen(port, "0.0.0.0", () => {
      console.log("MongoDB connected successfully");
      console.log(`Server running on port ${port}`);
      console.log(`HTTP server listening on 0.0.0.0:${port}`);
    });

    server.on("error", async (error) => {
      if (error.code === "EADDRINUSE") {
        const fallbackPort = Number(port) + 1;
        console.warn(`Port ${port} is already in use. Trying ${fallbackPort} instead.`);
        await startServer(String(fallbackPort));
        return;
      }

      console.error("Failed to start server:", error);
      process.exit(1);
    });
  } catch (error) {
    console.error("Failed to start server:", error.message || error);
    process.exit(1);
  }
};

startServer();
