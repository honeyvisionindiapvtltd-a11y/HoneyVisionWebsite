import mongoose from "mongoose";

const cmsPageSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    content: { type: String },
    published: { type: Boolean, default: true },
  },
  { timestamps: true }
);

const CMSPage = mongoose.model("CMSPage", cmsPageSchema);
export default CMSPage;
