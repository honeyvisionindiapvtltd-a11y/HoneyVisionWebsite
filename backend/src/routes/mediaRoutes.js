import { Router } from "express";
import multer from "multer";
import { protect } from "../middleware/auth.js";
import { adminOnly } from "../middleware/admin.js";
import { listMedia, uploadMedia, deleteMedia, bulkMigrateLocalAssets } from "../controllers/mediaController.js";

const router = Router();
const upload = multer({ dest: "uploads/" });

router.get("/", protect, adminOnly, listMedia);
router.post("/upload", protect, adminOnly, upload.array("files", 10), uploadMedia);
router.delete("/:mediaId", protect, adminOnly, deleteMedia);
router.post("/bulk-migrate", protect, adminOnly, bulkMigrateLocalAssets);

export default router;
