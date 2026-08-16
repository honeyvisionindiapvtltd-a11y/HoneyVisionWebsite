import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import express from "express";
import cors from "cors";
import authRoutes from "./routes/authRoutes.js";
import contactRoutes from "./routes/contactRoutes.js";
import demoRoutes from "./routes/demoRoutes.js";
import adminRoutes from "./routes/adminRoutes.js";
import cmsRoutes from "./routes/cmsRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import cookieRoutes from "./routes/cookieRoutes.js";
import { seedInitialProductsIfEmpty } from "./utils/seedProducts.js";
import { errorHandler, notFound } from "./middleware/errorHandler.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const frontendDistPath = path.resolve(__dirname, "../../frontend/dist");

const allowedOrigins = [
  process.env.FRONTEND_URL,
  "http://localhost:5173",
  "http://127.0.0.1:5173",
  "http://localhost:3000",
  "http://127.0.0.1:3000",
  "https://honeyvisionwebsite.vercel.app",
  "https://honeyvisionwebsite.onrender.com",
  "https://www.honeyvision.in",
  "https://honeyvision.in",
].filter(Boolean);

const app = express();

app.use(
  cors({
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

      const isAllowedHost =
        allowedOrigins.includes(origin) ||
        hostname === "localhost" ||
        hostname === "127.0.0.1" ||
        hostname === "honeyvision.in" ||
        hostname === "www.honeyvision.in" ||
        hostname.endsWith(".honeyvision.in") ||
        hostname.endsWith(".vercel.app") ||
        hostname.endsWith(".onrender.com") ||
        hostname.includes("localhost") ||
        hostname.includes("preview");

      if (isAllowedHost) {
        callback(null, true);
        return;
      }

      callback(null, false);
    },
    credentials: true,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization", "X-Requested-With", "Cookie"],
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

app.get("/health", (req, res) => {
  res.json({ success: true, message: "ok" });
});

app.get("/api/health", (req, res) => {
  res.json({
    success: true,
    message: "Honey Vision API is running",
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
