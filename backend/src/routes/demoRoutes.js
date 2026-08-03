import { Router } from "express";
import { submitDemoRequest } from "../controllers/demoRequestController.js";
import { validate, demoRequestValidation } from "../middleware/validate.js";

const router = Router();

router.post("/", demoRequestValidation, validate, submitDemoRequest);

export default router;
