import "dotenv/config";
import connectDB from "../src/config/db.js";
import User from "../src/models/User.js";

const seedAdmin = async () => {
  await connectDB();

  const email = process.env.ADMIN_EMAIL || "admin@example.com";
  const password = process.env.ADMIN_PASSWORD || "Admin1234";
  const fullName = process.env.ADMIN_FULLNAME || "Admin User";
  const phone = process.env.ADMIN_PHONE || "";
  const company = process.env.ADMIN_COMPANY || "";
  const role = process.env.ADMIN_ROLE || "admin";

  const existingUser = await User.findOne({ email: email.toLowerCase() }).select("+password");

  if (existingUser) {
    existingUser.role = role;
    if (password && !(await existingUser.comparePassword(password))) {
      existingUser.password = password;
    }
    await existingUser.save();
    console.log(`Admin user updated: ${existingUser.email}`);
  } else {
    await User.create({
      fullName,
      email: email.toLowerCase(),
      phone,
      company,
      password,
      role,
    });
    console.log(`Admin user created: ${email.toLowerCase()}`);
  }

  process.exit(0);
};

seedAdmin().catch((error) => {
  console.error("Failed to seed admin user:", error);
  process.exit(1);
});
