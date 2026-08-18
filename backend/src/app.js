const isProduction = process.env.NODE_ENV === "production";

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

const honeyvisionHostnamePattern =
  /^([a-z0-9-]+\.)*honeyvision\.in$/i;

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

/*
 * IMPORTANT:
 * Allow both production and local development origins.
 *
 * This is necessary because you are testing the Render backend
 * from localhost:3000.
 */
const allowedOrigins = [
  ...new Set([
    ...productionOrigins,
    ...developmentOrigins,
    ...configuredOriginValues,
  ]),
];

console.log("========================================");
console.log("CORS CONFIGURATION");
console.log("NODE_ENV:", process.env.NODE_ENV);
console.log("Allowed origins:", allowedOrigins);
console.log("========================================");

const corsOptions = {
  origin: (origin, callback) => {
    // Requests without Origin header
    // such as server-to-server requests
    if (!origin) {
      return callback(null, true);
    }

    // Exact match
    if (allowedOrigins.includes(origin)) {
      console.log("Allowed CORS origin:", origin);
      return callback(null, true);
    }

    // Allow HoneyVision subdomains
    try {
      const url = new URL(origin);

      if (honeyvisionHostnamePattern.test(url.hostname)) {
        console.log("Allowed HoneyVision origin:", origin);
        return callback(null, true);
      }
    } catch (error) {
      console.warn("Invalid CORS origin:", origin);
    }

    console.warn("Blocked CORS origin:", origin);

    return callback(
      new Error(`Origin not allowed by CORS: ${origin}`)
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

/*
 * Express 5 / path-to-regexp compatibility:
 *
 * Do NOT use:
 *
 * app.options("*", cors(corsOptions));
 *
 * because Express 5 can throw:
 * Missing parameter name at index 1: *
 *
 * The global cors middleware above already handles
 * preflight OPTIONS requests.
 */

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