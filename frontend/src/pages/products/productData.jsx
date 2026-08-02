import {
  Camera,
  HardDrive,
  Monitor,
  ShieldCheck,
  Speaker,
  Cpu,
  Wifi,
  Server,
} from "lucide-react";
export const allowedProductSlugs = [
  "ai-cctv-cameras",
  "ip-camera-systems",
  "audiovisual-systems",
  "agricultural-ai-drones",
  "access-control",
];

export const productDetails = {
  "ai-cctv-cameras": {
    title: "AI CCTV Cameras",
    subtitle: "Advanced camera systems for intelligent video surveillance.",
    overview:
      "Our AI CCTV cameras combine edge-based analytics, object detection, and smart alerts to help you monitor people, vehicles, and assets in real time.",
    features: [
      "Facial recognition and people counting",
      "Vehicle analytics and license plate detection",
      "Low-light sensing with high-resolution capture",
      "Edge inferencing for faster threat detection",
    ],
  },
  "ip-camera-systems": {
    title: "IP Camera Systems",
    subtitle: "Reliable IP camera systems for modern networked surveillance.",
    overview:
      "Scalable IP camera solutions with PoE support, remote access, and secure video distribution.",
    features: [
      "High-resolution network cameras",
      "PoE power and seamless deployment",
      "Remote viewing and management",
      "Secure video transmission",
    ],
  },
  "audiovisual-systems": {
    title: "Audiovisual Systems",
    subtitle: "Integrated AV systems for conferencing and display environments.",
    overview:
      "Professional audiovisual solutions for meeting rooms, digital signage, and immersive media experiences.",
    features: [
      "Conference room audio and video",
      "Digital signage integration",
      "Interactive presentation solutions",
      "High-performance AV control",
    ],
  },
  "agricultural-ai-drones": {
    title: "Agricultural AI Drones",
    subtitle: "AI drones for precision agriculture and crop monitoring.",
    overview:
      "Intelligent drones that gather crop analytics, identify stress zones, and support smarter farm management.",
    features: [
      "Crop health monitoring",
      "Automated field mapping",
      "Aerial analytics and reporting",
      "Improved farm productivity",
    ],
  },
  "access-control": {
    title: "Access Control",
    subtitle: "Secure entry systems that protect people and assets.",
    overview:
      "Intelligent access control uses biometrics, RFID, and smart credentials to safeguard buildings, campuses, and high-security zones.",
    features: [
      "Biometric and facial recognition entry",
      "RFID and mobile credential support",
      "Visitor management and audit trails",
      "Door controller integration and alarms",
    ],
  },
};
