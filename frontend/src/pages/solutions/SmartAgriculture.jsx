import Navbar from "../../components/Navbar";
import { getCloudinaryImageUrl } from "../../utils/cloudinary";

const agMain = getCloudinaryImageUrl("https://res.cloudinary.com/q6iqvtbe/image/upload/v1785388193/smartarug_ll3ozx.jpg");
const ag1 = getCloudinaryImageUrl("https://res.cloudinary.com/q6iqvtbe/image/upload/v1785388201/smartarug1_yq1s1w.jpg");
const ag2 = getCloudinaryImageUrl("https://res.cloudinary.com/q6iqvtbe/image/upload/v1785388204/smartarug3_lzubm2.jpg");
import {
  CloudRain,
  Droplets,
  Tractor,
  Leaf,
  BarChart3,
  Trees,
} from "lucide-react";

const features = [
  {
    icon: <Leaf size={40} />,
    title: "Crop Health Monitoring",
    description:
      "Monitor crop conditions using AI and computer vision to detect diseases and nutrient deficiencies early.",
    image: agMain,
  },
  {
    icon: <Droplets size={40} />,
    title: "Smart Irrigation",
    description:
      "Automated irrigation based on soil moisture and weather conditions.",
    image: ag1,
  },
  {
    icon: <CloudRain size={40} />,
    title: "Weather Intelligence",
    description:
      "Real-time weather forecasting and environmental monitoring.",
    image: ag2,
  },
  {
    icon: <Tractor size={40} />,
    title: "Precision Farming",
    description:
      "Optimize farming using AI, GPS mapping and intelligent analytics.",
    image: agMain,
  },
  {
    icon: <BarChart3 size={40} />,
    title: "Farm Analytics",
    description:
      "Gain valuable insights into crop performance and productivity.",
    image: ag1,
  },
  {
    icon: <Trees size={40} />,
    title: "Sustainable Agriculture",
    description:
      "Promote eco-friendly farming with AI-powered monitoring.",
    image: ag2,
  },
];

const SmartAgriculture = () => {
  return (
    <>
      <Navbar />

      <section className="bg-[#111015] text-white pt-32 pb-24">

        {/* Hero */}

        <div className="max-w-6xl mx-auto px-6 text-center">

          <p className="uppercase tracking-[6px] text-[#24A8E0] font-semibold">
            AI Powered Agriculture
          </p>

          <h1 className="text-6xl font-bold mt-5">
            Smart
            <span className="text-[#F1CF45]"> Agriculture</span>
          </h1>

          <p className="max-w-4xl mx-auto mt-8 text-lg text-gray-300 leading-9">
            Honey Vision empowers agriculture using Artificial Intelligence,
            IoT, and intelligent monitoring systems to increase productivity,
            conserve resources, and support sustainable farming.
          </p>

        </div>

        {/* Images */}

        <div className="max-w-6xl mx-auto px-6 mt-16">

          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-8">

            <div className="overflow-hidden rounded-3xl border border-[#24A8E0]/20 shadow-xl">
              <img
                src={agMain}
                alt=""
                className="w-full h-[340px] object-cover"
              />
            </div>

            <div className="grid gap-8">

              <div className="overflow-hidden rounded-3xl border border-[#24A8E0]/20 shadow-xl">
                <img
                  src={ag1}
                  alt=""
                  className="w-full h-[160px] object-cover"
                />
              </div>

              <div className="overflow-hidden rounded-3xl border border-[#24A8E0]/20 shadow-xl">
                <img
                  src={ag2}
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
                  src="https://res.cloudinary.com/q6iqvtbe/video/upload/v1785482026/14490106_3840_2160_25fps_witxru.mp4"
                  title="Smart Agriculture"
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
                Crop Monitoring
              </p>

              <h3 className="text-2xl font-semibold mt-3">
                Real-Time Field Insights
              </h3>

              <p className="mt-3 text-gray-300 leading-7">
                AI continuously monitors crops to identify diseases, pests,
                nutrient deficiencies, and growth patterns.
              </p>

            </div>

            <div className="rounded-3xl border border-[#24A8E0]/20 bg-[#1D416A]/70 p-6">

              <p className="uppercase tracking-[3px] text-[#24A8E0] text-sm">
                Smart Irrigation
              </p>

              <h3 className="text-2xl font-semibold mt-3">
                Save Every Drop
              </h3>

              <p className="mt-3 text-gray-300 leading-7">
                Intelligent irrigation systems automatically optimize water
                usage based on soil moisture and weather conditions.
              </p>

            </div>

            <div className="rounded-3xl border border-[#24A8E0]/20 bg-[#1D416A]/70 p-6">

              <p className="uppercase tracking-[3px] text-[#24A8E0] text-sm">
                AI Analytics
              </p>

              <h3 className="text-2xl font-semibold mt-3">
                Increase Farm Productivity
              </h3>

              <p className="mt-3 text-gray-300 leading-7">
                Data-driven insights help farmers improve yield, reduce costs,
                and make smarter agricultural decisions.
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
                  Smart Farming Platform
                </p>

                <h2 className="text-4xl font-bold mt-4">
                  Modern Agriculture Powered By AI
                </h2>

                <p className="mt-6 text-gray-300 leading-8">
                  Honey Vision combines artificial intelligence, IoT devices,
                  drones, and computer vision to deliver efficient, sustainable,
                  and data-driven farming solutions.
                </p>

              </div>

              <div className="grid grid-cols-2 gap-5">

                <div className="bg-[#111015]/70 rounded-2xl border border-[#24A8E0]/20 p-6">
                  <h3 className="text-xl font-semibold">Monitor</h3>
                  <p className="mt-3 text-sm text-gray-300 leading-7">
                    Observe crops continuously using AI cameras and sensors.
                  </p>
                </div>

                <div className="bg-[#111015]/70 rounded-2xl border border-[#24A8E0]/20 p-6">
                  <h3 className="text-xl font-semibold">Analyze</h3>
                  <p className="mt-3 text-sm text-gray-300 leading-7">
                    AI evaluates crop health, soil quality and weather data.
                  </p>
                </div>

                                <div className="bg-[#111015]/70 rounded-2xl border border-[#24A8E0]/20 p-6">
                  <h3 className="text-xl font-semibold">Optimize</h3>
                  <p className="mt-3 text-sm text-gray-300 leading-7">
                    Automate irrigation and farming operations to maximize
                    productivity while conserving resources.
                  </p>
                </div>

                <div className="bg-[#111015]/70 rounded-2xl border border-[#24A8E0]/20 p-6">
                  <h3 className="text-xl font-semibold">Grow</h3>
                  <p className="mt-3 text-sm text-gray-300 leading-7">
                    Improve crop quality, reduce operational costs, and achieve
                    sustainable agricultural growth.
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>

        {/* Features */}

        <div className="max-w-6xl mx-auto px-6 mt-28">

          <h2 className="text-5xl font-bold text-center">
            Key
            <span className="text-[#F1CF45]"> Features</span>
          </h2>

          <p className="text-center text-gray-300 max-w-3xl mx-auto mt-6 leading-8">
            Honey Vision delivers intelligent agricultural technologies that
            combine AI, IoT, automation, and real-time analytics to improve
            farming efficiency and crop productivity.
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

export default SmartAgriculture;