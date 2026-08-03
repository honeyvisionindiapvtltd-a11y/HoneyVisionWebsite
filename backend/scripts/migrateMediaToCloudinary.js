import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";
import { v2 as cloudinary } from "cloudinary";
import Media from "../src/models/Media.js";
import connectDB from "../src/config/db.js";

dotenv.config();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const assetRoots = [
  path.resolve(__dirname, "../src/assets"),
  path.resolve(__dirname, "../../frontend/src/assets"),
  path.resolve(__dirname, "../../frontend/public"),
].filter((candidate) => fs.existsSync(candidate));

const walkAssets = (directory) => {
  const entries = fs.readdirSync(directory, { withFileTypes: true });
  return entries.flatMap((entry) => {
    const fullPath = path.join(directory, entry.name);
    if (entry.isDirectory()) return walkAssets(fullPath);
    return [fullPath];
  });
};

const migrate = async () => {
  await connectDB();
  const files = assetRoots.flatMap((assetRoot) => walkAssets(assetRoot)).filter((file) => /\.(png|jpg|jpeg|gif|webp|mp4|mov|avi)$/i.test(file));

  for (const filePath of files) {
    const assetRoot = assetRoots.find((root) => filePath.startsWith(root));
    const relativePath = assetRoot ? path.relative(assetRoot, filePath) : path.basename(filePath);
    const ext = path.extname(filePath).toLowerCase();
    const resourceType = [".mp4", ".mov", ".avi"].includes(ext) ? "video" : "image";

    const result = await cloudinary.uploader.upload(filePath, {
      folder: "honeyvision/migration",
      resource_type: resourceType,
    });

    await Media.create({
      filename: relativePath,
      title: relativePath,
      url: result.secure_url,
      publicId: result.public_id,
      mimeType: resourceType === "video" ? "video/mp4" : "image/*",
      resourceType,
      size: fs.statSync(filePath).size,
    });

    console.log(`Migrated ${relativePath}`);
  }

  console.log(`Migration complete. Imported ${files.length} assets.`);
  // Generate a mapping file for frontend (relative asset path -> cloudinary url)
  try {
    const frontendUtilsDir = path.resolve(__dirname, "../../frontend/src/utils");
    if (fs.existsSync(frontendUtilsDir)) {
      const mapping = {};
      for (const filePath of files) {
        const assetRoot = assetRoots.find((root) => filePath.startsWith(root));
        const relativePath = assetRoot ? path.relative(assetRoot, filePath) : path.basename(filePath);
        // Find media record in DB to get secure url (in case upload returned different url)
        const media = await Media.findOne({ filename: relativePath }).sort({ createdAt: -1 }).lean();
        if (media && media.url) {
          const key = relativePath.replace(/\\\\/g, "/");
          mapping[key] = media.url;
        }
      }

      const outPath = path.join(frontendUtilsDir, "cloudinary_map.json");
      fs.writeFileSync(outPath, JSON.stringify(mapping, null, 2), "utf8");
      console.log(`Wrote Cloudinary mapping to ${outPath}`);
    }
  } catch (err) {
    console.error("Failed to write frontend mapping:", err);
  }
  process.exit(0);
};

migrate().catch((error) => {
  console.error(error);
  process.exit(1);
});
