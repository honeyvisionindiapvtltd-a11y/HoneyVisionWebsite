import Navbar from "../components/Navbar";
import { getCloudinaryImageUrl } from "../utils/cloudinary";
import bgImage from "../assets/bg.jpg";

const hero4 = getCloudinaryImageUrl("https://res.cloudinary.com/q6iqvtbe/image/upload/v1785387962/Manufacturing2_mgwaus.jpg");
const hero6 = getCloudinaryImageUrl("https://res.cloudinary.com/q6iqvtbe/image/upload/v1785387958/Manufacturing1_gjbesy.jpg");
const hero8 = getCloudinaryImageUrl("https://res.cloudinary.com/q6iqvtbe/image/upload/v1785387942/Government_Defense2_ybpwel.jpg");
const hero9 = getCloudinaryImageUrl("https://res.cloudinary.com/q6iqvtbe/image/upload/v1785387945/Healthcare_cqjwbc.jpg");
const hero10 = getCloudinaryImageUrl("https://res.cloudinary.com/q6iqvtbe/image/upload/v1785387888/Government_Defense_rplcdz.jpg");
const hero11 = getCloudinaryImageUrl("https://res.cloudinary.com/q6iqvtbe/image/upload/v1785387881/Education2_lxpfho.jpg");

import {
  Factory,
  Cpu,
  ShieldCheck,
  Workflow,
  Cog,
  Activity,
} from "lucide-react";

const Industry = () => {
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
        <div className="absolute inset-0 bg-black/15" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(36,168,224,0.16),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(241,207,69,0.08),transparent_25%)]" />

        {/* Hero */}

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-14 items-center">

            <div>

              <p className="uppercase tracking-[6px] text-[#24A8E0] font-semibold">
                Smart Industrial Solutions
              </p>

              <h1 className="text-6xl font-bold leading-tight mt-5">
                Building
                <span className="text-[#F1CF45]"> Intelligent </span>
                Industries
              </h1>

              <p className="mt-8 text-lg text-gray-300 leading-9">
                Honey Vision provides advanced industrial automation,
                AI-powered monitoring, machine vision, and intelligent
                surveillance systems that improve productivity, safety,
                and operational efficiency across manufacturing plants
                and industrial facilities.
              </p>

            </div>

            <div>

              <img
                src={hero4}
                alt="Industrial Automation"
                className="rounded-[35px] h-[520px] w-full object-cover"
              />

            </div>

          </div>

        </div>

        {/* Image Showcase */}

        <div className="max-w-7xl mx-auto px-6 mt-24">

          <div className="grid md:grid-cols-3 gap-6">

            <img
              src={hero11}
              className="rounded-3xl h-[260px] w-full object-cover"
              alt=""
            />

            <img
              src={hero6}
              className="rounded-3xl h-[260px] w-full object-cover"
              alt=""
            />

            <img
              src={hero8}
              className="rounded-3xl h-[260px] w-full object-cover"
              alt=""
            />

          </div>

        </div>

        {/* Overview */}

        <div className="max-w-7xl mx-auto px-6 py-24">

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            <div>

              <p className="uppercase tracking-[5px] text-[#24A8E0] font-semibold">
                Industrial Intelligence
              </p>

              <h2 className="text-5xl font-bold mt-4">
                Smart Technology for
                <span className="text-[#F1CF45]"> Modern Industries</span>
              </h2>

              <p className="mt-8 text-gray-300 leading-9">
                From AI surveillance and predictive monitoring to
                intelligent automation and machine vision, Honey Vision
                delivers end-to-end industrial solutions that enhance
                efficiency, reduce downtime, and strengthen workplace
                safety.
              </p>

            </div>

            <div className="grid sm:grid-cols-2 gap-6">

              <div className="bg-[#18263D] rounded-3xl p-8 border border-[#24A8E0]/20">

                <Factory
                  size={45}
                  className="text-[#24A8E0]"
                />

                <h3 className="text-2xl font-bold mt-6">
                  Smart Manufacturing
                </h3>

                <p className="mt-4 text-gray-300 leading-7">
                  AI-powered monitoring and intelligent production
                  management.
                </p>

              </div>

              <div className="bg-[#18263D] rounded-3xl p-8 border border-[#24A8E0]/20">

                <Cpu
                  size={45}
                  className="text-[#24A8E0]"
                />

                <h3 className="text-2xl font-bold mt-6">
                  Industrial AI
                </h3>

                <p className="mt-4 text-gray-300 leading-7">
                  Machine vision, automation, and real-time analytics
                  for factories.
                </p>

              </div>

              <div className="bg-[#18263D] rounded-3xl p-8 border border-[#24A8E0]/20">

                <ShieldCheck
                  size={45}
                  className="text-[#24A8E0]"
                />

                <h3 className="text-2xl font-bold mt-6">
                  Workplace Safety
                </h3>

                <p className="mt-4 text-gray-300 leading-7">
                  Intelligent surveillance protects employees,
                  equipment, and facilities.
                </p>

              </div>

              <div className="bg-[#18263D] rounded-3xl p-8 border border-[#24A8E0]/20">

                <Workflow
                  size={45}
                  className="text-[#24A8E0]"
                />

                <h3 className="text-2xl font-bold mt-6">
                  Process Automation
                </h3>

                <p className="mt-4 text-gray-300 leading-7">
                  Streamline industrial operations with connected smart
                  systems.
                </p>

              </div>

            </div>

          </div>

        </div>

                {/* Industrial Solutions */}

        <div className="bg-[#131A24] py-24">

          <div className="max-w-7xl mx-auto px-6">

            <div className="text-center">

              <p className="uppercase tracking-[6px] text-[#24A8E0] font-semibold">
                Our Expertise
              </p>

              <h2 className="text-5xl font-bold mt-4">
                Industrial
                <span className="text-[#F1CF45]"> Solutions</span>
              </h2>

              <p className="max-w-3xl mx-auto mt-6 text-gray-300 leading-8">
                We combine Artificial Intelligence, Industrial Automation,
                Machine Vision, and Smart Surveillance to build safe,
                productive, and connected industrial environments.
              </p>

            </div>

            {/* Solution 1 */}

            <div className="grid lg:grid-cols-2 gap-14 items-center mt-24">

              <div>

                <img
                  src={hero6}
                  alt=""
                  className="rounded-[30px] w-full h-[420px] object-cover"
                />

              </div>

              <div>

                <div className="flex items-center gap-4">

                  <div className="w-16 h-16 rounded-2xl bg-[#24A8E0]/15 flex items-center justify-center">

                    <Cog
                      size={34}
                      className="text-[#24A8E0]"
                    />

                  </div>

                  <h3 className="text-4xl font-bold">
                    Factory Automation
                  </h3>

                </div>

                <p className="mt-8 text-gray-300 leading-9">

                  Intelligent automation systems streamline manufacturing
                  operations by reducing manual intervention, improving
                  production quality, and increasing operational efficiency.

                </p>

                <div className="grid grid-cols-2 gap-5 mt-10">

                  <div className="bg-[#18263D] rounded-2xl p-5">

                    <h4 className="text-[#F1CF45] text-3xl font-bold">
                      AI
                    </h4>

                    <p className="text-gray-300 mt-2">
                      Smart Decision Making
                    </p>

                  </div>

                  <div className="bg-[#18263D] rounded-2xl p-5">

                    <h4 className="text-[#24A8E0] text-3xl font-bold">
                      24×7
                    </h4>

                    <p className="text-gray-300 mt-2">
                      Continuous Monitoring
                    </p>

                  </div>

                </div>

              </div>

            </div>

            {/* Solution 2 */}

            <div className="grid lg:grid-cols-2 gap-14 items-center mt-24">

              <div className="order-2 lg:order-1">

                <div className="flex items-center gap-4">

                  <div className="w-16 h-16 rounded-2xl bg-[#24A8E0]/15 flex items-center justify-center">

                    <Activity
                      size={34}
                      className="text-[#24A8E0]"
                    />

                  </div>

                  <h3 className="text-4xl font-bold">
                    Predictive Monitoring
                  </h3>

                </div>

                <p className="mt-8 text-gray-300 leading-9">

                  AI continuously analyzes equipment performance,
                  detects unusual behaviour, predicts failures,
                  and enables preventive maintenance before downtime
                  occurs.

                </p>

                <div className="grid grid-cols-2 gap-5 mt-10">

                  <div className="bg-[#18263D] rounded-2xl p-5">

                    <h4 className="text-[#F1CF45] text-3xl font-bold">
                      99%
                    </h4>

                    <p className="text-gray-300 mt-2">
                      Detection Accuracy
                    </p>

                  </div>

                  <div className="bg-[#18263D] rounded-2xl p-5">

                    <h4 className="text-[#24A8E0] text-3xl font-bold">
                      Fast
                    </h4>

                    <p className="text-gray-300 mt-2">
                      Real-Time Alerts
                    </p>

                  </div>

                </div>

              </div>

              <div className="order-1 lg:order-2">

                <img
                  src={hero8}
                  alt=""
                  className="rounded-[30px] w-full h-[420px] object-cover"
                />

              </div>

            </div>

          </div>

        </div>

                {/* Smart Factory Workflow */}

        <div className="max-w-7xl mx-auto px-6 py-28">

          <div className="text-center">

            <p className="uppercase tracking-[6px] text-[#24A8E0] font-semibold">
              Smart Manufacturing Process
            </p>

            <h2 className="text-5xl font-bold mt-4">
              Connected
              <span className="text-[#F1CF45]"> Factory Workflow</span>
            </h2>

            <p className="max-w-3xl mx-auto mt-6 text-gray-300 leading-8">
              Every machine, sensor, and surveillance system works together
              to create a connected industrial ecosystem with complete
              visibility and intelligent automation.
            </p>

          </div>

          <div className="grid lg:grid-cols-5 gap-8 mt-20">

            {[
              {
                no: "01",
                title: "Capture",
                text: "Industrial cameras and sensors continuously monitor equipment and production lines.",
              },
              {
                no: "02",
                title: "Analyze",
                text: "Artificial Intelligence processes visual data to identify defects and anomalies.",
              },
              {
                no: "03",
                title: "Monitor",
                text: "Central dashboards display machine health, production status, and live alerts.",
              },
              {
                no: "04",
                title: "Respond",
                text: "Automatic notifications allow engineers to take immediate corrective action.",
              },
              {
                no: "05",
                title: "Optimize",
                text: "Analytics improve efficiency, reduce downtime, and maximize productivity.",
              },

            ].map((item) => (

              <div
                key={item.no}
                className="relative bg-[#18263D] rounded-3xl p-7 border border-[#24A8E0]/20 hover:border-[#F1CF45] transition duration-300"
              >

                <span className="text-6xl font-bold text-[#24A8E0]/20">
                  {item.no}
                </span>

                <h3 className="text-2xl font-bold mt-5">
                  {item.title}
                </h3>

                <p className="mt-4 text-gray-300 leading-7">
                  {item.text}
                </p>

              </div>

            ))}

          </div>

        </div>



        {/* Live Performance Dashboard */}

        <div className="bg-[#131A24] py-28">

          <div className="max-w-7xl mx-auto px-6">

            <div className="grid lg:grid-cols-2 gap-14 items-center">

              <div>

                <p className="uppercase tracking-[5px] text-[#24A8E0] font-semibold">
                  Real-Time Performance
                </p>

                <h2 className="text-5xl font-bold mt-4">
                  Industrial
                  <span className="text-[#F1CF45]"> Dashboard</span>
                </h2>

                <p className="mt-8 text-gray-300 leading-9">
                  Honey Vision provides centralized dashboards for
                  monitoring machine health, production status,
                  workforce safety, energy consumption, and AI alerts
                  from a single interface.
                </p>

              </div>

              <div className="bg-[#18263D] rounded-[35px] p-10 border border-[#24A8E0]/20">

                <div className="grid grid-cols-2 gap-6">

                  <div className="bg-[#0E1117] rounded-2xl p-6 text-center">

                    <h3 className="text-5xl font-bold text-[#24A8E0]">
                      98%
                    </h3>

                    <p className="mt-3 text-gray-300">
                      System Uptime
                    </p>

                  </div>

                  <div className="bg-[#0E1117] rounded-2xl p-6 text-center">

                    <h3 className="text-5xl font-bold text-[#F1CF45]">
                      AI
                    </h3>

                    <p className="mt-3 text-gray-300">
                      Live Detection
                    </p>

                  </div>

                  <div className="bg-[#0E1117] rounded-2xl p-6 text-center">

                    <h3 className="text-5xl font-bold text-[#24A8E0]">
                      24×7
                    </h3>

                    <p className="mt-3 text-gray-300">
                      Monitoring
                    </p>

                  </div>

                  <div className="bg-[#0E1117] rounded-2xl p-6 text-center">

                    <h3 className="text-5xl font-bold text-[#F1CF45]">
                      Live
                    </h3>

                    <p className="mt-3 text-gray-300">
                      Analytics
                    </p>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

                {/* Project Gallery */}

        <div className="max-w-7xl mx-auto px-6 py-28">

          <div className="text-center">

            <p className="uppercase tracking-[6px] text-[#24A8E0] font-semibold">
              Industrial Projects
            </p>

            <h2 className="text-5xl font-bold mt-4">
              Real World
              <span className="text-[#F1CF45]"> Deployments</span>
            </h2>

            <p className="max-w-3xl mx-auto mt-6 text-gray-300 leading-8">
              Honey Vision delivers intelligent industrial solutions for
              manufacturing plants, warehouses, logistics hubs, and heavy
              industries with reliable AI-powered monitoring systems.
            </p>

          </div>

          <div className="grid lg:grid-cols-3 gap-6 mt-20">

            <img
              src={hero9}
              alt=""
              className="rounded-3xl h-[280px] w-full object-cover hover:scale-105 transition duration-500"
            />

            <img
              src={hero10}
              alt=""
              className="rounded-3xl h-[280px] w-full object-cover hover:scale-105 transition duration-500"
            />

            <img
              src={hero11}
              alt=""
              className="rounded-3xl h-[280px] w-full object-cover hover:scale-105 transition duration-500"
            />

          </div>

        </div>



        {/* Industrial Video */}

        <div className="bg-[#131A24] py-24">

          <div className="max-w-6xl mx-auto px-6">

            <div className="text-center mb-14">

              <p className="uppercase tracking-[5px] text-[#24A8E0] font-semibold">
                Smart Factory Demo
              </p>

              <h2 className="text-5xl font-bold mt-4">
                See Industrial
                <span className="text-[#F1CF45]"> Innovation</span>
              </h2>

            </div>

            <div className="overflow-hidden rounded-[35px] border border-[#24A8E0]/20 shadow-2xl">

              <iframe
                className="w-full aspect-video"
                src="https://res.cloudinary.com/q6iqvtbe/video/upload/v1785478129/WhatsApp_Video_2026-07-31_at_10.20.06_AM_yxut0c.mp4"
                title="Industrial Automation"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />

            </div>

          </div>

        </div>



        {/* Company Achievements */}

        <div className="max-w-7xl mx-auto px-6 py-24">

          <div className="grid md:grid-cols-4 gap-8">

            <div className="text-center bg-[#18263D] rounded-3xl p-10">

              <h2 className="text-5xl font-bold text-[#24A8E0]">
                500+
              </h2>

              <p className="mt-4 text-gray-300">
                Projects Completed
              </p>

            </div>

            <div className="text-center bg-[#18263D] rounded-3xl p-10">

              <h2 className="text-5xl font-bold text-[#F1CF45]">
                50+
              </h2>

              <p className="mt-4 text-gray-300">
                Industrial Clients
              </p>

            </div>

            <div className="text-center bg-[#18263D] rounded-3xl p-10">

              <h2 className="text-5xl font-bold text-[#24A8E0]">
                24×7
              </h2>

              <p className="mt-4 text-gray-300">
                Monitoring
              </p>

            </div>

            <div className="text-center bg-[#18263D] rounded-3xl p-10">

              <h2 className="text-5xl font-bold text-[#F1CF45]">
                AI
              </h2>

              <p className="mt-4 text-gray-300">
                Intelligent Automation
              </p>

            </div>

          </div>

        </div>



        {/* CTA */}

        <div className="max-w-7xl mx-auto px-6 pb-28">

          <div className="rounded-[40px] bg-gradient-to-r from-[#24A8E0] via-[#1D416A] to-[#0E1117] p-16 text-center">

            <p className="uppercase tracking-[5px] text-[#F1CF45] font-semibold">
              Transform Your Industry
            </p>

            <h2 className="text-5xl font-bold mt-5">
              Ready for Smart Industrial Solutions?
            </h2>

            <p className="max-w-3xl mx-auto mt-8 text-gray-200 text-lg leading-8">
              Empower your factory with AI-powered surveillance,
              industrial automation, machine vision, predictive
              monitoring, and intelligent analytics from Honey Vision.
            </p>

            <button className="mt-10 bg-[#F1CF45] text-black px-10 py-4 rounded-full font-semibold hover:bg-white transition duration-300">
              Contact Our Experts
            </button>

          </div>

        </div>

      </section>

    </>

  );
};

export default Industry;