import mongoose from "mongoose";

const technologySchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    slug: { type: String, trim: true },
    description: { type: String, default: "" },
  },
  { timestamps: true }
);

const Technology = mongoose.model("Technology", technologySchema);
export default Technology;
