import Navbar from "../../components/Navbar";
import { getCloudinaryImageUrl } from "../../utils/cloudinary";

const cityMain = getCloudinaryImageUrl("https://res.cloudinary.com/q6iqvtbe/image/upload/v1785388213/smartcity_rgzaq5.jpg");
const city1 = getCloudinaryImageUrl("https://res.cloudinary.com/q6iqvtbe/image/upload/v1785388217/smartcity1_h2nhr5.jpg");
const city2 = getCloudinaryImageUrl("https://res.cloudinary.com/q6iqvtbe/image/upload/v1785388217/smartcity1_h2nhr5.jpg");
import {
  TrafficCone,
  Camera,
  Car,
  ShieldCheck,
  Bell,
  Wifi,
} from "lucide-react";

const features = [
  {
    icon: <TrafficCone size={40} />,
    title: "Smart Traffic Management",
    description:
      "Monitor traffic flow using AI-powered cameras and optimize signal management.",
    image: cityMain,
  },
  {
    icon: <Camera size={40} />,
    title: "City Surveillance",
    description:
      "24×7 intelligent surveillance for roads, public places, and critical infrastructure.",
    image: city1,
  },
  {
    icon: <Car size={40} />,
    title: "Smart Parking",
    description:
      "AI-powered parking detection and occupancy monitoring.",
    image: city2,
  },
  {
    icon: <Bell size={40} />,
    title: "Emergency Alerts",
    description:
      "Instant accident and emergency notifications using AI analytics.",
    image: cityMain,
  },
  {
    icon: <Wifi size={40} />,
    title: "IoT Integration",
    description:
      "Connect cameras, sensors and smart devices into one intelligent platform.",
    image: city1,
  },
  {
    icon: <ShieldCheck size={40} />,
    title: "Public Safety",
    description:
      "Improve citizen safety through AI surveillance and predictive analytics.",
    image: city2,
  },
];

const SmartCity = () => {
  return (
    <>
      <Navbar />

      <section className="bg-[#111015] text-white pt-32 pb-24">

        {/* Hero */}

        <div className="max-w-6xl mx-auto px-6 text-center">

          <p className="uppercase tracking-[6px] text-[#24A8E0] font-semibold">
            AI Powered Urban Innovation
          </p>

          <h1 className="text-6xl font-bold mt-5">
            Smart
            <span className="text-[#F1CF45]"> City Solutions</span>
          </h1>

          <p className="max-w-4xl mx-auto mt-8 text-lg text-gray-300 leading-9">
            Honey Vision delivers intelligent Smart City solutions that
            improve urban mobility, public safety, traffic management,
            and connected infrastructure.
          </p>

        </div>

        {/* Images */}

        <div className="max-w-6xl mx-auto px-6 mt-16">

          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-8">

            <div className="overflow-hidden rounded-3xl border border-[#24A8E0]/20 shadow-xl">
              <img
                src={cityMain}
                alt=""
                className="w-full h-[340px] object-cover"
              />
            </div>

            <div className="grid gap-8">

              <div className="overflow-hidden rounded-3xl border border-[#24A8E0]/20 shadow-xl">
                <img
                  src={city1}
                  alt=""
                  className="w-full h-[160px] object-cover"
                />
              </div>

              <div className="overflow-hidden rounded-3xl border border-[#24A8E0]/20 shadow-xl">
                <img
                  src={city2}
                  alt=""
                  className="w-full h-[160px] object-cover"
                />
              </div>

            </div>

          </div>

          {/* Video */}

          <div className="mt-12">

            <div className="max-w-4xl mx-auto rounded-3xl border border-[#24A8E0]/20 bg-[#1D416A]/70 p-5 shadow-xl">

              <div className="aspect-video overflow-hidden rounded-2xl">

                <iframe
                  className="w-full h-full"
                  src="https://res.cloudinary.com/q6iqvtbe/video/upload/v1785482027/15498631_3840_2160_25fps_ikayqh.mp4"
                  title="Smart City Solutions"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />

              </div>

            </div>

          </div>

        </div>

        {/* Information Cards */}

        <div className="max-w-6xl mx-auto px-6 mt-16">

          <div className="grid md:grid-cols-3 gap-6">

            <div className="rounded-3xl border border-[#24A8E0]/20 bg-[#1D416A]/70 p-6">

              <p className="uppercase tracking-[3px] text-[#24A8E0] text-sm">
                Traffic Control
              </p>

              <h3 className="text-2xl font-semibold mt-3">
                Smarter Mobility
              </h3>

              <p className="mt-3 text-gray-300 leading-7">
                AI-powered traffic monitoring helps reduce congestion,
                improve road safety, and optimize signal timing.
              </p>

            </div>

            <div className="rounded-3xl border border-[#24A8E0]/20 bg-[#1D416A]/70 p-6">

              <p className="uppercase tracking-[3px] text-[#24A8E0] text-sm">
                Public Safety
              </p>

              <h3 className="text-2xl font-semibold mt-3">
                Intelligent Surveillance
              </h3>

              <p className="mt-3 text-gray-300 leading-7">
                AI cameras monitor public spaces continuously and generate
                instant alerts during emergencies.
              </p>

            </div>

            <div className="rounded-3xl border border-[#24A8E0]/20 bg-[#1D416A]/70 p-6">

              <p className="uppercase tracking-[3px] text-[#24A8E0] text-sm">
                Smart Infrastructure
              </p>

              <h3 className="text-2xl font-semibold mt-3">
                Connected Urban Services
              </h3>

              <p className="mt-3 text-gray-300 leading-7">
                Integrate cameras, IoT sensors and intelligent systems
                into one centralized city management platform.
              </p>

            </div>

          </div>

        </div>

        {/* Overview */}

        <div className="max-w-6xl mx-auto px-6 mt-24">

          <div className="rounded-3xl border border-[#24A8E0]/20 bg-gradient-to-br from-[#1D416A] to-[#111015] p-10">

            <div className="grid lg:grid-cols-2 gap-10 items-center">

              <div>

                <p className="uppercase tracking-[3px] text-[#24A8E0] text-sm">
                  Connected City Platform
                </p>

                <h2 className="text-4xl font-bold mt-4">
                  Smarter Cities Through Intelligent Technology
                </h2>

                <p className="mt-6 text-gray-300 leading-8">
                  Honey Vision combines AI surveillance, IoT connectivity,
                  smart traffic systems and real-time analytics to help
                  cities become safer, more efficient and more sustainable.
                </p>

              </div>

              <div className="grid grid-cols-2 gap-5">

                <div className="bg-[#111015]/70 rounded-2xl border border-[#24A8E0]/20 p-6">
                  <h3 className="text-xl font-semibold">Monitor</h3>
                  <p className="mt-3 text-sm text-gray-300 leading-7">
                    Observe roads, infrastructure and public spaces continuously.
                  </p>
                </div>

                <div className="bg-[#111015]/70 rounded-2xl border border-[#24A8E0]/20 p-6">
                  <h3 className="text-xl font-semibold">Analyze</h3>
                  <p className="mt-3 text-sm text-gray-300 leading-7">
                    AI processes city data for faster and smarter decisions.
                  </p>
                </div>

                                <div className="bg-[#111015]/70 rounded-2xl border border-[#24A8E0]/20 p-6">
                  <h3 className="text-xl font-semibold">Respond</h3>
                  <p className="mt-3 text-sm text-gray-300 leading-7">
                    Receive instant alerts and coordinate emergency services
                    with intelligent automation.
                  </p>
                </div>

                <div className="bg-[#111015]/70 rounded-2xl border border-[#24A8E0]/20 p-6">
                  <h3 className="text-xl font-semibold">Optimize</h3>
                  <p className="mt-3 text-sm text-gray-300 leading-7">
                    Improve traffic flow, public safety and infrastructure
                    management through real-time city analytics.
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>

        {/* Key Features */}

        <div className="max-w-6xl mx-auto px-6 mt-28">

          <h2 className="text-5xl font-bold text-center">
            Key
            <span className="text-[#F1CF45]"> Features</span>
          </h2>

          <p className="max-w-3xl mx-auto mt-6 text-center text-gray-300 leading-8">
            Honey Vision delivers intelligent Smart City technologies that
            integrate AI surveillance, IoT devices, traffic monitoring,
            emergency response, and smart infrastructure into one unified
            urban management platform.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

            {features.map((feature, index) => (

              <div
                key={index}
                className="overflow-hidden rounded-3xl border border-[#24A8E0]/20 bg-[#1D416A] hover:border-[#F1CF45] hover:-translate-y-2 transition duration-300"
              >

                <img
                  src={feature.image}
                  alt={feature.title}
                  className="h-40 w-full object-cover"
                />

                <div className="p-8">

                  <div className="text-[#24A8E0]">
                    {feature.icon}
                  </div>

                  <h3 className="text-2xl font-bold mt-5">
                    {feature.title}
                  </h3>

                  <p className="mt-4 text-gray-300 leading-8">
                    {feature.description}
                  </p>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>

    </>
  );
};

export default SmartCity;