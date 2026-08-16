import mongoose from "mongoose";

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

const connectDB = async () => {
  const configuredUri = process.env.MONGODB_URI;
  const isProduction = process.env.NODE_ENV === "production";

  console.log("=================================");
  console.log("MongoDB startup diagnostics");
  console.log("NODE_ENV:", process.env.NODE_ENV);
  console.log("MONGODB_URI exists:", Boolean(configuredUri));
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
    "MONGODB target:",
    redactMongoUri(configuredUri)
  );
  console.log("=================================");

  if (!configuredUri) {
    const message = isProduction
      ? "MONGODB_URI is required in production and was not detected in the deployment environment."
      : "MONGODB_URI is not defined for this environment.";

    console.error(message);
    throw new Error(message);
  }

  try {
    console.log("Connecting to MongoDB Atlas...");

    await mongoose.connect(configuredUri, {
      serverSelectionTimeoutMS: 30000,
      connectTimeoutMS: 30000,
      socketTimeoutMS: 30000,
      retryWrites: true,
    });

    console.log("=================================");
    console.log("✅ MongoDB connected successfully");
    console.log(
      "MongoDB target:",
      redactMongoUri(configuredUri)
    );
    console.log("=================================");

    return true;
  } catch (error) {
    console.error("=================================");
    console.error("❌ MongoDB connection FAILED");
    console.error("=================================");

    console.error("Error name:", error?.name);
    console.error("Error message:", error?.message);
    console.error("Error code:", error?.code);
    console.error("Error codeName:", error?.codeName);

    if (error?.reason) {
      console.error("Error reason:", error.reason);
    }

    if (error?.cause) {
      console.error("Error cause:", error.cause);
    }

    console.error("MongoDB target:", redactMongoUri(configuredUri));

    console.error("=================================");

    throw error;
  }
};

export default connectDB;