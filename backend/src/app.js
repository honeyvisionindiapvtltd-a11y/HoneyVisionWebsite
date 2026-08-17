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
import diagnosticsRoutes from "./routes/diagnosticsRoutes.js";

import { errorHandler, notFound } from "./middleware/errorHandler.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const frontendDistPath = path.resolve(
  __dirname,
  "../../frontend/dist"
);

const isProduction = process.env.NODE_ENV === "production";

const productionOrigins = [
  "https://honeyvision.in",
  "https://www.honeyvision.in",
  "https://jbngfatete.c39.airoapp.ai",
];

const developmentOrigins = [
  "http://localhost:5173",
  "http://127.0.0.1:5173",
  "http://localhost:3000",
  "http://127.0.0.1:3000",
];

const honeyvisionHostnamePattern = /^([a-z0-9-]+\.)*honeyvision\.in$/i;
const airoappHostnamePattern = /^([a-z0-9-]+\.)*(preview\.)?c\d+\.airoapp\.ai$/i;

const configuredOriginValues = [
  process.env.FRONTEND_URL,
  process.env.CORS_ORIGIN,
  process.env.CORS_ORIGINS,
]
  .flatMap((value) => {
    if (!value) return [];
    return value.split(",").map((item) => item.trim()).filter(Boolean);
  });

const allowedOrigins = [
  ...new Set([
    ...(isProduction ? productionOrigins : [...productionOrigins, ...developmentOrigins]),
    ...configuredOriginValues,
  ]),
];

const corsOptions = {
  origin: (origin, callback) => {
    if (!origin) {
      return callback(null, true);
    }

    if (allowedOrigins.includes(origin)) {
      return callback(null, origin);
    }

    try {
      const hostname = new URL(origin).hostname;

      if (
        honeyvisionHostnamePattern.test(hostname) ||
        airoappHostnamePattern.test(hostname)
      ) {
        return callback(null, origin);
      }
    } catch {
      // Ignore invalid origin URLs and fail closed below.
    }

    console.warn("Blocked CORS origin:", origin);

    return callback(
      new Error("Origin not allowed by CORS.")
    );
  },
  credentials: true,
  methods: [
    "GET",
    "POST",
    "PUT",
    "PATCH",
    "DELETE",
    "OPTIONS",
  ],
  allowedHeaders: [
    "Content-Type",
    "Authorization",
  ],
  optionsSuccessStatus: 204,
};

const app = express();

/* =========================
   CORS
========================= */

app.use(cors(corsOptions));
app.options("*", cors(corsOptions));

app.use((req, res, next) => {
  if (req.method === "OPTIONS") {
    return res.sendStatus(204);
  }

  next();
});

/* =========================
   BODY PARSING
========================= */

app.use(
  express.json({
    limit: "10mb",
  })
);

app.use(
  express.urlencoded({
    extended: true,
  })
);

/* =========================
   AUTH COOKIE → AUTHORIZATION
========================= */

app.use((req, res, next) => {
  const cookieHeader = req.headers.cookie || "";

  const authCookie = cookieHeader
    .split(";")
    .map((item) => item.trim())
    .find((item) =>
      item.startsWith("authToken=")
    );

  if (authCookie) {
    const token = authCookie
      .substring("authToken=".length);

    if (token) {
      req.headers.authorization =
        `Bearer ${decodeURIComponent(token)}`;
    }
  }

  next();
});

/* =========================
   HEALTH CHECK
========================= */

const healthResponse = (res) => {
  const databaseConnected = mongoose.connection.readyState === 1;

  if (!databaseConnected && isProduction) {
    return res.status(503).json({
      status: "ok",
      success: false,
      service: "HoneyVision API",
      database: "disconnected",
      environment: process.env.NODE_ENV || "development",
      message: "Database connection unavailable.",
    });
  }

  return res.status(200).json({
    status: "ok",
    success: true,
    service: "HoneyVision API",
    database: databaseConnected ? "connected" : "development-mode",
    environment: process.env.NODE_ENV || "development",
    timestamp: new Date().toISOString(),
  });
};

app.get("/health", (req, res) => {
  return healthResponse(res);
});

app.get("/api/health", (req, res) => {
  return healthResponse(res);
});

/* =========================
   DATABASE CONNECTION CHECK MIDDLEWARE
   Returns 503 if MongoDB is not connected in production
========================= */

app.use((req, res, next) => {
  if (req.method === "OPTIONS") {
    return next();
  }

  if (req.path === "/api/health" || req.path.startsWith("/api/diagnostics") || req.path.startsWith("/diagnostics")) {
    return next();
  }

  const isApiRoute = req.path.startsWith("/api/") || req.path.startsWith("/auth/") || 
                     req.path.startsWith("/contact/") || req.path.startsWith("/demo-requests/") ||
                     req.path.startsWith("/admin/") || req.path.startsWith("/cms/") ||
                     req.path.startsWith("/products/") || req.path.startsWith("/cookie-consent/");

  const databaseConnected = mongoose.connection.readyState === 1;

  if (isApiRoute && !databaseConnected && isProduction) {
    return res.status(503).json({
      success: false,
      message: "Database connection unavailable. Please try again later.",
      service: "HoneyVision API",
    });
  }

  next();
});

/* =========================
   API ROUTES
========================= */

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

app.use("/api/diagnostics", diagnosticsRoutes);
app.use("/diagnostics", diagnosticsRoutes);

/* =========================
   FRONTEND STATIC FILES
========================= */

if (fs.existsSync(frontendDistPath)) {
  console.log(
    "Frontend dist found:",
    frontendDistPath
  );

  // Serve static files from frontend dist
  app.use(
    express.static(frontendDistPath, {
      maxAge: "1d",
      etag: false,
    })
  );

  // SPA fallback: serve index.html for all non-API routes
  app.get(
    /^(?!\/api(?:\/|$)|\/auth(?:\/|$)|\/contact(?:\/|$)|\/demo-requests(?:\/|$)|\/admin(?:\/|$)|\/cms(?:\/|$)|\/products(?:\/|$)|\/cookie-consent(?:\/|$)|\/diagnostics(?:\/|$)|\/health(?:\/|$)).*/,
    (req, res, next) => {
      if (req.method !== "GET") {
        return next();
      }

      const indexPath = path.join(frontendDistPath, "index.html");

      // Check if index.html exists before trying to send it
      if (!fs.existsSync(indexPath)) {
        console.error("SPA fallback: index.html not found at", indexPath);
        return res.status(404).json({
          success: false,
          message: "Frontend not available",
        });
      }

      // Send index.html with error handling
      res.sendFile(indexPath, (err) => {
        if (err) {
          console.error("Error sending index.html:", err.message);
          return res.status(500).json({
            success: false,
            message: "Error loading frontend",
          });
        }
      });
    }
  );
} else {
  console.log(
    "Frontend dist not found. Running API-only mode."
  );
}

/* =========================
   ERROR HANDLING
========================= */

app.use(notFound);
app.use(errorHandler);

export default app;