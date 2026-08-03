import Navbar from "../../components/Navbar";
import { getCloudinaryImageUrl } from "../../utils/cloudinary";

const cvMain = getCloudinaryImageUrl("https://res.cloudinary.com/q6iqvtbe/image/upload/v1785388180/computervision_zwka3r.jpg");
const cv1 = getCloudinaryImageUrl("https://res.cloudinary.com/q6iqvtbe/image/upload/v1785388184/computervision1_lkhecz.jpg");
const cv2 = getCloudinaryImageUrl("https://res.cloudinary.com/q6iqvtbe/image/upload/v1785388186/computervision2_ahvx4s.jpg");
const cv3 = getCloudinaryImageUrl("https://res.cloudinary.com/q6iqvtbe/image/upload/v1785652147/face_detection_hpqvmq.jpg");
const cv4 = getCloudinaryImageUrl("https://res.cloudinary.com/q6iqvtbe/image/upload/v1785653594/lot_v02giq.jpg");
const cv5 = getCloudinaryImageUrl("https://res.cloudinary.com/q6iqvtbe/image/upload/v1785653596/public_saftey_feclll.jpg");

import {
  Brain,
  ScanSearch,
  Eye,
  Barcode,
  Factory,
  Camera,
} from "lucide-react";

const features = [
  {
    icon: <Eye size={40} />,
    title: "Object Detection",
    description:
      "Detect and classify people, vehicles, equipment, and other objects in real time using advanced AI models.",
    image: cv1,
  },
  {
    icon: <ScanSearch size={40} />,
    title: "Face Recognition",
    description:
      "Identify authorized individuals and improve security using AI-powered facial recognition.",
    image: cv3,
  },
  {
    icon: <Barcode size={40} />,
    title: "OCR & Barcode",
    description:
      "Extract text, QR codes, invoices, and license plates with high accuracy.",
    image: cv2,
  },
  {
    icon: <Factory size={40} />,
    title: "Quality Inspection",
    description:
      "Automatically detect defects in manufacturing using AI vision.",
    image: cvMain,
  },
  {
    icon: <Camera size={40} />,
    title: "People Counting",
    description:
      "Monitor occupancy and customer movement with intelligent analytics.",
    image: cv5,
  },
  {
    icon: <Brain size={40} />,
    title: "AI Analytics",
    description:
      "Generate actionable insights from live video data.",
    image: cv2,
  },
];

const ComputerVision = () => {
  return (
    <>
      <Navbar />

      <section className="bg-[#111015] text-white pt-32 pb-24">

        {/* Hero */}

        <div className="max-w-6xl mx-auto px-6 text-center">

          <p className="uppercase tracking-[6px] text-[#24A8E0] font-semibold">
            Artificial Intelligence
          </p>

          <h1 className="text-6xl font-bold mt-5">
            Computer
            <span className="text-[#F1CF45]"> Vision</span>
          </h1>

          <p className="max-w-4xl mx-auto mt-8 text-lg leading-9 text-gray-300">
            Honey Vision builds intelligent Computer Vision solutions that
            transform visual data into real-time insights for automation,
            inspection, security, and operational excellence.
          </p>

        </div>

        {/* Images */}

        <div className="max-w-6xl mx-auto px-6 mt-16">

          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-8">

            <div className="overflow-hidden rounded-3xl border border-[#24A8E0]/20 shadow-xl">
              <img
                src={cvMain}
                alt=""
                className="w-full h-[340px] object-cover"
              />
            </div>

            <div className="grid gap-8">

              <div className="overflow-hidden rounded-3xl border border-[#24A8E0]/20 shadow-xl">
                <img
                  src={cv1}
                  alt=""
                  className="w-full h-[160px] object-cover"
                />
              </div>

              <div className="overflow-hidden rounded-3xl border border-[#24A8E0]/20 shadow-xl">
                <img
                  src={cv2}
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
                  src="https://res.cloudinary.com/q6iqvtbe/video/upload/v1785482019/16477666_1920_1080_25fps_z1cuhp.mp4"
                  title="Computer Vision Demo"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />

              </div>

            </div>

          </div>

        </div>

        {/* Info Cards */}

        <div className="max-w-6xl mx-auto px-6 mt-16">

          <div className="grid md:grid-cols-3 gap-6">

            <div className="rounded-3xl border border-[#24A8E0]/20 bg-[#1D416A]/70 p-6">
              <p className="uppercase tracking-[3px] text-[#24A8E0] text-sm">
                Manufacturing
              </p>

              <h3 className="text-2xl font-semibold mt-3">
                Intelligent Inspection
              </h3>

              <p className="text-gray-300 mt-3 leading-7">
                Detect product defects instantly while improving production
                quality and reducing manual inspection.
              </p>

            </div>

            <div className="rounded-3xl border border-[#24A8E0]/20 bg-[#1D416A]/70 p-6">

              <p className="uppercase tracking-[3px] text-[#24A8E0] text-sm">
                AI Analytics
              </p>

              <h3 className="text-2xl font-semibold mt-3">
                Real-Time Intelligence
              </h3>

              <p className="text-gray-300 mt-3 leading-7">
                Convert video streams into actionable business insights with
                AI-powered analytics.
              </p>

            </div>

            <div className="rounded-3xl border border-[#24A8E0]/20 bg-[#1D416A]/70 p-6">

              <p className="uppercase tracking-[3px] text-[#24A8E0] text-sm">
                Automation
              </p>

              <h3 className="text-2xl font-semibold mt-3">
                Smarter Operations
              </h3>

              <p className="text-gray-300 mt-3 leading-7">
                Improve productivity through automated detection, recognition,
                and monitoring systems.
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
                  AI Vision Platform
                </p>

                <h2 className="text-4xl font-bold mt-4">
                  Turn Every Camera Into An Intelligent Assistant
                </h2>

                <p className="mt-6 text-gray-300 leading-8">
                  Honey Vision's Computer Vision platform combines Artificial
                  Intelligence with high-performance cameras to automate
                  inspection, recognize objects, detect anomalies, and provide
                  valuable insights in real time.
                </p>

              </div>

              <div className="grid grid-cols-2 gap-5">

                <div className="bg-[#111015]/70 rounded-2xl border border-[#24A8E0]/20 p-6">
                  <h3 className="text-xl font-semibold">Detect</h3>
                  <p className="mt-3 text-gray-300 text-sm leading-7">
                    Identify people, vehicles, objects and defects with AI.
                  </p>
                </div>

                <div className="bg-[#111015]/70 rounded-2xl border border-[#24A8E0]/20 p-6">
                  <h3 className="text-xl font-semibold">Recognize</h3>
                  <p className="mt-3 text-gray-300 text-sm leading-7">
                    Face recognition, OCR and smart identification.
                  </p>
                </div>

                <div className="bg-[#111015]/70 rounded-2xl border border-[#24A8E0]/20 p-6">
                  <h3 className="text-xl font-semibold">Analyze</h3>
                  <p className="mt-3 text-gray-300 text-sm leading-7">
                    AI analytics provide business intelligence instantly.
                  </p>
                </div>

                <div className="bg-[#111015]/70 rounded-2xl border border-[#24A8E0]/20 p-6">
                  <h3 className="text-xl font-semibold">Automate</h3>
                  <p className="mt-3 text-gray-300 text-sm leading-7">
                    Reduce manual work and improve operational efficiency.
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

export default ComputerVision;