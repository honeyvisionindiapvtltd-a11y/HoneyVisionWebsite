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

  // Startup diagnostics
  console.log("========================================");
  console.log("MongoDB startup diagnostics");
  console.log("========================================");
  console.log("NODE_ENV:", process.env.NODE_ENV || "<not set>");
  console.log("MONGODB_URI exists:", Boolean(configuredUri));

  if (!configuredUri) {
    throw new Error("MONGODB_URI is not configured");
  }

  try {
    const parsed = new URL(configuredUri);
    console.log("MongoDB hostname:", parsed.hostname);
  } catch {
    console.log("MongoDB hostname: <invalid URI>");
  }

  console.log(
    "MONGODB_URI format:",
    configuredUri.startsWith("mongodb+srv://")
      ? "mongodb+srv://"
      : configuredUri.startsWith("mongodb://")
      ? "mongodb://"
      : "unknown"
  );

  console.log("MongoDB target:", redactMongoUri(configuredUri));
  console.log("========================================");

  try {
    const parsed = new URL(configuredUri);
    if (parsed.protocol === "mongodb+srv:") {
      await testMongoDNS(configuredUri);
    }
  } catch (error) {
    console.error("MongoDB URI parsing failed:", error?.message || error);
  }

  try {
    console.log("========================================");
    console.log("Connecting to MongoDB Atlas...");
    console.log("========================================");

    await mongoose.connect(configuredUri, {
      serverSelectionTimeoutMS: 10000,
      connectTimeoutMS: 10000,
    });

    console.log("========================================");
    console.log("✅ MongoDB connected successfully");
    console.log("MongoDB target:", redactMongoUri(configuredUri));
    console.log("========================================");

    return true;
  } catch (error) {
    console.error("========================================");
    console.error("❌ MONGODB CONNECTION FAILED");
    console.error("Error name:", error?.name);
    console.error("Error message:", error?.message);
    console.error("Error code:", error?.code);
    console.error("Error codeName:", error?.codeName);

    if (error?.cause) {
      console.error("Error cause:", error.cause);
    }

    logTopologyDetails(error);
    console.error("MongoDB target:", redactMongoUri(configuredUri));
    console.error("========================================");

    throw error;
  }
};

export default connectDB;