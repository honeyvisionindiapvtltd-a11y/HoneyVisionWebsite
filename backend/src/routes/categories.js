import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).json({
    success: false,
    message: "Categories endpoint is not available in this deployment.",
  });
});

export default router;
