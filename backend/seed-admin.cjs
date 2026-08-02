const mongoose = require('mongoose');
const User = require('./src/models/User.js').default;
require('dotenv').config();

(async () => {
  await mongoose.connect(process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/honeyvision');
  const email = 'admin@example.com';
  const password = 'Admin1234';
  const existing = await User.findOne({ email: email.toLowerCase() });
  if (!existing) {
    await User.create({ fullName: 'Admin User', email: email.toLowerCase(), phone: '', company: '', password, role: 'admin' });
    console.log('Created admin user');
  } else {
    console.log('Admin user already exists');
  }
  await mongoose.disconnect();
})();
