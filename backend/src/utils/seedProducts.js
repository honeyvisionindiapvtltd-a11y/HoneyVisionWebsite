import Product from "../models/Product.js";

const allowedSlugs = [
  "ai-cctv-cameras",
  "ip-camera-systems",
  "audiovisual-systems",
  "agricultural-ai-drones",
  "access-control",
];

const productSeed = [
  {
    title: "AI CCTV Cameras",
    slug: "ai-cctv-cameras",
    subtitle: "Advanced camera systems for intelligent video surveillance.",
    description:
      "High-definition AI surveillance cameras with facial recognition, motion detection, vehicle analytics, and intelligent monitoring.",
    price: 14999,
    features: [
      "Facial recognition and people counting",
      "Vehicle analytics and license plate detection",
      "Low-light sensing with high-resolution capture",
      "Edge inferencing for faster threat detection",
    ],
    images: [
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
    ],
    published: true,
  },
  {
    title: "IP Camera Systems",
    slug: "ip-camera-systems",
    subtitle: "Reliable IP camera systems for modern networked surveillance.",
    description:
      "Scalable IP camera solutions with PoE support, remote access, and robust security for distributed monitoring.",
    price: 13999,
    features: [
      "High-resolution network cameras",
      "PoE power and seamless deployment",
      "Remote viewing and management",
      "Secure video transmission",
    ],
    images: [
      "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=1200&q=80",
    ],
    published: true,
  },
  {
    title: "Audiovisual Systems",
    slug: "audiovisual-systems",
    subtitle: "Integrated AV systems for conferencing and display environments.",
    description:
      "Professional audiovisual solutions for meeting rooms, digital signage, and immersive media experiences.",
    price: 12999,
    features: [
      "Conference room audio and video",
      "Digital signage integration",
      "Interactive presentation solutions",
      "High-performance AV control",
    ],
    images: [
      "https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?auto=format&fit=crop&w=1200&q=80",
    ],
    published: true,
  },
  {
    title: "Agricultural AI Drones",
    slug: "agricultural-ai-drones",
    subtitle: "AI drones for precision agriculture and crop monitoring.",
    description:
      "Intelligent drones that gather crop analytics, identify stress zones, and support smarter farm management.",
    price: 15999,
    features: [
      "Crop health monitoring",
      "Automated field mapping",
      "Aerial analytics and reporting",
      "Enhanced farm productivity",
    ],
    images: [
      "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1200&q=80",
    ],
    published: true,
  },
  {
    title: "Access Control",
    slug: "access-control",
    subtitle: "Secure entry systems that protect people and assets.",
    description:
      "Biometric attendance, RFID readers, smart locks, and secure access management for buildings and campuses.",
    price: 13999,
    features: [
      "Biometric and facial recognition entry",
      "RFID and mobile credential support",
      "Visitor management and audit trails",
      "Door controller integration and alarms",
    ],
    images: [
      "https://images.unsplash.com/photo-1510511459019-5dda7724fd87?auto=format&fit=crop&w=1200&q=80",
    ],
    published: true,
  },
];

export const seedInitialProductsIfEmpty = async () => {
  const count = await Product.countDocuments();
  if (count > 0) {
    console.log(`Product seed skipped: ${count} product(s) already exist.`);
    return;
  }

  await Product.create(productSeed);
  console.log(`Seeded ${productSeed.length} initial products.`);
};
