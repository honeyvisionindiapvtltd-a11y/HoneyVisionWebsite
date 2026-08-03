import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";
import { getCloudinaryImageUrl } from "../../utils/cloudinary";

const hero4 = getCloudinaryImageUrl("https://res.cloudinary.com/q6iqvtbe/image/upload/v1785440684/installation_dylza5.jpg");
const hero5 = getCloudinaryImageUrl("https://res.cloudinary.com/q6iqvtbe/image/upload/v1785388058/installation2_keib4o.jpg");
const hero6 = getCloudinaryImageUrl("https://res.cloudinary.com/q6iqvtbe/image/upload/v1785440683/installation_1_ssliqr.jpg");

import {
  Camera,
  Network,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";

const Installation = () => {
  return (
    <>
      <Navbar />

      <section className="bg-[#111015] text-white pt-32 pb-24">

        {/* ================= HERO ================= */}

        <div className="max-w-7xl mx-auto px-6 lg:px-10 text-center">

          <p className="uppercase tracking-[6px] text-[#24A8E0] font-semibold">
            Professional Installation Services
          </p>

          <h1 className="text-6xl font-bold mt-5 leading-tight">
            CCTV & AV
            <span className="text-[#F1CF45]">
              {" "}Installation
            </span>
          </h1>

          <p className="max-w-4xl mx-auto mt-8 text-lg text-gray-300 leading-9">
            Honey Vision provides complete installation services for
            surveillance cameras, AI security systems, networking,
            audio visual equipment, and smart automation solutions.
            Our certified engineers ensure reliable installation,
            professional cable management, and long-term performance.
          </p>

        </div>

        {/* ================= IMAGE SHOWCASE ================= */}

        <div className="max-w-7xl mx-auto px-6 lg:px-10 mt-20">

          <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-8">

            {/* Left Image */}

            <div className="overflow-hidden rounded-3xl border border-[#24A8E0]/20 shadow-2xl">

              <img
                src={hero4}
                alt="Installation"
                className="w-full h-[420px] object-cover hover:scale-105 transition duration-700"
              />

            </div>

            {/* Right Images */}

            <div className="grid gap-8">

              <div className="overflow-hidden rounded-3xl border border-[#24A8E0]/20 shadow-xl">

                <img
                  src={hero5}
                  alt="Camera Installation"
                  className="w-full h-[195px] object-cover hover:scale-105 transition duration-700"
                />

              </div>

              <div className="overflow-hidden rounded-3xl border border-[#24A8E0]/20 shadow-xl">

                <img
                  src={hero6}
                  alt="Network Installation"
                  className="w-full h-[195px] object-cover hover:scale-105 transition duration-700"
                />

              </div>

            </div>

          </div>

        </div>

        {/* ================= VIDEO ================= */}

        <div className="max-w-6xl mx-auto px-6 mt-20">

          <div className="rounded-3xl overflow-hidden border border-[#24A8E0]/20 shadow-2xl">

            <iframe
              className="w-full aspect-video"
              src="https://res.cloudinary.com/q6iqvtbe/video/upload/v1785479206/videoplayback_rkrkw5.mp4"
              title="Installation Demo"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />

          </div>

        </div>

        {/* ================= QUICK HIGHLIGHTS ================= */}

        <div className="max-w-7xl mx-auto px-6 lg:px-10 mt-20">

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-[#1D416A] rounded-3xl p-8 border border-[#24A8E0]/20">

              <ShieldCheck
                size={42}
                className="text-[#24A8E0]"
              />

              <h3 className="text-2xl font-bold mt-6">
                Certified Engineers
              </h3>

              <p className="text-gray-300 mt-4 leading-8">
                Installation performed by trained and experienced
                professionals.
              </p>

            </div>

            <div className="bg-[#1D416A] rounded-3xl p-8 border border-[#24A8E0]/20">

              <Camera
                size={42}
                className="text-[#24A8E0]"
              />

              <h3 className="text-2xl font-bold mt-6">
                Clean Installation
              </h3>

              <p className="text-gray-300 mt-4 leading-8">
                Organized cable routing with professional finishing
                and reliable setup.
              </p>

            </div>

            <div className="bg-[#1D416A] rounded-3xl p-8 border border-[#24A8E0]/20">

              <Network
                size={42}
                className="text-[#24A8E0]"
              />

              <h3 className="text-2xl font-bold mt-6">
                Complete Networking
              </h3>

              <p className="text-gray-300 mt-4 leading-8">
                Camera connectivity, switch configuration,
                storage setup, and remote monitoring.
              </p>

            </div>

          </div>

        </div>

              {/* Installation Process */}

      <section className="py-24 px-6 lg:px-16 bg-[#16181D]">
        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-16">
            <p className="uppercase tracking-[5px] text-[#24A8E0] font-semibold">
              Installation Process
            </p>

            <h2 className="text-5xl font-bold mt-4">
              Our <span className="text-[#F1CF45]">Working Process</span>
            </h2>

            <p className="max-w-3xl mx-auto mt-6 text-gray-300 leading-8">
              From planning to deployment, Honey Vision follows a structured
              installation process that guarantees reliable performance,
              professional execution, and complete customer satisfaction.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            <div className="relative bg-[#1D416A] rounded-3xl p-8 border border-[#24A8E0]/20 hover:border-[#F1CF45] transition">
              <div className="w-16 h-16 rounded-full bg-[#F1CF45] text-[#111015] flex items-center justify-center text-2xl font-bold">
                01
              </div>

              <h3 className="text-2xl font-bold mt-6">
                Site Survey
              </h3>

              <p className="mt-4 text-gray-300 leading-7">
                Our engineers inspect the location, understand customer
                requirements, and recommend the best installation plan.
              </p>
            </div>

            <div className="relative bg-[#1D416A] rounded-3xl p-8 border border-[#24A8E0]/20 hover:border-[#F1CF45] transition">
              <div className="w-16 h-16 rounded-full bg-[#24A8E0] text-white flex items-center justify-center text-2xl font-bold">
                02
              </div>

              <h3 className="text-2xl font-bold mt-6">
                System Design
              </h3>

              <p className="mt-4 text-gray-300 leading-7">
                We create a customized installation layout with optimal camera
                positions, cable routing, and equipment placement.
              </p>
            </div>

            <div className="relative bg-[#1D416A] rounded-3xl p-8 border border-[#24A8E0]/20 hover:border-[#F1CF45] transition">
              <div className="w-16 h-16 rounded-full bg-[#F1CF45] text-[#111015] flex items-center justify-center text-2xl font-bold">
                03
              </div>

              <h3 className="text-2xl font-bold mt-6">
                Installation
              </h3>

              <p className="mt-4 text-gray-300 leading-7">
                Certified technicians install cameras, networking devices,
                storage units, and complete system integration.
              </p>
            </div>

            <div className="relative bg-[#1D416A] rounded-3xl p-8 border border-[#24A8E0]/20 hover:border-[#F1CF45] transition">
              <div className="w-16 h-16 rounded-full bg-[#24A8E0] text-white flex items-center justify-center text-2xl font-bold">
                04
              </div>

              <h3 className="text-2xl font-bold mt-6">
                Testing & Training
              </h3>

              <p className="mt-4 text-gray-300 leading-7">
                Every device is tested thoroughly, and our experts provide
                complete training so your team can operate the system easily.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* Why Professional Installation */}

      <section className="py-24 px-6 lg:px-16 bg-[#111015]">

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-center">

          <div>

            <p className="uppercase tracking-[5px] text-[#24A8E0] font-semibold">
              Why Honey Vision
            </p>

            <h2 className="text-5xl font-bold mt-5">
              Professional Installation
              <span className="text-[#F1CF45]"> Matters</span>
            </h2>

            <p className="mt-8 text-gray-300 leading-8">
              Proper installation directly affects camera performance,
              recording quality, network reliability, and long-term system
              stability. Honey Vision ensures every project is delivered with
              precision and industry best practices.
            </p>

            <div className="grid sm:grid-cols-2 gap-5 mt-10">

              <div className="bg-[#1D416A] rounded-2xl p-5">
                <h4 className="font-semibold text-xl">
                  ✓ Certified Engineers
                </h4>
              </div>

              <div className="bg-[#1D416A] rounded-2xl p-5">
                <h4 className="font-semibold text-xl">
                  ✓ Neat Cable Management
                </h4>
              </div>

              <div className="bg-[#1D416A] rounded-2xl p-5">
                <h4 className="font-semibold text-xl">
                  ✓ Complete System Testing
                </h4>
              </div>

              <div className="bg-[#1D416A] rounded-2xl p-5">
                <h4 className="font-semibold text-xl">
                  ✓ Warranty Support
                </h4>
              </div>

            </div>

          </div>

          <div className="bg-gradient-to-br from-[#1D416A] to-[#0F1115] rounded-3xl p-10 border border-[#24A8E0]/20">

            <h3 className="text-3xl font-bold">
              Installation Highlights
            </h3>

            <div className="space-y-8 mt-10">

              <div className="border-l-4 border-[#F1CF45] pl-5">
                <h4 className="font-semibold text-xl">
                  High Quality Equipment
                </h4>
                <p className="text-gray-300 mt-2">
                  Premium cameras, NVRs, networking devices, and accessories.
                </p>
              </div>

              <div className="border-l-4 border-[#24A8E0] pl-5">
                <h4 className="font-semibold text-xl">
                  Secure Network Configuration
                </h4>
                <p className="text-gray-300 mt-2">
                  Protected remote access with optimized bandwidth and storage.
                </p>
              </div>

              <div className="border-l-4 border-[#F1CF45] pl-5">
                <h4 className="font-semibold text-xl">
                  After Installation Support
                </h4>
                <p className="text-gray-300 mt-2">
                  Maintenance, software updates, troubleshooting, and customer
                  assistance whenever required.
                </p>
              </div>

            </div>

          </div>

        </div>

      </section>

            {/* Project Statistics */}

      <section className="py-24 px-6 lg:px-16 bg-[#16181D]">

        <div className="max-w-7xl mx-auto">

          <div className="grid md:grid-cols-4 gap-8">

            <div className="bg-[#1D416A] rounded-3xl p-8 text-center border border-[#24A8E0]/20">
              <h2 className="text-5xl font-bold text-[#F1CF45]">500+</h2>
              <p className="mt-4 text-gray-300">
                Projects Installed
              </p>
            </div>

            <div className="bg-[#1D416A] rounded-3xl p-8 text-center border border-[#24A8E0]/20">
              <h2 className="text-5xl font-bold text-[#24A8E0]">50+</h2>
              <p className="mt-4 text-gray-300">
                Certified Engineers
              </p>
            </div>

            <div className="bg-[#1D416A] rounded-3xl p-8 text-center border border-[#24A8E0]/20">
              <h2 className="text-5xl font-bold text-[#F1CF45]">24×7</h2>
              <p className="mt-4 text-gray-300">
                Technical Support
              </p>
            </div>

            <div className="bg-[#1D416A] rounded-3xl p-8 text-center border border-[#24A8E0]/20">
              <h2 className="text-5xl font-bold text-[#24A8E0]">100%</h2>
              <p className="mt-4 text-gray-300">
                Customer Satisfaction
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* Customer Reviews */}

      <section className="py-24 px-6 lg:px-16 bg-[#111015]">

        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-16">

            <p className="uppercase tracking-[5px] text-[#24A8E0] font-semibold">
              Testimonials
            </p>

            <h2 className="text-5xl font-bold mt-4">
              What Our
              <span className="text-[#F1CF45]"> Clients Say</span>
            </h2>

          </div>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-[#1D416A] rounded-3xl p-8 border border-[#24A8E0]/20">
              <p className="text-gray-300 leading-8 italic">
                "Honey Vision completed our CCTV installation professionally.
                The entire system works perfectly and the support team is
                excellent."
              </p>

              <h4 className="mt-8 text-xl font-semibold">
                Rahul Sharma
              </h4>

              <span className="text-[#24A8E0]">
                Manufacturing Company
              </span>
            </div>

            <div className="bg-[#1D416A] rounded-3xl p-8 border border-[#24A8E0]/20">
              <p className="text-gray-300 leading-8 italic">
                "Their installation engineers were highly skilled. Everything
                from wiring to configuration was completed on time."
              </p>

              <h4 className="mt-8 text-xl font-semibold">
                Priya Verma
              </h4>

              <span className="text-[#24A8E0]">
                School Administrator
              </span>
            </div>

            <div className="bg-[#1D416A] rounded-3xl p-8 border border-[#24A8E0]/20">
              <p className="text-gray-300 leading-8 italic">
                "Professional installation with neat cable management and
                excellent after-sales service. Highly recommended."
              </p>

              <h4 className="mt-8 text-xl font-semibold">
                Amit Patel
              </h4>

              <span className="text-[#24A8E0]">
                Business Owner
              </span>
            </div>

          </div>

        </div>

      </section>

      {/* Call To Action */}

      <section className="py-24 px-6 lg:px-16">

        <div className="max-w-6xl mx-auto">

          <div className="bg-[#F1CF45] rounded-[40px] p-14 text-center">

            <h2 className="text-5xl font-bold text-[#111015]">
              Ready to Install Your Security System?
            </h2>

            <p className="max-w-3xl mx-auto mt-6 text-lg text-gray-800 leading-8">
              Let Honey Vision design and install a complete surveillance,
              networking, and security solution tailored to your business,
              industry, or home.
            </p>

            <Link
              to="/contact"
              className="mx-auto mt-10 flex w-fit items-center gap-3 rounded-full bg-[#111015] px-10 py-4 font-semibold text-white transition hover:bg-[#24A8E0]"
            >
              Get Free Site Survey
              <ArrowRight size={20} />
            </Link>

          </div>

        </div>

      </section>

      </section>

    </>
  );
};

export default Installation;