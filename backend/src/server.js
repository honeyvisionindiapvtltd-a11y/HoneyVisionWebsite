import "dotenv/config";
import app from "./app.js";
import connectDB from "./config/db.js";
import { seedInitialProductsIfEmpty } from "./utils/seedProducts.js";

const PORT = Number(process.env.PORT || 20011);

const startServer = async (port = PORT) => {
  try {
    const dbConnected = await connectDB();

    if (process.env.NODE_ENV === "production" && !dbConnected) {
      throw new Error("Production server cannot start without a successful MongoDB connection.");
    }

    if (dbConnected) {
      await seedInitialProductsIfEmpty();
    }

    const server = app.listen(port, "0.0.0.0", () => {
      console.log(`Server running on http://0.0.0.0:${port}`);
      console.log(`Environment: ${process.env.NODE_ENV || "development"}`);
    });

    server.on("error", async (error) => {
      if (error.code === "EADDRINUSE") {
        const fallbackPort = port + 1;
        console.warn(`Port ${port} is already in use. Trying ${fallbackPort} instead.`);
        await startServer(fallbackPort);
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
