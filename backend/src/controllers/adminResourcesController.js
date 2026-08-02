import Service from "../models/Service.js";
import Technology from "../models/Technology.js";
import Industry from "../models/Industry.js";
import Alert from "../models/Alert.js";
import Media from "../models/Media.js";
import Notification from "../models/Notification.js";
import ActivityLog from "../models/ActivityLog.js";
import Report from "../models/Report.js";
import Metric from "../models/Metric.js";
import TeamMember from "../models/TeamMember.js";
import Role from "../models/Role.js";
import CMSPage from "../models/CMSPage.js";
export const listResources = async (req, res) => {
  const { resource } = req.params;
  try {
    switch (resource) {
      case "services":
        return res.json(await Service.find().sort({ createdAt: -1 }));
      case "technologies":
        return res.json(await Technology.find().sort({ createdAt: -1 }));
      case "industries":
        return res.json(await Industry.find().sort({ createdAt: -1 }));
      case "alerts":
        return res.json(await Alert.find().sort({ createdAt: -1 }));
      case "media":
        return res.json(await Media.find().sort({ createdAt: -1 }));
      case "notifications":
        return res.json(await Notification.find().sort({ createdAt: -1 }));
      case "activitylogs":
        return res.json(await ActivityLog.find().sort({ createdAt: -1 }));
      case "reports":
        return res.json(await Report.find().sort({ createdAt: -1 }));
      case "analytics":
        return res.json(await Metric.find().sort({ timestamp: -1 }));
      case "team":
        return res.json(await TeamMember.find().sort({ createdAt: -1 }));
      case "roles":
        return res.json(await Role.find().sort({ createdAt: -1 }));
      case "cms":
        return res.json(await CMSPage.find().sort({ createdAt: -1 }));
      default:
        return res.status(400).json({ message: "Unknown resource" });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

export const createResource = async (req, res) => {
  const { resource } = req.params;
  try {
    switch (resource) {
      case "services":
        return res.status(201).json(await Service.create(req.body));
      case "technologies":
        return res.status(201).json(await Technology.create(req.body));
      case "industries":
        return res.status(201).json(await Industry.create(req.body));
      case "alerts":
        return res.status(201).json(await Alert.create(req.body));
      case "media":
        return res.status(201).json(await Media.create(req.body));
      case "notifications":
        return res.status(201).json(await Notification.create(req.body));
      case "activitylogs":
        return res.status(201).json(await ActivityLog.create(req.body));
      case "reports":
        return res.status(201).json(await Report.create(req.body));
      case "analytics":
        return res.status(201).json(await Metric.create(req.body));
      case "team":
        return res.status(201).json(await TeamMember.create(req.body));
      case "roles":
        return res.status(201).json(await Role.create(req.body));
      case "cms":
        return res.status(201).json(await CMSPage.create(req.body));
      default:
        return res.status(400).json({ message: "Unknown resource" });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

export const updateResource = async (req, res) => {
  const { resource, id } = req.params;
  try {
    let model;
    switch (resource) {
      case "services":
        model = Service;
        break;
      case "technologies":
        model = Technology;
        break;
      case "industries":
        model = Industry;
        break;
      case "devices":
        model = Device;
        break;
      case "alerts":
        model = Alert;
        break;
      case "media":
        model = Media;
        break;
      case "notifications":
        model = Notification;
        break;
      case "activitylogs":
        model = ActivityLog;
        break;
      case "reports":
        model = Report;
        break;
      case "analytics":
        model = Metric;
        break;
      case "team":
        model = TeamMember;
        break;
      case "roles":
        model = Role;
        break;
      case "cms":
        model = CMSPage;
        break;
      default:
        return res.status(400).json({ message: "Unknown resource" });
    }
    const updated = await model.findByIdAndUpdate(id, req.body, { new: true });
    return res.json(updated);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

export const deleteResource = async (req, res) => {
  const { resource, id } = req.params;
  try {
    let model;
    switch (resource) {
      case "services":
        model = Service;
        break;
      case "technologies":
        model = Technology;
        break;
      case "industries":
        model = Industry;
        break;
      case "devices":
        model = Device;
        break;
      case "alerts":
        model = Alert;
        break;
      case "media":
        model = Media;
        break;
      case "notifications":
        model = Notification;
        break;
      case "activitylogs":
        model = ActivityLog;
        break;
      case "reports":
        model = Report;
        break;
      case "analytics":
        model = Metric;
        break;
      case "team":
        model = TeamMember;
        break;
      case "roles":
        model = Role;
        break;
      case "cms":
        model = CMSPage;
        break;
      default:
        return res.status(400).json({ message: "Unknown resource" });
    }
    await model.findByIdAndDelete(id);
    return res.json({ message: "Deleted" });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};
