import mongoose from "mongoose";

const DEFAULT_URI = "mongodb://127.0.0.1:27017/honeyvision";

const redactMongoUri = (uri) => {
  if (!uri) return "<not set>";

  try {
    const parsed = new URL(uri);
    return `${parsed.protocol}//${parsed.username ? "***:***@" : ""}${parsed.host}`;
  } catch {
    return uri.replace(/:([^@]+)@/, ":***@");
  }
};

const connectDB = async () => {
  const isProduction = process.env.NODE_ENV === "production";
  const candidateUris = process.env.MONGODB_URI ? [process.env.MONGODB_URI] : isProduction ? [] : [DEFAULT_URI];

  if (candidateUris.length === 0) {
    console.error("MongoDB is not configured for production. Set MONGODB_URI in the GoDaddy environment.");
    return false;
  }

  let lastError = null;

  for (const uri of candidateUris) {
    try {
      await mongoose.connect(uri, {
        serverSelectionTimeoutMS: 5000,
        family: 4,
      });
      console.log(`MongoDB connected using ${redactMongoUri(uri)}`);
      return true;
    } catch (error) {
      lastError = error;
      console.warn(`MongoDB connection failed for ${redactMongoUri(uri)}: ${error.message}`);
    }
  }

  console.error("MongoDB connection error:", lastError?.message || "Unknown error");
  console.warn("Continuing without a database connection so the server can still start.");
  return false;
};

export default connectDB;
