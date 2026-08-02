import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";
import { getCloudinaryImageUrl } from "../../utils/cloudinary";

const hero14 = getCloudinaryImageUrl("https://res.cloudinary.com/q6iqvtbe/image/upload/v1785388249/AI_Analytics2_yxmdvl.jpg");
const hero15 = getCloudinaryImageUrl("https://res.cloudinary.com/q6iqvtbe/image/upload/v1785388245/AI_Analytics1_i2rvpt.jpg");
const hero16 = getCloudinaryImageUrl("https://res.cloudinary.com/q6iqvtbe/image/upload/v1785388241/AI_Analytics_nuwqx6.jpg");
const hero17 = getCloudinaryImageUrl("https://res.cloudinary.com/q6iqvtbe/image/upload/v1785388260/AI_Computer_Vision1_aykp9x.jpg");

import {
  BrainCircuit,
  ScanEye,
  Cpu,
  Camera,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

const AIVisionsystems = () => {
  return (
    <>
      <Navbar />

      <section className="bg-[#0D1117] text-white pt-32">

        {/* Hero */}

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            <div>

              <p className="uppercase tracking-[6px] text-[#24A8E0] font-semibold">
                Artificial Intelligence Technology
              </p>

              <h1 className="text-6xl font-bold leading-tight mt-5">

                AI Vision
                <span className="text-[#F1CF45]">
                  {" "}Systems
                </span>

              </h1>

              <p className="mt-8 text-lg leading-9 text-gray-300">

                Honey Vision combines Artificial Intelligence,
                Deep Learning, and Computer Vision to transform
                ordinary cameras into intelligent systems capable
                of understanding, analyzing, and responding to
                real-world environments in real time.

              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="rounded-full bg-[#F1CF45] px-8 py-4 font-semibold text-black transition hover:bg-[#24A8E0] hover:text-white"
                >
                  Request a Consultation
                </Link>
                <Link
                  to="/solutions"
                  className="rounded-full border border-[#24A8E0]/40 px-8 py-4 font-semibold text-white transition hover:border-[#F1CF45] hover:text-[#F1CF45]"
                >
                  Explore Solutions
                </Link>
              </div>

            </div>

            <div>

              <img
                src={hero14}
                alt="AI Vision"
                className="rounded-[35px] w-full h-[520px] object-cover"
              />

            </div>

          </div>

        </div>

        {/* AI Introduction */}

        <div className="max-w-7xl mx-auto px-6 py-24">

          <div className="grid lg:grid-cols-2 gap-14 items-center">

            <div>

              <img
                src={hero15}
                alt="Computer Vision"
                className="rounded-[30px] w-full h-[420px] object-cover"
              />

            </div>

            <div>

              <p className="uppercase tracking-[5px] text-[#24A8E0] font-semibold">
                Intelligent Computer Vision
              </p>

              <h2 className="text-5xl font-bold mt-4">

                Cameras That
                <span className="text-[#F1CF45]">
                  {" "}Think
                </span>

              </h2>

              <p className="mt-8 text-gray-300 leading-9">

                AI Vision Systems process every frame using
                advanced neural networks to detect people,
                vehicles, objects, behaviors, and security
                events with exceptional speed and accuracy.

              </p>

              <p className="mt-6 text-gray-400 leading-8">

                Instead of simply recording video, our intelligent
                systems interpret scenes, identify risks,
                and provide actionable insights that improve
                safety, efficiency, and operational awareness.

              </p>

            </div>

          </div>

        </div>

        {/* AI Highlights */}

        <div className="max-w-7xl mx-auto px-6 pb-24">

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-[#18263D] rounded-3xl p-8 border border-[#24A8E0]/20 hover:border-[#F1CF45] transition">

              <BrainCircuit
                size={50}
                className="text-[#24A8E0]"
              />

              <h3 className="text-2xl font-bold mt-6">
                Deep Learning
              </h3>

              <p className="mt-4 text-gray-300 leading-8">

                Advanced neural networks continuously improve
                object recognition and scene understanding.

              </p>

            </div>

            <div className="bg-[#18263D] rounded-3xl p-8 border border-[#24A8E0]/20 hover:border-[#F1CF45] transition">

              <ScanEye
                size={50}
                className="text-[#24A8E0]"
              />

              <h3 className="text-2xl font-bold mt-6">
                Real-Time Detection
              </h3>

              <p className="mt-4 text-gray-300 leading-8">

                Detect motion, intrusion, faces,
                license plates, and unusual activity
                within milliseconds.

              </p>

            </div>

            <div className="bg-[#18263D] rounded-3xl p-8 border border-[#24A8E0]/20 hover:border-[#F1CF45] transition">

              <Cpu
                size={50}
                className="text-[#24A8E0]"
              />

              <h3 className="text-2xl font-bold mt-6">
                Edge AI Computing
              </h3>

              <p className="mt-4 text-gray-300 leading-8">

                AI processing happens directly inside
                intelligent cameras for faster responses
                and lower network usage.

              </p>

            </div>

          </div>

        </div>

                {/* AI Capabilities */}

        <div className="bg-[#121A26] py-28">

          <div className="max-w-7xl mx-auto px-6">

            <div className="text-center">

              <p className="uppercase tracking-[6px] text-[#24A8E0] font-semibold">
                AI Capabilities
              </p>

              <h2 className="text-5xl font-bold mt-4">
                Vision That
                <span className="text-[#F1CF45]"> Understands</span>
              </h2>

              <p className="max-w-3xl mx-auto mt-6 text-gray-300 leading-8">
                Our AI engine doesn't simply capture video—it understands
                every scene, recognizes patterns, and instantly responds
                to important events.
              </p>

            </div>

            <div className="space-y-8 mt-20">

              <div className="grid lg:grid-cols-[320px_1fr] overflow-hidden rounded-[30px] bg-[#18263D] border border-[#24A8E0]/20">

                <img
                  src={hero14}
                  alt=""
                  className="w-full h-full object-cover"
                />

                <div className="p-10">

                  <div className="flex items-center gap-4">

                    <Camera
                      size={42}
                      className="text-[#24A8E0]"
                    />

                    <h3 className="text-3xl font-bold">
                      Intelligent Object Detection
                    </h3>

                  </div>

                  <p className="mt-6 text-gray-300 leading-9">

                    Detect people, vehicles, animals, bags,
                    helmets, fire, smoke, and hundreds of
                    object categories with AI-powered precision.

                  </p>

                </div>

              </div>



              <div className="grid lg:grid-cols-[1fr_320px] overflow-hidden rounded-[30px] bg-[#18263D] border border-[#24A8E0]/20">

                <div className="p-10">

                  <div className="flex items-center gap-4">

                    <ShieldCheck
                      size={42}
                      className="text-[#24A8E0]"
                    />

                    <h3 className="text-3xl font-bold">
                      Smart Event Recognition
                    </h3>

                  </div>

                  <p className="mt-6 text-gray-300 leading-9">

                    AI identifies intrusion, loitering,
                    abandoned objects, crowd formation,
                    perimeter crossing, and suspicious
                    activities in real time.

                  </p>

                </div>

                <img
                  src={hero15}
                  alt=""
                  className="w-full h-full object-cover"
                />

              </div>



              <div className="grid lg:grid-cols-[320px_1fr] overflow-hidden rounded-[30px] bg-[#18263D] border border-[#24A8E0]/20">

                <img
                  src={hero16}
                  alt=""
                  className="w-full h-full object-cover"
                />

                <div className="p-10">

                  <div className="flex items-center gap-4">

                    <Sparkles
                      size={42}
                      className="text-[#24A8E0]"
                    />

                    <h3 className="text-3xl font-bold">
                      Predictive Intelligence
                    </h3>

                  </div>

                  <p className="mt-6 text-gray-300 leading-9">

                    Deep learning continuously analyzes
                    historical data to identify trends,
                    anticipate risks, and support faster,
                    more informed decision-making.

                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>



        {/* Computer Vision Pipeline */}

        <div className="max-w-7xl mx-auto px-6 py-28">

          <div className="text-center">

            <p className="uppercase tracking-[6px] text-[#24A8E0] font-semibold">
              AI Processing Pipeline
            </p>

            <h2 className="text-5xl font-bold mt-4">

              How AI Vision
              <span className="text-[#F1CF45]"> Works</span>

            </h2>

          </div>

          <div className="grid lg:grid-cols-5 gap-8 mt-20">

            {[
              {
                title:"Capture",
                desc:"High-resolution cameras continuously collect live video data."
              },
              {
                title:"Analyze",
                desc:"AI models detect faces, vehicles, objects, and unusual activity."
              },
              {
                title:"Recognize",
                desc:"Computer Vision classifies events and identifies security threats."
              },
              {
                title:"Alert",
                desc:"Instant notifications are sent to operators in real time."
              },
              {
                title:"Respond",
                desc:"Security teams act immediately using AI-powered insights."
              }

            ].map((step,index)=>(

              <div
                key={index}
                className="bg-[#18263D] rounded-3xl p-8 text-center border border-[#24A8E0]/20 hover:border-[#F1CF45] transition"
              >

                <div className="w-16 h-16 mx-auto rounded-full bg-[#24A8E0]/15 flex items-center justify-center text-[#24A8E0] text-2xl font-bold">

                  {index+1}

                </div>

                <h3 className="text-2xl font-bold mt-6">

                  {step.title}

                </h3>

                <p className="mt-4 text-gray-300 leading-7">

                  {step.desc}

                </p>

              </div>

            ))}

          </div>

        </div>

                {/* AI Architecture */}

        <div className="bg-[#121A26] py-28">

          <div className="max-w-7xl mx-auto px-6">

            <div className="text-center">

              <p className="uppercase tracking-[6px] text-[#24A8E0] font-semibold">
                AI Architecture
              </p>

              <h2 className="text-5xl font-bold mt-4">
                Built Around
                <span className="text-[#F1CF45]"> Intelligent Computing</span>
              </h2>

              <p className="max-w-3xl mx-auto mt-6 text-gray-300 leading-8">
                Honey Vision combines AI cameras, edge computing,
                cloud analytics, and centralized monitoring into
                one intelligent ecosystem.
              </p>

            </div>

            <div className="grid lg:grid-cols-5 gap-6 mt-20">

              {[
                {
                  title:"AI Camera",
                  desc:"Capture high-resolution video and detect fire, smoke, and critical threats with embedded AI."
                },
                {
                  title:"Edge AI",
                  desc:"Process video locally for faster response."
                },
                {
                  title:"Cloud",
                  desc:"Securely synchronize events and recordings."
                },
                {
                  title:"Analytics",
                  desc:"Generate insights using AI and Deep Learning."
                },
                {
                  title:"Command Center",
                  desc:"Central dashboard for monitoring every site."
                }

              ].map((item,index)=>(

                <div
                  key={index}
                  className="bg-[#18263D] rounded-3xl p-7 border border-[#24A8E0]/20 hover:border-[#F1CF45] transition"
                >

                  <div className="w-14 h-14 rounded-full bg-[#24A8E0]/15 flex items-center justify-center">

                    <span className="text-[#24A8E0] font-bold text-xl">
                      {index+1}
                    </span>

                  </div>

                  <h3 className="text-xl font-bold mt-6">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-gray-300 leading-7">
                    {item.desc}
                  </p>

                </div>

              ))}

            </div>

          </div>

        </div>



        {/* Analytics Dashboard */}

        <div className="max-w-7xl mx-auto px-6 py-28">

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            <div>

              <p className="uppercase tracking-[6px] text-[#24A8E0] font-semibold">
                AI Analytics
              </p>

              <h2 className="text-5xl font-bold mt-4">

                Live Monitoring &
                <span className="text-[#F1CF45]"> Smart Analytics</span>

              </h2>

              <p className="mt-8 text-gray-300 leading-9">

                Monitor every connected camera through a unified
                dashboard that delivers live alerts, AI events,
                occupancy trends, heat maps, and intelligent
                reporting in real time.

              </p>

            </div>

            <div className="bg-[#18263D] rounded-[35px] p-10 border border-[#24A8E0]/20">

              <div className="grid grid-cols-2 gap-6">

                <div className="bg-[#0D1117] rounded-2xl p-6">

                  <p className="text-gray-400">
                    AI Accuracy
                  </p>

                  <h3 className="text-5xl font-bold text-[#24A8E0] mt-4">
                    99%
                  </h3>

                </div>

                <div className="bg-[#0D1117] rounded-2xl p-6">

                  <p className="text-gray-400">
                    Cameras Online
                  </p>

                  <h3 className="text-5xl font-bold text-[#F1CF45] mt-4">
                    250+
                  </h3>

                </div>

                <div className="bg-[#0D1117] rounded-2xl p-6">

                  <p className="text-gray-400">
                    AI Events
                  </p>

                  <h3 className="text-5xl font-bold text-[#24A8E0] mt-4">
                    Live
                  </h3>

                </div>

                <div className="bg-[#0D1117] rounded-2xl p-6">

                  <p className="text-gray-400">
                    Monitoring
                  </p>

                  <h3 className="text-5xl font-bold text-[#F1CF45] mt-4">
                    24×7
                  </h3>

                </div>

              </div>

            </div>

          </div>

        </div>



        {/* Performance */}

        <div className="bg-[#121A26] py-28">

          <div className="max-w-7xl mx-auto px-6">

            <div className="text-center">

              <p className="uppercase tracking-[6px] text-[#24A8E0] font-semibold">
                Performance
              </p>

              <h2 className="text-5xl font-bold mt-4">

                Designed For
                <span className="text-[#F1CF45]"> Enterprise Scale</span>

              </h2>

            </div>

            <div className="grid md:grid-cols-4 gap-8 mt-20">

              <div className="bg-[#18263D] rounded-3xl p-10 text-center">

                <h2 className="text-6xl font-bold text-[#24A8E0]">
                  99%
                </h2>

                <p className="mt-4 text-gray-300">
                  Detection Accuracy
                </p>

              </div>

              <div className="bg-[#18263D] rounded-3xl p-10 text-center">

                <h2 className="text-6xl font-bold text-[#F1CF45]">
                  24×7
                </h2>

                <p className="mt-4 text-gray-300">
                  Live Monitoring
                </p>

              </div>

              <div className="bg-[#18263D] rounded-3xl p-10 text-center">

                <h2 className="text-6xl font-bold text-[#24A8E0]">
                  AI
                </h2>

                <p className="mt-4 text-gray-300">
                  Smart Analytics
                </p>

              </div>

              <div className="bg-[#18263D] rounded-3xl p-10 text-center">

                <h2 className="text-6xl font-bold text-[#F1CF45]">
                  Edge
                </h2>

                <p className="mt-4 text-gray-300">
                  Instant Processing
                </p>

              </div>

            </div>

          </div>

        </div>

                {/* AI Vision Gallery */}

        <div className="max-w-7xl mx-auto px-6 py-28">

          <div className="text-center">

            <p className="uppercase tracking-[6px] text-[#24A8E0] font-semibold">
              AI Vision In Action
            </p>

            <h2 className="text-5xl font-bold mt-4">

              Real-Time
              <span className="text-[#F1CF45]"> Applications</span>

            </h2>

            <p className="max-w-3xl mx-auto mt-6 text-gray-300 leading-8">

              Honey Vision AI Vision Systems are deployed across
              industries including manufacturing, transportation,
              education, healthcare, smart cities, and enterprise
              security to deliver intelligent monitoring and
              automated decision-making.

            </p>

          </div>

          <div className="grid lg:grid-cols-3 gap-6 mt-20">

            <img
              src={hero14}
              alt="AI Vision Analytics"
              className="h-[280px] w-full object-cover rounded-[30px] hover:scale-105 duration-500"
            />

            <img
              src={hero15}
              alt="Smart AI Detection"
              className="h-[280px] w-full object-cover rounded-[30px] hover:scale-105 duration-500"
            />

            <img
              src={hero17}
              alt="Computer Vision Monitoring"
              className="h-[280px] w-full object-cover rounded-[30px] hover:scale-105 duration-500"
            />

          </div>

        </div>



        {/* Technology Demo */}

        <div className="bg-[#121A26] py-28">

          <div className="max-w-6xl mx-auto px-6">

            <div className="text-center mb-14">

              <p className="uppercase tracking-[6px] text-[#24A8E0] font-semibold">
                AI Demonstration
              </p>

              <h2 className="text-5xl font-bold mt-4">

                Experience
                <span className="text-[#F1CF45]"> AI Vision</span>

              </h2>

            </div>

            <div className="overflow-hidden rounded-[35px] border border-[#24A8E0]/20 shadow-2xl">

              <iframe
                className="w-full aspect-video"
                src="https://res.cloudinary.com/q6iqvtbe/video/upload/v1785480395/videoplayback_2_nlwrxs.mp4"
                title="AI Vision Demo"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />

            </div>

          </div>

        </div>



        {/* CTA */}

        <div className="max-w-7xl mx-auto px-6 py-28">

          <div className="rounded-[40px] bg-gradient-to-r from-[#1D416A] via-[#24A8E0] to-[#111015] p-16 text-center">

            <p className="uppercase tracking-[5px] text-[#F1CF45] font-semibold">
              Next Generation AI
            </p>

            <h2 className="text-5xl font-bold mt-5">

              Smarter Vision.
              <br />
              Faster Decisions.

            </h2>

            <p className="max-w-3xl mx-auto mt-8 text-lg text-gray-200 leading-8">

              Honey Vision combines Artificial Intelligence,
              Computer Vision, and Edge Computing to create
              intelligent systems that monitor, analyze,
              and respond in real time—making every environment
              safer, smarter, and more efficient.

            </p>

            <div className="grid md:grid-cols-3 gap-8 mt-14">

              <div className="bg-white/10 rounded-2xl p-8 backdrop-blur-md">

                <h3 className="text-4xl font-bold text-[#F1CF45]">
                  AI
                </h3>

                <p className="mt-3 text-gray-200">
                  Deep Learning Intelligence
                </p>

              </div>

              <div className="bg-white/10 rounded-2xl p-8 backdrop-blur-md">

                <h3 className="text-4xl font-bold text-[#F1CF45]">
                  Edge
                </h3>

                <p className="mt-3 text-gray-200">
                  Instant AI Processing
                </p>

              </div>

              <div className="bg-white/10 rounded-2xl p-8 backdrop-blur-md">

                <h3 className="text-4xl font-bold text-[#F1CF45]">
                  Cloud
                </h3>

                <p className="mt-3 text-gray-200">
                  Centralized Monitoring
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>

    </>
  );
};

export default AIVisionsystems;