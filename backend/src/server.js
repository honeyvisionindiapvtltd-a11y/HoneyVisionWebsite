import dotenv from "dotenv";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import contactRoutes from "./routes/contactRoutes.js";
import demoRoutes from "./routes/demoRoutes.js";
import adminRoutes from "./routes/adminRoutes.js";
import cmsRoutes from "./routes/cmsRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import cookieRoutes from "./routes/cookieRoutes.js";
import { seedInitialProductsIfEmpty } from "./utils/seedProducts.js";
import { errorHandler, notFound } from "./middleware/errorHandler.js";

dotenv.config();

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const PORT = Number(process.env.PORT) || 20011;
const HOST = "0.0.0.0";
const frontendDistPath = path.resolve(__dirname, "../../frontend/dist");
const frontendIndexPath = path.join(frontendDistPath, "index.html");
const allowedOrigins = [
  process.env.FRONTEND_URL,
  process.env.APP_URL,
  process.env.DOMAIN_URL,
  "http://localhost:5173",
  "http://127.0.0.1:5173",
  "https://honeyvisionwebsite.vercel.app",
  "https://honeyvisionwebsite.onrender.com",
  "https://yourdomain.com",
  "https://www.yourdomain.com",
].filter(Boolean);

app.set("trust proxy", 1);
app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.includes(origin) || origin.includes("vercel.app") || origin.includes("localhost") || origin.includes("127.0.0.1")) {
        callback(null, true);
        return;
      }

      if (process.env.NODE_ENV !== "production" && /^http:\/\/localhost(:\d+)?$/.test(origin)) {
        callback(null, true);
        return;
      }

      callback(new Error("Not allowed by CORS"));
    },
    credentials: true,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization", "x-requested-with"],
  })
);
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true }));
app.use((req, res, next) => {
  const cookieHeader = req.headers.cookie || "";
  const authCookie = cookieHeader
    .split(";")
    .map((item) => item.trim())
    .find((item) => item.startsWith("authToken="));

  if (authCookie) {
    req.headers.authorization = `Bearer ${decodeURIComponent(authCookie.split("=")[1])}`;
  }

  next();
});

app.get("/api/health", (req, res) => {
  res.json({
    success: true,
    message: "HoneyVision backend is running",
    database: mongoose.connection.readyState === 1 ? "connected" : "disconnected",
    timestamp: new Date().toISOString(),
  });
});

app.use("/api/auth", authRoutes);
app.use("/api/contact", contactRoutes);
app.use("/api/demo-requests", demoRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/cms", cmsRoutes);
app.use("/api/products", productRoutes);
app.use("/api/cookie-consent", cookieRoutes);

if (fs.existsSync(frontendDistPath)) {
  app.use(express.static(frontendDistPath));

  app.get(/^\/(?!api).*/, (req, res) => {
    res.sendFile(frontendIndexPath);
  });
}

app.use(notFound);
app.use(errorHandler);

let httpServer;

const shutdown = async (signal) => {
  console.log(`\nReceived ${signal}. Shutting down gracefully...`);

  if (httpServer) {
    httpServer.close(() => {
      console.log("HTTP server closed.");
    });
  }

  try {
    await mongoose.disconnect();
    console.log("MongoDB disconnected.");
  } catch (error) {
    console.error("Error while disconnecting MongoDB:", error.message);
  }

  process.exit(0);
};

const startServer = async () => {
  try {
    console.log("Loading environment...");
    console.log("Connecting to MongoDB...");

    await connectDB();
    await seedInitialProductsIfEmpty();

    httpServer = app.listen(PORT, HOST, () => {
      console.log(`Environment: ${process.env.NODE_ENV || "production"}`);
      console.log(`Server running on ${HOST}:${PORT}`);
    });

    httpServer.on("error", (error) => {
      console.error("Failed to start server:", error);
      process.exit(1);
    });

    process.on("SIGINT", () => shutdown("SIGINT"));
    process.on("SIGTERM", () => shutdown("SIGTERM"));
  } catch (error) {
    console.error("Failed to start server:", error);
    process.exit(1);
  }
};

startServer();
