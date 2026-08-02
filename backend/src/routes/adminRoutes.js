import { Router } from "express";
import {
  getAdminSummary,
  getUsers,
  deleteUser,
  getContactsForAdmin,
  updateContactStatus,
  markNotificationRead,
  searchAdmin,
} from "../controllers/adminController.js";
import { replyContact } from "../controllers/contactController.js";
import {
  listProducts,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/productController.js";
import { listDemoRequests, submitDemoRequest, updateDemoRequestStatus, deleteDemoRequest } from "../controllers/demoRequestController.js";
import {
  listResources,
  createResource,
  updateResource,
  deleteResource,
} from "../controllers/adminResourcesController.js";
import { protect } from "../middleware/auth.js";
import { adminOnly } from "../middleware/admin.js";
import { body, validationResult } from "express-validator";

const router = Router();

const validateStatus = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ success: false, message: errors.array()[0].msg });
  }
  next();
};

router.get("/summary", protect, adminOnly, getAdminSummary);
router.get("/users", protect, adminOnly, getUsers);
router.delete("/users/:userId", protect, adminOnly, deleteUser);
router.get("/contacts", protect, adminOnly, getContactsForAdmin);
router.get("/search", protect, adminOnly, searchAdmin);
router.put(
  "/contacts/:contactId/status",
  protect,
  adminOnly,
  body("status").isIn(["new", "read", "replied"]).withMessage("Invalid status value"),
  validateStatus,
  updateContactStatus
);

router.put("/contacts/:contactId/reply", protect, adminOnly, replyContact);

router.put("/notifications/:notificationId/read", protect, adminOnly, markNotificationRead);

// Products CRUD
router.get("/products", protect, adminOnly, listProducts);
router.post("/products", protect, adminOnly, createProduct);
router.put("/products/:productId", protect, adminOnly, updateProduct);
router.delete("/products/:productId", protect, adminOnly, deleteProduct);

// Demo requests
router.get("/demo-requests", protect, adminOnly, listDemoRequests);
router.put(
  "/demo-requests/:requestId/status",
  protect,
  adminOnly,
  body("status").isIn(["new", "scheduled", "completed"]).withMessage("Invalid status value"),
  validateStatus,
  updateDemoRequestStatus
);
router.delete("/demo-requests/:requestId", protect, adminOnly, deleteDemoRequest);

// Generic resource endpoints: services, technologies, industries, alerts, media, notifications, activitylogs
router.get(
  "/:resource(services|technologies|industries|alerts|media|notifications|activitylogs|reports|analytics|team|roles|cms)",
  protect,
  adminOnly,
  listResources
);
router.post(
  "/:resource(services|technologies|industries|alerts|media|notifications|activitylogs|reports|analytics|team|roles|cms)",
  protect,
  adminOnly,
  createResource
);
router.put(
  "/:resource(services|technologies|industries|alerts|media|notifications|activitylogs|reports|analytics|team|roles|cms)/:id",
  protect,
  adminOnly,
  updateResource
);
router.delete(
  "/:resource(services|technologies|industries|alerts|media|notifications|activitylogs|reports|analytics|team|roles|cms)/:id",
  protect,
  adminOnly,
  deleteResource
);

export default router;
