import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";
import { getCloudinaryImageUrl } from "../../utils/cloudinary";

const hero7 = getCloudinaryImageUrl("https://res.cloudinary.com/q6iqvtbe/image/upload/v1785388339/Agricultural_AI_bftfyl.jpg");
const hero8 = getCloudinaryImageUrl("https://res.cloudinary.com/q6iqvtbe/image/upload/v1785388260/AI_Computer_Vision1_aykp9x.jpg");
const hero9 = getCloudinaryImageUrl("https://res.cloudinary.com/q6iqvtbe/image/upload/v1785387600/hero9_vf0cmd.jpg");

import {
  Radar,
  ShieldCheck,
  Waves,
  LocateFixed,
  Activity,
  Cpu,
} from "lucide-react";

const RadarTechnology = () => {
  return (
    <>
      <Navbar />

      <section className="bg-[#0D1117] text-white pt-32">

        {/* Hero */}

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            <div>

              <p className="uppercase tracking-[6px] text-[#24A8E0] font-semibold">
                Advanced Detection Technology
              </p>

              <h1 className="text-6xl font-bold leading-tight mt-5">

                Radar
                <span className="text-[#F1CF45]">
                  {" "}Technology
                </span>

              </h1>

              <p className="mt-8 text-lg leading-9 text-gray-300">

                Honey Vision Radar Technology delivers accurate
                long-range detection, intelligent tracking, and
                real-time monitoring for critical infrastructure,
                industrial facilities, smart cities, and high-security
                environments.

              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="rounded-full bg-[#F1CF45] px-8 py-4 font-semibold text-black transition hover:bg-[#24A8E0] hover:text-white"
                >
                  Request Radar Demo
                </Link>
                <Link
                  to="/solutions"
                  className="rounded-full border border-[#24A8E0]/40 px-8 py-4 font-semibold text-white transition hover:border-[#F1CF45] hover:text-[#F1CF45]"
                >
                  Explore Security Solutions
                </Link>
              </div>

            </div>

            <div>

              <img
                src={hero7}
                alt="Radar Technology"
                className="rounded-[35px] w-full h-[520px] object-cover"
              />

            </div>

          </div>

        </div>

        {/* Overview */}

        <div className="max-w-7xl mx-auto px-6 py-24">

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            <div>

              <img
                src={hero8}
                alt="Radar Monitoring"
                className="rounded-[30px] h-[430px] w-full object-cover"
              />

            </div>

            <div>

              <p className="uppercase tracking-[5px] text-[#24A8E0] font-semibold">
                Intelligent Detection
              </p>

              <h2 className="text-5xl font-bold mt-4">

                Detect Beyond
                <span className="text-[#F1CF45]">
                  {" "}Vision
                </span>

              </h2>

              <p className="mt-8 text-gray-300 leading-9">

                Unlike conventional cameras, radar systems detect
                movement, speed, and distance even in darkness,
                rain, fog, dust, and other challenging environmental
                conditions.

              </p>

              <p className="mt-6 text-gray-400 leading-8">

                By combining radar sensing with AI analytics,
                Honey Vision provides continuous monitoring,
                accurate target tracking, and early threat
                detection with minimal false alarms.

              </p>

            </div>

          </div>

        </div>

        {/* Technology Highlights */}

        <div className="max-w-7xl mx-auto px-6 pb-24">

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-[#18263D] rounded-3xl p-8 border border-[#24A8E0]/20 hover:border-[#F1CF45] transition">

              <Radar
                size={50}
                className="text-[#24A8E0]"
              />

              <h3 className="text-2xl font-bold mt-6">
                Long Range Detection
              </h3>

              <p className="mt-4 text-gray-300 leading-8">

                Monitor large areas with high precision while
                accurately detecting moving targets over long
                distances.

              </p>

            </div>

            <div className="bg-[#18263D] rounded-3xl p-8 border border-[#24A8E0]/20 hover:border-[#F1CF45] transition">

              <LocateFixed
                size={50}
                className="text-[#24A8E0]"
              />

              <h3 className="text-2xl font-bold mt-6">
                Precise Target Tracking
              </h3>

              <p className="mt-4 text-gray-300 leading-8">

                Continuously calculate target position,
                direction, and speed with real-time
                AI-assisted tracking.

              </p>

            </div>

            <div className="bg-[#18263D] rounded-3xl p-8 border border-[#24A8E0]/20 hover:border-[#F1CF45] transition">

              <ShieldCheck
                size={50}
                className="text-[#24A8E0]"
              />

              <h3 className="text-2xl font-bold mt-6">
                All Weather Protection
              </h3>

              <p className="mt-4 text-gray-300 leading-8">

                Reliable detection during rain, fog,
                snow, dust, and complete darkness for
                uninterrupted security.

              </p>

            </div>

          </div>

        </div>

                {/* How Radar Works */}

        <div className="bg-[#121A26] py-28">

          <div className="max-w-7xl mx-auto px-6">

            <div className="text-center">

              <p className="uppercase tracking-[6px] text-[#24A8E0] font-semibold">
                Detection Process
              </p>

              <h2 className="text-5xl font-bold mt-4">

                How
                <span className="text-[#F1CF45]"> Radar Works</span>

              </h2>

              <p className="max-w-3xl mx-auto mt-6 text-gray-300 leading-8">

                Honey Vision Radar Technology continuously scans the
                environment using radio waves, detects moving objects,
                analyzes movement through AI, and instantly sends alerts
                for suspicious activities.

              </p>

            </div>

            <div className="grid lg:grid-cols-5 gap-8 mt-20">

              {[
                {
                  title:"Scan Area",
                  desc:"Radar emits high-frequency radio waves to monitor the surrounding environment."
                },
                {
                  title:"Receive Signal",
                  desc:"Reflected signals return after hitting people, vehicles, or objects."
                },
                {
                  title:"AI Analysis",
                  desc:"Artificial Intelligence classifies targets and removes false alarms."
                },
                {
                  title:"Track Target",
                  desc:"Continuously calculates speed, distance, and movement direction."
                },
                {
                  title:"Instant Alert",
                  desc:"Automatically notifies operators about unusual activities."
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



        {/* AI Radar Detection */}

        <div className="max-w-7xl mx-auto px-6 py-28">

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            <div>

              <img
                src={hero9}
                alt="Radar AI"
                className="rounded-[35px] h-[500px] w-full object-cover"
              />

            </div>

            <div>

              <p className="uppercase tracking-[6px] text-[#24A8E0] font-semibold">

                AI Enhanced Radar

              </p>

              <h2 className="text-5xl font-bold mt-4">

                Intelligent
                <span className="text-[#F1CF45]">
                  {" "}Threat Detection
                </span>

              </h2>

              <p className="mt-8 text-gray-300 leading-9">

                AI-powered radar intelligently distinguishes between
                humans, vehicles, animals, and environmental movement,
                significantly reducing false alarms while improving
                response time.

              </p>

              <div className="grid sm:grid-cols-2 gap-5 mt-10">

                <div className="bg-[#18263D] rounded-2xl p-6">

                  <Waves
                    size={35}
                    className="text-[#24A8E0]"
                  />

                  <h3 className="text-xl font-bold mt-4">

                    Wide Coverage

                  </h3>

                  <p className="mt-3 text-gray-300">

                    Monitor large outdoor areas with
                    continuous scanning.

                  </p>

                </div>

                <div className="bg-[#18263D] rounded-2xl p-6">

                  <Activity
                    size={35}
                    className="text-[#24A8E0]"
                  />

                  <h3 className="text-xl font-bold mt-4">

                    Motion Tracking

                  </h3>

                  <p className="mt-3 text-gray-300">

                    Detect movement speed,
                    direction, and trajectory.

                  </p>

                </div>

                <div className="bg-[#18263D] rounded-2xl p-6">

                  <Cpu
                    size={35}
                    className="text-[#24A8E0]"
                  />

                  <h3 className="text-xl font-bold mt-4">

                    Edge AI

                  </h3>

                  <p className="mt-3 text-gray-300">

                    Real-time AI processing
                    directly on intelligent devices.

                  </p>

                </div>

                <div className="bg-[#18263D] rounded-2xl p-6">

                  <ShieldCheck
                    size={35}
                    className="text-[#24A8E0]"
                  />

                  <h3 className="text-xl font-bold mt-4">

                    Accurate Alerts

                  </h3>

                  <p className="mt-3 text-gray-300">

                    Reduce false alarms with
                    intelligent event verification.

                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

                {/* Radar Applications */}

        <div className="bg-[#121A26] py-28">

          <div className="max-w-7xl mx-auto px-6">

            <div className="text-center">

              <p className="uppercase tracking-[6px] text-[#24A8E0] font-semibold">
                Industry Applications
              </p>

              <h2 className="text-5xl font-bold mt-4">

                Protect Every
                <span className="text-[#F1CF45]"> Critical Environment</span>

              </h2>

              <p className="max-w-3xl mx-auto mt-6 text-gray-300 leading-8">

                Honey Vision Radar Technology provides reliable
                perimeter protection, intelligent surveillance,
                and real-time monitoring across multiple industries.

              </p>

            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">

              {[
                {
                  title:"Airports",
                  desc:"Monitor runways, restricted areas and terminal perimeters."
                },
                {
                  title:"Industrial Plants",
                  desc:"Protect factories, warehouses and hazardous zones."
                },
                {
                  title:"Border Security",
                  desc:"Detect unauthorized movement over large distances."
                },
                {
                  title:"Smart Cities",
                  desc:"Improve traffic monitoring and public safety."
                },
                {
                  title:"Power Plants",
                  desc:"Secure critical infrastructure 24 hours a day."
                },
                {
                  title:"Oil & Gas",
                  desc:"Protect pipelines, refineries and storage facilities."
                },
                {
                  title:"Ports",
                  desc:"Monitor docks, ships and waterfront boundaries."
                },
                {
                  title:"Military Bases",
                  desc:"High-security surveillance with AI target tracking."
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



        {/* Coverage Dashboard */}

        <div className="max-w-7xl mx-auto px-6 py-28">

          <div className="grid lg:grid-cols-2 gap-14 items-center">

            <div>

              <p className="uppercase tracking-[6px] text-[#24A8E0] font-semibold">
                Monitoring Dashboard
              </p>

              <h2 className="text-5xl font-bold mt-4">

                Complete Radar
                <span className="text-[#F1CF45]"> Visibility</span>

              </h2>

              <p className="mt-8 text-gray-300 leading-9">

                Centralized monitoring allows operators to
                visualize every radar device, active target,
                intrusion event, and security alert from one
                intelligent command center.

              </p>

            </div>

            <div className="bg-[#18263D] rounded-[35px] p-10 border border-[#24A8E0]/20">

              <div className="grid grid-cols-2 gap-6">

                <div className="bg-[#0D1117] rounded-2xl p-7">

                  <p className="text-gray-400">
                    Detection Range
                  </p>

                  <h2 className="text-5xl font-bold mt-4 text-[#24A8E0]">

                    5 KM

                  </h2>

                </div>

                <div className="bg-[#0D1117] rounded-2xl p-7">

                  <p className="text-gray-400">
                    Active Targets
                  </p>

                  <h2 className="text-5xl font-bold mt-4 text-[#F1CF45]">

                    250+

                  </h2>

                </div>

                <div className="bg-[#0D1117] rounded-2xl p-7">

                  <p className="text-gray-400">
                    AI Alerts
                  </p>

                  <h2 className="text-5xl font-bold mt-4 text-[#24A8E0]">

                    Live

                  </h2>

                </div>

                <div className="bg-[#0D1117] rounded-2xl p-7">

                  <p className="text-gray-400">
                    Monitoring
                  </p>

                  <h2 className="text-5xl font-bold mt-4 text-[#F1CF45]">

                    24×7

                  </h2>

                </div>

              </div>

            </div>

          </div>

        </div>



        {/* Performance Statistics */}

        <div className="bg-[#121A26] py-28">

          <div className="max-w-7xl mx-auto px-6">

            <div className="text-center">

              <p className="uppercase tracking-[6px] text-[#24A8E0] font-semibold">
                Performance
              </p>

              <h2 className="text-5xl font-bold mt-4">

                Enterprise Grade
                <span className="text-[#F1CF45]"> Radar Performance</span>

              </h2>

            </div>

            <div className="grid md:grid-cols-4 gap-8 mt-20">

              <div className="bg-[#18263D] rounded-3xl p-10 text-center">

                <h2 className="text-6xl font-bold text-[#24A8E0]">

                  360°

                </h2>

                <p className="mt-4 text-gray-300">

                  Area Coverage

                </p>

              </div>

              <div className="bg-[#18263D] rounded-3xl p-10 text-center">

                <h2 className="text-6xl font-bold text-[#F1CF45]">

                  99%

                </h2>

                <p className="mt-4 text-gray-300">

                  Detection Accuracy

                </p>

              </div>

              <div className="bg-[#18263D] rounded-3xl p-10 text-center">

                <h2 className="text-6xl font-bold text-[#24A8E0]">

                  AI

                </h2>

                <p className="mt-4 text-gray-300">

                  Intelligent Tracking

                </p>

              </div>

              <div className="bg-[#18263D] rounded-3xl p-10 text-center">

                <h2 className="text-6xl font-bold text-[#F1CF45]">

                  24×7

                </h2>

                <p className="mt-4 text-gray-300">

                  Continuous Monitoring

                </p>

              </div>

            </div>

          </div>

        </div>

                {/* Radar Gallery */}

        <div className="max-w-7xl mx-auto px-6 py-28">

          <div className="text-center">

            <p className="uppercase tracking-[6px] text-[#24A8E0] font-semibold">
              Radar In Action
            </p>

            <h2 className="text-5xl font-bold mt-4">

              Real World
              <span className="text-[#F1CF45]"> Deployments</span>

            </h2>

            <p className="max-w-3xl mx-auto mt-6 text-gray-300 leading-8">

              Honey Vision Radar Technology secures airports,
              industrial facilities, oil & gas plants, ports,
              military installations, smart cities, and critical
              infrastructure through intelligent long-range
              detection and AI-powered monitoring.

            </p>

          </div>

          <div className="grid lg:grid-cols-3 gap-6 mt-20">

            <img
              src={hero9}
              alt="Radar Security"
              className="h-[300px] w-full object-cover rounded-[30px] hover:scale-105 duration-500"
            />

            <img
              src={hero7}
              alt="Radar Monitoring"
              className="h-[300px] w-full object-cover rounded-[30px] hover:scale-105 duration-500"
            />

            <img
              src={hero8}
              alt="AI Radar Detection"
              className="h-[300px] w-full object-cover rounded-[30px] hover:scale-105 duration-500"
            />

          </div>

        </div>



        {/* Radar Demonstration */}

        <div className="bg-[#121A26] py-28">

          <div className="max-w-6xl mx-auto px-6">

            <div className="text-center mb-14">

              <p className="uppercase tracking-[6px] text-[#24A8E0] font-semibold">

                Live Demonstration

              </p>

              <h2 className="text-5xl font-bold mt-4">

                Experience
                <span className="text-[#F1CF45]">
                  {" "}Radar Technology
                </span>

              </h2>

            </div>

            <div className="overflow-hidden rounded-[35px] border border-[#24A8E0]/20 shadow-2xl">

              <iframe
                className="w-full aspect-video"
                src="https://res.cloudinary.com/q6iqvtbe/video/upload/v1785481500/videoplayback_4_cibnql.mp4"
                title="Radar Technology Demo"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />

            </div>

          </div>

        </div>



        {/* Call To Action */}

        <div className="max-w-7xl mx-auto px-6 py-28">

          <div className="rounded-[40px] overflow-hidden bg-gradient-to-r from-[#18263D] via-[#24A8E0] to-[#111015]">

            <div className="grid lg:grid-cols-2 items-center">

              <div className="p-16">

                <p className="uppercase tracking-[5px] text-[#F1CF45] font-semibold">

                  Next Generation Security

                </p>

                <h2 className="text-5xl font-bold mt-6 leading-tight">

                  Smarter Detection.
                  <br />
                  Faster Response.

                </h2>

                <p className="mt-8 text-lg leading-8 text-gray-200">

                  Honey Vision Radar Technology combines
                  Artificial Intelligence, Edge Computing,
                  and precision radar sensing to provide
                  unmatched perimeter protection, real-time
                  tracking, and intelligent security for
                  every environment.

                </p>

                <div className="grid grid-cols-3 gap-5 mt-12">

                  <div className="bg-white/10 backdrop-blur-md rounded-2xl py-8 text-center">

                    <h3 className="text-4xl font-bold text-[#F1CF45]">
                      360°
                    </h3>

                    <p className="mt-3 text-gray-200 text-sm">
                      Coverage
                    </p>

                  </div>

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
                  src={hero9}
                  alt="Radar Technology"
                  className="w-full h-full object-cover min-h-[600px]"
                />

              </div>

            </div>

          </div>

        </div>

      </section>

    </>
  );
};

export default RadarTechnology;