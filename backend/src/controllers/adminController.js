import User from "../models/User.js";
import Contact from "../models/Contact.js";
import Product from "../models/Product.js";
import Service from "../models/Service.js";
import Technology from "../models/Technology.js";
import Industry from "../models/Industry.js";
import DemoRequest from "../models/DemoRequest.js";
import Notification from "../models/Notification.js";
import Alert from "../models/Alert.js";
import ActivityLog from "../models/ActivityLog.js";
import CMSPage from "../models/CMSPage.js";

const escapeRegex = (value) => value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

const adminSearchSections = [
  { section: "Users", title: "Users", description: "Manage registered users" },
  { section: "Products", title: "Products", description: "Manage product catalog" },
  { section: "Contact Messages", title: "Contact Messages", description: "Review incoming messages" },
  { section: "Demo Requests", title: "Demo Requests", description: "Review incoming demos" },
  { section: "Notifications", title: "Notifications", description: "Review new admin alerts" },
  { section: "Analytics", title: "Analytics", description: "View visitor trends and metrics" },
  { section: "Alerts", title: "Alerts", description: "Inspect system alerts" },
  { section: "Website CMS", title: "Website CMS", description: "Manage published website pages" },
  { section: "Activity Logs", title: "Activity Logs", description: "View admin activity history" },
  { section: "Settings", title: "Settings", description: "Manage admin settings" },
  { section: "Profile", title: "Profile", description: "View and edit admin profile" },
];

export const getAdminSummary = async (req, res, next) => {
  try {
    const userCount = await User.countDocuments();
    const adminCount = await User.countDocuments({ role: "admin" });
    const contactCount = await Contact.countDocuments();
    const recentContacts = await Contact.find().sort({ createdAt: -1 }).limit(10);
    const newContactCount = await Contact.countDocuments({ status: "new" });
    const productCount = await Product.countDocuments();
    const serviceCount = await Service.countDocuments();
    const technologyCount = await Technology.countDocuments();
    const industryCount = await Industry.countDocuments();
    const demoRequestCount = await DemoRequest.countDocuments();
    const unreadNotificationCount = await Notification.countDocuments({
      audience: "admins",
      readBy: { $nin: [req.user._id] },
    });
    const latestNotification = await Notification.findOne({ audience: "admins" })
      .sort({ createdAt: -1 })
      .lean();
    const latestNotificationSnippet = latestNotification
      ? latestNotification.message?.split("\n")[0] || latestNotification.title || ""
      : "";
    const notificationCount = Math.max(unreadNotificationCount, newContactCount);

    res.json({
      success: true,
      data: {
        userCount,
        adminCount,
        contactCount,
        recentContacts,
        productCount,
        serviceCount,
        technologyCount,
        industryCount,
        demoRequestCount,
        notificationCount,
        latestNotificationSnippet,
      },
    });
  } catch (error) {
    next(error);
  }
};

export const markNotificationRead = async (req, res, next) => {
  try {
    const { notificationId } = req.params;
    const notification = await Notification.findById(notificationId);

    if (!notification) {
      return res.status(404).json({ success: false, message: "Notification not found." });
    }

    const userId = req.user._id.toString();
    const alreadyRead = notification.readBy.some((id) => id.toString() === userId);
    if (!alreadyRead) {
      notification.readBy.push(req.user._id);
      await notification.save();
    }

    res.json({ success: true, notification });
  } catch (error) {
    next(error);
  }
};

export const getUsers = async (req, res, next) => {
  try {
    const { search } = req.query;
    const filter = {};

    if (search) {
      const query = new RegExp(escapeRegex(search), "i");
      filter.$or = [
        { fullName: query },
        { email: query },
        { company: query },
      ];
    }

    const users = await User.find(filter).sort({ createdAt: -1 }).select("fullName email role company createdAt updatedAt");
    res.json({ success: true, users });
  } catch (error) {
    next(error);
  }
};

export const deleteUser = async (req, res, next) => {
  try {
    const { userId } = req.params;
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ success: false, message: "User not found." });
    }

    await user.deleteOne();
    res.json({ success: true, message: "User deleted." });
  } catch (error) {
    next(error);
  }
};

export const getContactsForAdmin = async (req, res, next) => {
  try {
    const { search, status } = req.query;
    const filter = {};

    if (status && ["new", "read", "replied"].includes(status)) {
      filter.status = status;
    }

    if (search) {
      const query = new RegExp(escapeRegex(search), "i");
      filter.$or = [
        { fullName: query },
        { email: query },
        { company: query },
        { message: query },
      ];
    }

    const contacts = await Contact.find(filter).sort({ createdAt: -1 });
    res.json({ success: true, contacts });
  } catch (error) {
    next(error);
  }
};

export const searchAdmin = async (req, res, next) => {
  try {
    const { q } = req.query;
    if (!q || !q.trim()) {
      return res.status(400).json({ success: false, message: "Search query is required." });
    }

    const query = new RegExp(escapeRegex(q), "i");

    const navigation = adminSearchSections.filter((section) =>
      section.title.match(query) || section.description.match(query)
    );

    const [users, contacts, products, demoRequests, alerts, notifications, activityLogs, cmsPages] = await Promise.all([
      User.find({ $or: [{ fullName: query }, { email: query }, { company: query }] }).sort({ createdAt: -1 }).limit(20),
      Contact.find({ $or: [{ fullName: query }, { email: query }, { company: query }, { message: query }] }).sort({ createdAt: -1 }).limit(20),
      Product.find({ $or: [{ title: query }, { slug: query }, { description: query }] }).sort({ createdAt: -1 }).limit(20),
      DemoRequest.find({ $or: [{ fullName: query }, { email: query }, { company: query }, { message: query }] }).sort({ createdAt: -1 }).limit(20),
      Alert.find({ $or: [{ message: query }, { level: query }] }).sort({ createdAt: -1 }).limit(20),
      Notification.find({ $or: [{ title: query }, { message: query }, { audience: query }] }).sort({ createdAt: -1 }).limit(20),
      ActivityLog.find({ $or: [{ action: query }] }).sort({ createdAt: -1 }).limit(20),
      CMSPage.find({ $or: [{ title: query }, { slug: query }, { content: query }] }).sort({ createdAt: -1 }).limit(20),
    ]);

    res.json({
      success: true,
      results: {
        navigation,
        users,
        contacts,
        products,
        demoRequests,
        alerts,
        notifications,
        activityLogs,
        cmsPages,
      },
    });
  } catch (error) {
    next(error);
  }
};

export const updateContactStatus = async (req, res, next) => {
  try {
    const { contactId } = req.params;
    const { status } = req.body;

    if (!["new", "read", "replied"].includes(status)) {
      return res.status(400).json({ success: false, message: "Invalid status." });
    }

    const contact = await Contact.findById(contactId);
    if (!contact) {
      return res.status(404).json({ success: false, message: "Contact not found." });
    }

    contact.status = status;
    await contact.save();

    res.json({ success: true, message: "Contact status updated.", contact });
  } catch (error) {
    next(error);
  }
};
