import mongoose from "mongoose";

const cookieConsentSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", default: null },
    fullName: { type: String, trim: true, default: "" },
    email: { type: String, trim: true, default: "" },
    accepted: { type: Boolean, default: true },
    acceptedAt: { type: Date, default: Date.now },
    ipAddress: { type: String, trim: true, default: "" },
    userAgent: { type: String, trim: true, default: "" },
    meta: { type: Object, default: {} },
  },
  { timestamps: true }
);

const CookieConsent = mongoose.model("CookieConsent", cookieConsentSchema);
export default CookieConsent;
