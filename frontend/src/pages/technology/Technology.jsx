import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";
import { getCloudinaryImageUrl } from "../../utils/cloudinary";
import bgImage from "../../assets/bg.jpg";

const hero1 = getCloudinaryImageUrl("https://res.cloudinary.com/q6iqvtbe/image/upload/v1785388281/Cloud_Platform_t3xtgb.jpg");
const hero2 = getCloudinaryImageUrl("https://res.cloudinary.com/q6iqvtbe/image/upload/v1785388226/Agricultural_AI1_tr3wzu.jpg");
const hero3 = getCloudinaryImageUrl("https://res.cloudinary.com/q6iqvtbe/image/upload/v1785388260/AI_Computer_Vision1_aykp9x.jpg");

import {
  Cpu,
  Eye,
  Radar,
  Cloud,
  Database,
  MonitorSpeaker,
  ArrowRight,
  Camera,
  ShieldCheck,
} from "lucide-react";

const technologies = [
  {
    icon: <Eye size={45} />,
    title: "AI Vision Systems",
    description:
      "High-accuracy computer vision for detection, tracking, recognition, and operational monitoring in real time.",
    image: hero1,
    route: "/technology/ai-vision-systems",
  },
  {
    icon: <Radar size={45} />,
    title: "Radar Technology",
    description:
      "Advanced sensing for perimeter protection, motion detection, and reliable situational awareness in complex environments.",
    image: hero2,
    route: "/technology/radar-technology",
  },
  {
    icon: <Database size={45} />,
    title: "Storage & Bandwidth Optimization",
    description:
      "Efficient data handling and smart network design that keep video streams, analytics, and alerts dependable.",
    image: hero3,
    route: "/technology/storage-bandwidth",
  },
  {
    icon: <Cpu size={45} />,
    title: "Smart Edge Computing",
    description:
      "Local processing power that reduces latency and enables rapid decision-making closer to the source.",
    image: hero1,
    route: "/technology/smart-edge-computing",
  },
  {
    icon: <MonitorSpeaker size={45} />,
    title: "Audio & Video Integration",
    description:
      "Seamless AV systems for collaboration rooms, public communication spaces, and modern command centers.",
    image: hero2,
    route: "/technology/audio-video-integration",
  },
  {
    icon: <Cloud size={45} />,
    title: "Cloud Connectivity",
    description:
      "Secure remote access, centralized control, and scalable monitoring through modern cloud infrastructure.",
    image: hero3,
    route: "/technology/cloud-connectivity",
  },
];

const Technology = () => {
  return (
<>
  <Navbar />

  <section
    className="relative overflow-hidden text-white pt-32"
    style={{
      backgroundImage: `url(${bgImage})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    }}
  >
    <div className="absolute inset-0 bg-black/10" />
    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(36,168,224,0.08),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(241,207,69,0.04),transparent_25%)]" />

    {/* Hero Banner */}

    <div className="relative mx-4 sm:mx-8 lg:mx-10 min-h-[700px] overflow-hidden rounded-[32px] border border-[#24A8E0]/20">

      <img
        src={hero1}
        alt="Technology"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/30"></div>

      <div className="relative z-10 max-w-7xl mx-auto h-full flex items-center px-6 lg:px-10">

        <div className="max-w-3xl">

          <p className="uppercase tracking-[7px] text-[#24A8E0] font-semibold">

            HONEY VISION TECHNOLOGY

          </p>

          <h1 className="text-6xl lg:text-7xl font-bold mt-6 leading-tight">

            Intelligent Technology
            <br />

            <span className="text-[#F1CF45]">

              Built for Tomorrow

            </span>

          </h1>

          <p className="mt-8 text-xl text-gray-300 leading-9">

            Honey Vision develops Artificial Intelligence,
            Computer Vision, Cloud Computing, Radar Systems
            and Smart Automation to create intelligent,
            secure and connected environments.

          </p>

          <Link
            to="/technology/ai-vision-systems"
            className="mt-12 inline-flex w-fit items-center rounded-full bg-[#F1CF45] px-10 py-4 font-semibold text-black transition hover:bg-[#24A8E0] hover:text-white"
          >
            Explore Technology
          </Link>

        </div>

      </div>

    </div>

    {/* Technology Navigation */}

    <div className="border-y border-white/10 bg-transparent">

      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <div className="flex flex-wrap justify-center gap-10 py-8">

          {[
            { label: "AI Vision", route: "/technology/ai-vision-systems" },
            { label: "Computer Vision", route: "/solutions/computervision" },
            { label: "Radar", route: "/technology/radar-technology" },
            { label: "Cloud", route: "/technology/cloud-connectivity" },
            { label: "Storage", route: "/technology/storage-bandwidth" },
            { label: "Audio Visual", route: "/technology/audio-video-integration" },
          ].map((item) => (

            <Link
              key={item.label}
              to={item.route}
              className="text-white transition font-medium tracking-wide hover:text-[#F1CF45]"
            >

              {item.label}

            </Link>

          ))}

        </div>

      </div>

    </div>

    {/* Introduction */}

    <div className="max-w-6xl mx-auto py-28 px-6 lg:px-10 text-center">

      <p className="uppercase tracking-[5px] text-[#24A8E0]">

        TECHNOLOGY PLATFORM

      </p>

      <h2 className="text-5xl font-bold mt-5">

        Innovation That Powers Every Solution

      </h2>

      <p className="mt-8 text-gray-300 leading-9 text-lg max-w-4xl mx-auto">

        Every Honey Vision solution is powered by intelligent
        technologies designed to improve security,
        automate operations and provide actionable insights.
        Our ecosystem combines AI, Computer Vision,
        Cloud Computing and Smart Analytics into one
        powerful platform.

      </p>

    </div>

    {/* ================= TECHNOLOGY SHOWCASE ================= */}

<div className="max-w-7xl mx-auto px-6 lg:px-10 mt-24">

  <div className="grid lg:grid-cols-2 gap-12 items-center">

    {/* Left Images */}

    <div className="relative">

      <div className="rounded-3xl overflow-hidden shadow-2xl border border-[#24A8E0]/20">
        <img
          src={hero1}
          alt="AI Technology"
          className="w-full h-[450px] object-cover"
        />
      </div>

      <div className="absolute -bottom-8 -right-8 w-64 rounded-2xl overflow-hidden border border-[#24A8E0]/20 shadow-xl">
        <img
          src={hero2}
          alt="Cloud Technology"
          className="h-44 w-full object-cover"
        />
      </div>

    </div>

    {/* Right Content */}

    <div>

      <p className="uppercase tracking-[5px] text-[#24A8E0] font-semibold">
        Future Ready Technology
      </p>

      <h2 className="text-5xl font-bold mt-4 leading-tight">
        Built with
        <span className="text-[#F1CF45]"> Artificial Intelligence</span>
      </h2>

      <p className="mt-8 text-gray-300 leading-8 text-lg">
        Honey Vision combines AI, Computer Vision, Radar Technology,
        Cloud Computing, and Smart Analytics to create intelligent
        surveillance and automation systems that work in real time.
      </p>

      <div className="grid sm:grid-cols-2 gap-5 mt-10">

        <div className="bg-[#1D416A] rounded-2xl p-6 border border-[#24A8E0]/20">
          <h3 className="text-[#F1CF45] text-3xl font-bold">
            AI
          </h3>

          <p className="text-gray-300 mt-2">
            Deep Learning Analytics
          </p>
        </div>

        <div className="bg-[#1D416A] rounded-2xl p-6 border border-[#24A8E0]/20">
          <h3 className="text-[#24A8E0] text-3xl font-bold">
            Cloud
          </h3>

          <p className="text-gray-300 mt-2">
            Remote Monitoring
          </p>
        </div>

        <div className="bg-[#1D416A] rounded-2xl p-6 border border-[#24A8E0]/20">
          <h3 className="text-[#F1CF45] text-3xl font-bold">
            24×7
          </h3>

          <p className="text-gray-300 mt-2">
            Live Surveillance
          </p>
        </div>

        <div className="bg-[#1D416A] rounded-2xl p-6 border border-[#24A8E0]/20">
          <h3 className="text-[#24A8E0] text-3xl font-bold">
            Edge
          </h3>

          <p className="text-gray-300 mt-2">
            Faster Processing
          </p>
        </div>

      </div>

    </div>

  </div>

</div>


{/* ================= VIDEO SECTION ================= */}

<div className="max-w-6xl mx-auto px-6 lg:px-10 mt-28">

  <div className="rounded-3xl overflow-hidden border border-[#24A8E0]/20 shadow-2xl">

    <iframe
      className="w-full aspect-video"
      src="https://res.cloudinary.com/q6iqvtbe/video/upload/v1785480395/videoplayback_2_nlwrxs.mp4"
      title="Honey Vision Technology"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />

  </div>

</div>

{/* ================= CORE TECHNOLOGIES ================= */}

<div className="max-w-7xl mx-auto px-6 lg:px-10 mt-32">

  <div className="text-center mb-16">

    <p className="uppercase tracking-[5px] text-[#24A8E0] font-semibold">
      Core Technologies
    </p>

    <h2 className="text-5xl font-bold mt-4">
      Technologies That Power
      <span className="text-[#F1CF45]"> Honey Vision</span>
    </h2>

    <p className="max-w-3xl mx-auto mt-6 text-lg text-gray-300 leading-8">
      Every Honey Vision solution is built on intelligent technologies that
      deliver faster decisions, higher accuracy, and reliable security for
      businesses, industries, and smart cities.
    </p>

  </div>

  <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">

    {technologies.map((tech, index) => (

      <Link
        key={index}
        to={tech.route}
        className="group block bg-[#1A1D28] rounded-3xl overflow-hidden border border-white/10 hover:border-[#24A8E0] transition duration-500 hover:-translate-y-3"
      >

        {/* Image */}

        <div className="overflow-hidden">

          <img
            src={tech.image}
            alt={tech.title}
            className="w-full h-56 object-cover group-hover:scale-110 transition duration-700"
          />

        </div>

        {/* Content */}

        <div className="p-8">

          <div className="w-16 h-16 rounded-2xl bg-[#24A8E0]/15 flex items-center justify-center text-[#24A8E0] mb-6">

            {tech.icon}

          </div>

          <h3 className="text-2xl font-bold">

            {tech.title}

          </h3>

          <p className="text-gray-300 mt-5 leading-8">

            {tech.description}

          </p>

          <span className="mt-8 flex items-center gap-2 text-[#F1CF45] font-semibold group-hover:gap-4 transition-all">

            Explore

            <ArrowRight size={18} />

          </span>

        </div>

      </Link>

    ))}

  </div>

</div>

{/* ================= TECHNOLOGY WORKFLOW ================= */}

<div className="max-w-7xl mx-auto px-6 lg:px-10 mt-32">

  <div className="text-center">

    <p className="uppercase tracking-[5px] text-[#24A8E0] font-semibold">
      Technology Workflow
    </p>

    <h2 className="text-5xl font-bold mt-4">
      How Our
      <span className="text-[#F1CF45]"> AI Platform Works</span>
    </h2>

    <p className="max-w-3xl mx-auto mt-6 text-lg text-gray-300 leading-8">
      Honey Vision transforms raw video into intelligent decisions through a
      powerful AI pipeline designed for speed, precision, and real-time
      monitoring.
    </p>

  </div>

  <div className="grid lg:grid-cols-5 md:grid-cols-2 gap-8 mt-20">

    {/* Step 1 */}

    <div className="relative group">

      <div className="bg-[#1A1D28] rounded-3xl p-8 border border-[#24A8E0]/20 hover:border-[#F1CF45] transition duration-500 hover:-translate-y-3 text-center">

        <div className="w-20 h-20 rounded-full bg-[#24A8E0]/20 flex items-center justify-center mx-auto">

          <Camera size={40} className="text-[#24A8E0]" />

        </div>

        <h3 className="mt-6 text-2xl font-bold">
          Capture
        </h3>

        <p className="mt-4 text-gray-300 leading-7">
          High-resolution cameras continuously capture every movement with
          exceptional clarity.
        </p>

      </div>

    </div>

    {/* Step 2 */}

    <div className="relative group">

      <div className="bg-[#1A1D28] rounded-3xl p-8 border border-[#24A8E0]/20 hover:border-[#F1CF45] transition duration-500 hover:-translate-y-3 text-center">

        <div className="w-20 h-20 rounded-full bg-[#24A8E0]/20 flex items-center justify-center mx-auto">

          <Eye size={40} className="text-[#24A8E0]" />

        </div>

        <h3 className="mt-6 text-2xl font-bold">
          Detect
        </h3>

        <p className="mt-4 text-gray-300 leading-7">
          AI instantly identifies people, vehicles, faces, objects, and
          abnormal activities.
        </p>

      </div>

    </div>

    {/* Step 3 */}

    <div className="relative group">

      <div className="bg-[#1A1D28] rounded-3xl p-8 border border-[#24A8E0]/20 hover:border-[#F1CF45] transition duration-500 hover:-translate-y-3 text-center">

        <div className="w-20 h-20 rounded-full bg-[#24A8E0]/20 flex items-center justify-center mx-auto">

          <Cpu size={40} className="text-[#24A8E0]" />

        </div>

        <h3 className="mt-6 text-2xl font-bold">
          Analyze
        </h3>

        <p className="mt-4 text-gray-300 leading-7">
          Deep-learning algorithms process millions of visual data points
          within seconds.
        </p>

      </div>

    </div>

    {/* Step 4 */}

    <div className="relative group">

      <div className="bg-[#1A1D28] rounded-3xl p-8 border border-[#24A8E0]/20 hover:border-[#F1CF45] transition duration-500 hover:-translate-y-3 text-center">

        <div className="w-20 h-20 rounded-full bg-[#24A8E0]/20 flex items-center justify-center mx-auto">

          <Cloud size={40} className="text-[#24A8E0]" />

        </div>

        <h3 className="mt-6 text-2xl font-bold">
          Connect
        </h3>

        <p className="mt-4 text-gray-300 leading-7">
          Secure cloud infrastructure enables remote monitoring and centralized
          management.
        </p>

      </div>

    </div>

    {/* Step 5 */}

    <div className="relative group">

      <div className="bg-[#1A1D28] rounded-3xl p-8 border border-[#24A8E0]/20 hover:border-[#F1CF45] transition duration-500 hover:-translate-y-3 text-center">

        <div className="w-20 h-20 rounded-full bg-[#24A8E0]/20 flex items-center justify-center mx-auto">

          <ShieldCheck size={40} className="text-[#24A8E0]" />

        </div>

        <h3 className="mt-6 text-2xl font-bold">
          Protect
        </h3>

        <p className="mt-4 text-gray-300 leading-7">
          Intelligent alerts and automated responses ensure maximum safety and
          operational efficiency.
        </p>

      </div>

    </div>

  </div>

</div>

{/* ================= TECHNOLOGY IMPACT ================= */}

<div className="max-w-7xl mx-auto px-6 lg:px-10 mt-32">

  <div className="rounded-[35px] overflow-hidden bg-gradient-to-r from-[#15273C] via-[#1D416A] to-[#111015] border border-[#24A8E0]/20">

    <div className="grid lg:grid-cols-2 items-center">

      {/* Left */}

      <div className="p-12 lg:p-16">

        <p className="uppercase tracking-[5px] text-[#24A8E0] font-semibold">
          Trusted Technology
        </p>

        <h2 className="text-5xl font-bold mt-5 leading-tight">
          Engineering
          <span className="text-[#F1CF45]"> Intelligent Security</span>
        </h2>

        <p className="mt-8 text-lg text-gray-300 leading-8">
          Honey Vision combines Artificial Intelligence, Computer Vision,
          Cloud Computing, and Smart Automation to deliver scalable
          surveillance and security solutions for enterprises,
          industries, agriculture, and smart cities.
        </p>

        <Link
          to="/solutions"
          className="mt-10 inline-flex w-fit items-center gap-3 rounded-full bg-[#F1CF45] px-8 py-4 font-semibold text-black transition hover:bg-white"
        >
          Explore Our Solutions
          <ArrowRight size={20} />
        </Link>

      </div>

      {/* Right */}

      <div className="grid grid-cols-2 gap-6 p-10">

        <div className="bg-white/5 backdrop-blur-md rounded-3xl p-8 text-center border border-white/10">

          <h3 className="text-5xl font-bold text-[#24A8E0]">
            99%
          </h3>

          <p className="mt-3 text-gray-300">
            Detection Accuracy
          </p>

        </div>

        <div className="bg-white/5 backdrop-blur-md rounded-3xl p-8 text-center border border-white/10">

          <h3 className="text-5xl font-bold text-[#F1CF45]">
            24×7
          </h3>

          <p className="mt-3 text-gray-300">
            Live Monitoring
          </p>

        </div>

        <div className="bg-white/5 backdrop-blur-md rounded-3xl p-8 text-center border border-white/10">

          <h3 className="text-5xl font-bold text-[#24A8E0]">
            AI
          </h3>

          <p className="mt-3 text-gray-300">
            Smart Analytics
          </p>

        </div>

        <div className="bg-white/5 backdrop-blur-md rounded-3xl p-8 text-center border border-white/10">

          <h3 className="text-5xl font-bold text-[#F1CF45]">
            Cloud
          </h3>

          <p className="mt-3 text-gray-300">
            Remote Access
          </p>

        </div>

      </div>

    </div>

  </div>

</div>


{/* ================= FINAL CTA ================= */}

<div className="max-w-7xl mx-auto px-6 lg:px-10 py-28">

  <div className="rounded-[35px] bg-[#F1CF45] text-center px-10 py-20 shadow-2xl">

    <h2 className="text-5xl font-bold text-[#111015]">
      Ready to Transform Your Business?
    </h2>

    <p className="max-w-3xl mx-auto mt-8 text-lg text-gray-800 leading-8">
      Discover how Honey Vision's intelligent technologies can improve
      security, automate operations, and build smarter environments with
      AI-powered innovation.
    </p>

    <div className="flex flex-wrap justify-center gap-5 mt-12">

      <Link
        to="/contact"
        className="inline-flex items-center justify-center rounded-full bg-[#111015] px-10 py-4 font-semibold text-white transition hover:bg-[#24A8E0]"
      >
        Contact Us
      </Link>

      <Link
        to="/solutions"
        className="inline-flex items-center justify-center rounded-full border-2 border-[#111015] px-10 py-4 font-semibold text-[#111015] transition hover:bg-[#111015] hover:text-white"
      >
        View Solutions
      </Link>

    </div>

  </div>

</div>

{/* ================= REAL WORLD APPLICATIONS ================= */}

<div className="max-w-7xl mx-auto px-6 lg:px-10 mt-32">

  <div className="text-center mb-16">

    <p className="uppercase tracking-[5px] text-[#24A8E0] font-semibold">
      Real World Applications
    </p>

    <h2 className="text-5xl font-bold mt-4">
      Technology in
      <span className="text-[#F1CF45]"> Action</span>
    </h2>

    <p className="max-w-3xl mx-auto mt-6 text-lg text-gray-300 leading-8">
      Honey Vision technologies are designed for diverse industries,
      delivering intelligent automation, surveillance, and analytics
      wherever security and efficiency matter most.
    </p>

  </div>

  <div className="grid lg:grid-cols-3 gap-8">

    {/* Card 1 */}

    <div className="group relative overflow-hidden rounded-3xl h-[420px]">

      <img
        src={hero1}
        alt="Smart City"
        className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

      <div className="absolute bottom-8 left-8 right-8">

        <p className="text-[#24A8E0] uppercase tracking-[3px] text-sm">
          Smart Cities
        </p>

        <h3 className="text-3xl font-bold mt-2">
          Intelligent Urban Monitoring
        </h3>

        <p className="text-gray-300 mt-4 leading-7">
          AI surveillance, traffic monitoring, facial recognition,
          and public safety solutions for modern cities.
        </p>

      </div>

    </div>

    {/* Card 2 */}

    <div className="group relative overflow-hidden rounded-3xl h-[420px]">

      <img
        src={hero2}
        alt="Industrial Security"
        className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

      <div className="absolute bottom-8 left-8 right-8">

        <p className="text-[#24A8E0] uppercase tracking-[3px] text-sm">
          Industries
        </p>

        <h3 className="text-3xl font-bold mt-2">
          Smart Manufacturing
        </h3>

        <p className="text-gray-300 mt-4 leading-7">
          AI inspection, production monitoring, safety compliance,
          and intelligent automation for factories.
        </p>

      </div>

    </div>

    {/* Card 3 */}

    <div className="group relative overflow-hidden rounded-3xl h-[420px]">

      <img
        src={hero3}
        alt="Enterprise Security"
        className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

      <div className="absolute bottom-8 left-8 right-8">

        <p className="text-[#24A8E0] uppercase tracking-[3px] text-sm">
          Enterprise
        </p>

        <h3 className="text-3xl font-bold mt-2">
          Intelligent Business Protection
        </h3>

        <p className="text-gray-300 mt-4 leading-7">
          Secure offices, campuses, data centers, and commercial
          buildings with AI-powered monitoring.
        </p>

      </div>

    </div>

  </div>

</div>

{/* ================= INNOVATION ROADMAP ================= */}

<div className="max-w-7xl mx-auto px-6 lg:px-10 py-32">

  <div className="text-center mb-20">

    <p className="uppercase tracking-[5px] text-[#24A8E0] font-semibold">
      Innovation Journey
    </p>

    <h2 className="text-5xl font-bold mt-4">
      From Vision to
      <span className="text-[#F1CF45]"> Intelligent Action</span>
    </h2>

    <p className="max-w-3xl mx-auto mt-6 text-lg text-gray-300 leading-8">
      Every Honey Vision solution follows a proven innovation cycle,
      transforming raw data into meaningful intelligence that improves
      safety, productivity, and decision-making.
    </p>

  </div>

  <div className="relative">

    {/* Center Line */}

    <div className="hidden lg:block absolute left-1/2 top-0 h-full w-1 bg-[#24A8E0]/20 -translate-x-1/2"></div>

    <div className="space-y-16">

      {/* Step 1 */}

      <div className="grid lg:grid-cols-2 gap-12 items-center">

        <div className="text-right">

          <span className="text-[#24A8E0] font-bold text-xl">
            STEP 01
          </span>

          <h3 className="text-3xl font-bold mt-3">
            Data Collection
          </h3>

          <p className="text-gray-300 mt-4 leading-8">
            Cameras, radar systems, IoT devices, and sensors continuously
            capture real-time environmental information.
          </p>

        </div>

        <div className="bg-[#1A1D28] rounded-3xl p-8 border border-[#24A8E0]/20">

          <h4 className="text-[#F1CF45] text-xl font-semibold">
            Inputs
          </h4>

          <p className="mt-3 text-gray-300">
            CCTV • Radar • IoT • Edge Devices • Environmental Sensors
          </p>

        </div>

      </div>

      {/* Step 2 */}

      <div className="grid lg:grid-cols-2 gap-12 items-center">

        <div className="order-2 lg:order-1 bg-[#1A1D28] rounded-3xl p-8 border border-[#24A8E0]/20">

          <h4 className="text-[#F1CF45] text-xl font-semibold">
            AI Engine
          </h4>

          <p className="mt-3 text-gray-300">
            Deep Learning • Computer Vision • Pattern Recognition • Analytics
          </p>

        </div>

        <div className="order-1 lg:order-2">

          <span className="text-[#24A8E0] font-bold text-xl">
            STEP 02
          </span>

          <h3 className="text-3xl font-bold mt-3">
            AI Processing
          </h3>

          <p className="text-gray-300 mt-4 leading-8">
            Artificial Intelligence analyzes video streams, detects
            anomalies, identifies objects, and generates actionable insights.
          </p>

        </div>

      </div>

      {/* Step 3 */}

      <div className="grid lg:grid-cols-2 gap-12 items-center">

        <div className="text-right">

          <span className="text-[#24A8E0] font-bold text-xl">
            STEP 03
          </span>

          <h3 className="text-3xl font-bold mt-3">
            Smart Decisions
          </h3>

          <p className="text-gray-300 mt-4 leading-8">
            Intelligent alerts, cloud dashboards, and automated workflows
            help organizations respond faster and operate more efficiently.
          </p>

        </div>

        <div className="bg-[#1A1D28] rounded-3xl p-8 border border-[#24A8E0]/20">

          <h4 className="text-[#F1CF45] text-xl font-semibold">
            Results
          </h4>

          <p className="mt-3 text-gray-300">
            Live Alerts • Reports • Automation • Cloud Monitoring • Business Intelligence
          </p>

        </div>

      </div>

    </div>

  </div>

</div>

      </section>
    </>
  );
};

export default Technology;