import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";

import { getCloudinaryImageUrl } from "../../utils/cloudinary";

const hero7 = getCloudinaryImageUrl("https://res.cloudinary.com/q6iqvtbe/image/upload/v1785388290/Cloud_Platform2_weu7o9.jpg");
const hero3 = getCloudinaryImageUrl("https://res.cloudinary.com/q6iqvtbe/image/upload/v1785388286/Cloud_Platform1_soaifm.jpg");
const hero5 = getCloudinaryImageUrl("https://res.cloudinary.com/q6iqvtbe/image/upload/v1785388281/Cloud_Platform_t3xtgb.jpg");

import {
  Cloud,
  Database,
  ShieldCheck,
  Wifi,
  Server,
  MonitorSmartphone,
  Activity,
  Lock,
} from "lucide-react";


const CloudConnectivity = () => {

  return (
    <>
      <Navbar />


      <section className="bg-[#0D1117] text-white pt-32">


        {/* Hero Section */}


        <div className="max-w-7xl mx-auto px-6">


          <div className="grid lg:grid-cols-2 gap-16 items-center">


            <div>


              <p className="uppercase tracking-[6px] text-[#24A8E0] font-semibold">

                Smart Cloud Technology

              </p>



              <h1 className="text-6xl font-bold leading-tight mt-5">


                Cloud
                <span className="text-[#F1CF45]">
                  {" "}Connectivity
                </span>


              </h1>



              <p className="mt-8 text-lg leading-9 text-gray-300">


                Honey Vision delivers secure cloud connectivity
                solutions that connect surveillance systems,
                AI platforms, and smart devices through reliable
                cloud infrastructure for anytime, anywhere access.


              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="rounded-full bg-[#F1CF45] px-8 py-4 font-semibold text-black transition hover:bg-[#24A8E0] hover:text-white"
                >
                  Talk to Our Team
                </Link>
                <Link
                  to="/solutions"
                  className="rounded-full border border-[#24A8E0]/40 px-8 py-4 font-semibold text-white transition hover:border-[#F1CF45] hover:text-[#F1CF45]"
                >
                  Explore Cloud Solutions
                </Link>
              </div>

              <div className="flex flex-wrap gap-5 mt-10">


                <div className="bg-[#18263D] border border-[#24A8E0]/20 rounded-2xl px-7 py-5">


                  <p className="text-gray-400 text-sm">

                    Cloud Connected Devices

                  </p>


                  <h3 className="text-3xl font-bold text-[#24A8E0] mt-2">

                    10K+

                  </h3>


                </div>




                <div className="bg-[#18263D] border border-[#24A8E0]/20 rounded-2xl px-7 py-5">


                  <p className="text-gray-400 text-sm">

                    Remote Availability

                  </p>


                  <h3 className="text-3xl font-bold text-[#F1CF45] mt-2">

                    24/7

                  </h3>


                </div>


              </div>


            </div>




            <div>


              <img
                src={hero7}
                alt="Cloud Connectivity"
                className="w-full h-[560px] rounded-[35px] object-cover"
              />


            </div>


          </div>


        </div>




        {/* Cloud Overview */}


        <div className="max-w-7xl mx-auto px-6 py-28">


          <div className="grid lg:grid-cols-2 gap-16 items-center">


            <div>


              <img
                src={hero3}
                alt="Cloud Infrastructure"
                className="w-full h-[470px] rounded-[30px] object-cover"
              />


            </div>



            <div>


              <p className="uppercase tracking-[5px] text-[#24A8E0] font-semibold">

                Connected Intelligence

              </p>



              <h2 className="text-5xl font-bold mt-5">


                Everything Connected
                <span className="text-[#F1CF45]">
                  {" "}Through Cloud
                </span>


              </h2>



              <p className="mt-8 text-gray-300 leading-9">


                Our cloud platforms enable centralized
                monitoring, intelligent data management,
                and real-time access to security and
                automation systems from anywhere.


              </p>



              <p className="mt-6 text-gray-400 leading-8">


                From CCTV monitoring and AI analytics to
                smart infrastructure management, Honey Vision
                provides scalable cloud solutions designed
                for modern businesses.


              </p>


            </div>


          </div>


        </div>

                {/* Cloud Features */}


        <div className="max-w-7xl mx-auto px-6 pb-28">


          <div className="text-center mb-16">


            <p className="uppercase tracking-[6px] text-[#24A8E0] font-semibold">

              Cloud Capabilities

            </p>



            <h2 className="text-5xl font-bold mt-4">


              Powerful
              <span className="text-[#F1CF45]">
                {" "}Cloud Solutions
              </span>


            </h2>



          </div>




          <div className="grid md:grid-cols-3 gap-8">



            <div className="bg-[#18263D] rounded-3xl p-8 border border-[#24A8E0]/20 hover:border-[#F1CF45] transition duration-300">


              <Cloud
                size={50}
                className="text-[#24A8E0]"
              />


              <h3 className="text-2xl font-bold mt-6">

                Cloud Monitoring

              </h3>


              <p className="mt-5 text-gray-300 leading-8">


                Monitor cameras, devices,
                and smart systems remotely
                through secure cloud platforms
                from anywhere.


              </p>


            </div>





            <div className="bg-[#18263D] rounded-3xl p-8 border border-[#24A8E0]/20 hover:border-[#F1CF45] transition duration-300">


              <Database
                size={50}
                className="text-[#24A8E0]"
              />


              <h3 className="text-2xl font-bold mt-6">

                Smart Data Management

              </h3>


              <p className="mt-5 text-gray-300 leading-8">


                Intelligent data storage,
                organization, and access
                management for large-scale
                surveillance systems.


              </p>


            </div>





            <div className="bg-[#18263D] rounded-3xl p-8 border border-[#24A8E0]/20 hover:border-[#F1CF45] transition duration-300">


              <ShieldCheck
                size={50}
                className="text-[#24A8E0]"
              />


              <h3 className="text-2xl font-bold mt-6">

                Secure Cloud Protection

              </h3>


              <p className="mt-5 text-gray-300 leading-8">


                Advanced encryption and
                authentication technologies
                keep your data protected.


              </p>


            </div>



          </div>


        </div>





        {/* Remote Access Section */}



        <div className="max-w-7xl mx-auto px-6 pb-28">


          <div className="grid lg:grid-cols-2 gap-16 items-center">



            <div>


              <p className="uppercase tracking-[6px] text-[#24A8E0] font-semibold">


                Remote Intelligence


              </p>




              <h2 className="text-5xl font-bold mt-5">


                Control Everything
                <span className="text-[#F1CF45]">
                  {" "}Anywhere
                </span>


              </h2>




              <p className="mt-8 text-gray-300 leading-9">


                Cloud connectivity removes location
                limitations by providing instant access
                to your security and automation systems
                through connected devices.


              </p>




              <div className="space-y-5 mt-8">



                <div className="flex items-center gap-4">


                  <Wifi
                    className="text-[#F1CF45]"
                  />


                  <p className="text-gray-300">

                    Real-time remote monitoring

                  </p>


                </div>





                <div className="flex items-center gap-4">


                  <MonitorSmartphone
                    className="text-[#F1CF45]"
                  />


                  <p className="text-gray-300">

                    Mobile and web-based access

                  </p>


                </div>





                <div className="flex items-center gap-4">


                  <Activity
                    className="text-[#F1CF45]"
                  />


                  <p className="text-gray-300">

                    Live system performance tracking

                  </p>


                </div>





                <div className="flex items-center gap-4">


                  <Server
                    className="text-[#F1CF45]"
                  />


                  <p className="text-gray-300">

                    Scalable cloud infrastructure

                  </p>


                </div>



              </div>


            </div>






            <div className="bg-gradient-to-br from-[#18263D] to-[#0D1117] rounded-[35px] p-10 border border-[#24A8E0]/20">


              <h3 className="text-3xl font-bold">

                Cloud Powered Security

              </h3>



              <p className="mt-6 text-gray-300 leading-8">


                Honey Vision combines cloud computing
                with AI-powered solutions to deliver
                faster insights, better decision-making,
                and improved operational efficiency.


              </p>




              <div className="grid grid-cols-2 gap-6 mt-10">



                <div className="bg-[#0D1117] rounded-2xl p-6">


                  <h4 className="text-3xl font-bold text-[#24A8E0]">

                    99.9%

                  </h4>


                  <p className="text-gray-400 mt-2">

                    Service Reliability

                  </p>


                </div>





                <div className="bg-[#0D1117] rounded-2xl p-6">


                  <h4 className="text-3xl font-bold text-[#F1CF45]">

                    1TB+

                  </h4>


                  <p className="text-gray-400 mt-2">

                    Data Capacity

                  </p>


                </div>



              </div>


            </div>



          </div>


        </div>

                {/* Cloud Security Architecture */}


        <div className="max-w-7xl mx-auto px-6 py-28">


          <div className="grid lg:grid-cols-2 gap-16 items-center">


            <div>


              <img
                src={hero5}
                alt="Cloud Security"
                className="w-full h-[470px] rounded-[30px] object-cover"
              />


            </div>



            <div>


              <p className="uppercase tracking-[6px] text-[#24A8E0] font-semibold">

                Secure Infrastructure

              </p>



              <h2 className="text-5xl font-bold mt-5">


                Protected By
                <span className="text-[#F1CF45]">
                  {" "}Advanced Security
                </span>


              </h2>



              <p className="mt-8 text-gray-300 leading-9">


                Honey Vision cloud platforms are designed
                with advanced security layers to protect
                sensitive data and maintain reliable
                connectivity across all connected devices.


              </p>



              <div className="space-y-5 mt-8">


                <div className="flex gap-4 items-center">


                  <Lock className="text-[#24A8E0]" />


                  <p className="text-gray-300">

                    End-to-end data encryption

                  </p>


                </div>




                <div className="flex gap-4 items-center">


                  <ShieldCheck className="text-[#24A8E0]" />


                  <p className="text-gray-300">

                    Multi-layer security protection

                  </p>


                </div>




                <div className="flex gap-4 items-center">


                  <Database className="text-[#24A8E0]" />


                  <p className="text-gray-300">

                    Secure cloud data storage

                  </p>


                </div>



              </div>


            </div>


          </div>


        </div>





        {/* AI Cloud Analytics */}


        <div className="max-w-7xl mx-auto px-6 pb-28">


          <div className="text-center mb-16">


            <p className="uppercase tracking-[6px] text-[#24A8E0] font-semibold">

              AI Powered Cloud

            </p>



            <h2 className="text-5xl font-bold mt-4">


              Intelligent Data
              <span className="text-[#F1CF45]">
                {" "}Analysis
              </span>


            </h2>


          </div>




          <div className="grid md:grid-cols-3 gap-8">



            <div className="bg-[#18263D] rounded-3xl p-8 border border-[#24A8E0]/20">


              <Activity
                size={50}
                className="text-[#24A8E0]"
              />


              <h3 className="text-2xl font-bold mt-6">

                Real-Time Insights

              </h3>


              <p className="mt-5 text-gray-300 leading-8">


                Analyze live data streams
                and receive intelligent
                alerts instantly.


              </p>


            </div>




            <div className="bg-[#18263D] rounded-3xl p-8 border border-[#24A8E0]/20">


              <MonitorSmartphone
                size={50}
                className="text-[#24A8E0]"
              />


              <h3 className="text-2xl font-bold mt-6">

                Smart Device Control

              </h3>


              <p className="mt-5 text-gray-300 leading-8">


                Manage connected devices
                and smart systems through
                centralized platforms.


              </p>


            </div>




            <div className="bg-[#18263D] rounded-3xl p-8 border border-[#24A8E0]/20">


              <Cloud
                size={50}
                className="text-[#24A8E0]"
              />


              <h3 className="text-2xl font-bold mt-6">

                Scalable Cloud Growth

              </h3>


              <p className="mt-5 text-gray-300 leading-8">


                Expand your infrastructure
                easily with flexible cloud
                solutions.


              </p>


            </div>



          </div>


        </div>





        {/* Industry Applications */}



        <div className="max-w-7xl mx-auto px-6 pb-28">


          <div className="text-center mb-16">


            <p className="uppercase tracking-[6px] text-[#24A8E0] font-semibold">

              Applications

            </p>


            <h2 className="text-5xl font-bold mt-4">


              Cloud Connectivity
              <span className="text-[#F1CF45]">
                {" "}For Every Sector
              </span>


            </h2>


          </div>




          <div className="grid md:grid-cols-4 gap-8">



            <div className="bg-[#18263D] rounded-3xl p-8 text-center">


              <h3 className="text-xl font-bold">

                Smart Homes

              </h3>


              <p className="text-gray-300 mt-4 leading-7">

                Connected security,
                automation,
                and remote control.

              </p>


            </div>




            <div className="bg-[#18263D] rounded-3xl p-8 text-center">


              <h3 className="text-xl font-bold">

                Agriculture

              </h3>


              <p className="text-gray-300 mt-4 leading-7">

                Smart farming,
                monitoring,
                and IoT solutions.

              </p>


            </div>




            <div className="bg-[#18263D] rounded-3xl p-8 text-center">


              <h3 className="text-xl font-bold">

                Industries

              </h3>


              <p className="text-gray-300 mt-4 leading-7">

                Industrial monitoring
                and intelligent
                automation.

              </p>


            </div>




            <div className="bg-[#18263D] rounded-3xl p-8 text-center">


              <h3 className="text-xl font-bold">

                Enterprises

              </h3>


              <p className="text-gray-300 mt-4 leading-7">

                Secure business
                infrastructure
                management.

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


                Connected Today,
                <span className="text-[#F1CF45]">
                  {" "}Ready For Tomorrow
                </span>


              </h2>



              <p className="mt-8 text-gray-300 leading-9">


                Honey Vision combines cloud technology,
                artificial intelligence, and secure networking
                to create reliable digital ecosystems for
                homes, businesses, agriculture, and industries.


              </p>




              <div className="space-y-6 mt-10">



                <div className="flex gap-5">


                  <div className="w-12 h-12 rounded-xl bg-[#24A8E0]/20 flex items-center justify-center">


                    <Cloud
                      className="text-[#24A8E0]"
                    />


                  </div>



                  <div>


                    <h4 className="text-xl font-bold">

                      Advanced Cloud Platform

                    </h4>


                    <p className="text-gray-400 mt-2">

                      Reliable cloud infrastructure
                      designed for continuous connectivity.

                    </p>


                  </div>


                </div>






                <div className="flex gap-5">


                  <div className="w-12 h-12 rounded-xl bg-[#24A8E0]/20 flex items-center justify-center">


                    <ShieldCheck
                      className="text-[#24A8E0]"
                    />


                  </div>



                  <div>


                    <h4 className="text-xl font-bold">

                      Secure Data Protection

                    </h4>


                    <p className="text-gray-400 mt-2">

                      Protecting valuable information
                      with modern security technologies.

                    </p>


                  </div>


                </div>







                <div className="flex gap-5">


                  <div className="w-12 h-12 rounded-xl bg-[#24A8E0]/20 flex items-center justify-center">


                    <Server
                      className="text-[#24A8E0]"
                    />


                  </div>



                  <div>


                    <h4 className="text-xl font-bold">

                      Scalable Solutions

                    </h4>


                    <p className="text-gray-400 mt-2">

                      Flexible cloud systems that grow
                      with your future requirements.

                    </p>


                  </div>


                </div>



              </div>



            </div>







            <div className="bg-gradient-to-br from-[#18263D] to-[#0D1117] rounded-[40px] p-12 border border-[#24A8E0]/20">


              <h3 className="text-4xl font-bold">


                Experience Smart
                <span className="text-[#F1CF45]">
                  {" "}Cloud Connectivity
                </span>


              </h3>




              <p className="mt-6 text-gray-300 leading-8">


                Connect your security systems,
                smart devices, and business operations
                with Honey Vision's intelligent cloud
                technology solutions.


              </p>





              <div className="grid grid-cols-2 gap-6 mt-10">



                <div className="bg-[#0D1117] rounded-2xl p-6">


                  <h4 className="text-3xl font-bold text-[#24A8E0]">

                    99.9%

                  </h4>


                  <p className="text-gray-400 mt-2">

                    Cloud Availability

                  </p>


                </div>





                <div className="bg-[#0D1117] rounded-2xl p-6">


                  <h4 className="text-3xl font-bold text-[#F1CF45]">

                    24/7

                  </h4>


                  <p className="text-gray-400 mt-2">

                    Remote Access

                  </p>


                </div>



              </div>





              <button className="mt-10 px-8 py-4 rounded-full bg-[#F1CF45] text-black font-bold hover:bg-yellow-300 transition">


                Connect With Honey Vision


              </button>



            </div>



          </div>


        </div>






        {/* Final CTA Banner */}



        <div className="max-w-7xl mx-auto px-6 pb-28">


          <div className="relative overflow-hidden rounded-[40px] bg-gradient-to-r from-[#18263D] to-[#0D1117] border border-[#24A8E0]/20 p-12 text-center">


            <h2 className="text-5xl font-bold">


              Build A Smarter
              <span className="text-[#F1CF45]">
                {" "}Connected Future
              </span>


            </h2>



            <p className="mt-6 text-gray-300 max-w-3xl mx-auto leading-8">


              Honey Vision brings cloud connectivity,
              AI intelligence, and secure technology
              together to transform the way people,
              businesses, and industries operate.


            </p>



            <button className="mt-10 px-10 py-4 rounded-full bg-[#24A8E0] text-white font-bold hover:bg-blue-500 transition">


              Explore Cloud Solutions


            </button>



          </div>


        </div>



      </section>


    </>
  );
};


export default CloudConnectivity;