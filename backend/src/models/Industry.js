import mongoose from "mongoose";

const industrySchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    slug: { type: String, trim: true },
    description: { type: String, default: "" },
    image: { type: String },
  },
  { timestamps: true }
);

const Industry = mongoose.model("Industry", industrySchema);
export default Industry;
