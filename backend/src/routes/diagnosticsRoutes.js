import express from "express";
import net from "net";

const router = express.Router();

/**
 * Test TCP connectivity to MongoDB Atlas hosts
 * This is a temporary diagnostic endpoint to identify network-level issues
 */
const testMongoDBTCPConnectivity = async () => {
  // Parse MongoDB URI to extract hosts
  const mongoUri = process.env.MONGODB_URI;
  
  if (!mongoUri) {
    return {
      success: false,
      error: "MONGODB_URI not configured",
      hosts: []
    };
  }

  // Extract the hostname from mongodb+srv://...
  let srvHostname = null;
  try {
    const url = new URL(mongoUri);
    srvHostname = url.hostname;
  } catch {
    return {
      success: false,
      error: "Invalid MONGODB_URI format",
      hosts: []
    };
  }

  // For mongodb+srv://, we need to resolve the SRV records to get actual hosts
  // The three typical Atlas shards are:
  // ac-gvsvzmh-shard-00-00.08cct4e.mongodb.net
  // ac-gvsvzmh-shard-00-01.08cct4e.mongodb.net
  // ac-gvsvzmh-shard-00-02.08cct4e.mongodb.net
  
  // Extract cluster ID from the hostname
  // Format: cluster0.08cct4e.mongodb.net
  const clusterMatch = srvHostname.match(/^([^.]+)\.([^.]+)\.mongodb\.net$/);
  
  if (!clusterMatch) {
    return {
      success: false,
      error: "Could not parse MongoDB hostname",
      hosts: []
    };
  }

  const clusterName = clusterMatch[1]; // e.g., cluster0
  const clusterId = clusterMatch[2];   // e.g., 08cct4e

  // Generate the three standard shard hostnames
  const shardHostnames = [
    `ac-gvsvzmh-shard-00-00.${clusterId}.mongodb.net`,
    `ac-gvsvzmh-shard-00-01.${clusterId}.mongodb.net`,
    `ac-gvsvzmh-shard-00-02.${clusterId}.mongodb.net`,
  ];

  // Test TCP connectivity to each shard
  const results = [];

  for (const host of shardHostnames) {
    const result = await new Promise((resolve) => {
      const socket = new net.Socket();
      const timeoutMs = 5000;

      const timeout = setTimeout(() => {
        socket.destroy();
        resolve({
          host,
          port: 27017,
          status: "TIMEOUT",
          errorCode: "ETIMEDOUT",
          errorMessage: "Connection timeout after 5 seconds"
        });
      }, timeoutMs);

      socket.on("connect", () => {
        clearTimeout(timeout);
        socket.destroy();
        resolve({
          host,
          port: 27017,
          status: "CONNECTED",
          errorCode: null,
          errorMessage: null
        });
      });

      socket.on("error", (error) => {
        clearTimeout(timeout);
        resolve({
          host,
          port: 27017,
          status: "FAILED",
          errorCode: error.code || "UNKNOWN",
          errorMessage: error.message || "Unknown error"
        });
      });

      socket.connect(27017, host);
    });

    results.push(result);
  }

  const allConnected = results.every((r) => r.status === "CONNECTED");

  return {
    success: allConnected,
    hosts: results,
    mongoDbUri: {
      configured: Boolean(mongoUri),
      hostname: srvHostname,
      format: mongoUri?.startsWith("mongodb+srv://") ? "mongodb+srv" : "mongodb"
    }
  };
};

/**
 * GET /api/diagnostics/mongodb-network
 * Test MongoDB network connectivity
 */
router.get("/mongodb-network", async (req, res) => {
  try {
    const result = await testMongoDBTCPConnectivity();
    return res.status(200).json(result);
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: error.message || "Unknown error"
    });
  }
});

export default router;
