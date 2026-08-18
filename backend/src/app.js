import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import path from "path";
import { fileURLToPath } from "url";

// Get __dirname equivalent in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Routes
import authRoutes from "./routes/authRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import contactRoutes from "./routes/contactRoutes.js";
import demoRequestRoutes from "./routes/demoRoutes.js";
import cookieConsentRoutes from "./routes/cookieRoutes.js";
import cmsRoutes from "./routes/cmsRoutes.js";

const app = express();

/* =========================================================
   CORS CONFIGURATION
   ========================================================= */

const allowedOrigins = [
  "https://honeyvision.in",
  "https://www.honeyvision.in",

  // Local development
  "http://localhost:3000",
  "http://localhost:5173",
  "http://127.0.0.1:3000",
  "http://127.0.0.1:5173",
];

const corsOptions = {
  origin: function (origin, callback) {
    // Allow requests with no Origin header
    // Example: curl, Postman, server-to-server requests
    if (!origin) {
      return callback(null, true);
    }

    if (allowedOrigins.includes(origin)) {
      return callback(null, true);
    }

    console.warn("❌ CORS blocked origin:", origin);

    // Return false instead of throwing an error.
    // This keeps the server alive.
    return callback(null, false);
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
    "Origin",
    "X-Requested-With",
    "Content-Type",
    "Accept",
    "Authorization",
  ],

  optionsSuccessStatus: 204,
};

/*
 * IMPORTANT:
 * CORS middleware must come BEFORE your routes.
 */
app.use(cors(corsOptions));

/*
 * Explicitly handle preflight requests.
 */
app.options("*", cors(corsOptions));

/* =========================================================
   BODY PARSERS
   ========================================================= */

app.use(
  express.json({
    limit: "10mb",
  })
);

app.use(
  express.urlencoded({
    extended: true,
    limit: "10mb",
  })
);

app.use(cookieParser());

/* =========================================================
   REQUEST LOGGER
   ========================================================= */

app.use((req, res, next) => {
  console.log(
    `[${new Date().toISOString()}] ${req.method} ${req.originalUrl}`
  );

  if (req.headers.origin) {
    console.log("Origin:", req.headers.origin);
  }

  if (
    req.query &&
    typeof req.query.airoShareToken !== "undefined"
  ) {
    console.warn(
      "Blocked Airo share token request:",
      req.originalUrl
    );
    return res.status(403).json({
      success: false,
      message: "Blocked by security policy",
    });
  }

  next();
});

/* =========================================================
   HEALTH CHECK
   =========================================================
   Note: Removed GET "/" endpoint to allow frontend static
   serving and SPA fallback to handle root path.
   Use "/api/health" for API health checks instead.
   ========================================================= */

app.get("/api/health", (req, res) => {
  res.status(200).json({
    success: true,
    message: "HoneyVision API is running",
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || "production",
  });
});

/* =========================================================
   SERVE FRONTEND ROOT
   ========================================================= */

const frontendDist = path.join(__dirname, "../../frontend/dist");
const frontendIndex = path.join(frontendDist, "index.html");

console.log("Frontend dist path:", frontendDist);

app.get("/", (req, res) => {
  res.sendFile(frontendIndex);
});

/* =========================================================
   API ROUTES
   ========================================================= */

app.use("/api/auth", authRoutes);

app.use("/api/products", productRoutes);

app.use("/api/contact", contactRoutes);

app.use("/api/demo-requests", demoRequestRoutes);

app.use("/api/cookie-consent", cookieConsentRoutes);

app.use("/api/cms", cmsRoutes);

/* =========================================================
   SERVE FRONTEND STATIC FILES
   ========================================================= */

// Serve static files from frontend/dist
app.use(express.static(frontendDist));

// SPA fallback: serve index.html for React Router and other frontend routes.
app.use((req, res, next) => {
  if (req.method !== "GET") {
    return next();
  }

  if (req.path.startsWith("/api")) {
    return next();
  }

  return res.sendFile(frontendIndex);
});

/* =========================================================
   404 HANDLER (now unreachable, but kept for clarity)
   ========================================================= */

app.use((req, res) => {
  console.warn(
    `❌ Route not found: ${req.method} ${req.originalUrl}`
  );

  res.status(404).json({
    success: false,
    message: "API route not found",
    path: req.originalUrl,
  });
});

/* =========================================================
   GLOBAL ERROR HANDLER
   ========================================================= */

app.use((err, req, res, next) => {
  console.error("========================================");
  console.error("SERVER ERROR");
  console.error("========================================");
  console.error(err);
  console.error("========================================");

  // CORS error
  if (err.message === "Not allowed by CORS") {
    return res.status(403).json({
      success: false,
      message: "CORS origin not allowed",
    });
  }

  const statusCode = err.status || err.statusCode || 500;

  res.status(statusCode).json({
    success: false,
    message:
      err.message || "Internal server error",
  });
});

/* =========================================================
   EXPORT
   ========================================================= */

/*
 * VERY IMPORTANT:
 * server.js uses:
 *
 * import app from "./app.js";
 *
 * Therefore app.js MUST have a default export.
 */
export default app;