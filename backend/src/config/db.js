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
  const configuredUri = process.env.MONGODB_URI || (!isProduction ? DEFAULT_URI : null);

  if (!configuredUri) {
    const message = "MONGODB_URI is required in production. Set the Atlas connection string in the deployment environment.";
    console.error(message);
    throw new Error(message);
  }

  try {
    await mongoose.connect(configuredUri, {
      serverSelectionTimeoutMS: 5000,
      family: 4,
    });
    console.log(`MongoDB connected using ${redactMongoUri(configuredUri)}`);
    return true;
  } catch (error) {
    const message = `MongoDB connection error: ${error.message}`;
    console.error(message);
    if (isProduction) {
      throw error;
    }
    console.warn("Continuing without a database connection because this is a development environment.");
    return false;
  }
};

export default connectDB;
