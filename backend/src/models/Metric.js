import mongoose from "mongoose";

const metricSchema = new mongoose.Schema(
  {
    key: { type: String, required: true },
    value: { type: Number, default: 0 },
    timestamp: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

const Metric = mongoose.model("Metric", metricSchema);
export default Metric;
