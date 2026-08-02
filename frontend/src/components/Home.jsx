import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import AuthPromptModal from "./AuthPromptModal";
import {
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import { getCloudinaryImageUrl } from "../utils/cloudinary";

// Use a fixed list of hero image public IDs and build Cloudinary URLs directly.
const heroPublicIds = [
  "https://res.cloudinary.com/q6iqvtbe/image/upload/v1785387580/hero_wmffmg.jpg",
  "https://res.cloudinary.com/q6iqvtbe/image/upload/v1785387582/hero1_vukp73.jpg",
  "https://res.cloudinary.com/q6iqvtbe/image/upload/v1785387990/productshero_uqyda7.jpg",
  "https://res.cloudinary.com/q6iqvtbe/image/upload/v1785387587/hero3_r8y9zf.jpg",
  "https://res.cloudinary.com/q6iqvtbe/image/upload/v1785387598/hero8_je30gn.jpg",
  "https://res.cloudinary.com/q6iqvtbe/image/upload/v1785387591/hero5_x0nwop.jpg",
  "https://res.cloudinary.com/q6iqvtbe/image/upload/v1785387589/hero4_mmjsfj.jpg",
  "https://res.cloudinary.com/q6iqvtbe/image/upload/v1785387593/hero6_qcml3r.jpg",
  "https://res.cloudinary.com/q6iqvtbe/image/upload/v1785387595/hero7_xwrxj9.jpg",
  "https://res.cloudinary.com/q6iqvtbe/image/upload/v1785387602/hero10_cpmj82.jpg",
];

const assetImages = heroPublicIds.map((id) => getCloudinaryImageUrl(id));

const slideContent = [
  {
    badge: "AI Surveillance",
    title: "Intelligent Surveillance",
    subtitle: "Protecting Every Corner",
    description:
      "Advanced AI-powered CCTV cameras with facial recognition, ANPR, intrusion detection, and real-time monitoring for homes, industries, enterprises, and smart cities.",
    primary: "Explore Cameras",
    primaryLink: "/product/ai-cctv-cameras",
    secondary: "Book Demo",
    secondaryLink: "/demo",
    position: "left",
  },

  {
    badge: "Security Drones",
    title: "AI Drone Solutions",
    subtitle: "Eyes in the Sky",
    description:
      "Autonomous drones equipped with AI vision, thermal cameras, and live streaming for border security, industrial inspections, disaster response, and surveillance.",
    primary: "Explore Drones",
    primaryLink: "/product/agricultural-ai-drones",
    secondary: "Watch Demo",
    secondaryLink: "/demo",
    position: "right",
  },

  {
    badge: "Computer Vision",
    title: "Computer Vision",
    subtitle: "Turning Images into Intelligence",
    description:
      "Advanced computer vision technology for facial recognition, people counting, PPE detection, license plate recognition, and industrial automation.",
    primary: "Discover AI",
    primaryLink: "/solutions/computervision",
    secondary: "Learn More",
    secondaryLink: "/technology",
    position: "left",
  },

  {
    badge: "Smart Agriculture",
    title: "AI Agriculture",
    subtitle: "Technology for Every Farmer",
    description:
      "Precision farming with intelligent drones, crop health analysis, smart irrigation, disease detection, and AI-powered agricultural monitoring.",
    primary: "Explore Agriculture",
    primaryLink: "/solutions/smartagriculture",
    secondary: "Talk to Expert",
    secondaryLink: "/contact",
    position: "right",
  },

  {
    badge: "Smart City",
    title: "Building Smart Cities",
    subtitle: "Safer. Smarter. Connected.",
    description:
      "Integrated city surveillance, intelligent traffic management, emergency response, public safety monitoring, and smart infrastructure powered by Artificial Intelligence.",
    primary: "View Solutions",
    primaryLink: "/solutions/smartcity",
    secondary: "See Projects",
    secondaryLink: "/service",
    position: "left",
  },

  {
    badge: "Industrial Automation",
    title: "Industry 4.0",
    subtitle: "Smarter Manufacturing",
    description:
      "AI-driven quality inspection, worker safety monitoring, predictive maintenance, and intelligent automation for modern manufacturing industries.",
    primary: "Explore Industry",
    primaryLink: "/industries",
    secondary: "Schedule Visit",
    secondaryLink: "/contact",
    position: "right",
  },

  {
    badge: "Access Control",
    title: "Secure Access",
    subtitle: "Modern Security Starts Here",
    description:
      "Biometric attendance, facial recognition, smart access control systems, visitor management, and centralized monitoring for organizations.",
    primary: "View Products",
    primaryLink: "/product/access-control",
    secondary: "Request Quote",
    secondaryLink: "/contact",
    position: "left",
  },

  {
    badge: "Audio Visual",
    title: "Professional AV Solutions",
    subtitle: "Communication Without Limits",
    description:
      "Interactive displays, digital signage, LED video walls, smart classrooms, conference rooms, and integrated AV solutions for enterprises.",
    primary: "Explore AV",
    primaryLink: "/solutions/audiovisuals",
    secondary: "Contact Team",
    secondaryLink: "/contact",
    position: "right",
  },

  {
    badge: "Retail Analytics",
    title: "Retail Intelligence",
    subtitle: "Know Your Customers Better",
    description:
      "AI-powered customer analytics, queue management, heat mapping, behavior analysis, and business intelligence for retail environments.",
    primary: "See Analytics",
    primaryLink: "/technology",
    secondary: "Book Consultation",
    secondaryLink: "/contact",
    position: "left",
  },

  {
    badge: "Honey Vision",
    title: "Made in India Innovation",
    subtitle: "Building the Future with AI",
    description:
      "Honey Vision develops world-class AI surveillance, smart agriculture, computer vision, industrial automation, and intelligent security solutions proudly made in India.",
    primary: "About Honey Vision",
    primaryLink: "/#about",
    secondary: "Contact Us",
    secondaryLink: "/contact",
    position: "right",
  },
];

const slides = assetImages.map((image, index) => ({
  image,
  ...slideContent[index % slideContent.length],
}));

const Home = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();
  const [current, setCurrent] = useState(0);
  const [showAuthPrompt, setShowAuthPrompt] = useState(false);
  const [pendingPath, setPendingPath] = useState("");

  // Auto Slide
  useEffect(() => {
    if (slides.length < 2) return;

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  // Next Slide
  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  // Previous Slide
  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? slides.length - 1 : prev - 1
    );
  };

  const currentSlide = slides[current];

  const handleProtectedAction = (path) => {
    if (isAuthenticated) {
      navigate(path);
      return;
    }

    setPendingPath(path);
    setShowAuthPrompt(true);
  };

  if (!slides.length) return null;

  return (
  <section className="relative min-h-screen overflow-hidden bg-[#05070b] pt-24 sm:pt-28 lg:pt-32">

    {/* 1. Background Images */}
    {slides.map((slide, index) => (
    <img
  key={index}
  src={slide.image}
  alt={slide.title}
  className={`absolute inset-0 h-full w-full object-cover transition-all duration-1800 ease-in-out ${
    current === index
      ? "scale-105 opacity-100"
      : "scale-110 opacity-0"
  }`}
/>
    ))}

    {/* 2. Dynamic Overlay (ADD HERE) */}
    <div
      className={`absolute inset-0 transition-all duration-700 ${
        currentSlide.position === "left"
          ? "bg-linear-to-r from-black/70 via-black/25 to-transparent"
          : "bg-linear-to-l from-black/70 via-black/25 to-transparent"
      }`}
    />
      {/* Blue Glow */}

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(36,168,224,0.25),transparent_35%)]"></div>

      {/* Navigation Buttons */}

      <button
        onClick={prevSlide}
        className="absolute left-3 top-1/2 z-30 -translate-y-1/2 rounded-full border border-white/20 bg-black/30 p-3 text-white backdrop-blur-md transition-all hover:bg-[#24A8E0] sm:left-6 sm:p-4"
      >
        <ChevronLeft size={24} className="sm:w-8 sm:h-8" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-3 top-1/2 z-30 -translate-y-1/2 rounded-full border border-white/20 bg-black/30 p-3 text-white backdrop-blur-md transition-all hover:bg-[#24A8E0] sm:right-6 sm:p-4"
      >
        <ChevronRight size={24} className="sm:w-8 sm:h-8" />
      </button>

      {/* Hero Content Starts Here */}

      {/* Content */}
      {/* Hero Content */}

{/* Hero Content */}

<div className="relative z-20 flex min-h-screen items-center py-20 sm:py-24 lg:py-0">

  <div
    className={`mx-auto flex w-full max-w-7xl px-4 sm:px-8 lg:px-16 ${
      currentSlide.position === "left"
        ? "justify-start"
        : "justify-end"
    }`}
  >

    <div
      key={current}
      className="w-full max-w-xl animate-fadeUp text-center sm:text-left"
    >

      <span className="inline-block rounded-full border border-[#24A8E0]/40 bg-black/10 px-4 py-2 text-xs uppercase tracking-[4px] text-[#24A8E0] backdrop-blur-sm">

        {currentSlide.badge}

      </span>

      <h1
        className="mt-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white/90"
        style={{
          textShadow: "0 4px 15px rgba(0,0,0,.45)",
        }}
      >
        {currentSlide.title}
      </h1>

      <h2
        className="mt-4 text-xl sm:text-2xl md:text-3xl font-semibold text-[#F1CF45]/90"
        style={{
          textShadow: "0 3px 12px rgba(0,0,0,.45)",
        }}
      >
        {currentSlide.subtitle}
      </h2>

      <p className="mt-6 text-sm sm:text-base md:text-lg leading-7 sm:leading-8 text-white/70">

        {currentSlide.description}

      </p>

      <div className="mt-10 flex flex-wrap justify-center gap-4 sm:justify-start">

        <button
          type="button"
          onClick={() => handleProtectedAction(currentSlide.primaryLink)}
          className="rounded-full bg-[#F1CF45] px-6 py-3 text-sm font-semibold text-black transition duration-300 hover:bg-[#24A8E0] hover:text-white"
        >
          {currentSlide.primary}
        </button>

        <button
          type="button"
          onClick={() => handleProtectedAction(currentSlide.secondaryLink)}
          className="rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white/90 transition duration-300 hover:bg-white hover:text-black"
        >
          {currentSlide.secondary}
        </button>

      </div>

    </div>

  </div>

</div>
            {/* Slider Dots */}

      <div className="absolute bottom-6 left-1/2 z-30 flex -translate-x-1/2 gap-4 sm:bottom-8">

        {slides.map((_, index) => (

          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`transition-all duration-300 ${
              current === index
                ? "w-12 h-3 rounded-full bg-[#F1CF45]"
                : "w-3 h-3 rounded-full bg-white/50 hover:bg-white"
            }`}
          />

        ))}

      </div>

      {/* Scroll Indicator */}

      <div className="absolute bottom-10 right-10 hidden lg:flex flex-col items-center text-white z-30">

        <span className="rotate-90 tracking-[4px] text-xs uppercase mb-10 text-gray-300">
          Scroll
        </span>

        <div className="w-0.5 h-24 bg-white/20 relative overflow-hidden rounded-full">

          <div className="absolute top-0 left-0 w-full h-8 bg-[#24A8E0] animate-bounce rounded-full"></div>

        </div>

      </div>

      <AuthPromptModal
        isOpen={showAuthPrompt}
        title="Please sign in to continue"
        description="This feature requires an account. Would you like to sign in or register now?"
        primaryText="Login"
        secondaryText="Register"
        onPrimary={() => {
          setShowAuthPrompt(false);
          navigate("/login", { state: { from: pendingPath } });
        }}
        onSecondary={() => {
          setShowAuthPrompt(false);
          navigate("/register");
        }}
        onClose={() => setShowAuthPrompt(false)}
      />

    </section>
  );
};

export default Home;