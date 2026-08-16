import mongoose from "mongoose";

const DEFAULT_URI = "mongodb://127.0.0.1:27017/honeyvision";

const connectDB = async () => {
  const candidateUris = [process.env.MONGO_URI, process.env.MONGODB_URI, DEFAULT_URI].filter(Boolean);
  const uniqueUris = [...new Set(candidateUris)];
  let lastError = null;

  if (!uniqueUris.length) {
    throw new Error("MongoDB connection error: No MongoDB URI found in environment variables.");
  }

  for (const uri of uniqueUris) {
    try {
      await mongoose.connect(uri, {
        serverSelectionTimeoutMS: 5000,
        family: 4,
      });
      console.log("MongoDB connected successfully.");
      return true;
    } catch (error) {
      lastError = error;
      const safeUri = uri.replace(/\/\/([^@]+)@/, "//***@");
      console.error(`MongoDB connection failed for URI ${safeUri}: ${error.message}`);
    }
  }

  const errorMessage = lastError?.message || "Unknown MongoDB connection error";
  throw new Error(`MongoDB connection error: ${errorMessage}`);
};

export default connectDB;
