import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import mongoose from "mongoose";
import express from "express";
import cors from "cors";
import authRoutes from "./routes/authRoutes.js";
import contactRoutes from "./routes/contactRoutes.js";
import demoRoutes from "./routes/demoRoutes.js";
import adminRoutes from "./routes/adminRoutes.js";
import cmsRoutes from "./routes/cmsRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import cookieRoutes from "./routes/cookieRoutes.js";
import { errorHandler, notFound } from "./middleware/errorHandler.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const frontendDistPath = path.resolve(__dirname, "../../frontend/dist");
const isProduction = process.env.NODE_ENV === "production";
const allowedOrigins = [
  "https://honeyvision.in",
  "https://www.honeyvision.in",
  ...(isProduction ? [] : ["http://localhost:5173", "http://127.0.0.1:5173", "http://localhost:3000", "http://127.0.0.1:3000"]),
].filter(Boolean);

const corsOptions = {
  origin: (origin, callback) => {
    if (!origin) {
      callback(null, true);
      return;
    }

    const hostname = (() => {
      try {
        return new URL(origin).hostname.toLowerCase();
      } catch {
        return origin.toLowerCase();
      }
    })();

    const allowed =
      allowedOrigins.includes(origin) ||
      hostname === "localhost" ||
      hostname === "127.0.0.1" ||
      hostname === "honeyvision.in" ||
      hostname === "www.honeyvision.in";

    if (allowed) {
      callback(null, true);
      return;
    }

    callback(new Error("Origin not allowed by CORS."));
  },
  credentials: true,
  methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
};

const app = express();
app.use(cors(corsOptions));
app.options("*", cors(corsOptions));

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
  const databaseConnected = mongoose.connection.readyState === 1;

  if (!databaseConnected && isProduction) {
    return res.status(503).json({
      success: false,
      service: "HoneyVision API",
      database: "disconnected",
      environment: process.env.NODE_ENV || "development",
      message: "Database connection unavailable.",
    });
  }

  return res.status(200).json({
    success: true,
    service: "HoneyVision API",
    database: databaseConnected ? "connected" : "development-mode",
    environment: process.env.NODE_ENV || "development",
    timestamp: new Date().toISOString(),
  });
});

app.use("/api/auth", authRoutes);
app.use("/auth", authRoutes);
app.use("/api/contact", contactRoutes);
app.use("/contact", contactRoutes);
app.use("/api/demo-requests", demoRoutes);
app.use("/demo-requests", demoRoutes);
app.use("/api/admin", adminRoutes);
app.use("/admin", adminRoutes);
app.use("/api/cms", cmsRoutes);
app.use("/cms", cmsRoutes);
app.use("/api/products", productRoutes);
app.use("/products", productRoutes);
app.use("/api/cookie-consent", cookieRoutes);
app.use("/cookie-consent", cookieRoutes);

if (fs.existsSync(frontendDistPath)) {
  app.use(express.static(frontendDistPath));

  app.get(
    /^(?!\/api(?:\/|$)|\/auth(?:\/|$)|\/contact(?:\/|$)|\/demo-requests(?:\/|$)|\/admin(?:\/|$)|\/cms(?:\/|$)|\/products(?:\/|$)|\/cookie-consent(?:\/|$)|\/health(?:\/|$)).*/,
    (req, res, next) => {
      if (req.method !== "GET") {
        return next();
      }

      return res.sendFile(path.join(frontendDistPath, "index.html"));
    }
  );
}

app.use(notFound);
app.use(errorHandler);

export default app;
