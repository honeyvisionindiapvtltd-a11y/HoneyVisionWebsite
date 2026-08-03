import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";

import { getCloudinaryImageUrl } from "../../utils/cloudinary";

const hero2 = getCloudinaryImageUrl("https://res.cloudinary.com/q6iqvtbe/image/upload/v1785388318/Edge_AI3_numxpv.jpg");
const hero1 = getCloudinaryImageUrl("https://res.cloudinary.com/q6iqvtbe/image/upload/v1785388293/Cloud_Platform3_budnjp.jpg");
const hero5 = getCloudinaryImageUrl("https://res.cloudinary.com/q6iqvtbe/image/upload/v1785388326/Embedded_Systems1_l8wtze.jpg");

import {
  Database,
  HardDrive,
  Server,
  Cloud,
  Gauge,
  ShieldCheck,
} from "lucide-react";

const StorageBandwidth = () => {
  return (
    <>
      <Navbar />

      <section className="bg-[#0D1117] text-white pt-32">

        {/* Hero Section */}

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            <div>

              <p className="uppercase tracking-[6px] text-[#24A8E0] font-semibold">
                Intelligent Data Management
              </p>

              <h1 className="text-6xl font-bold leading-tight mt-5">

                Storage &
                <span className="text-[#F1CF45]">
                  {" "}Bandwidth
                </span>

                <br />

                Optimization

              </h1>

              <p className="mt-8 text-lg leading-9 text-gray-300">

                Honey Vision Storage & Bandwidth Optimization
                technology intelligently compresses, stores,
                and manages surveillance data while minimizing
                network usage without compromising video quality.

              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="rounded-full bg-[#F1CF45] px-8 py-4 font-semibold text-black transition hover:bg-[#24A8E0] hover:text-white"
                >
                  Get Storage Advice
                </Link>
                <Link
                  to="/solutions"
                  className="rounded-full border border-[#24A8E0]/40 px-8 py-4 font-semibold text-white transition hover:border-[#F1CF45] hover:text-[#F1CF45]"
                >
                  See Related Solutions
                </Link>
              </div>

              <div className="flex flex-wrap gap-5 mt-10">

                <div className="bg-[#18263D] px-6 py-4 rounded-2xl border border-[#24A8E0]/20">

                  <p className="text-sm text-gray-400">
                    Storage Saving
                  </p>

                  <h3 className="text-3xl font-bold text-[#F1CF45] mt-2">
                    80%
                  </h3>

                </div>

                <div className="bg-[#18263D] px-6 py-4 rounded-2xl border border-[#24A8E0]/20">

                  <p className="text-sm text-gray-400">
                    Bandwidth Reduction
                  </p>

                  <h3 className="text-3xl font-bold text-[#24A8E0] mt-2">
                    70%
                  </h3>

                </div>

              </div>

            </div>

            <div>

              <img
                src={hero1}
                alt="Storage Technology"
                className="w-full h-[550px] rounded-[35px] object-cover"
              />

            </div>

          </div>

        </div>



        {/* Overview */}

        <div className="max-w-7xl mx-auto px-6 py-28">

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            <div>

              <img
                src={hero2}
                alt="Storage Servers"
                className="w-full h-[460px] rounded-[30px] object-cover"
              />

            </div>

            <div>

              <p className="uppercase tracking-[5px] text-[#24A8E0] font-semibold">
                Enterprise Storage
              </p>

              <h2 className="text-5xl font-bold mt-5">

                Store More.
                <span className="text-[#F1CF45]">
                  {" "}Use Less.
                </span>

              </h2>

              <p className="mt-8 text-gray-300 leading-9">

                Modern surveillance systems generate massive
                amounts of video every day. Honey Vision
                intelligently optimizes storage through
                AI compression, smart recording,
                and efficient bandwidth management.

              </p>

              <p className="mt-6 text-gray-400 leading-8">

                Whether your deployment includes
                20 cameras or 20,000 cameras,
                our intelligent storage architecture
                ensures reliable recording,
                fast retrieval,
                and minimal operational cost.

              </p>

            </div>

          </div>

        </div>



        {/* Key Highlights */}

        <div className="max-w-7xl mx-auto px-6 pb-24">

          <div className="text-center mb-16">

            <p className="uppercase tracking-[6px] text-[#24A8E0] font-semibold">
              Core Technologies
            </p>

            <h2 className="text-5xl font-bold mt-4">

              Smarter
              <span className="text-[#F1CF45]">
                {" "}Storage
              </span>

            </h2>

          </div>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-[#18263D] rounded-3xl p-8 border border-[#24A8E0]/20 hover:border-[#F1CF45] transition">

              <Database
                size={50}
                className="text-[#24A8E0]"
              />

              <h3 className="text-2xl font-bold mt-6">

                Smart Compression

              </h3>

              <p className="mt-5 text-gray-300 leading-8">

                AI-powered H.265+ compression
                significantly reduces storage
                requirements while preserving
                exceptional image quality.

              </p>

            </div>



            <div className="bg-[#18263D] rounded-3xl p-8 border border-[#24A8E0]/20 hover:border-[#F1CF45] transition">

              <HardDrive
                size={50}
                className="text-[#24A8E0]"
              />

              <h3 className="text-2xl font-bold mt-6">

                Intelligent Recording

              </h3>

              <p className="mt-5 text-gray-300 leading-8">

                Record only important events
                using AI motion detection,
                reducing unnecessary storage
                and increasing retention time.

              </p>

            </div>



            <div className="bg-[#18263D] rounded-3xl p-8 border border-[#24A8E0]/20 hover:border-[#F1CF45] transition">

              <Server
                size={50}
                className="text-[#24A8E0]"
              />

              <h3 className="text-2xl font-bold mt-6">

                Enterprise Storage

              </h3>

              <p className="mt-5 text-gray-300 leading-8">

                High-performance servers,
                redundant storage,
                and cloud backup ensure
                secure, scalable,
                and uninterrupted surveillance.

              </p>

            </div>

          </div>

        </div>

                {/* Storage Architecture */}

        <div className="bg-[#121A26] py-28">

          <div className="max-w-7xl mx-auto px-6">

            <div className="text-center">

              <p className="uppercase tracking-[6px] text-[#24A8E0] font-semibold">
                Data Architecture
              </p>

              <h2 className="text-5xl font-bold mt-4">

                Intelligent
                <span className="text-[#F1CF45]">
                  {" "}Storage Workflow
                </span>

              </h2>

              <p className="max-w-3xl mx-auto mt-6 text-gray-300 leading-8">

                Every video stream passes through an optimized
                pipeline that compresses, stores, secures,
                and delivers surveillance data with maximum
                efficiency and minimum bandwidth usage.

              </p>

            </div>

            <div className="grid lg:grid-cols-5 gap-8 mt-20">

              {[
                {
                  title:"Capture",
                  desc:"AI cameras capture high-definition video streams."
                },
                {
                  title:"Compress",
                  desc:"H.265+ technology intelligently reduces file size."
                },
                {
                  title:"Store",
                  desc:"Videos are securely stored on enterprise servers."
                },
                {
                  title:"Backup",
                  desc:"Critical recordings synchronize with cloud storage."
                },
                {
                  title:"Access",
                  desc:"Instant playback from anywhere through secure platforms."
                }

              ].map((step,index)=>(

                <div
                  key={index}
                  className="bg-[#18263D] rounded-3xl p-8 border border-[#24A8E0]/20 hover:border-[#F1CF45] transition"
                >

                  <div className="w-16 h-16 rounded-full bg-[#24A8E0]/15 flex items-center justify-center">

                    <span className="text-[#24A8E0] text-2xl font-bold">

                      {index+1}

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



        {/* Smart Compression */}

        <div className="max-w-7xl mx-auto px-6 py-28">

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            <div>

              <img
                src={hero5}
                alt="Compression Technology"
                className="w-full h-[520px] rounded-[35px] object-cover"
              />

            </div>

            <div>

              <p className="uppercase tracking-[6px] text-[#24A8E0] font-semibold">

                H.265+ Compression

              </p>

              <h2 className="text-5xl font-bold mt-4">

                Smarter
                <span className="text-[#F1CF45]">
                  {" "}Video Compression
                </span>

              </h2>

              <p className="mt-8 text-gray-300 leading-9">

                Honey Vision intelligently analyzes every frame,
                removing redundant information while preserving
                exceptional image quality.

              </p>

              <div className="grid sm:grid-cols-2 gap-5 mt-10">

                <div className="bg-[#18263D] rounded-2xl p-6">

                  <Gauge
                    size={36}
                    className="text-[#24A8E0]"
                  />

                  <h3 className="text-xl font-bold mt-4">

                    70% Less Bandwidth

                  </h3>

                  <p className="mt-3 text-gray-300">

                    Reduce network traffic
                    without affecting video quality.

                  </p>

                </div>

                <div className="bg-[#18263D] rounded-2xl p-6">

                  <Database
                    size={36}
                    className="text-[#24A8E0]"
                  />

                  <h3 className="text-xl font-bold mt-4">

                    80% Storage Saving

                  </h3>

                  <p className="mt-3 text-gray-300">

                    Store months of recordings
                    using intelligent compression.

                  </p>

                </div>

                <div className="bg-[#18263D] rounded-2xl p-6">

                  <Cloud
                    size={36}
                    className="text-[#24A8E0]"
                  />

                  <h3 className="text-xl font-bold mt-4">

                    Cloud Sync

                  </h3>

                  <p className="mt-3 text-gray-300">

                    Automatic backup protects
                    critical surveillance footage.

                  </p>

                </div>

                <div className="bg-[#18263D] rounded-2xl p-6">

                  <ShieldCheck
                    size={36}
                    className="text-[#24A8E0]"
                  />

                  <h3 className="text-xl font-bold mt-4">

                    Secure Storage

                  </h3>

                  <p className="mt-3 text-gray-300">

                    Enterprise-grade encryption
                    keeps every recording protected.

                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>



        {/* Bandwidth Optimization */}

        <div className="bg-[#121A26] py-28">

          <div className="max-w-7xl mx-auto px-6">

            <div className="text-center">

              <p className="uppercase tracking-[6px] text-[#24A8E0] font-semibold">

                Network Optimization

              </p>

              <h2 className="text-5xl font-bold mt-4">

                Faster Streaming,
                <span className="text-[#F1CF45]">
                  {" "}Lower Network Load
                </span>

              </h2>

            </div>

            <div className="grid md:grid-cols-4 gap-8 mt-20">

              <div className="bg-[#18263D] rounded-3xl p-8 text-center border border-[#24A8E0]/20">

                <h2 className="text-5xl font-bold text-[#24A8E0]">

                  H.265+

                </h2>

                <p className="mt-4 text-gray-300">

                  Smart Compression

                </p>

              </div>

              <div className="bg-[#18263D] rounded-3xl p-8 text-center border border-[#24A8E0]/20">

                <h2 className="text-5xl font-bold text-[#F1CF45]">

                  70%

                </h2>

                <p className="mt-4 text-gray-300">

                  Less Bandwidth

                </p>

              </div>

              <div className="bg-[#18263D] rounded-3xl p-8 text-center border border-[#24A8E0]/20">

                <h2 className="text-5xl font-bold text-[#24A8E0]">

                  AI

                </h2>

                <p className="mt-4 text-gray-300">

                  Adaptive Streaming

                </p>

              </div>

              <div className="bg-[#18263D] rounded-3xl p-8 text-center border border-[#24A8E0]/20">

                <h2 className="text-5xl font-bold text-[#F1CF45]">

                  24×7

                </h2>

                <p className="mt-4 text-gray-300">

                  Continuous Recording

                </p>

              </div>

            </div>

          </div>

        </div>

                {/* Enterprise Storage Dashboard */}

        <div className="max-w-7xl mx-auto px-6 py-28">

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            <div>

              <p className="uppercase tracking-[6px] text-[#24A8E0] font-semibold">
                Enterprise Dashboard
              </p>

              <h2 className="text-5xl font-bold mt-5">

                Complete
                <span className="text-[#F1CF45]">
                  {" "}Storage Visibility
                </span>

              </h2>

              <p className="mt-8 text-gray-300 leading-9">

                Manage thousands of surveillance cameras,
                storage servers, bandwidth usage,
                recording health, cloud synchronization,
                and playback performance from one
                centralized management platform.

              </p>

            </div>

            <div className="bg-[#18263D] rounded-[35px] p-10 border border-[#24A8E0]/20">

              <div className="grid grid-cols-2 gap-6">

                <div className="bg-[#0D1117] rounded-2xl p-7">

                  <p className="text-gray-400">
                    Storage Health
                  </p>

                  <h2 className="text-5xl font-bold mt-4 text-[#24A8E0]">

                    99%

                  </h2>

                </div>

                <div className="bg-[#0D1117] rounded-2xl p-7">

                  <p className="text-gray-400">
                    Available Space
                  </p>

                  <h2 className="text-5xl font-bold mt-4 text-[#F1CF45]">

                    180TB

                  </h2>

                </div>

                <div className="bg-[#0D1117] rounded-2xl p-7">

                  <p className="text-gray-400">
                    Live Cameras
                  </p>

                  <h2 className="text-5xl font-bold mt-4 text-[#24A8E0]">

                    1200+

                  </h2>

                </div>

                <div className="bg-[#0D1117] rounded-2xl p-7">

                  <p className="text-gray-400">
                    Cloud Backup
                  </p>

                  <h2 className="text-5xl font-bold mt-4 text-[#F1CF45]">

                    Active

                  </h2>

                </div>

              </div>

            </div>

          </div>

        </div>



        {/* Industry Applications */}

        <div className="bg-[#121A26] py-28">

          <div className="max-w-7xl mx-auto px-6">

            <div className="text-center">

              <p className="uppercase tracking-[6px] text-[#24A8E0] font-semibold">

                Applications

              </p>

              <h2 className="text-5xl font-bold mt-4">

                Built For
                <span className="text-[#F1CF45]">
                  {" "}Every Industry
                </span>

              </h2>

            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">

              {[
                {
                  title:"Smart Cities",
                  desc:"Store petabytes of surveillance footage efficiently."
                },
                {
                  title:"Airports",
                  desc:"Reliable recording for mission-critical operations."
                },
                {
                  title:"Industries",
                  desc:"Continuous production monitoring and storage."
                },
                {
                  title:"Hospitals",
                  desc:"Secure medical facility surveillance recording."
                },
                {
                  title:"Schools",
                  desc:"Long-term campus security video retention."
                },
                {
                  title:"Retail",
                  desc:"Optimize recording for multiple store locations."
                },
                {
                  title:"Banking",
                  desc:"Encrypted storage for financial institutions."
                },
                {
                  title:"Government",
                  desc:"Enterprise-scale centralized video management."
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

              Enterprise-Class
              <span className="text-[#F1CF45]">
                {" "}Efficiency
              </span>

            </h2>

          </div>

          <div className="grid md:grid-cols-4 gap-8 mt-20">

            <div className="bg-[#18263D] rounded-3xl p-10 text-center">

              <h2 className="text-6xl font-bold text-[#24A8E0]">

                80%

              </h2>

              <p className="mt-4 text-gray-300">

                Storage Reduction

              </p>

            </div>

            <div className="bg-[#18263D] rounded-3xl p-10 text-center">

              <h2 className="text-6xl font-bold text-[#F1CF45]">

                70%

              </h2>

              <p className="mt-4 text-gray-300">

                Less Bandwidth

              </p>

            </div>

            <div className="bg-[#18263D] rounded-3xl p-10 text-center">

              <h2 className="text-6xl font-bold text-[#24A8E0]">

                AI

              </h2>

              <p className="mt-4 text-gray-300">

                Smart Compression

              </p>

            </div>

            <div className="bg-[#18263D] rounded-3xl p-10 text-center">

              <h2 className="text-6xl font-bold text-[#F1CF45]">

                24×7

              </h2>

              <p className="mt-4 text-gray-300">

                Reliable Recording

              </p>

            </div>

          </div>

        </div>

                {/* Storage Gallery */}

        <div className="bg-[#121A26] py-28">

          <div className="max-w-7xl mx-auto px-6">

            <div className="text-center">

              <p className="uppercase tracking-[6px] text-[#24A8E0] font-semibold">
                Enterprise Infrastructure
              </p>

              <h2 className="text-5xl font-bold mt-4">

                Storage
                <span className="text-[#F1CF45]">
                  {" "}Technology Gallery
                </span>

              </h2>

              <p className="max-w-3xl mx-auto mt-6 text-gray-300 leading-8">

                Designed for enterprise surveillance, Honey Vision
                storage solutions provide scalable recording,
                intelligent data management, and reliable
                video retention across every deployment.

              </p>

            </div>

            <div className="grid lg:grid-cols-3 gap-6 mt-20">

              <img
                src={hero2}
                alt="Enterprise Storage"
                className="h-[320px] w-full object-cover rounded-[30px] hover:scale-105 duration-500"
              />

              <img
                src={hero1}
                alt="Storage Server"
                className="h-[320px] w-full object-cover rounded-[30px] hover:scale-105 duration-500"
              />

              <img
                src={hero5}
                alt="Cloud Storage"
                className="h-[320px] w-full object-cover rounded-[30px] hover:scale-105 duration-500"
              />

            </div>

          </div>

        </div>



        {/* Technology Video */}

        <div className="max-w-6xl mx-auto px-6 py-28">

          <div className="text-center mb-14">

            <p className="uppercase tracking-[6px] text-[#24A8E0] font-semibold">
              Product Demonstration
            </p>

            <h2 className="text-5xl font-bold mt-4">

              Storage &
              <span className="text-[#F1CF45]">
                {" "}Bandwidth Optimization
              </span>

            </h2>

          </div>

          <div className="overflow-hidden rounded-[35px] border border-[#24A8E0]/20 shadow-2xl">

            <iframe
              className="w-full aspect-video"
              src="https://res.cloudinary.com/q6iqvtbe/video/upload/v1785480428/videoplayback_3_k1hfnf.mp4"
              title="Storage Technology"
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
                  Enterprise Video Storage
                </p>

                <h2 className="text-5xl font-bold mt-6 leading-tight">

                  Record More.
                  <br />
                  Store Smarter.

                </h2>

                <p className="mt-8 text-lg text-gray-200 leading-8">

                  Honey Vision Storage & Bandwidth Optimization
                  delivers intelligent recording, cloud-ready
                  storage architecture, AI compression,
                  and secure enterprise data management
                  for organizations of every size.

                </p>

                <div className="grid grid-cols-3 gap-5 mt-12">

                  <div className="bg-white/10 backdrop-blur-md rounded-2xl py-8 text-center">

                    <h3 className="text-4xl font-bold text-[#F1CF45]">
                      80%
                    </h3>

                    <p className="mt-3 text-gray-200 text-sm">
                      Less Storage
                    </p>

                  </div>

                  <div className="bg-white/10 backdrop-blur-md rounded-2xl py-8 text-center">

                    <h3 className="text-4xl font-bold text-[#F1CF45]">
                      70%
                    </h3>

                    <p className="mt-3 text-gray-200 text-sm">
                      Lower Traffic
                    </p>

                  </div>

                  <div className="bg-white/10 backdrop-blur-md rounded-2xl py-8 text-center">

                    <h3 className="text-4xl font-bold text-[#F1CF45]">
                      24×7
                    </h3>

                    <p className="mt-3 text-gray-200 text-sm">
                      Recording
                    </p>

                  </div>

                </div>

              </div>

              <div>

                <img
                  src={hero2}
                  alt="Storage Infrastructure"
                  className="w-full h-full min-h-[600px] object-cover"
                />

              </div>

            </div>

          </div>

        </div>

      </section>

    </>
  );
};

export default StorageBandwidth;