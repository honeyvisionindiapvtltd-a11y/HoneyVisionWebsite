import "dotenv/config";
import connectDB from "../src/config/db.js";
import Product from "../src/models/Product.js";

const productSeed = [
  {
    title: "AI CCTV Cameras",
    slug: "ai-cctv-cameras",
    description:
      "High-definition AI surveillance cameras with facial recognition, motion detection, vehicle analytics, and intelligent monitoring.",
    price: 14999,
    images: [
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
    ],
    published: true,
  },
  {
    title: "IP Camera Systems",
    slug: "ip-camera-systems",
    description:
      "Scalable IP camera systems with PoE support, remote access, and secure network surveillance.",
    price: 13999,
    images: [
      "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=1200&q=80",
    ],
    published: true,
  },
  {
    title: "Audiovisual Systems",
    slug: "audiovisual-systems",
    description:
      "Professional audiovisual systems for conferencing, signage, and seamless integrated media experiences.",
    price: 12999,
    images: [
      "https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?auto=format&fit=crop&w=1200&q=80",
    ],
    published: true,
  },
  {
    title: "Agricultural AI Drones",
    slug: "agricultural-ai-drones",
    description:
      "AI-enabled drones for precision farming, crop health monitoring, field analytics, and automated aerial inspections.",
    price: 15999,
    images: [
      "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1200&q=80",
    ],
    published: true,
  },
  {
    title: "Access Control",
    slug: "access-control",
    description:
      "Biometric attendance, RFID readers, smart locks, and secure access management for buildings and campuses.",
    price: 13999,
    images: [
      "https://images.unsplash.com/photo-1510511459019-5dda7724fd87?auto=format&fit=crop&w=1200&q=80",
    ],
    published: true,
  },
];

const seedProducts = async () => {
  await connectDB();

  const existingCount = await Product.countDocuments();
  if (existingCount > 0) {
    console.log(`Skipping product seed because ${existingCount} products already exist.`);
    process.exit(0);
  }

  await Product.create(productSeed);
  console.log(`Seeded ${productSeed.length} products.`);
  process.exit(0);
};

seedProducts().catch((error) => {
  console.error("Failed to seed products:", error);
  process.exit(1);
});
