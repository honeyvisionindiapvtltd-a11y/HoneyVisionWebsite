import { body, validationResult } from "express-validator";

export const validate = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({
      success: false,
      message: errors.array()[0].msg,
      errors: errors.array(),
    });
  }

  next();
};

export const registerValidation = [
  body("fullName").trim().notEmpty().withMessage("Full name is required"),
  body("email").trim().isEmail().withMessage("Please enter a valid email"),
  body("password")
    .isLength({ min: 6, max: 72 })
    .withMessage("Password must be between 6 and 72 characters"),
  body("phone").optional().trim(),
  body("company").optional().trim(),
];

export const loginValidation = [
  body("email").trim().isEmail().withMessage("Please enter a valid email"),
  body("password").notEmpty().withMessage("Password is required"),
];

export const updateProfileValidation = [
  body("fullName").optional().trim().notEmpty().withMessage("Full name cannot be empty"),
  body("phone").optional().trim(),
  body("company").optional().trim(),
  body("location").optional().trim(),
];

export const changePasswordValidation = [
  body("currentPassword").notEmpty().withMessage("Current password is required"),
  body("newPassword")
    .isLength({ min: 6, max: 72 })
    .withMessage("New password must be between 6 and 72 characters"),
];

export const forgotPasswordValidation = [
  body("email").trim().isEmail().withMessage("Please enter a valid email"),
];

export const resetPasswordValidation = [
  body("token").notEmpty().withMessage("Reset token is required"),
  body("password")
    .isLength({ min: 6, max: 72 })
    .withMessage("Password must be between 6 and 72 characters"),
];

export const contactValidation = [
  body("fullName").trim().notEmpty().withMessage("Full name is required"),
  body("email").trim().isEmail().withMessage("Please enter a valid email"),
  body("message").trim().notEmpty().withMessage("Message is required"),
  body("phone").optional().trim(),
  body("company").optional().trim(),
];

export const demoRequestValidation = [
  body("fullName").trim().notEmpty().withMessage("Full name is required"),
  body("email").trim().isEmail().withMessage("Please enter a valid email"),
  body("phone").optional().trim(),
  body("company").optional().trim(),
  body("message").optional().trim(),
];
