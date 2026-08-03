import mongoose from "mongoose";

const demoRequestSchema = new mongoose.Schema(
  {
    fullName: { type: String, required: true, trim: true },
    email: { type: String, required: true, lowercase: true, trim: true },
    phone: { type: String, default: "" },
    company: { type: String, default: "" },
    message: { type: String, default: "" },
    status: { type: String, enum: ["new", "scheduled", "completed"], default: "new" },
  },
  { timestamps: true }
);

const DemoRequest = mongoose.model("DemoRequest", demoRequestSchema);
export default DemoRequest;
