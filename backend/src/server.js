import "dotenv/config";
import express from "express";
import cors from "cors";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import contactRoutes from "./routes/contactRoutes.js";
import demoRoutes from "./routes/demoRoutes.js";
import adminRoutes from "./routes/adminRoutes.js";
import cmsRoutes from "./routes/cmsRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import { seedInitialProductsIfEmpty } from "./utils/seedProducts.js";
import { errorHandler, notFound } from "./middleware/errorHandler.js";

const app = express();
const requestedPort = Number(process.env.PORT || 5000);

app.use(
  cors({
    origin: process.env.FRONTEND_URL || "http://localhost:5173",
    credentials: true,
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
    message: "Honey Vision API is running",
    timestamp: new Date().toISOString(),
  });
});

app.use("/api/auth", authRoutes);
app.use("/api/contact", contactRoutes);
app.use("/api/demo-requests", demoRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/cms", cmsRoutes);
app.use("/api/products", productRoutes);

app.use(notFound);
app.use(errorHandler);

const startServer = async (port = requestedPort) => {
  await connectDB();
  await seedInitialProductsIfEmpty();

  const server = app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
  });

  server.on("error", (error) => {
    if (error.code === "EADDRINUSE") {
      if (port === requestedPort) {
        console.warn(`Port ${port} is already in use. Trying ${port + 1} instead.`);
        startServer(port + 1);
        return;
      }

      console.error(`Port ${port} is already in use. Stop the other process or set a different PORT in your .env file.`);
      process.exit(1);
    } else {
      console.error(error);
      process.exit(1);
    }
  });
};

startServer();
