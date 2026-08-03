import mongoose from "mongoose";

const reportSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    type: { type: String },
    meta: { type: Object },
    generatedAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

const Report = mongoose.model("Report", reportSchema);
export default Report;
