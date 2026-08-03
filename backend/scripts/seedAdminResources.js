import "dotenv/config";
import mongoose from "mongoose";
import Service from "../src/models/Service.js";
import Technology from "../src/models/Technology.js";
import Industry from "../src/models/Industry.js";
import Report from "../src/models/Report.js";
import Metric from "../src/models/Metric.js";
import TeamMember from "../src/models/TeamMember.js";
import Role from "../src/models/Role.js";
import CMSPage from "../src/models/CMSPage.js";
import Setting from "../src/models/Setting.js";

const MONGO = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/honeyvision";

const seed = async () => {
  await mongoose.connect(MONGO);
  console.log("Connected to MongoDB for seeding");

  await Service.deleteMany({});
  await Technology.deleteMany({});
  await Industry.deleteMany({});
  await Report.deleteMany({});
  await Metric.deleteMany({});
  await TeamMember.deleteMany({});
  await Role.deleteMany({});
  await CMSPage.deleteMany({});
  await Setting.deleteMany({});

  await Service.create({ name: "AI Surveillance", slug: "ai-surveillance", description: "AI-powered surveillance solutions" });
  await Technology.create({ name: "Computer Vision", slug: "computer-vision" });
  await Industry.create({ name: "Retail", slug: "retail" });

  await Report.create({ title: "Weekly Leads", type: "leads", meta: { count: 12 } });
  await Metric.create({ key: "active_devices", value: 24 });

  await TeamMember.create({ fullName: "Alice Admin", email: "alice@honeyvision.local", role: "admin" });
  await Role.create({ name: "admin", permissions: ["all"] });

  await CMSPage.create({ title: "About", slug: "about", content: "About Honeyvision" });
  await Setting.create({ key: "siteName", value: "Honeyvision" });

  console.log("Seeding complete");
  process.exit(0);
};

seed().catch((err)=>{ console.error(err); process.exit(1); });
