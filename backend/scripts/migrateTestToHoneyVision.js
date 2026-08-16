import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const migrateData = async () => {
  try {
    console.log("🔄 Starting migration from 'test' to 'honey_vision' database...");

    // Connect to MongoDB
    const uri = process.env.MONGODB_URI;
    if (!uri) {
      throw new Error("MONGODB_URI not defined in .env");
    }

    await mongoose.connect(uri);
    console.log("✅ Connected to MongoDB");

    // Get access to both databases
    const testDb = mongoose.connection.db.client.db("test");
    const honeyVisionDb = mongoose.connection.db.client.db("honey_vision");

    // Define collections to migrate
    const collectionsToMigrate = ["products", "users", "orders", "contacts"];

    for (const collectionName of collectionsToMigrate) {
      try {
        console.log(`\n📦 Migrating collection: ${collectionName}...`);

        // Get collection from test database
        const sourceCollection = testDb.collection(collectionName);
        const targetCollection = honeyVisionDb.collection(collectionName);

        // Check if collection exists in test database
        const count = await sourceCollection.countDocuments();
        if (count === 0) {
          console.log(`   ⏭️  No documents found in test.${collectionName}, skipping...`);
          continue;
        }

        // Get all documents from test database
        const documents = await sourceCollection.find({}).toArray();
        console.log(`   Found ${documents.length} documents`);

        // Insert into honey_vision database
        const result = await targetCollection.insertMany(documents);
        console.log(`   ✅ Inserted ${result.insertedCount} documents into honey_vision.${collectionName}`);
      } catch (error) {
        if (error.message.includes("ns does not exist")) {
          console.log(`   ⏭️  Collection doesn't exist in test database, skipping...`);
        } else {
          console.error(`   ❌ Error migrating ${collectionName}:`, error.message);
        }
      }
    }

    console.log("\n✅ Migration completed!");
    console.log("📌 Note: You can now update MONGODB_URI to point to honey_vision database");

    await mongoose.disconnect();
  } catch (error) {
    console.error("❌ Migration failed:", error.message);
    process.exit(1);
  }
};

migrateData();
