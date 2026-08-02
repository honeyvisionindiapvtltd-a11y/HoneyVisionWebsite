import crypto from "crypto";
import User from "../models/User.js";
import generateToken from "../utils/generateToken.js";
import { sendEmail } from "../utils/email.js";

export const register = async (req, res, next) => {
  try {
    const { fullName, email, phone, company, password } = req.body;

    const existingUser = await User.findOne({ email: email.toLowerCase() });
    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "An account with this email already exists.",
      });
    }

    const user = await User.create({
      fullName,
      email,
      phone: phone || "",
      company: company || "",
      password,
    });

    const token = generateToken(user._id);

    res.status(201).json({
      success: true,
      message: "Registration successful.",
      token,
      user: user.toPublicJSON(),
    });
  } catch (error) {
    next(error);
  }
};

export const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email: email.toLowerCase() }).select("+password");

    if (!user || !(await user.comparePassword(password))) {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password.",
      });
    }

    const token = generateToken(user._id);

    res.json({
      success: true,
      message: "Login successful.",
      token,
      user: user.toPublicJSON(),
    });
  } catch (error) {
    next(error);
  }
};

export const getMe = async (req, res) => {
  res.json({
    success: true,
    user: req.user.toPublicJSON(),
  });
};

export const updateProfile = async (req, res, next) => {
  try {
    const { fullName, phone, company, location } = req.body;

    const user = await User.findById(req.user._id);

    if (fullName !== undefined) user.fullName = fullName;
    if (phone !== undefined) user.phone = phone;
    if (company !== undefined) user.company = company;
    if (location !== undefined) user.location = location;

    await user.save();

    res.json({
      success: true,
      message: "Profile updated successfully.",
      user: user.toPublicJSON(),
    });
  } catch (error) {
    next(error);
  }
};

export const changePassword = async (req, res, next) => {
  try {
    const { currentPassword, newPassword } = req.body;

    const user = await User.findById(req.user._id).select("+password");

    if (!(await user.comparePassword(currentPassword))) {
      return res.status(400).json({
        success: false,
        message: "Current password is incorrect.",
      });
    }

    user.password = newPassword;
    await user.save();

    res.json({
      success: true,
      message: "Password changed successfully.",
    });
  } catch (error) {
    next(error);
  }
};

export const forgotPassword = async (req, res, next) => {
  try {
    const { email } = req.body;

    const user = await User.findOne({ email: email.toLowerCase() });

    if (!user) {
      return res.json({
        success: true,
        message: "If an account exists with that email, reset instructions have been sent.",
      });
    }

    const resetToken = user.createPasswordResetToken();
    await user.save({ validateBeforeSave: false });

    const frontendUrl = process.env.FRONTEND_URL || "http://localhost:5173";
    const resetUrl = `${frontendUrl}/reset-password?token=${resetToken}`;

    const emailSubject = "Honeyvision Password Reset Request";
    const emailText = `You requested a password reset for your Honeyvision account. Use the link below to set a new password:\n\n${resetUrl}\n\nIf you did not request this, please ignore this email.`;
    const emailHtml = `
      <div style="font-family:Arial,sans-serif;line-height:1.6;color:#111;">
        <h2 style="color:#24A8E0;">Honeyvision Password Reset</h2>
        <p>You requested to reset your password. Click the button below to choose a new password.</p>
        <p><a href="${resetUrl}" style="display:inline-block;padding:12px 24px;background:#F1CF45;color:#111;text-decoration:none;border-radius:8px;">Reset Password</a></p>
        <p>If the button does not work, copy and paste this link into your browser:</p>
        <p><a href="${resetUrl}" style="color:#24A8E0;">${resetUrl}</a></p>
        <p>If you did not request this email, you can safely ignore it.</p>
      </div>
    `;

    try {
      const { info, previewUrl } = await sendEmail({
        to: user.email,
        subject: emailSubject,
        text: emailText,
        html: emailHtml,
      });

      if (process.env.NODE_ENV === "development") {
        console.log("Password reset email info:", info);
        if (previewUrl) {
          console.log("Password reset preview URL:", previewUrl);
        }
        console.log("Password reset link:", resetUrl);
      }
    } catch (emailError) {
      console.error("Failed to send password reset email:", emailError);
    }

    res.json({
      success: true,
      message: "If an account exists with that email, reset instructions have been sent.",
      ...(process.env.NODE_ENV === "development" && { resetUrl }),
    });
  } catch (error) {
    next(error);
  }
};

export const resetPassword = async (req, res, next) => {
  try {
    const { token, password } = req.body;

    const hashedToken = crypto.createHash("sha256").update(token).digest("hex");

    const user = await User.findOne({
      resetPasswordToken: hashedToken,
      resetPasswordExpires: { $gt: Date.now() },
    });

    if (!user) {
      return res.status(400).json({
        success: false,
        message: "Invalid or expired reset token.",
      });
    }

    user.password = password;
    user.resetPasswordToken = undefined;
    user.resetPasswordExpires = undefined;
    await user.save();

    const authToken = generateToken(user._id);

    res.json({
      success: true,
      message: "Password reset successful. You are now logged in.",
      token: authToken,
      user: user.toPublicJSON(),
    });
  } catch (error) {
    next(error);
  }
};
