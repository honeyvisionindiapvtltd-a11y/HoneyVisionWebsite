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

/* =========================================================
   PATHS
========================================================= */

const frontendDistPath = path.resolve(
  __dirname,
  "../../frontend/dist"
);

const isProduction =
  process.env.NODE_ENV === "production";

/* =========================================================
   CORS CONFIGURATION
========================================================= */

const productionOrigins = [
  "https://honeyvision.in",
  "https://www.honeyvision.in",
];

const developmentOrigins = [
  "http://localhost:5173",
  "http://127.0.0.1:5173",
  "http://localhost:3000",
  "http://127.0.0.1:3000",
];

const configuredOriginValues = [
  process.env.FRONTEND_URL,
  process.env.CORS_ORIGIN,
  process.env.CORS_ORIGINS,
]
  .flatMap((value) => {
    if (!value) return [];

    return value
      .split(",")
      .map((item) => item.trim())
      .filter(Boolean);
  });

const allowedOrigins = [
  ...new Set([
    ...productionOrigins,
    ...developmentOrigins,
    ...configuredOriginValues,
  ]),
];

console.log("========================================");
console.log("CORS CONFIGURATION");
console.log("Environment:", process.env.NODE_ENV);
console.log("Allowed origins:");
console.log(allowedOrigins);
console.log("========================================");

const honeyvisionHostnamePattern =
  /^([a-z0-9-]+\.)*honeyvision\.in$/i;

const corsOptions = {
  origin: (origin, callback) => {
    /*
      Requests such as server-to-server, curl, Postman, etc.
      may not have an Origin header.
    */
    if (!origin) {
      return callback(null, true);
    }

    /*
      Exact allowed origins
    */
    if (allowedOrigins.includes(origin)) {
      return callback(null, true);
    }

    /*
      Allow HoneyVision subdomains
    */
    try {
      const hostname = new URL(origin).hostname;

      if (honeyvisionHostnamePattern.test(hostname)) {
        return callback(null, true);
      }
    } catch (error) {
      console.warn(
        "Invalid CORS origin:",
        origin
      );
    }

    console.warn(
      "Blocked CORS origin:",
      origin
    );

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

/* =========================================================
   EXPRESS APP
========================================================= */

const app = express();

/* =========================================================
   CORS
========================================================= */

app.use(cors(corsOptions));

/*
  Express 5 / newer path-to-regexp versions do NOT accept:

      app.options("*", ...)

  Therefore we handle OPTIONS requests with middleware.
*/
app.use((req, res, next) => {
  if (req.method === "OPTIONS") {
    const origin = req.headers.origin;

    if (origin) {
      const originAllowed =
        allowedOrigins.includes(origin);

      let hostnameAllowed = false;

      try {
        const hostname = new URL(origin).hostname;

        hostnameAllowed =
          honeyvisionHostnamePattern.test(hostname);
      } catch {
        hostnameAllowed = false;
      }

      if (originAllowed || hostnameAllowed) {
        res.header(
          "Access-Control-Allow-Origin",
          origin
        );
      }
    }

    res.header(
      "Access-Control-Allow-Credentials",
      "true"
    );

    res.header(
      "Access-Control-Allow-Methods",
      "GET,POST,PUT,PATCH,DELETE,OPTIONS"
    );

    res.header(
      "Access-Control-Allow-Headers",
      "Content-Type,Authorization"
    );

    return res.sendStatus(204);
  }

  next();
});

/* =========================================================
   BODY PARSING
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

/* =========================================================
   AUTH COOKIE → AUTHORIZATION HEADER
========================================================= */

app.use((req, res, next) => {
  const cookieHeader =
    req.headers.cookie || "";

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

/* =========================================================
   HEALTH CHECK
========================================================= */

const healthResponse = (req, res) => {
  const databaseConnected =
    mongoose.connection.readyState === 1;

  return res.status(200).json({
    status: "ok",
    success: true,
    service: "HoneyVision API",
    database: databaseConnected
      ? "connected"
      : "disconnected",
    environment:
      process.env.NODE_ENV || "development",
    timestamp: new Date().toISOString(),
  });
};

app.get("/health", healthResponse);

app.get("/api/health", healthResponse);

/* =========================================================
   DATABASE CONNECTION CHECK
========================================================= */

app.use((req, res, next) => {
  /*
    OPTIONS requests must always be allowed through CORS.
  */
  if (req.method === "OPTIONS") {
    return next();
  }

  /*
    Health and diagnostics should still work even if
    MongoDB is temporarily unavailable.
  */
  if (
    req.path === "/health" ||
    req.path === "/api/health" ||
    req.path.startsWith("/api/diagnostics") ||
    req.path.startsWith("/diagnostics")
  ) {
    return next();
  }

  const isApiRoute =
    req.path.startsWith("/api/") ||
    req.path.startsWith("/auth/") ||
    req.path.startsWith("/contact/") ||
    req.path.startsWith("/demo-requests/") ||
    req.path.startsWith("/admin/") ||
    req.path.startsWith("/cms/") ||
    req.path.startsWith("/products/") ||
    req.path.startsWith("/cookie-consent/");

  const databaseConnected =
    mongoose.connection.readyState === 1;

  /*
    Do not allow API requests to silently operate
    without MongoDB in production.
  */
  if (
    isApiRoute &&
    !databaseConnected &&
    isProduction
  ) {
    return res.status(503).json({
      success: false,
      message:
        "Database connection unavailable. Please try again later.",
      service: "HoneyVision API",
    });
  }

  next();
});

/* =========================================================
   API ROUTES
========================================================= */

/*
   Authentication
*/
app.use("/api/auth", authRoutes);
app.use("/auth", authRoutes);

/*
   Contact
*/
app.use("/api/contact", contactRoutes);
app.use("/contact", contactRoutes);

/*
   Demo requests
*/
app.use(
  "/api/demo-requests",
  demoRoutes
);

app.use(
  "/demo-requests",
  demoRoutes
);

/*
   Admin
*/
app.use("/api/admin", adminRoutes);
app.use("/admin", adminRoutes);

/*
   CMS
*/
app.use("/api/cms", cmsRoutes);
app.use("/cms", cmsRoutes);

/*
   Products
*/
app.use(
  "/api/products",
  productRoutes
);

app.use(
  "/products",
  productRoutes
);

/*
   Cookie consent
*/
app.use(
  "/api/cookie-consent",
  cookieRoutes
);

app.use(
  "/cookie-consent",
  cookieRoutes
);

/*
   Diagnostics
*/
app.use(
  "/api/diagnostics",
  diagnosticsRoutes
);

app.use(
  "/diagnostics",
  diagnosticsRoutes
);

/* =========================================================
   FRONTEND STATIC FILES
========================================================= */

if (fs.existsSync(frontendDistPath)) {
  console.log(
    "Frontend dist found:",
    frontendDistPath
  );

  /*
    Serve React/Vite static files
  */
  app.use(
    express.static(frontendDistPath, {
      maxAge: "1d",
      etag: false,
    })
  );

  /*
    React Router SPA fallback.

    Express 5 does not accept "*" as a route pattern,
    so use a RegExp instead.
  */
  app.get(
    /^(?!\/api(?:\/|$)|\/auth(?:\/|$)|\/contact(?:\/|$)|\/demo-requests(?:\/|$)|\/admin(?:\/|$)|\/cms(?:\/|$)|\/products(?:\/|$)|\/cookie-consent(?:\/|$)|\/diagnostics(?:\/|$)|\/health(?:\/|$)).*/,
    (req, res, next) => {
      if (req.method !== "GET") {
        return next();
      }

      const indexPath =
        path.join(
          frontendDistPath,
          "index.html"
        );

      if (!fs.existsSync(indexPath)) {
        console.error(
          "SPA fallback: index.html not found:",
          indexPath
        );

        return res.status(404).json({
          success: false,
          message:
            "Frontend not available",
        });
      }

      return res.sendFile(
        indexPath,
        (error) => {
          if (error) {
            console.error(
              "Error sending index.html:",
              error.message
            );

            if (!res.headersSent) {
              return res.status(500).json({
                success: false,
                message:
                  "Error loading frontend",
              });
            }
          }
        }
      );
    }
  );
} else {
  console.log(
    "Frontend dist not found. Running API-only mode."
  );
}

/* =========================================================
   404 HANDLER
========================================================= */

app.use(notFound);

/* =========================================================
   ERROR HANDLER
========================================================= */

app.use(errorHandler);

/* =========================================================
   IMPORTANT
   server.js imports this file using:

       import app from "./app.js";

   Therefore app MUST be exported as default.
========================================================= */

export default app;