import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";
import { getCloudinaryImageUrl } from "../../utils/cloudinary";

const hero1 = getCloudinaryImageUrl("https://res.cloudinary.com/q6iqvtbe/image/upload/v1785388048/AI_Consultation2_rs1ybw.jpg");
const hero2 = getCloudinaryImageUrl("https://res.cloudinary.com/q6iqvtbe/image/upload/v1785388110/training2_ort0w8.jpg");
const hero3 = getCloudinaryImageUrl("https://res.cloudinary.com/q6iqvtbe/image/upload/v1785388104/training1_vbpwph.jpg");

import {
  GraduationCap,
  Headphones,
  Users,
  BookOpen,
  ShieldCheck,
  Clock3,
  ArrowRight,
} from "lucide-react";

const TrainingSupport = () => {
  return (
    <>
      <Navbar />

      <section className="bg-[#111015] text-white pt-32 pb-20">

        {/* Hero */}

        <div className="max-w-6xl mx-auto px-6 lg:px-8 text-center">

          <p className="uppercase tracking-[6px] text-[#24A8E0] font-semibold">
            Customer Success Services
          </p>

          <h1 className="text-5xl lg:text-6xl font-bold mt-5">
            Training &
            <span className="text-[#F1CF45]"> 24×7 Support</span>
          </h1>

          <p className="max-w-4xl mx-auto mt-8 text-lg text-gray-300 leading-9">
            Honey Vision provides comprehensive user training and continuous
            technical support to ensure every surveillance system operates at
            peak performance. From installation to long-term maintenance, our
            experts are always available whenever you need assistance.
          </p>

        </div>

        {/* Images */}

        <div className="max-w-6xl mx-auto px-6 lg:px-8 mt-16">

          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-6">

            <div className="rounded-3xl overflow-hidden border border-[#24A8E0]/20 shadow-xl">

              <img
                src={hero1}
                alt="Training Session"
                className="w-full h-[340px] object-cover hover:scale-105 transition duration-500"
              />

            </div>

            <div className="grid gap-6">

              <div className="rounded-3xl overflow-hidden border border-[#24A8E0]/20 shadow-xl">

                <img
                  src={hero2}
                  alt="Technical Workshop"
                  className="w-full h-[160px] object-cover hover:scale-105 transition duration-500"
                />

              </div>

              <div className="rounded-3xl overflow-hidden border border-[#24A8E0]/20 shadow-xl">

                <img
                  src={hero3}
                  alt="Support Team"
                  className="w-full h-[160px] object-cover hover:scale-105 transition duration-500"
                />

              </div>

            </div>

          </div>

        </div>

        {/* Video */}

        <div className="max-w-5xl mx-auto px-6 mt-12">

          <div className="bg-[#1D416A]/70 rounded-3xl p-5 border border-[#24A8E0]/20 shadow-xl">

            <div className="aspect-video rounded-2xl overflow-hidden">

              <iframe
                className="w-full h-full"
                src="https://res.cloudinary.com/q6iqvtbe/video/upload/v1785480428/videoplayback_3_k1hfnf.mp4"
                title="Training & Support"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />

            </div>

          </div>

        </div>

        {/* Highlights */}

        <div className="max-w-6xl mx-auto px-6 lg:px-8 mt-16">

          <div className="grid md:grid-cols-3 gap-6">

            <div className="bg-[#1D416A]/70 rounded-3xl p-7 border border-[#24A8E0]/20">

              <Users className="text-[#24A8E0]" size={38} />

              <h3 className="text-2xl font-semibold mt-5">
                Expert Trainers
              </h3>

              <p className="mt-4 text-gray-300 leading-7">
                Learn directly from experienced engineers with practical
                demonstrations and real-world security scenarios.
              </p>

            </div>

            <div className="bg-[#1D416A]/70 rounded-3xl p-7 border border-[#24A8E0]/20">

              <ShieldCheck className="text-[#F1CF45]" size={38} />

              <h3 className="text-2xl font-semibold mt-5">
                Certified Programs
              </h3>

              <p className="mt-4 text-gray-300 leading-7">
                Gain the knowledge needed to manage surveillance systems
                confidently through structured training sessions.
              </p>

            </div>

            <div className="bg-[#1D416A]/70 rounded-3xl p-7 border border-[#24A8E0]/20">

              <Clock3 className="text-[#24A8E0]" size={38} />

              <h3 className="text-2xl font-semibold mt-5">
                24×7 Assistance
              </h3>

              <p className="mt-4 text-gray-300 leading-7">
                Dedicated support engineers are available around the clock to
                resolve technical issues and provide remote guidance.
              </p>

            </div>

          </div>

        </div>

                {/* Overview */}

        <section className="max-w-7xl mx-auto px-6 lg:px-10 py-24">

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            <div>

              <span className="uppercase tracking-[5px] text-[#24A8E0] font-semibold">
                Knowledge & Assistance
              </span>

              <h2 className="text-5xl font-bold mt-5 leading-tight">
                Empowering Your Team
                <span className="text-[#F1CF45]"> Every Day</span>
              </h2>

              <p className="mt-8 text-lg leading-8 text-gray-300">
                Technology is only effective when users know how to use it
                confidently. Honey Vision provides practical training sessions,
                technical documentation, and expert assistance to help your
                team maximize the performance of every surveillance system.
              </p>

              <p className="mt-6 text-gray-400 leading-8">
                Whether you require on-site training, remote guidance,
                troubleshooting, or preventive maintenance, our support team
                ensures your systems remain reliable and secure throughout
                their lifecycle.
              </p>

            </div>

            <div className="space-y-6">

              <Link
                to="/contact"
                className="block rounded-3xl border border-[#24A8E0]/20 bg-[#1D416A] p-8 transition hover:border-[#F1CF45]"
              >
                <h3 className="text-2xl font-bold">
                  Operator Training
                </h3>

                <p className="mt-4 text-gray-300 leading-7">
                  Learn camera operation, live monitoring, playback,
                  reporting, and alarm management through hands-on sessions.
                </p>
              </Link>

              <Link
                to="/contact"
                className="block rounded-3xl border border-[#24A8E0]/20 bg-[#1D416A] p-8 transition hover:border-[#F1CF45]"
              >
                <h3 className="text-2xl font-bold">
                  Administrator Training
                </h3>

                <p className="mt-4 text-gray-300 leading-7">
                  Configure devices, manage users, maintain storage,
                  networking, and system security with confidence.
                </p>
              </Link>

              <Link
                to="/contact"
                className="block rounded-3xl border border-[#24A8E0]/20 bg-[#1D416A] p-8 transition hover:border-[#F1CF45]"
              >
                <h3 className="text-2xl font-bold">
                  Technical Assistance
                </h3>

                <p className="mt-4 text-gray-300 leading-7">
                  Receive expert support through phone, email, remote access,
                  or on-site engineering whenever required.
                </p>
              </Link>

            </div>

          </div>

        </section>

        {/* Support Process */}

        <section className="bg-[#1D416A]/20 py-24">

          <div className="max-w-7xl mx-auto px-6 lg:px-10">

            <div className="text-center">

              <span className="uppercase tracking-[5px] text-[#24A8E0] font-semibold">
                Our Support Process
              </span>

              <h2 className="text-5xl font-bold mt-5">
                Always Ready to Help
              </h2>

              <p className="max-w-3xl mx-auto mt-6 text-gray-300 leading-8">
                Every support request follows a streamlined process to ensure
                quick response times and reliable resolutions.
              </p>

            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">

              <div className="bg-[#111015] rounded-3xl p-8 border border-[#24A8E0]/20 hover:border-[#F1CF45] transition">

                <div className="text-5xl font-bold text-[#F1CF45]">
                  01
                </div>

                <h3 className="mt-6 text-2xl font-bold">
                  Contact
                </h3>

                <p className="mt-4 text-gray-300 leading-7">
                  Reach our support team through phone, email, or online
                  assistance anytime.
                </p>

              </div>

              <div className="bg-[#111015] rounded-3xl p-8 border border-[#24A8E0]/20 hover:border-[#F1CF45] transition">

                <div className="text-5xl font-bold text-[#F1CF45]">
                  02
                </div>

                <h3 className="mt-6 text-2xl font-bold">
                  Diagnosis
                </h3>

                <p className="mt-4 text-gray-300 leading-7">
                  Our engineers identify the issue using remote diagnostics
                  and system analysis.
                </p>

              </div>

              <div className="bg-[#111015] rounded-3xl p-8 border border-[#24A8E0]/20 hover:border-[#F1CF45] transition">

                <div className="text-5xl font-bold text-[#F1CF45]">
                  03
                </div>

                <h3 className="mt-6 text-2xl font-bold">
                  Resolution
                </h3>

                <p className="mt-4 text-gray-300 leading-7">
                  Problems are resolved through remote support or on-site
                  service visits when necessary.
                </p>

              </div>

              <div className="bg-[#111015] rounded-3xl p-8 border border-[#24A8E0]/20 hover:border-[#F1CF45] transition">

                <div className="text-5xl font-bold text-[#F1CF45]">
                  04
                </div>

                <h3 className="mt-6 text-2xl font-bold">
                  Follow-Up
                </h3>

                <p className="mt-4 text-gray-300 leading-7">
                  We verify system performance and provide guidance to
                  prevent future issues.
                </p>

              </div>

            </div>

          </div>

        </section>

        {/* Training Programs */}

        <section className="max-w-7xl mx-auto px-6 lg:px-10 py-24">

          <div className="text-center">

            <span className="uppercase tracking-[5px] text-[#24A8E0] font-semibold">
              Training Programs
            </span>

            <h2 className="text-5xl font-bold mt-5">
              Learn From
              <span className="text-[#F1CF45]"> Industry Experts</span>
            </h2>

          </div>

          <div className="grid lg:grid-cols-3 gap-8 mt-16">

            <div className="bg-[#1D416A] rounded-3xl p-8 border border-[#24A8E0]/20">

              <h3 className="text-2xl font-bold">
                Basic User Training
              </h3>

              <p className="mt-5 text-gray-300 leading-8">
                Daily operation, live view, playback, recording,
                alarms, and reporting.
              </p>

            </div>

            <div className="bg-[#1D416A] rounded-3xl p-8 border border-[#24A8E0]/20">

              <h3 className="text-2xl font-bold">
                Advanced Administration
              </h3>

              <p className="mt-5 text-gray-300 leading-8">
                Network configuration, storage management,
                permissions, and cloud integration.
              </p>

            </div>

            <div className="bg-[#1D416A] rounded-3xl p-8 border border-[#24A8E0]/20">

              <h3 className="text-2xl font-bold">
                AI System Training
              </h3>

              <p className="mt-5 text-gray-300 leading-8">
                Face recognition, analytics, intrusion detection,
                reporting, and smart automation.
              </p>

            </div>

          </div>

        </section>

                {/* Why Choose Honey Vision */}

        <section className="pb-24">

          <div className="max-w-7xl mx-auto px-6 lg:px-10">

            <div className="text-center">

              <span className="uppercase tracking-[5px] text-[#24A8E0] font-semibold">
                Why Honey Vision
              </span>

              <h2 className="text-5xl font-bold mt-5">
                Trusted
                <span className="text-[#F1CF45]"> Support Partner</span>
              </h2>

              <p className="max-w-3xl mx-auto mt-6 text-gray-300 leading-8">
                Our relationship with customers continues long after installation.
                We provide continuous guidance, technical expertise, and rapid
                assistance to keep every surveillance system running at its best.
              </p>

            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">

              <div className="bg-[#1D416A] rounded-3xl p-8 text-center border border-[#24A8E0]/20 hover:border-[#F1CF45] transition">

                <h3 className="text-5xl font-bold text-[#F1CF45]">
                  24×7
                </h3>

                <p className="mt-4 text-gray-300">
                  Technical Support
                </p>

              </div>

              <div className="bg-[#1D416A] rounded-3xl p-8 text-center border border-[#24A8E0]/20 hover:border-[#F1CF45] transition">

                <h3 className="text-5xl font-bold text-[#24A8E0]">
                  100+
                </h3>

                <p className="mt-4 text-gray-300">
                  Training Sessions
                </p>

              </div>

              <div className="bg-[#1D416A] rounded-3xl p-8 text-center border border-[#24A8E0]/20 hover:border-[#F1CF45] transition">

                <h3 className="text-5xl font-bold text-[#F1CF45]">
                  500+
                </h3>

                <p className="mt-4 text-gray-300">
                  Systems Supported
                </p>

              </div>

              <div className="bg-[#1D416A] rounded-3xl p-8 text-center border border-[#24A8E0]/20 hover:border-[#F1CF45] transition">

                <h3 className="text-5xl font-bold text-[#24A8E0]">
                  99%
                </h3>

                <p className="mt-4 text-gray-300">
                  Customer Satisfaction
                </p>

              </div>

            </div>

          </div>

        </section>

        {/* Support Coverage */}

        <section className="pb-24">

          <div className="max-w-7xl mx-auto px-6 lg:px-10">

            <div className="bg-gradient-to-r from-[#1D416A] to-[#162E47] rounded-[35px] p-12 border border-[#24A8E0]/20">

              <div className="grid lg:grid-cols-2 gap-12 items-center">

                <div>

                  <h2 className="text-4xl font-bold">
                    Complete Support Coverage
                  </h2>

                  <p className="mt-6 text-gray-300 leading-8">
                    Honey Vision offers end-to-end customer support including
                    remote troubleshooting, software updates, preventive
                    maintenance, system optimization, emergency response,
                    operator assistance, and periodic health checks.
                  </p>

                </div>

                <div className="space-y-5">

                  <div className="flex items-center gap-4 bg-[#111015]/40 rounded-2xl p-5">

                    <ShieldCheck className="text-[#F1CF45]" size={30} />

                    <span className="text-lg">
                      Remote & On-Site Technical Support
                    </span>

                  </div>

                  <div className="flex items-center gap-4 bg-[#111015]/40 rounded-2xl p-5">

                    <BookOpen className="text-[#24A8E0]" size={30} />

                    <span className="text-lg">
                      User Manuals & Knowledge Base
                    </span>

                  </div>

                  <div className="flex items-center gap-4 bg-[#111015]/40 rounded-2xl p-5">

                    <GraduationCap className="text-[#F1CF45]" size={30} />

                    <span className="text-lg">
                      Refresher Training Programs
                    </span>

                  </div>

                  <div className="flex items-center gap-4 bg-[#111015]/40 rounded-2xl p-5">

                    <Headphones className="text-[#24A8E0]" size={30} />

                    <span className="text-lg">
                      Dedicated Customer Help Desk
                    </span>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </section>

        {/* CTA */}

        <section className="pb-24">

          <div className="max-w-7xl mx-auto px-6 lg:px-10">

            <div className="bg-[#F1CF45] rounded-[35px] p-14 text-center">

              <h2 className="text-5xl font-bold text-[#111015]">
                Need Training or Technical Support?
              </h2>

              <p className="max-w-3xl mx-auto mt-6 text-lg text-gray-800 leading-8">
                Our certified engineers and training specialists are ready to
                help your team maximize the performance of every Honey Vision
                solution.
              </p>

              <Link
                to="/contact"
                className="mx-auto mt-10 flex w-fit items-center gap-3 rounded-full bg-[#111015] px-10 py-4 font-semibold text-white transition hover:bg-[#24A8E0]"
              >
                Contact Support
                <ArrowRight size={20} />
              </Link>

            </div>

          </div>

        </section>

      </section>

    </>
  );
};

export default TrainingSupport;