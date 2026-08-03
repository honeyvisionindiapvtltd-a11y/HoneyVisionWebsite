import mongoose from "mongoose";

const alertSchema = new mongoose.Schema(
  {
    level: { type: String, enum: ["info", "warning", "critical"], default: "info" },
    message: { type: String, required: true },
    device: { type: mongoose.Schema.Types.ObjectId, ref: "Device" },
    resolved: { type: Boolean, default: false },
  },
  { timestamps: true }
);

const Alert = mongoose.model("Alert", alertSchema);
export default Alert;
