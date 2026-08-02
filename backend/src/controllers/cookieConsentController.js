import CookieConsent from "../models/CookieConsent.js";
import Metric from "../models/Metric.js";

export const createCookieConsent = async (req, res, next) => {
  try {
    const { accepted, user } = req.body;
    const consent = await CookieConsent.create({
      user: user?.id || null,
      fullName: user?.fullName || user?.name || "",
      email: user?.email || "",
      accepted: accepted === true,
      acceptedAt: new Date(),
      ipAddress: req.ip || req.headers["x-forwarded-for"] || "",
      userAgent: req.headers["user-agent"] || "",
      meta: {
        path: req.body.path || req.originalUrl,
      },
    });

    if (accepted === true) {
      await Metric.create({ key: "cookie_acceptance", value: 1, timestamp: new Date() });
    }

    res.status(201).json({ success: true, cookieConsent: consent });
  } catch (error) {
    next(error);
  }
};
