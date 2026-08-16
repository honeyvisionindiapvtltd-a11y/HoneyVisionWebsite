import mongoose from "mongoose";

const DEFAULT_URI = "mongodb://127.0.0.1:27017/honeyvision";

const connectDB = async () => {
  const candidateUris = [process.env.MONGO_URI, process.env.MONGODB_URI, DEFAULT_URI].filter(Boolean);
  const uniqueUris = [...new Set(candidateUris)];
  let lastError = null;

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
      console.warn(`MongoDB connection failed: ${error.message}`);
    }
  }

  console.error("MongoDB connection error:", lastError?.message || "Unknown error");
  console.warn("Continuing without a database connection so the server can still start.");
  return false;
};

export default connectDB;
