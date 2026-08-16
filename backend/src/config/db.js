import mongoose from "mongoose";
import dns from "node:dns/promises";

const redactMongoUri = (uri) => {
  if (!uri) return "<not set>";

  try {
    const parsed = new URL(uri);

    return `${parsed.protocol}//${
      parsed.username ? "***:***@" : ""
    }${parsed.host}${parsed.pathname || ""}`;
  } catch {
    return uri.replace(/:([^@]+)@/, ":***@");
  }
};

const testMongoDNS = async (uri) => {
  try {
    const parsed = new URL(uri);
    const hostname = parsed.hostname;

    console.log("MongoDB hostname:", hostname);

    if (parsed.protocol === "mongodb+srv:") {
      console.log("Testing MongoDB SRV DNS...");

      const srvRecords = await dns.resolveSrv(
        `_mongodb._tcp.${hostname}`
      );

      console.log("✅ MongoDB SRV DNS resolved successfully");
      console.log(
        "MongoDB SRV records:",
        srvRecords.map((record) => ({
          name: record.name,
          port: record.port,
          priority: record.priority,
          weight: record.weight,
        }))
      );
    } else {
      console.log(
        "MongoDB connection uses standard mongodb:// URI; SRV test skipped."
      );
    }
  } catch (error) {
    console.error("❌ MongoDB DNS/SRV test failed");
    console.error("DNS error name:", error?.name);
    console.error("DNS error message:", error?.message);
    console.error("DNS error code:", error?.code);
  }
};

const logTopologyDetails = (error) => {
  if (!error?.reason) {
    console.error("No MongoDB topology details available.");
    return;
  }

  const topology = error.reason;

  console.error("---------- MongoDB Topology ----------");
  console.error("Topology type:", topology.type);
  console.error("Set name:", topology.setName);
  console.error("Common wire version:", topology.commonWireVersion);
  console.error(
    "Logical session timeout:",
    topology.logicalSessionTimeoutMinutes
  );
  console.error("Heartbeat frequency:", topology.heartbeatFrequencyMS);
  console.error("Local threshold:", topology.localThresholdMS);

  if (topology.servers) {
    console.error("---------- MongoDB Servers ----------");

    for (const [host, server] of topology.servers.entries()) {
      console.error("HOST:", host);
      console.error("  Type:", server.type);
      console.error("  Min wire version:", server.minWireVersion);
      console.error("  Max wire version:", server.maxWireVersion);

      if (server.error) {
        console.error("  Error name:", server.error.name);
        console.error("  Error message:", server.error.message);
        console.error("  Error code:", server.error.code);
        console.error("  Error codeName:", server.error.codeName);
      } else {
        console.error("  Error: none reported");
      }
    }
  }

  console.error("--------------------------------------");
};

const connectDB = async () => {
  const configuredUri = process.env.MONGODB_URI;
  const isProduction = process.env.NODE_ENV === "production";

  console.log("========================================");
  console.log("MongoDB startup diagnostics");
  console.log("========================================");

  console.log("NODE_ENV:", process.env.NODE_ENV || "<not set>");

  console.log(
    "MONGODB_URI exists:",
    Boolean(configuredUri)
  );

  console.log(
    "MONGODB_URI format:",
    configuredUri
      ? configuredUri.startsWith("mongodb+srv://")
        ? "mongodb+srv://"
        : configuredUri.startsWith("mongodb://")
        ? "mongodb://"
        : "unknown"
      : "<not set>"
  );

  console.log(
    "MongoDB target:",
    redactMongoUri(configuredUri)
  );

  console.log("========================================");

  if (!configuredUri) {
    const message = isProduction
      ? "MONGODB_URI is required in production and was not detected in the deployment environment."
      : "MONGODB_URI is not defined for this environment.";

    console.error("❌", message);

    throw new Error(message);
  }

  // Test DNS/SRV before connecting.
  await testMongoDNS(configuredUri);

  try {
    console.log("========================================");
    console.log("Connecting to MongoDB Atlas...");
    console.log("========================================");

    await mongoose.connect(configuredUri, {
      serverSelectionTimeoutMS: 30000,
      connectTimeoutMS: 30000,
      socketTimeoutMS: 30000,

      // Force IPv4 in hosted/container environments.
      family: 4,

      retryWrites: true,
    });

    console.log("========================================");
    console.log("✅ MongoDB connected successfully");
    console.log(
      "MongoDB target:",
      redactMongoUri(configuredUri)
    );
    console.log("========================================");

    return true;
  } catch (error) {
    console.error("========================================");
    console.error("❌ MONGODB CONNECTION FAILED");
    console.error("========================================");

    console.error("Error name:", error?.name);
    console.error("Error message:", error?.message);
    console.error("Error code:", error?.code);
    console.error("Error codeName:", error?.codeName);

    if (error?.cause) {
      console.error("Error cause:", error.cause);
    }

    logTopologyDetails(error);

    console.error(
      "MongoDB target:",
      redactMongoUri(configuredUri)
    );

    console.error("========================================");

    throw error;
  }
};

export default connectDB;