import "dotenv/config";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import express from "express";
import cors from "cors";
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

const app = express();
const requestedPort = Number(process.env.PORT || 5000);

app.use(
  cors({
    origin: process.env.FRONTEND_URL || "http://localhost:5173",
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
    message: "HoneyVision API is running",
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

app.use(notFound);
app.use(errorHandler);

const startServer = async (port = basePort) => {
  await connectDB();
  await seedInitialProductsIfEmpty();

  const server = app.listen(port, "0.0.0.0", () => {
    console.log(`Environment: ${process.env.NODE_ENV || "production"}`);
    console.log(`Server started on port ${port}`);
  });

  server.on("error", (error) => {
    if (error.code === "EADDRINUSE") {
      const nextPort = port + 1;
      console.warn(`Port ${port} is already in use. Retrying on port ${nextPort}.`);
      startServer(nextPort);
      return;
    }

    console.error("Failed to start server:", error);
    process.exit(1);
  });
};

startServer().catch((error) => {
  console.error("Failed to start server:", error);
  process.exit(1);
});
