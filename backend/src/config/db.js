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
  const configuredUri = process.env.MONGODB_URI || (isProduction ? null : DEFAULT_URI);

  if (!configuredUri) {
    console.error("MongoDB is not configured for production. Set MONGODB_URI in the GoDaddy environment.");
    return false;
  }

  try {
    await mongoose.connect(configuredUri, {
      serverSelectionTimeoutMS: 5000,
      family: 4,
    });
    console.log(`MongoDB connected using ${redactMongoUri(configuredUri)}`);
    return true;
  } catch (error) {
    console.error("MongoDB connection error:", error.message);
    if (isProduction) {
      throw error;
    }
    console.warn("Continuing without a database connection because this is a development environment.");
    return false;
  }
};

export default connectDB;
