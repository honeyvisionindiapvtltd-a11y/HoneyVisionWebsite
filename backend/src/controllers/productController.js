import { v2 as cloudinary } from "cloudinary";
import Product from "../models/Product.js";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const allowedSlugs = [
  "ai-cctv-cameras",
  "ip-camera-systems",
  "audiovisual-systems",
  "agricultural-ai-drones",
  "access-control",
];

const normalizeProductImages = async (images = []) => {
  if (typeof images === "string") {
    images = [images];
  }

  if (!Array.isArray(images)) {
    return [];
  }

  const normalized = await Promise.all(
    images.map(async (image) => {
      if (typeof image !== "string" || !image.trim()) {
        return "";
      }

      if (/^data:(image|video)\//.test(image)) {
        const uploadResult = await cloudinary.uploader.upload(image, {
          folder: "honeyvision/products",
          resource_type: "auto",
        });
        return uploadResult.secure_url;
      }

      return image;
    })
  );

  return normalized.filter(Boolean);
};

export const listProducts = async (req, res, next) => {
  try {
    const products = await Product.find().sort({ createdAt: -1 });
    res.json({ success: true, products });
  } catch (err) {
    next(err);
  }
};

export const createProduct = async (req, res, next) => {
  try {
    const { title, slug, description, price, images: imagesInput, published } = req.body;
    const images = await normalizeProductImages(imagesInput);
    const product = await Product.create({ title, slug, description, price, images, published });
    res.status(201).json({ success: true, product });
  } catch (err) {
    next(err);
  }
};

export const updateProduct = async (req, res, next) => {
  try {
    const { productId } = req.params;
    const product = await Product.findById(productId);
    if (!product) return res.status(404).json({ success: false, message: "Product not found." });

    if (req.body.images) {
      req.body.images = await normalizeProductImages(req.body.images);
    }

    Object.assign(product, req.body);
    await product.save();
    res.json({ success: true, product });
  } catch (err) {
    next(err);
  }
};

export const deleteProduct = async (req, res, next) => {
  try {
    const { productId } = req.params;
    const product = await Product.findById(productId);
    if (!product) return res.status(404).json({ success: false, message: "Product not found." });
    await product.deleteOne();
    res.json({ success: true, message: "Product deleted." });
  } catch (err) {
    next(err);
  }
};
