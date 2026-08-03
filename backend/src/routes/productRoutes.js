import { Router } from "express";
import Product from "../models/Product.js";

const router = Router();

router.get("/", async (req, res) => {
  try {
    const products = await Product.find({ published: true }).sort({ createdAt: -1 });
    res.json({ success: true, products });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

router.get("/:slug", async (req, res) => {
  try {
    const slug = req.params.slug;
    const product = await Product.findOne({ slug, published: true });
    if (!product) {
      return res.status(404).json({ success: false, message: "Product not found." });
    }
    res.json({ success: true, product });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

export default router;
