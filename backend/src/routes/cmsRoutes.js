import { Router } from "express";
import { listPublishedPages, getPublishedPageBySlug } from "../controllers/cmsController.js";

const router = Router();

router.get("/", listPublishedPages);
router.get("/:slug", getPublishedPageBySlug);

export default router;
