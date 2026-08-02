import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    slug: { type: String, trim: true },
    subtitle: { type: String, default: "" },
    description: { type: String, default: "" },
    price: { type: Number, default: 0 },
    features: [{ type: String }],
    images: [{ type: String }],
    published: { type: Boolean, default: true },
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", productSchema);
export default Product;
