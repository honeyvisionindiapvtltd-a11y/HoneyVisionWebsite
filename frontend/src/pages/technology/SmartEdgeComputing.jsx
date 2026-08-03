import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";

import { getCloudinaryImageUrl } from "../../utils/cloudinary";

const hero3 = getCloudinaryImageUrl("https://res.cloudinary.com/q6iqvtbe/image/upload/v1785388313/Edge_AI2_gek9y3.jpg");
const hero4 = getCloudinaryImageUrl("https://res.cloudinary.com/q6iqvtbe/image/upload/v1785388318/Edge_AI3_numxpv.jpg");
const hero5 = getCloudinaryImageUrl("https://res.cloudinary.com/q6iqvtbe/image/upload/v1785388309/Edge_AI1_go3xqu.jpg");

import {
  Cpu,
  Server,
  Cloud,
  Zap,
  ShieldCheck,
  BrainCircuit,
} from "lucide-react";

const SmartEdgeComputing = () => {
  return (
    <>
      <Navbar />

      <section className="bg-[#0D1117] text-white pt-32">

        {/* Hero Section */}

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            <div>

              <p className="uppercase tracking-[6px] text-[#24A8E0] font-semibold">
                AI Processing at the Edge
              </p>

              <h1 className="text-6xl font-bold leading-tight mt-5">

                Smart
                <span className="text-[#F1CF45]">
                  {" "}Edge Computing
                </span>

              </h1>

              <p className="mt-8 text-lg leading-9 text-gray-300">

                Honey Vision Smart Edge Computing processes
                surveillance data directly on intelligent
                devices, delivering faster response,
                lower latency, enhanced privacy,
                and real-time AI analytics without
                depending entirely on cloud computing.

              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="rounded-full bg-[#F1CF45] px-8 py-4 font-semibold text-black transition hover:bg-[#24A8E0] hover:text-white"
                >
                  Discuss Edge Deployment
                </Link>
                <Link
                  to="/technology/cloud-connectivity"
                  className="rounded-full border border-[#24A8E0]/40 px-8 py-4 font-semibold text-white transition hover:border-[#F1CF45] hover:text-[#F1CF45]"
                >
                  See Connected Systems
                </Link>
              </div>

              <div className="flex flex-wrap gap-5 mt-10">

                <div className="bg-[#18263D] border border-[#24A8E0]/20 rounded-2xl px-7 py-5">

                  <p className="text-sm text-gray-400">

                    Response Time

                  </p>

                  <h3 className="text-3xl font-bold mt-2 text-[#24A8E0]">

                    &lt;10 ms

                  </h3>

                </div>

                <div className="bg-[#18263D] border border-[#24A8E0]/20 rounded-2xl px-7 py-5">

                  <p className="text-sm text-gray-400">

                    AI Accuracy

                  </p>

                  <h3 className="text-3xl font-bold mt-2 text-[#F1CF45]">

                    99%

                  </h3>

                </div>

              </div>

            </div>

            <div>

              <img
                src={hero3}
                alt="Smart Edge Computing"
                className="w-full h-[560px] rounded-[35px] object-cover"
              />

            </div>

          </div>

        </div>





        {/* Edge Computing Overview */}

        <div className="max-w-7xl mx-auto px-6 py-28">

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            <div>

              <img
                src={hero4}
                alt="Edge AI Device"
                className="w-full h-[470px] object-cover rounded-[30px]"
              />

            </div>

            <div>

              <p className="uppercase tracking-[5px] text-[#24A8E0] font-semibold">

                Next Generation Intelligence

              </p>

              <h2 className="text-5xl font-bold mt-5">

                Process Data
                <span className="text-[#F1CF45]">
                  {" "}Where It Happens
                </span>

              </h2>

              <p className="mt-8 text-gray-300 leading-9">

                Traditional surveillance systems send
                every video stream to the cloud.
                Smart Edge Computing processes video,
                images, and sensor data directly
                inside intelligent cameras and edge devices.

              </p>

              <p className="mt-6 text-gray-400 leading-8">

                This reduces latency,
                minimizes bandwidth consumption,
                strengthens cybersecurity,
                and enables instant AI-powered
                decision making for mission-critical
                environments.

              </p>

            </div>

          </div>

        </div>





        {/* Core Advantages */}

        <div className="max-w-7xl mx-auto px-6 pb-24">

          <div className="text-center mb-16">

            <p className="uppercase tracking-[6px] text-[#24A8E0] font-semibold">

              Core Advantages

            </p>

            <h2 className="text-5xl font-bold mt-4">

              Why
              <span className="text-[#F1CF45]">
                {" "}Edge Computing
              </span>

            </h2>

          </div>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-[#18263D] rounded-3xl p-8 border border-[#24A8E0]/20 hover:border-[#F1CF45] transition duration-300">

              <Zap
                size={50}
                className="text-[#24A8E0]"
              />

              <h3 className="text-2xl font-bold mt-6">

                Ultra-Low Latency

              </h3>

              <p className="mt-5 text-gray-300 leading-8">

                AI decisions are made instantly
                on the device without waiting
                for cloud processing.

              </p>

            </div>

            <div className="bg-[#18263D] rounded-3xl p-8 border border-[#24A8E0]/20 hover:border-[#F1CF45] transition duration-300">

              <BrainCircuit
                size={50}
                className="text-[#24A8E0]"
              />

              <h3 className="text-2xl font-bold mt-6">

                AI at the Edge

              </h3>

              <p className="mt-5 text-gray-300 leading-8">

                Facial recognition,
                object detection,
                people counting,
                and anomaly detection
                happen directly on edge devices.

              </p>

            </div>

            <div className="bg-[#18263D] rounded-3xl p-8 border border-[#24A8E0]/20 hover:border-[#F1CF45] transition duration-300">

              <ShieldCheck
                size={50}
                className="text-[#24A8E0]"
              />

              <h3 className="text-2xl font-bold mt-6">

                Enhanced Security

              </h3>

              <p className="mt-5 text-gray-300 leading-8">

                Sensitive surveillance data
                remains on-site,
                reducing cyber risks
                and improving privacy protection.

              </p>

            </div>

          </div>

        </div>

                {/* How Smart Edge Computing Works */}

        <div className="bg-[#121A26] py-28">

          <div className="max-w-7xl mx-auto px-6">

            <div className="text-center">

              <p className="uppercase tracking-[6px] text-[#24A8E0] font-semibold">
                Edge Architecture
              </p>

              <h2 className="text-5xl font-bold mt-4">

                How
                <span className="text-[#F1CF45]"> Smart Edge Works</span>

              </h2>

              <p className="max-w-3xl mx-auto mt-6 text-gray-300 leading-8">

                Instead of sending every frame to the cloud,
                Honey Vision processes surveillance data directly
                on intelligent cameras and edge devices,
                delivering instant decisions with minimal latency.

              </p>

            </div>

            <div className="grid lg:grid-cols-5 gap-8 mt-20">

              {[
                {
                  title:"Capture",
                  desc:"AI cameras continuously capture live video and sensor data."
                },
                {
                  title:"Analyze",
                  desc:"Built-in AI processors identify faces, vehicles, and objects."
                },
                {
                  title:"Decide",
                  desc:"The edge device instantly evaluates threats and events."
                },
                {
                  title:"Notify",
                  desc:"Important alerts are sent immediately to operators."
                },
                {
                  title:"Store",
                  desc:"Only relevant recordings are uploaded to cloud or servers."
                }

              ].map((step,index)=>(

                <div
                  key={index}
                  className="bg-[#18263D] rounded-3xl p-8 border border-[#24A8E0]/20 hover:border-[#F1CF45] transition duration-300"
                >

                  <div className="w-16 h-16 rounded-full bg-[#24A8E0]/15 flex items-center justify-center">

                    <span className="text-[#24A8E0] text-2xl font-bold">

                      {index + 1}

                    </span>

                  </div>

                  <h3 className="text-2xl font-bold mt-6">

                    {step.title}

                  </h3>

                  <p className="mt-4 text-gray-300 leading-8">

                    {step.desc}

                  </p>

                </div>

              ))}

            </div>

          </div>

        </div>



        {/* Edge vs Cloud */}

        <div className="max-w-7xl mx-auto px-6 py-28">

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            <div>

              <img
                src={hero5}
                alt="Edge Computing Architecture"
                className="w-full h-[520px] object-cover rounded-[35px]"
              />

            </div>

            <div>

              <p className="uppercase tracking-[6px] text-[#24A8E0] font-semibold">

                Edge vs Cloud

              </p>

              <h2 className="text-5xl font-bold mt-5">

                Faster Than
                <span className="text-[#F1CF45]">
                  {" "}Traditional Cloud
                </span>

              </h2>

              <p className="mt-8 text-gray-300 leading-9">

                Cloud computing is powerful,
                but every request requires data transmission.
                Edge Computing performs AI processing locally,
                resulting in faster analytics,
                lower bandwidth usage,
                and improved reliability.

              </p>

              <div className="mt-10 space-y-5">

                <div className="flex justify-between items-center bg-[#18263D] rounded-2xl p-6">

                  <span className="font-semibold">
                    Processing Speed
                  </span>

                  <span className="text-[#24A8E0] font-bold">
                    Real-Time
                  </span>

                </div>

                <div className="flex justify-between items-center bg-[#18263D] rounded-2xl p-6">

                  <span className="font-semibold">
                    Internet Dependency
                  </span>

                  <span className="text-[#F1CF45] font-bold">
                    Minimal
                  </span>

                </div>

                <div className="flex justify-between items-center bg-[#18263D] rounded-2xl p-6">

                  <span className="font-semibold">
                    Data Privacy
                  </span>

                  <span className="text-[#24A8E0] font-bold">
                    Very High
                  </span>

                </div>

                <div className="flex justify-between items-center bg-[#18263D] rounded-2xl p-6">

                  <span className="font-semibold">
                    Bandwidth Usage
                  </span>

                  <span className="text-[#F1CF45] font-bold">
                    Optimized
                  </span>

                </div>

              </div>

            </div>

          </div>

        </div>



        {/* AI Processing */}

        <div className="bg-[#121A26] py-28">

          <div className="max-w-7xl mx-auto px-6">

            <div className="text-center">

              <p className="uppercase tracking-[6px] text-[#24A8E0] font-semibold">

                Edge Intelligence

              </p>

              <h2 className="text-5xl font-bold mt-4">

                AI Processing
                <span className="text-[#F1CF45]">
                  {" "}On Every Device
                </span>

              </h2>

            </div>

            <div className="grid md:grid-cols-4 gap-8 mt-20">

              <div className="bg-[#18263D] rounded-3xl p-8">

                <Cpu
                  size={45}
                  className="text-[#24A8E0]"
                />

                <h3 className="text-xl font-bold mt-6">

                  AI Chips

                </h3>

                <p className="mt-4 text-gray-300 leading-7">

                  Dedicated neural processors
                  execute AI algorithms directly
                  inside cameras.

                </p>

              </div>

              <div className="bg-[#18263D] rounded-3xl p-8">

                <Server
                  size={45}
                  className="text-[#24A8E0]"
                />

                <h3 className="text-xl font-bold mt-6">

                  Edge Servers

                </h3>

                <p className="mt-4 text-gray-300 leading-7">

                  Local servers coordinate
                  multiple edge devices with
                  high-speed processing.

                </p>

              </div>

              <div className="bg-[#18263D] rounded-3xl p-8">

                <Cloud
                  size={45}
                  className="text-[#24A8E0]"
                />

                <h3 className="text-xl font-bold mt-6">

                  Cloud Sync

                </h3>

                <p className="mt-4 text-gray-300 leading-7">

                  Important events are securely
                  synchronized for remote access.

                </p>

              </div>

              <div className="bg-[#18263D] rounded-3xl p-8">

                <ShieldCheck
                  size={45}
                  className="text-[#24A8E0]"
                />

                <h3 className="text-xl font-bold mt-6">

                  Secure AI

                </h3>

                <p className="mt-4 text-gray-300 leading-7">

                  End-to-end encryption protects
                  every device and every decision.

                </p>

              </div>

            </div>

          </div>

        </div>

                {/* Enterprise Edge Dashboard */}

        <div className="max-w-7xl mx-auto px-6 py-28">

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            <div>

              <p className="uppercase tracking-[6px] text-[#24A8E0] font-semibold">
                Centralized Management
              </p>

              <h2 className="text-5xl font-bold mt-5">

                Enterprise
                <span className="text-[#F1CF45]">
                  {" "}Edge Dashboard
                </span>

              </h2>

              <p className="mt-8 text-gray-300 leading-9">

                Monitor thousands of intelligent edge devices,
                AI cameras, analytics engines, storage nodes,
                and cloud synchronization from one unified
                management platform.

              </p>

            </div>

            <div className="bg-[#18263D] rounded-[35px] p-10 border border-[#24A8E0]/20">

              <div className="grid grid-cols-2 gap-6">

                <div className="bg-[#0D1117] rounded-2xl p-7">

                  <p className="text-gray-400">
                    Online Devices
                  </p>

                  <h2 className="text-5xl font-bold mt-4 text-[#24A8E0]">

                    2,540

                  </h2>

                </div>

                <div className="bg-[#0D1117] rounded-2xl p-7">

                  <p className="text-gray-400">
                    AI Events
                  </p>

                  <h2 className="text-5xl font-bold mt-4 text-[#F1CF45]">

                    Live

                  </h2>

                </div>

                <div className="bg-[#0D1117] rounded-2xl p-7">

                  <p className="text-gray-400">
                    CPU Usage
                  </p>

                  <h2 className="text-5xl font-bold mt-4 text-[#24A8E0]">

                    34%

                  </h2>

                </div>

                <div className="bg-[#0D1117] rounded-2xl p-7">

                  <p className="text-gray-400">
                    Network Delay
                  </p>

                  <h2 className="text-5xl font-bold mt-4 text-[#F1CF45]">

                    8 ms

                  </h2>

                </div>

              </div>

            </div>

          </div>

        </div>



        {/* Applications */}

        <div className="bg-[#121A26] py-28">

          <div className="max-w-7xl mx-auto px-6">

            <div className="text-center">

              <p className="uppercase tracking-[6px] text-[#24A8E0] font-semibold">

                Real World Deployment

              </p>

              <h2 className="text-5xl font-bold mt-4">

                Smart Edge
                <span className="text-[#F1CF45]">
                  {" "}Applications
                </span>

              </h2>

            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">

              {[
                {
                  title:"Smart Cities",
                  desc:"Real-time traffic analytics and public safety monitoring."
                },
                {
                  title:"Manufacturing",
                  desc:"Instant defect detection and production monitoring."
                },
                {
                  title:"Retail",
                  desc:"Customer analytics, people counting and loss prevention."
                },
                {
                  title:"Healthcare",
                  desc:"Secure monitoring with low-latency emergency alerts."
                },
                {
                  title:"Airports",
                  desc:"AI-powered passenger flow and perimeter protection."
                },
                {
                  title:"Banking",
                  desc:"Fraud detection and intelligent ATM surveillance."
                },
                {
                  title:"Education",
                  desc:"Campus security with smart event detection."
                },
                {
                  title:"Logistics",
                  desc:"Warehouse automation and vehicle monitoring."
                }

              ].map((item,index)=>(

                <div
                  key={index}
                  className="bg-[#18263D] rounded-3xl p-8 border border-[#24A8E0]/20 hover:border-[#F1CF45] hover:-translate-y-2 transition duration-300"
                >

                  <h3 className="text-2xl font-bold">

                    {item.title}

                  </h3>

                  <p className="mt-5 text-gray-300 leading-8">

                    {item.desc}

                  </p>

                </div>

              ))}

            </div>

          </div>

        </div>



        {/* Performance Statistics */}

        <div className="max-w-7xl mx-auto px-6 py-28">

          <div className="text-center">

            <p className="uppercase tracking-[6px] text-[#24A8E0] font-semibold">
              Performance
            </p>

            <h2 className="text-5xl font-bold mt-4">

              Enterprise
              <span className="text-[#F1CF45]">
                {" "}Edge Performance
              </span>

            </h2>

          </div>

          <div className="grid md:grid-cols-4 gap-8 mt-20">

            <div className="bg-[#18263D] rounded-3xl p-10 text-center">

              <h2 className="text-6xl font-bold text-[#24A8E0]">

                &lt;10ms

              </h2>

              <p className="mt-4 text-gray-300">

                Response Time

              </p>

            </div>

            <div className="bg-[#18263D] rounded-3xl p-10 text-center">

              <h2 className="text-6xl font-bold text-[#F1CF45]">

                99%

              </h2>

              <p className="mt-4 text-gray-300">

                AI Accuracy

              </p>

            </div>

            <div className="bg-[#18263D] rounded-3xl p-10 text-center">

              <h2 className="text-6xl font-bold text-[#24A8E0]">

                60%

              </h2>

              <p className="mt-4 text-gray-300">

                Less Bandwidth

              </p>

            </div>

            <div className="bg-[#18263D] rounded-3xl p-10 text-center">

              <h2 className="text-6xl font-bold text-[#F1CF45]">

                24×7

              </h2>

              <p className="mt-4 text-gray-300">

                Continuous AI Processing

              </p>

            </div>

          </div>

        </div>

                {/* Edge Computing Gallery */}

        <div className="bg-[#121A26] py-28">

          <div className="max-w-7xl mx-auto px-6">

            <div className="text-center">

              <p className="uppercase tracking-[6px] text-[#24A8E0] font-semibold">
                Edge Computing in Action
              </p>

              <h2 className="text-5xl font-bold mt-4">

                Real-Time
                <span className="text-[#F1CF45]">
                  {" "}Deployments
                </span>

              </h2>

              <p className="max-w-3xl mx-auto mt-6 text-gray-300 leading-8">

                Honey Vision Smart Edge Computing powers intelligent
                surveillance across smart cities, industries,
                transportation hubs, retail environments,
                and critical infrastructure with ultra-fast
                AI processing directly at the edge.

              </p>

            </div>

            <div className="grid lg:grid-cols-3 gap-6 mt-20">

              <img
                src={hero3}
                alt="Edge Device"
                className="h-[320px] w-full object-cover rounded-[30px] hover:scale-105 duration-500"
              />

              <img
                src={hero4}
                alt="AI Edge Analytics"
                className="h-[320px] w-full object-cover rounded-[30px] hover:scale-105 duration-500"
              />

              <img
                src={hero5}
                alt="Edge Server"
                className="h-[320px] w-full object-cover rounded-[30px] hover:scale-105 duration-500"
              />

            </div>

          </div>

        </div>



        {/* Technology Demo */}

        <div className="max-w-6xl mx-auto px-6 py-28">

          <div className="text-center mb-14">

            <p className="uppercase tracking-[6px] text-[#24A8E0] font-semibold">

              Live Demonstration

            </p>

            <h2 className="text-5xl font-bold mt-4">

              Smart Edge
              <span className="text-[#F1CF45]">
                {" "}Computing
              </span>

            </h2>

          </div>

          <div className="overflow-hidden rounded-[35px] border border-[#24A8E0]/20 shadow-2xl">

            <iframe
              className="w-full aspect-video"
              src="https://res.cloudinary.com/q6iqvtbe/video/upload/v1785478118/WhatsApp_Video_2026-07-31_at_10.20.06_AM_1_dpotoy.mp4"
              title="Smart Edge Computing Demo"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />

          </div>

        </div>



        {/* CTA */}

        <div className="max-w-7xl mx-auto px-6 pb-28">

          <div className="rounded-[40px] overflow-hidden bg-gradient-to-r from-[#111015] via-[#1D416A] to-[#24A8E0]">

            <div className="grid lg:grid-cols-2 items-center">

              <div className="p-16">

                <p className="uppercase tracking-[5px] text-[#F1CF45] font-semibold">

                  Next Generation AI

                </p>

                <h2 className="text-5xl font-bold mt-6 leading-tight">

                  Intelligence
                  <br />

                  Starts at the Edge

                </h2>

                <p className="mt-8 text-lg leading-8 text-gray-200">

                  Honey Vision Smart Edge Computing delivers
                  intelligent surveillance, instant AI analytics,
                  secure local processing, and enterprise-grade
                  performance for organizations that demand
                  real-time decision making.

                </p>

                <div className="grid grid-cols-3 gap-5 mt-12">

                  <div className="bg-white/10 backdrop-blur-md rounded-2xl py-8 text-center">

                    <h3 className="text-4xl font-bold text-[#F1CF45]">

                      AI

                    </h3>

                    <p className="mt-3 text-gray-200 text-sm">

                      Analytics

                    </p>

                  </div>

                  <div className="bg-white/10 backdrop-blur-md rounded-2xl py-8 text-center">

                    <h3 className="text-4xl font-bold text-[#F1CF45]">

                      &lt;10ms

                    </h3>

                    <p className="mt-3 text-gray-200 text-sm">

                      Latency

                    </p>

                  </div>

                  <div className="bg-white/10 backdrop-blur-md rounded-2xl py-8 text-center">

                    <h3 className="text-4xl font-bold text-[#F1CF45]">

                      24×7

                    </h3>

                    <p className="mt-3 text-gray-200 text-sm">

                      Monitoring

                    </p>

                  </div>

                </div>

              </div>

              <div>

                <img
                  src={hero5}
                  alt="Smart Edge Computing"
                  className="w-full h-full min-h-[620px] object-cover"
                />

              </div>

            </div>

          </div>

        </div>

      </section>

    </>
  );
};

export default SmartEdgeComputing;