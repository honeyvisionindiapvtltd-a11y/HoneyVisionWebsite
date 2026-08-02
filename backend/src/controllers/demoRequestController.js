import DemoRequest from "../models/DemoRequest.js";
import Notification from "../models/Notification.js";

export const listDemoRequests = async (req, res, next) => {
  try {
    const requests = await DemoRequest.find().sort({ createdAt: -1 });
    res.json({ success: true, requests });
  } catch (err) {
    next(err);
  }
};

export const submitDemoRequest = async (req, res, next) => {
  try {
    const { fullName, email, phone, company, message } = req.body;
    const demoRequest = await DemoRequest.create({
      fullName,
      email,
      phone: phone || "",
      company: company || "",
      message: message || "",
    });

    await Notification.create({
      title: `New demo request from ${fullName}`,
      message: `Demo request details:\n${message || "No message provided."}\nEmail: ${email}${phone ? `\nPhone: ${phone}` : ""}${company ? `\nCompany: ${company}` : ""}`,
      audience: "admins",
    });

    res.status(201).json({
      success: true,
      message: "Thank you! Your demo request has been submitted. Our team will reach out soon.",
      demoRequest,
    });
  } catch (err) {
    next(err);
  }
};

export const updateDemoRequestStatus = async (req, res, next) => {
  try {
    const { requestId } = req.params;
    const { status } = req.body;
    if (!["new", "scheduled", "completed"].includes(status)) {
      return res.status(400).json({ success: false, message: "Invalid status." });
    }
    const reqDoc = await DemoRequest.findById(requestId);
    if (!reqDoc) return res.status(404).json({ success: false, message: "Request not found." });
    reqDoc.status = status;
    await reqDoc.save();
    res.json({ success: true, request: reqDoc });
  } catch (err) {
    next(err);
  }
};

export const deleteDemoRequest = async (req, res, next) => {
  try {
    const { requestId } = req.params;
    const reqDoc = await DemoRequest.findById(requestId);
    if (!reqDoc) return res.status(404).json({ success: false, message: "Request not found." });
    await reqDoc.deleteOne();
    res.json({ success: true, message: "Request deleted." });
  } catch (err) {
    next(err);
  }
};
