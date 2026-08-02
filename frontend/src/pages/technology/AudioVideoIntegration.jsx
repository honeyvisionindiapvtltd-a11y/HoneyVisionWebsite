import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";

import { getCloudinaryImageUrl } from "../../utils/cloudinary";

const hero2 = getCloudinaryImageUrl("https://res.cloudinary.com/q6iqvtbe/image/upload/v1785388277/audio-video-hero_fl8r6m.jpg");
const hero7 = getCloudinaryImageUrl("https://res.cloudinary.com/q6iqvtbe/image/upload/v1785388273/audio-detection_upc81l.jpg");
const hero8 = getCloudinaryImageUrl("https://res.cloudinary.com/q6iqvtbe/image/upload/v1785388297/command-center_ekobu5.jpg");

import {
  MonitorSpeaker,
  Mic,
  Video,
  Presentation,
  Volume2,
  Network,
} from "lucide-react";

const AudioVideoIntegration = () => {
  return (
    <>
      <Navbar />

      <section className="bg-[#0D1117] text-white pt-32">

        {/* Hero Section */}

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            <div>

              <p className="uppercase tracking-[6px] text-[#24A8E0] font-semibold">
                Professional AV Technology
              </p>

              <h1 className="text-6xl font-bold leading-tight mt-5">

                Audio &
                <span className="text-[#F1CF45]">
                  {" "}Video Integration
                </span>

              </h1>

              <p className="mt-8 text-lg leading-9 text-gray-300">

                Honey Vision designs intelligent Audio & Video
                Integration solutions that combine displays,
                conferencing systems, public address systems,
                digital signage, and centralized control into
                one seamless communication platform.

              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="rounded-full bg-[#F1CF45] px-8 py-4 font-semibold text-black transition hover:bg-[#24A8E0] hover:text-white"
                >
                  Book a Demo
                </Link>
                <Link
                  to="/solutions/audiovisuals"
                  className="rounded-full border border-[#24A8E0]/40 px-8 py-4 font-semibold text-white transition hover:border-[#F1CF45] hover:text-[#F1CF45]"
                >
                  View AV Solutions
                </Link>
              </div>

              <div className="flex flex-wrap gap-5 mt-10">

                <div className="bg-[#18263D] border border-[#24A8E0]/20 rounded-2xl px-7 py-5">

                  <p className="text-sm text-gray-400">

                    Connected Devices

                  </p>

                  <h3 className="text-3xl font-bold mt-2 text-[#24A8E0]">

                    500+

                  </h3>

                </div>

                <div className="bg-[#18263D] border border-[#24A8E0]/20 rounded-2xl px-7 py-5">

                  <p className="text-sm text-gray-400">

                    System Uptime

                  </p>

                  <h3 className="text-3xl font-bold mt-2 text-[#F1CF45]">

                    99.9%

                  </h3>

                </div>

              </div>

            </div>

            <div>

              <img
                src={hero2}
                alt="Audio Video Integration"
                className="w-full h-[560px] rounded-[35px] object-cover"
              />

            </div>

          </div>

        </div>



        {/* Overview */}

        <div className="max-w-7xl mx-auto px-6 py-28">

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            <div>

              <img
                src={hero7}
                alt="Conference Room AV"
                className="w-full h-[470px] rounded-[30px] object-cover"
              />

            </div>

            <div>

              <p className="uppercase tracking-[5px] text-[#24A8E0] font-semibold">

                Smart Collaboration

              </p>

              <h2 className="text-5xl font-bold mt-5">

                Connect
                <span className="text-[#F1CF45]">
                  {" "}People & Technology
                </span>

              </h2>

              <p className="mt-8 text-gray-300 leading-9">

                From smart meeting rooms and classrooms to
                command centers and digital signage,
                Honey Vision delivers fully integrated AV
                ecosystems that improve collaboration,
                communication, and operational efficiency.

              </p>

              <p className="mt-6 text-gray-400 leading-8">

                Our AV solutions combine intelligent displays,
                microphones, speakers, wireless presentation,
                centralized control, and cloud connectivity
                into one easy-to-manage platform.

              </p>

            </div>

          </div>

        </div>



        {/* Core Features */}

        <div className="max-w-7xl mx-auto px-6 pb-24">

          <div className="text-center mb-16">

            <p className="uppercase tracking-[6px] text-[#24A8E0] font-semibold">

              Integrated Solutions

            </p>

            <h2 className="text-5xl font-bold mt-4">

              Everything
              <span className="text-[#F1CF45]">
                {" "}Works Together
              </span>

            </h2>

          </div>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-[#18263D] rounded-3xl p-8 border border-[#24A8E0]/20 hover:border-[#F1CF45] transition duration-300">

              <Presentation
                size={50}
                className="text-[#24A8E0]"
              />

              <h3 className="text-2xl font-bold mt-6">

                Smart Meeting Rooms

              </h3>

              <p className="mt-5 text-gray-300 leading-8">

                Wireless presentation,
                interactive displays,
                AI conferencing,
                and intelligent collaboration
                for modern workplaces.

              </p>

            </div>

            <div className="bg-[#18263D] rounded-3xl p-8 border border-[#24A8E0]/20 hover:border-[#F1CF45] transition duration-300">

              <Video
                size={50}
                className="text-[#24A8E0]"
              />

              <h3 className="text-2xl font-bold mt-6">

                Professional Video Systems

              </h3>

              <p className="mt-5 text-gray-300 leading-8">

                Ultra-HD displays,
                video walls,
                digital signage,
                and intelligent visualization
                for every environment.

              </p>

            </div>

            <div className="bg-[#18263D] rounded-3xl p-8 border border-[#24A8E0]/20 hover:border-[#F1CF45] transition duration-300">

              <Mic
                size={50}
                className="text-[#24A8E0]"
              />

              <h3 className="text-2xl font-bold mt-6">

                Crystal Clear Audio

              </h3>

              <p className="mt-5 text-gray-300 leading-8">

                Professional microphones,
                DSP processors,
                ceiling speakers,
                and public address systems
                ensure exceptional sound quality.

              </p>

            </div>

          </div>

        </div>

                {/* AV Applications */}

        <div className="max-w-7xl mx-auto px-6 py-28">

          <div className="text-center mb-16">

            <p className="uppercase tracking-[6px] text-[#24A8E0] font-semibold">
              Applications
            </p>

            <h2 className="text-5xl font-bold mt-4">

              Designed For
              <span className="text-[#F1CF45]">
                {" "}Every Environment
              </span>

            </h2>

            <p className="mt-6 text-gray-400 max-w-3xl mx-auto leading-8">

              Honey Vision delivers customized Audio & Video Integration
              solutions for businesses, institutions, industries, and smart
              environments with reliable performance and intelligent control.

            </p>

          </div>


          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">


            <div className="bg-[#18263D] rounded-3xl p-8 border border-[#24A8E0]/20 hover:-translate-y-2 transition duration-300">

              <MonitorSpeaker
                size={45}
                className="text-[#24A8E0]"
              />

              <h3 className="text-xl font-bold mt-6">
                Corporate Offices
              </h3>

              <p className="mt-4 text-gray-300 leading-7">

                Smart conference rooms,
                presentation systems,
                video conferencing,
                and workplace communication.

              </p>

            </div>



            <div className="bg-[#18263D] rounded-3xl p-8 border border-[#24A8E0]/20 hover:-translate-y-2 transition duration-300">

              <Presentation
                size={45}
                className="text-[#24A8E0]"
              />

              <h3 className="text-xl font-bold mt-6">
                Education Spaces
              </h3>

              <p className="mt-4 text-gray-300 leading-7">

                Interactive classrooms,
                digital learning systems,
                smart displays,
                and lecture solutions.

              </p>

            </div>



            <div className="bg-[#18263D] rounded-3xl p-8 border border-[#24A8E0]/20 hover:-translate-y-2 transition duration-300">

              <Volume2
                size={45}
                className="text-[#24A8E0]"
              />

              <h3 className="text-xl font-bold mt-6">
                Public Spaces
              </h3>

              <p className="mt-4 text-gray-300 leading-7">

                Public announcement systems,
                digital signage,
                background music,
                and information displays.

              </p>

            </div>



            <div className="bg-[#18263D] rounded-3xl p-8 border border-[#24A8E0]/20 hover:-translate-y-2 transition duration-300">

              <Network
                size={45}
                className="text-[#24A8E0]"
              />

              <h3 className="text-xl font-bold mt-6">
                Command Centers
              </h3>

              <p className="mt-4 text-gray-300 leading-7">

                Mission-critical monitoring,
                video walls,
                centralized control,
                and real-time communication.

              </p>

            </div>


          </div>

        </div>



        {/* Technology Stack */}

        <div className="max-w-7xl mx-auto px-6 pb-28">


          <div className="grid lg:grid-cols-2 gap-16 items-center">


            <div>

              <p className="uppercase tracking-[6px] text-[#24A8E0] font-semibold">

                Advanced Technology

              </p>


              <h2 className="text-5xl font-bold mt-5">

                Intelligent
                <span className="text-[#F1CF45]">
                  {" "}AV Ecosystem
                </span>

              </h2>


              <p className="mt-8 text-gray-300 leading-9">

                Our integrated AV platforms are designed with
                modern networking technologies that allow
                seamless communication between multiple devices.

              </p>


              <div className="space-y-5 mt-8">


                <div className="flex gap-4 items-center">

                  <div className="w-3 h-3 bg-[#F1CF45] rounded-full"></div>

                  <p className="text-gray-300">
                    Centralized device management
                  </p>

                </div>


                <div className="flex gap-4 items-center">

                  <div className="w-3 h-3 bg-[#F1CF45] rounded-full"></div>

                  <p className="text-gray-300">
                    AI-powered communication systems
                  </p>

                </div>


                <div className="flex gap-4 items-center">

                  <div className="w-3 h-3 bg-[#F1CF45] rounded-full"></div>

                  <p className="text-gray-300">
                    Secure network integration
                  </p>

                </div>


                <div className="flex gap-4 items-center">

                  <div className="w-3 h-3 bg-[#F1CF45] rounded-full"></div>

                  <p className="text-gray-300">
                    Cloud-based monitoring and control
                  </p>

                </div>


              </div>


            </div>



            <div className="bg-gradient-to-br from-[#18263D] to-[#0D1117] rounded-[35px] p-10 border border-[#24A8E0]/20">


              <h3 className="text-3xl font-bold">

                Complete AV Integration

              </h3>


              <p className="mt-6 text-gray-300 leading-8">

                From planning and installation to configuration
                and maintenance, Honey Vision provides complete
                end-to-end Audio & Video solutions.

              </p>


              <div className="grid grid-cols-2 gap-6 mt-10">


                <div className="bg-[#0D1117] rounded-2xl p-6">

                  <h4 className="text-3xl font-bold text-[#24A8E0]">
                    4K+
                  </h4>

                  <p className="text-gray-400 mt-2">
                    Ultra HD Display
                  </p>

                </div>


                <div className="bg-[#0D1117] rounded-2xl p-6">

                  <h4 className="text-3xl font-bold text-[#F1CF45]">
                    24/7
                  </h4>

                  <p className="text-gray-400 mt-2">
                    System Reliability
                  </p>

                </div>


              </div>


            </div>


          </div>


        </div>

                {/* Installation Process */}

        <div className="max-w-7xl mx-auto px-6 py-28">


          <div className="text-center mb-16">


            <p className="uppercase tracking-[6px] text-[#24A8E0] font-semibold">

              Our Process

            </p>


            <h2 className="text-5xl font-bold mt-4">

              From Concept
              <span className="text-[#F1CF45]">
                {" "}To Completion
              </span>

            </h2>


            <p className="mt-6 text-gray-400 max-w-3xl mx-auto leading-8">

              Honey Vision follows a professional approach to
              design, install, and maintain intelligent AV systems
              that deliver long-term reliability and performance.

            </p>


          </div>



          <div className="grid md:grid-cols-4 gap-8">


            <div className="bg-[#18263D] rounded-3xl p-8 text-center border border-[#24A8E0]/20">

              <div className="w-16 h-16 mx-auto rounded-full bg-[#24A8E0]/20 flex items-center justify-center">

                <span className="text-3xl font-bold text-[#24A8E0]">
                  01
                </span>

              </div>


              <h3 className="text-xl font-bold mt-6">

                Consultation

              </h3>


              <p className="text-gray-300 mt-4 leading-7">

                Understanding requirements,
                environment analysis,
                and solution planning.

              </p>


            </div>




            <div className="bg-[#18263D] rounded-3xl p-8 text-center border border-[#24A8E0]/20">


              <div className="w-16 h-16 mx-auto rounded-full bg-[#24A8E0]/20 flex items-center justify-center">

                <span className="text-3xl font-bold text-[#24A8E0]">
                  02
                </span>

              </div>


              <h3 className="text-xl font-bold mt-6">

                System Design

              </h3>


              <p className="text-gray-300 mt-4 leading-7">

                Creating customized AV
                architecture with the latest
                technologies.

              </p>


            </div>




            <div className="bg-[#18263D] rounded-3xl p-8 text-center border border-[#24A8E0]/20">


              <div className="w-16 h-16 mx-auto rounded-full bg-[#24A8E0]/20 flex items-center justify-center">

                <span className="text-3xl font-bold text-[#24A8E0]">
                  03
                </span>

              </div>


              <h3 className="text-xl font-bold mt-6">

                Installation

              </h3>


              <p className="text-gray-300 mt-4 leading-7">

                Professional setup,
                configuration,
                and integration of devices.

              </p>


            </div>




            <div className="bg-[#18263D] rounded-3xl p-8 text-center border border-[#24A8E0]/20">


              <div className="w-16 h-16 mx-auto rounded-full bg-[#24A8E0]/20 flex items-center justify-center">

                <span className="text-3xl font-bold text-[#24A8E0]">
                  04
                </span>

              </div>


              <h3 className="text-xl font-bold mt-6">

                Support

              </h3>


              <p className="text-gray-300 mt-4 leading-7">

                Continuous monitoring,
                maintenance,
                and technical assistance.

              </p>


            </div>


          </div>


        </div>




        {/* Why Choose Honey Vision */}


        <div className="max-w-7xl mx-auto px-6 pb-28">


          <div className="grid lg:grid-cols-2 gap-16 items-center">


            <div>


              <p className="uppercase tracking-[6px] text-[#24A8E0] font-semibold">

                Why Honey Vision

              </p>


              <h2 className="text-5xl font-bold mt-5">

                Built For
                <span className="text-[#F1CF45]">
                  {" "}Future Communication
                </span>

              </h2>


              <p className="mt-8 text-gray-300 leading-9">

                We combine advanced technology,
                engineering expertise, and customer-focused
                service to create powerful AV experiences.

              </p>



              <div className="space-y-6 mt-10">


                <div className="flex gap-5">

                  <div className="w-12 h-12 rounded-xl bg-[#24A8E0]/20 flex items-center justify-center">

                    <Video className="text-[#24A8E0]" />

                  </div>


                  <div>

                    <h4 className="text-xl font-bold">

                      Latest AV Technology

                    </h4>

                    <p className="text-gray-400 mt-2">

                      Modern displays, audio systems,
                      and intelligent control solutions.

                    </p>

                  </div>

                </div>




                <div className="flex gap-5">


                  <div className="w-12 h-12 rounded-xl bg-[#24A8E0]/20 flex in items-center justify-center">

                    <Network className="text-[#24A8E0]" />

                  </div>


                  <div>

                    <h4 className="text-xl font-bold">

                      Seamless Integration

                    </h4>


                    <p className="text-gray-400 mt-2">

                      Connecting multiple devices into
                      one smart ecosystem.

                    </p>


                  </div>


                </div>




                <div className="flex gap-5">


                  <div className="w-12 h-12 rounded-xl bg-[#24A8E0]/20 flex items-center justify-center">

                    <Mic className="text-[#24A8E0]" />

                  </div>


                  <div>

                    <h4 className="text-xl font-bold">

                      Professional Quality

                    </h4>


                    <p className="text-gray-400 mt-2">

                      Reliable performance with
                      superior sound and clarity.

                    </p>


                  </div>


                </div>


              </div>


            </div>




            <div className="bg-gradient-to-br from-[#18263D] to-[#0D1117] rounded-[35px] p-12 border border-[#24A8E0]/20">


              <h3 className="text-4xl font-bold">

                Transform Your Space

              </h3>


              <p className="mt-6 text-gray-300 leading-8">

                Upgrade your workplace, institution,
                or facility with intelligent Audio &
                Video Integration solutions designed
                for tomorrow.

              </p>



              <button className="mt-10 px-8 py-4 rounded-full bg-[#F1CF45] text-black font-bold hover:bg-yellow-300 transition">

                Connect With Honey Vision

              </button>


            </div>


          </div>


                </div>

        </section>

    </>
  );
};

export default AudioVideoIntegration;