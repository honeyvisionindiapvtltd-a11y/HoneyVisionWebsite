import { Router } from "express";
import { createCookieConsent } from "../controllers/cookieConsentController.js";

const router = Router();

router.post("/", createCookieConsent);

export default router;
