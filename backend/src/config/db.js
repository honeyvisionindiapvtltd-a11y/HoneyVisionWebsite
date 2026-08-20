import mongoose from "mongoose";
import dns from "node:dns/promises";

let connectionPromise = null;

/* =========================================================
   REDACT MONGODB URI
========================================================= */

const redactMongoUri = (uri) => {
  if (!uri) return "<not set>";

  try {
    const parsed = new URL(uri);

    const auth =
      parsed.username || parsed.password
        ? "***:***@"
        : "";

    return `${parsed.protocol}//${auth}${parsed.host}${parsed.pathname || ""}`;
  } catch {
    return uri.replace(/:([^@]+)@/, ":***@");
  }
};


/* =========================================================
   TEST SRV DNS
========================================================= */

const testMongoDNS = async (uri) => {
  try {
    const parsed = new URL(uri);

    if (parsed.protocol !== "mongodb+srv:") {
      console.log(
        "MongoDB uses mongodb:// URI; SRV DNS test skipped."
      );
      return;
    }

    const hostname = parsed.hostname;

    console.log(
      "Testing MongoDB SRV DNS:",
      hostname
    );

    const srvRecords = await dns.resolveSrv(
      `_mongodb._tcp.${hostname}`
    );

    console.log(
      "✅ MongoDB SRV DNS resolved successfully"
    );

    console.log(
      "MongoDB SRV records:",
      srvRecords.map((record) => ({
        name: record.name,
        port: record.port,
      }))
    );

  } catch (error) {
    console.error(
      "❌ MongoDB SRV DNS test failed:",
      error.message
    );
  }
};


/* =========================================================
   MONGOOSE CONNECTION EVENT LOGGING
========================================================= */

mongoose.connection.on("connected", () => {
  console.log(
    "🟢 Mongoose connection event: connected"
  );
});

mongoose.connection.on("disconnected", () => {
  console.error(
    "🔴 Mongoose connection event: disconnected"
  );
});

mongoose.connection.on("error", (error) => {
  console.error(
    "🔴 Mongoose connection event error:",
    error.message
  );
});


/* =========================================================
   CONNECT DATABASE
========================================================= */

const connectDB = async () => {
  const uri = process.env.MONGODB_URI;

  if (!uri) {
    throw new Error(
      "MONGODB_URI environment variable is not configured"
    );
  }


  /* -----------------------------------------------
     ALREADY CONNECTED
  ------------------------------------------------ */

  if (mongoose.connection.readyState === 1) {
    console.log(
      "MongoDB already connected."
    );

    return mongoose.connection;
  }


  /* -----------------------------------------------
     CONNECTION ALREADY IN PROGRESS
  ------------------------------------------------ */

  if (connectionPromise) {
    console.log(
      "MongoDB connection already in progress..."
    );

    return connectionPromise;
  }


  /* -----------------------------------------------
     START DIAGNOSTICS
  ------------------------------------------------ */

  console.log("");
  console.log(
    "========================================"
  );
  console.log(
    "MONGODB CONNECTION STARTING"
  );
  console.log(
    "========================================"
  );

  console.log(
    "NODE_ENV:",
    process.env.NODE_ENV || "development"
  );

  console.log(
    "MONGODB_URI exists:",
    Boolean(uri)
  );

  console.log(
    "MongoDB target:",
    redactMongoUri(uri)
  );

  try {
    const parsed = new URL(uri);

    console.log(
      "MongoDB hostname:",
      parsed.hostname
    );

    console.log(
      "MongoDB database:",
      parsed.pathname.replace("/", "") || "default"
    );

  } catch {
    console.warn(
      "⚠️ MongoDB URI could not be parsed for diagnostics."
    );
  }

  console.log(
    "========================================"
  );


  /* -----------------------------------------------
     DNS TEST
  ------------------------------------------------ */

  await testMongoDNS(uri);


  /* -----------------------------------------------
     CREATE CONNECTION
  ------------------------------------------------ */

  connectionPromise = mongoose.connect(uri, {
    serverSelectionTimeoutMS: 15000,
    connectTimeoutMS: 15000,

    // Prevent mongoose from waiting forever
    bufferCommands: false,
  });


  try {
    const connection = await connectionPromise;

    console.log("");
    console.log(
      "========================================"
    );
    console.log(
      "✅ MONGODB CONNECTED SUCCESSFULLY"
    );
    console.log(
      "========================================"
    );

    console.log(
      "Connected host:",
      connection.connection.host
    );

    console.log(
      "Connected database:",
      connection.connection.name
    );

    console.log(
      "========================================"
    );
    console.log("");

    return connection;

  } catch (error) {

    console.error("");
    console.error(
      "========================================"
    );
    console.error(
      "❌ MONGODB CONNECTION FAILED"
    );
    console.error(
      "========================================"
    );

    console.error(
      "Error name:",
      error?.name
    );

    console.error(
      "Error message:",
      error?.message
    );

    console.error(
      "Error code:",
      error?.code
    );

    console.error(
      "Error cause:",
      error?.cause?.message ||
        error?.cause ||
        "none"
    );

    console.error(
      "MongoDB target:",
      redactMongoUri(uri)
    );

    console.error(
      "========================================"
    );
    console.error("");

    // Allow a future retry
    connectionPromise = null;

    throw error;
  }
};


/* =========================================================
   EXPORT
========================================================= */

export default connectDB;