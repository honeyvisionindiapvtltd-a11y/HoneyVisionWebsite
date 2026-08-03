import Navbar from "../../components/Navbar";
import { Link } from "react-router-dom";
import { getCloudinaryImageUrl } from "../../utils/cloudinary";
const bgImage = "https://res.cloudinary.com/q6iqvtbe/image/upload/v1785692267/bg_z1keoj.png";

const aiSurveillance = getCloudinaryImageUrl("https://res.cloudinary.com/q6iqvtbe/image/upload/v1785388151/AI_Surveillance1_icjvor.jpg");
const aiSurveillance1 = getCloudinaryImageUrl("https://res.cloudinary.com/q6iqvtbe/image/upload/v1785388147/AI_Surveillance_noduax.jpg");
const aiSurveillance2 = getCloudinaryImageUrl("https://res.cloudinary.com/q6iqvtbe/image/upload/v1785388160/AI_Surveillance3_w8l3vc.jpg");
const smartarug = getCloudinaryImageUrl("https://res.cloudinary.com/q6iqvtbe/image/upload/v1785388193/smartarug_ll3ozx.jpg");
const smartarug1 = getCloudinaryImageUrl("https://res.cloudinary.com/q6iqvtbe/image/upload/v1785388201/smartarug1_yq1s1w.jpg");
const smartarug2 = getCloudinaryImageUrl("https://res.cloudinary.com/q6iqvtbe/image/upload/v1785388204/smartarug2_pvvgie.jpg");
const smartcity = getCloudinaryImageUrl("https://res.cloudinary.com/q6iqvtbe/image/upload/v1785388221/smartcity2_ve40fx.jpg");
const computerVision = getCloudinaryImageUrl("https://res.cloudinary.com/q6iqvtbe/image/upload/v1785388184/computervision1_lkhecz.jpg");

import {
  Camera,
  Brain,
  Sprout,
  Building2,
  MonitorSmartphone,
  ShieldCheck,
  Search,
  PenTool,
  Settings,
  Headphones,
} from "lucide-react";

const solutions = [
  {
    icon: <Camera size={45} />,
    title: "AI Smart Surveillance",
    tag: "Security operations",
    description:
      "Protect campuses, factories, and public spaces with facial recognition, ANPR, intrusion alerts, and live video intelligence.",
    image: aiSurveillance1,
    link: "/solutions/ai-surveillance",
  },
  {
    icon: <Brain size={45} />,
    title: "Computer Vision",
    tag: "Automation & inspection",
    description:
      "Turn vision data into business insight with object detection, defect analysis, OCR, and intelligent monitoring systems.",
    image: computerVision,
    link: "/solutions/computervision",
  },
  {
    icon: <Sprout size={45} />,
    title: "Smart Agriculture",
    tag: "Precision farming",
    description:
      "Support farmers with crop health tracking, smart irrigation, weather awareness, and AI-driven field monitoring.",
    image: smartarug,
    link: "/solutions/smartagriculture",
  },
  {
    icon: <Building2 size={45} />,
    title: "Smart City Solutions",
    tag: "Urban innovation",
    description:
      "Improve traffic flow, public safety, parking, and city-wide visibility through connected intelligence systems.",
    image: smartcity,
    link: "/solutions/smartcity",
  },
  {
    icon: <MonitorSmartphone size={45} />,
    title: "Audio Visual Solutions",
    tag: "Communication spaces",
    description:
      "Create modern meeting rooms, classrooms, auditoriums, and public communication spaces with integrated AV technology.",
    image: aiSurveillance2,
    link: "/solutions/audiovisuals",
  },
  {
    icon: <ShieldCheck size={45} />,
    title: "Enterprise Security",
    tag: "Access & control",
    description:
      "Combine biometric access, visitor management, and centralized monitoring to strengthen physical security from one platform.",
    image: aiSurveillance,
    link: "/solutions/enterprise-security",
  },
];

const process = [
  {
    icon: <Search size={35} />,
    title: "Consultation",
    desc: "Understanding your business challenges and security requirements.",
  },
  {
    icon: <PenTool size={35} />,
    title: "Solution Design",
    desc: "Creating customized AI-powered solutions for your organization.",
  },
  {
    icon: <Settings size={35} />,
    title: "Implementation",
    desc: "Professional installation, testing, and deployment of systems.",
  },
  {
    icon: <Headphones size={35} />,
    title: "Support",
    desc: "24×7 maintenance, upgrades, and technical assistance.",
  },
];


const Solutions = () => {
  return (
    <>
      <Navbar />

      <section
        className="relative overflow-hidden text-white pt-32 pb-24"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-black/30" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(36,168,224,0.16),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(241,207,69,0.08),transparent_25%)]" />

        <div className="relative z-10 solutions-page-shell max-w-6xl mx-auto px-6 lg:px-8">

          {/* Hero */}

          <div className="text-center">

            <p className="uppercase tracking-[6px] text-[#24A8E0] font-semibold">
              Intelligent Solutions
            </p>

            <h1 className="text-6xl font-bold mt-5">
              Our <span className="text-[#F1CF45]">Solutions</span>
            </h1>

            <p className="max-w-4xl mx-auto mt-8 text-gray-300 text-lg leading-9">
              Honey Vision combines Artificial Intelligence, Computer Vision,
              Smart Surveillance, Audio Visual Systems, Cloud Technologies,
              and Smart Agriculture to deliver innovative, scalable,
              and Made-in-India technology solutions.
            </p>

          </div>

          <div className="max-w-6xl mx-auto px-6 mt-16">
  <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">

    <div className="overflow-hidden rounded-3xl border border-[#24A8E0]/20 shadow-xl">
      <img
        src={smartarug2}
        alt="Honey Vision solution deployment"
        className="w-full h-[340px] object-cover"
      />
    </div>

    <div className="grid gap-8">
      <div className="overflow-hidden rounded-3xl border border-[#24A8E0]/20 shadow-xl">
        <img
          src={smartarug1}
          alt="AI security and smart technology"
          className="w-full h-[160px] object-cover"
        />
      </div>

      <div className="overflow-hidden rounded-3xl border border-[#24A8E0]/20 shadow-xl">
        <img
          src={aiSurveillance2}
          alt="Intelligent infrastructure and automation"
          className="w-full h-[160px] object-cover"
        />
      </div>
    </div>

  </div>

  {/* Video */}
  <div className="mt-12">
    <div className="max-w-4xl mx-auto rounded-3xl border border-[#24A8E0]/20 bg-[#1D416A]/70 p-5 shadow-xl">
      <div className="overflow-hidden rounded-2xl aspect-video">
        <iframe
          className="w-full h-full"
          src="https://res.cloudinary.com/q6iqvtbe/video/upload/v1785480395/videoplayback_2_nlwrxs.mp4"
          title="Honey Vision solutions overview"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </div>
  </div>
</div>

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl border border-[#24A8E0]/20 bg-[#1D416A]/70 p-6">
              <p className="text-sm uppercase tracking-[3px] text-[#24A8E0]">Live deployment</p>
              <h3 className="mt-3 text-2xl font-semibold">Real-time monitoring across sites</h3>
              <p className="mt-3 text-sm leading-7 text-gray-300">From factories to campuses, our systems gather live video, alerts, and analytics in one connected environment.</p>
            </div>
            <div className="rounded-3xl border border-[#24A8E0]/20 bg-[#1D416A]/70 p-6">
              <p className="text-sm uppercase tracking-[3px] text-[#24A8E0]">Operational context</p>
              <h3 className="mt-3 text-2xl font-semibold">Practical decision support</h3>
              <p className="mt-3 text-sm leading-7 text-gray-300">Solutions are tailored for security teams, operations managers, farm supervisors, and city administrators.</p>
            </div>
            <div className="rounded-3xl border border-[#24A8E0]/20 bg-[#1D416A]/70 p-6">
              <p className="text-sm uppercase tracking-[3px] text-[#24A8E0]">Business impact</p>
              <h3 className="mt-3 text-2xl font-semibold">Faster response and better control</h3>
              <p className="mt-3 text-sm leading-7 text-gray-300">Each deployment improves visibility, reduces manual effort, and helps teams act before issues escalate.</p>
            </div>
          </div>

          {/* Solution Cards */}

          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 mt-20">

            {solutions.map((item, index) => (

              <div
                key={index}
                className="overflow-hidden rounded-3xl border border-[#24A8E0]/20 bg-[#1D416A] hover:border-[#F1CF45] hover:-translate-y-3 transition duration-300"
              >
                <img src={item.image} alt={item.title} className="h-44 w-full object-cover" />
                <div className="p-8">
                  <div className="text-[#24A8E0]">
                    {item.icon}
                  </div>

                  <p className="mt-4 text-xs uppercase tracking-[3px] text-[#F1CF45]">
                    {item.tag}
                  </p>

                  <h3 className="text-2xl font-bold mt-3">
                    {item.title}
                  </h3>

                  <p className="text-gray-300 mt-4 leading-8">
                    {item.description}
                  </p>

                  <Link
                    to={item.link}
                    className="inline-block mt-7 text-[#F1CF45] font-semibold hover:text-[#24A8E0]"
                  >
                    Learn More →
                  </Link>
                </div>
              </div>

            ))}

          </div>

          {/* Our Process */}

          <div className="mt-28">

            <h2 className="text-5xl font-bold text-center">
              Our <span className="text-[#F1CF45]">Process</span>
            </h2>

            <div className="grid md:grid-cols-4 gap-8 mt-16">

              {process.map((step, index) => (

                <div
                  key={index}
                  className="bg-[#1D416A] rounded-2xl p-8 text-center"
                >

                  <div className="flex justify-center text-[#24A8E0]">
                    {step.icon}
                  </div>

                  <h3 className="text-2xl font-bold mt-5">
                    {step.title}
                  </h3>

                  <p className="text-gray-300 mt-4 leading-7">
                    {step.desc}
                  </p>

                </div>

              ))}

            </div>

          </div>


          {/* CTA */}

          <div className="mt-24 bg-[#F1CF45] rounded-3xl p-14 text-center">

            <h2 className="text-5xl font-bold text-[#111015]">
              Ready to Build the Future?
            </h2>

            <p className="max-w-3xl mx-auto mt-6 text-lg text-gray-800 leading-8">

              Whether you're securing a business, modernizing agriculture,
              developing a smart city, or implementing AI-powered automation,
              Honey Vision delivers intelligent solutions designed for tomorrow.

            </p>

            <Link
              to="/contact"
              className="inline-block mt-10 bg-[#111015] text-white px-10 py-4 rounded-full font-semibold hover:bg-[#24A8E0] transition"
            >
              Contact Our Experts
            </Link>

          </div>

        </div>

      </section>
    </>
  );
};

export default Solutions;