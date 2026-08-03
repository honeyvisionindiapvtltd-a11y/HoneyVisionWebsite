import Navbar from "../../components/Navbar";
import { getCloudinaryImageUrl } from "../../utils/cloudinary";

const aiMain = getCloudinaryImageUrl("https://res.cloudinary.com/q6iqvtbe/image/upload/v1785388155/AI_Surveillance2_bajvyl.jpg");
const ai2 = getCloudinaryImageUrl("https://res.cloudinary.com/q6iqvtbe/image/upload/v1785388147/AI_Surveillance_noduax.jpg");
const ai3 = getCloudinaryImageUrl("https://res.cloudinary.com/q6iqvtbe/image/upload/v1785388160/AI_Surveillance3_w8l3vc.jpg");
import {
  Camera,
  ScanFace,
  Bell,
  ShieldCheck,
  Car,
  Users,
  BrainCircuit,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";

const features = [
  {
    icon: <ScanFace size={40} />,
    title: "Face Recognition",
    desc: "Identify authorized and unauthorized individuals instantly using AI-powered facial recognition.",
    image: aiMain,
  },
  {
    icon: <Bell size={40} />,
    title: "Intrusion Detection",
    desc: "Receive instant alerts whenever suspicious movement or unauthorized access is detected.",
    image: ai2,
  },
  {
    icon: <Car size={40} />,
    title: "Vehicle Detection",
    desc: "Automatically identify vehicles and recognize number plates using ANPR technology.",
    image: ai3,
  },
  {
    icon: <Users size={40} />,
    title: "Crowd Monitoring",
    desc: "Analyze crowd density and monitor public spaces with intelligent video analytics.",
    image: aiMain,
  },
  {
    icon: <Camera size={40} />,
    title: "24×7 Smart Monitoring",
    desc: "Continuous AI surveillance with cloud monitoring and instant notifications.",
    image: ai2,
  },
  {
    icon: <BrainCircuit size={40} />,
    title: "AI Video Analytics",
    desc: "Detect abnormal activities, unattended objects, and unusual behaviors automatically.",
    image: ai3,
  },
];

const AISurveillance = () => {
  return (
    <>
      <Navbar />

      <section className="bg-[#111015] text-white pt-32">

        {/* Hero */}

        <div className="solutions-page-shell max-w-6xl mx-auto px-6 lg:px-8 text-center">

          <p className="uppercase tracking-[6px] text-[#24A8E0] font-semibold">
            Artificial Intelligence Security
          </p>

          <h1 className="text-6xl font-bold mt-5">
            AI Smart
            <span className="text-[#F1CF45]"> Surveillance</span>
          </h1>

          <p className="max-w-4xl mx-auto mt-8 text-lg text-gray-300 leading-9">
            Honey Vision's AI Smart Surveillance transforms ordinary CCTV into
            intelligent security systems capable of detecting, analyzing, and
            responding to security events in real time.
          </p>

        </div>

        
        <div className="max-w-6xl mx-auto px-6 mt-16">

  <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">

    <div className="overflow-hidden rounded-3xl border border-[#24A8E0]/20 shadow-xl">
            <img
        src={aiMain}
        alt="AI surveillance monitoring"
        className="w-full h-[340px] object-cover"
      />
    </div>

    <div className="grid gap-8">

      <div className="overflow-hidden rounded-3xl border border-[#24A8E0]/20 shadow-xl">
        <img
          src={ai2}
          alt="Security camera analytics"
          className="w-full h-[160px] object-cover"
        />
      </div>

      <div className="overflow-hidden rounded-3xl border border-[#24A8E0]/20 shadow-xl">
        <img
          src={ai3}
          alt="Smart monitoring dashboard"
          className="w-full h-[160px] object-cover"
        />
      </div>

    </div>

  </div>

  <div className="mt-12">
    <div className="max-w-4xl mx-auto rounded-3xl border border-[#24A8E0]/20 bg-[#1D416A]/70 p-5 shadow-xl">

      <div className="overflow-hidden rounded-2xl aspect-video">
        <iframe
          className="w-full h-full"
          src="https://res.cloudinary.com/q6iqvtbe/video/upload/v1785482007/3764259-hd_1280_720_60fps_n0qwm6.mp4"
          title="AI surveillance demo"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>

    </div>
  </div>

</div>

        <div className="max-w-6xl mx-auto px-6 lg:px-8 mt-16">
  <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-3xl border border-[#24A8E0]/20 bg-[#1D416A]/70 p-6">
            <p className="text-sm uppercase tracking-[3px] text-[#24A8E0]">Real-time awareness</p>
            <h3 className="mt-3 text-2xl font-semibold">See what matters instantly</h3>
            <p className="mt-3 text-sm leading-7 text-gray-300">The platform identifies threats, movement patterns, and unusual activity without delay.</p>
          </div>
          <div className="rounded-3xl border border-[#24A8E0]/20 bg-[#1D416A]/70 p-6">
            <p className="text-sm uppercase tracking-[3px] text-[#24A8E0]">Smarter response</p>
            <h3 className="mt-3 text-2xl font-semibold">Improve team decisions</h3>
            <p className="mt-3 text-sm leading-7 text-gray-300">Alerts and insights help security teams act faster and coordinate better.</p>
          </div>
          <div className="rounded-3xl border border-[#24A8E0]/20 bg-[#1D416A]/70 p-6">
            <p className="text-sm uppercase tracking-[3px] text-[#24A8E0]">Built for scale</p>
            <h3 className="mt-3 text-2xl font-semibold">Support growth with confidence</h3>
            <p className="mt-3 text-sm leading-7 text-gray-300">The setup works across campuses, offices, industrial sites, and public spaces.</p>
          </div>
          </div>
        </div>

        {/* Overview */}

        <div className="max-w-6xl mx-auto px-6 lg:px-8 mt-24 grid lg:grid-cols-2 gap-16 items-center">

          <div>

            <h2 className="text-4xl font-bold">
              Intelligent Security for Modern Organizations
            </h2>

            <p className="mt-8 text-gray-300 leading-8">
              Traditional CCTV only records events. Honey Vision combines AI and Computer Vision to detect threats early and turn live video into clear action.
            </p>

            <Link to="/demo" className="mt-10 inline-flex bg-[#F1CF45] text-black px-8 py-4 rounded-full font-semibold hover:bg-[#24A8E0] hover:text-white transition items-center gap-2">
              Request a Demo
              <ArrowRight size={20} />
            </Link>

          </div>

          <div className="bg-[#1D416A] rounded-3xl p-12 border border-[#24A8E0]/20">

            <ShieldCheck size={80} className="text-[#F1CF45]" />

            <h3 className="text-3xl font-bold mt-8">
              AI Powered Protection
            </h3>

            <p className="mt-6 text-gray-300 leading-8">
              Real-time monitoring, facial recognition, intrusion detection, and instant alerts all work together in one intelligent security system.
            </p>

          </div>

        </div>

        {/* Features */}

        <div className="max-w-6xl mx-auto px-6 lg:px-8 mt-28">

          <h2 className="text-5xl font-bold text-center">
            Key
            <span className="text-[#F1CF45]"> Features</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

            {features.map((item, index) => (

              <div
                key={index}
                className="overflow-hidden rounded-3xl border border-[#24A8E0]/20 bg-[#1D416A] hover:border-[#F1CF45] hover:-translate-y-2 transition"
              >
                <img src={item.image} alt={item.title} className="h-32 w-full object-cover" />
                <div className="p-8">
                  <div className="text-[#24A8E0]">
                    {item.icon}
                  </div>

                  <h3 className="text-2xl font-bold mt-6">
                    {item.title}
                  </h3>

                  <p className="mt-5 text-gray-300 leading-8">
                    {item.desc}
                  </p>
                </div>
              </div>

            ))}

          </div>

        </div>
        {/* Benefits */}

        <div className="max-w-7xl mx-auto px-8 mt-28">

          <div className="bg-[#1D416A] rounded-3xl p-12">

            <h2 className="text-4xl font-bold text-center">

              Benefits of AI Surveillance

            </h2>

            <div className="grid md:grid-cols-2 gap-12 mt-12">

              <ul className="space-y-5 text-gray-300">

                <li>✅ Real-time threat detection</li>

                <li>✅ Faster emergency response</li>

                <li>✅ Reduced manpower requirements</li>

                <li>✅ Automated security monitoring</li>

              </ul>

              <ul className="space-y-5 text-gray-300">

                <li>✅ Cloud-based monitoring</li>

                <li>✅ AI analytics & reports</li>

                <li>✅ High operational efficiency</li>

                <li>✅ Enhanced public safety</li>

              </ul>

            </div>

          </div>

        </div>

        {/* CTA */}

        <div className="max-w-7xl mx-auto px-8 py-24">

          <div className="bg-[#F1CF45] rounded-3xl p-14 text-center">

            <h2 className="text-5xl font-bold text-[#111015]">

              Secure Your Future with AI

            </h2>

            <p className="max-w-3xl mx-auto mt-6 text-lg text-gray-800 leading-8">

              Upgrade your traditional surveillance into an intelligent AI
              security system with Honey Vision's advanced surveillance
              technology.

            </p>

            <Link to="/demo" className="mt-10 inline-block bg-[#111015] text-white px-10 py-4 rounded-full font-semibold hover:bg-[#24A8E0] transition">
              Request a Demo
            </Link>

          </div>

        </div>

      </section>
    </>
  );
};

export default AISurveillance;