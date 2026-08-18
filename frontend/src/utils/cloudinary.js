const CLOUDINARY_CLOUD_NAME = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME || "q6iqvtbe";

// Reserved for future JSON mapping; currently using directImageMap
// eslint-disable-next-line no-unused-vars
let cloudinaryMap = {};
try {
  // eslint-disable-next-line import/no-unresolved
  cloudinaryMap = (await import("./cloudinary_map.json")).default || {};
} catch {
  // mapping file may not exist yet
  cloudinaryMap = {};
}

const directImageMap = {
  "honeyvision/logo.png": "https://res.cloudinary.com/q6iqvtbe/image/upload/v1785387580/hero_wmffmg.jpg",
  "honeyvision/hero.jpg": "https://res.cloudinary.com/q6iqvtbe/image/upload/v1785387580/hero_wmffmg.jpg",
  "honeyvision/hero1.jpg": "https://res.cloudinary.com/q6iqvtbe/image/upload/v1785387580/hero_wmffmg.jpg",
  "honeyvision/hero2.jpg": "https://res.cloudinary.com/q6iqvtbe/image/upload/v1785387580/hero_wmffmg.jpg",
  "honeyvision/hero3.jpg": "https://res.cloudinary.com/q6iqvtbe/image/upload/v1785387580/hero_wmffmg.jpg",
  "honeyvision/hero4.jpg": "https://res.cloudinary.com/q6iqvtbe/image/upload/v1785387580/hero_wmffmg.jpg",
  "honeyvision/hero5.jpg": "https://res.cloudinary.com/q6iqvtbe/image/upload/v1785387580/hero_wmffmg.jpg",
  "honeyvision/hero6.jpg": "https://res.cloudinary.com/q6iqvtbe/image/upload/v1785387593/hero6_qcml3r.jpg",
  "honeyvision/hero7.jpg": "https://res.cloudinary.com/q6iqvtbe/image/upload/v1785387580/hero_wmffmg.jpg",
  "honeyvision/hero8.jpg": "https://res.cloudinary.com/q6iqvtbe/image/upload/v1785387580/hero_wmffmg.jpg",
  "honeyvision/hero9.jpg": "https://res.cloudinary.com/q6iqvtbe/image/upload/v1785387580/hero_wmffmg.jpg",
  "honeyvision/hero10.jpg": "https://res.cloudinary.com/q6iqvtbe/image/upload/v1785387580/hero_wmffmg.jpg",
  "honeyvision/hero11.jpg": "https://res.cloudinary.com/q6iqvtbe/image/upload/v1785387580/hero_wmffmg.jpg",
  "honeyvision/solutions/AI Surveillance.jpg": "https://res.cloudinary.com/q6iqvtbe/image/upload/v1785387580/hero_wmffmg.jpg",
  "honeyvision/solutions/AI Surveillance2.jpg": "https://res.cloudinary.com/q6iqvtbe/image/upload/v1785387593/hero6_qcml3r.jpg",
};
const mergedMap = { ...directImageMap, ...cloudinaryMap };

export const getCloudinaryImageUrl = (publicId, options = {}) => {
  if (!publicId) return "";

  if (typeof publicId === "string" && /^https?:\/\//.test(publicId)) {
    return publicId;
  }

  if (mergedMap[publicId]) {
    return mergedMap[publicId];
  }

  const encodedPublicId = encodeURIComponent(publicId).replace(/%2F/g, "/");
  const transformations = options.transformations || "f_auto,q_auto";

  return `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/${transformations}/${encodedPublicId}`;
};
