import mongoose from "mongoose";

const deviceSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    serial: { type: String },
    status: { type: String, enum: ["online", "offline", "maintenance"], default: "offline" },
    lastSeen: { type: Date },
  },
  { timestamps: true }
);

const Device = mongoose.model("Device", deviceSchema);
export default Device;
