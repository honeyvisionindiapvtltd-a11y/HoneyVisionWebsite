import mongoose from "mongoose";

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
  const configuredUri = process.env.MONGODB_URI;
  const isProduction = process.env.NODE_ENV === "production";

  if (!configuredUri) {
    const message = isProduction
      ? "MONGODB_URI is required in production and was not detected in the deployment environment."
      : "MONGODB_URI is not defined for this environment.";
    console.error(message);
    throw new Error(message);
  }

  try {
    await mongoose.connect(configuredUri, {
      serverSelectionTimeoutMS: 5000,
      family: 4,
      retryWrites: true,
    });

    console.log(`MongoDB connected using ${redactMongoUri(configuredUri)}`);
    return true;
  } catch (error) {
    const message = `MongoDB connection error: ${error.message}`;
    console.error(message);
    throw error;
  }
};

export default connectDB;
