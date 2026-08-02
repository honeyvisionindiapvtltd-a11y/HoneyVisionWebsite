import { Router } from "express";
import { submitContact, getContacts, replyContact } from "../controllers/contactController.js";
import { protect } from "../middleware/auth.js";
import { validate, contactValidation } from "../middleware/validate.js";

const router = Router();

router.post("/", contactValidation, validate, submitContact);
router.get("/", protect, getContacts);
router.put("/:contactId/reply", protect, replyContact);

export default router;
