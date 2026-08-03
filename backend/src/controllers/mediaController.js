import Media from "../models/Media.js";
import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const createAssetRecord = async ({ file, uploadResult }) => {
  const resourceType = uploadResult.resource_type === "video" ? "video" : "image";
  return Media.create({
    filename: file.originalname || uploadResult.public_id,
    title: file.originalname || uploadResult.public_id,
    url: uploadResult.secure_url,
    publicId: uploadResult.public_id,
    mimeType: file.mimetype || uploadResult.format,
    resourceType,
    size: file.size || 0,
  });
};

export const listMedia = async (req, res, next) => {
  try {
    const media = await Media.find().sort({ createdAt: -1 });
    res.json({ success: true, media });
  } catch (error) {
    next(error);
  }
};

export const uploadMedia = async (req, res, next) => {
  try {
    if (!req.files || req.files.length === 0) {
      return res.status(400).json({ success: false, message: "Please choose at least one file to upload." });
    }

    const uploads = await Promise.all(
      req.files.map(async (file) => {
        const result = await cloudinary.uploader.upload(file.path, {
          folder: "honeyvision/media",
          resource_type: file.mimetype?.startsWith("video/") ? "video" : "image",
        });
        return createAssetRecord({ file, uploadResult: result });
      })
    );

    res.status(201).json({ success: true, media: uploads });
  } catch (error) {
    next(error);
  }
};

export const deleteMedia = async (req, res, next) => {
  try {
    const { mediaId } = req.params;
    const asset = await Media.findById(mediaId);

    if (!asset) {
      return res.status(404).json({ success: false, message: "Media not found." });
    }

    await cloudinary.uploader.destroy(asset.publicId, {
      resource_type: asset.resourceType === "video" ? "video" : "image",
    });
    await asset.deleteOne();

    res.json({ success: true, message: "Media deleted." });
  } catch (error) {
    next(error);
  }
};

export const bulkMigrateLocalAssets = async (req, res, next) => {
  try {
    const files = req.body?.files || [];

    if (!Array.isArray(files) || files.length === 0) {
      return res.status(400).json({ success: false, message: "No files provided for migration." });
    }

    const uploaded = await Promise.all(
      files.map(async (entry) => {
        const result = await cloudinary.uploader.upload(entry.path, {
          folder: "honeyvision/migration",
          resource_type: entry.resourceType === "video" ? "video" : "image",
        });

        return Media.create({
          title: entry.title || result.public_id,
          url: result.secure_url,
          publicId: result.public_id,
          mimeType: entry.mimeType || result.format,
          resourceType: entry.resourceType === "video" ? "video" : "image",
          size: entry.size || 0,
        });
      })
    );

    res.status(201).json({ success: true, migrated: uploaded });
  } catch (error) {
    next(error);
  }
};
