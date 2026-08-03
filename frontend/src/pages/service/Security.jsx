import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";
import { getCloudinaryImageUrl } from "../../utils/cloudinary";

const hero6 = getCloudinaryImageUrl("https://res.cloudinary.com/q6iqvtbe/image/upload/v1785388088/services_velzvz.jpg");
const hero7 = getCloudinaryImageUrl("https://res.cloudinary.com/q6iqvtbe/image/upload/v1785388085/security2_cbd9ra.jpg");
const hero8 = getCloudinaryImageUrl("https://res.cloudinary.com/q6iqvtbe/image/upload/v1785388081/security1_ljfstb.jpg");

import {
  ShieldCheck,
  ClipboardCheck,
  Search,
  FileText,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

const Security = () => {
  return (
    <>
      <Navbar />

      <section className="bg-[#111015] text-white pt-32 pb-24">

        {/* ================= HERO ================= */}

        <div className="max-w-6xl mx-auto px-6 lg:px-8 text-center">

          <p className="uppercase tracking-[6px] text-[#24A8E0] font-semibold">
            Professional Security Consulting
          </p>

          <h1 className="text-5xl lg:text-7xl font-bold mt-5 leading-tight">
            Security
            <span className="text-[#F1CF45]"> Consulting</span>
          </h1>

          <p className="max-w-4xl mx-auto mt-8 text-lg leading-9 text-gray-300">
            Honey Vision helps organizations identify security risks,
            evaluate existing surveillance infrastructure,
            and design intelligent protection strategies
            using AI-driven technologies and industry best practices.
          </p>

        </div>

        {/* ================= IMAGE SHOWCASE ================= */}

        <div className="max-w-6xl mx-auto px-6 lg:px-8 mt-16">

          <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-6">

            {/* Large Image */}

            <div className="overflow-hidden rounded-3xl shadow-xl">

              <img
                src={hero6}
                alt="Security Consulting"
                className="w-full h-[360px] object-cover hover:scale-105 duration-500"
              />

            </div>

            {/* Right Images */}

            <div className="grid gap-6">

              <div className="overflow-hidden rounded-3xl shadow-xl">

                <img
                  src={hero7}
                  alt="Risk Assessment"
                  className="w-full h-[168px] object-cover hover:scale-105 duration-500"
                />

              </div>

              <div className="overflow-hidden rounded-3xl shadow-xl">

                <img
                  src={hero8}
                  alt="Planning"
                  className="w-full h-[168px] object-cover hover:scale-105 duration-500"
                />

              </div>

            </div>

          </div>

        </div>

        {/* ================= VIDEO ================= */}

        <div className="max-w-5xl mx-auto px-6 lg:px-8 mt-12">

          <div className="bg-[#1D416A]/60 rounded-3xl border border-[#24A8E0]/20 p-5">

            <div className="aspect-video rounded-2xl overflow-hidden">

              <iframe
                className="w-full h-full"
                src="https://res.cloudinary.com/q6iqvtbe/video/upload/v1785480395/videoplayback_2_nlwrxs.mp4"
                title="Security Consulting"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />

            </div>

          </div>

        </div>

        {/* ================= CONSULTING HIGHLIGHTS ================= */}

        <div className="max-w-6xl mx-auto px-6 lg:px-8 mt-20">

          <div className="grid md:grid-cols-3 gap-7">

            <div className="bg-[#1D416A] rounded-3xl p-8 border border-[#24A8E0]/20">

              <Search
                size={42}
                className="text-[#24A8E0]"
              />

              <h3 className="text-2xl font-bold mt-6">
                Risk Assessment
              </h3>

              <p className="text-gray-300 leading-8 mt-4">
                We evaluate vulnerabilities,
                identify security gaps,
                and recommend practical improvements
                for complete protection.
              </p>

            </div>

            <div className="bg-[#1D416A] rounded-3xl p-8 border border-[#24A8E0]/20">

              <ClipboardCheck
                size={42}
                className="text-[#24A8E0]"
              />

              <h3 className="text-2xl font-bold mt-6">
                Site Survey
              </h3>

              <p className="text-gray-300 leading-8 mt-4">
                Detailed on-site inspection helps
                determine ideal camera positions,
                blind spots,
                and future expansion possibilities.
              </p>

            </div>

            <div className="bg-[#1D416A] rounded-3xl p-8 border border-[#24A8E0]/20">

              <ShieldCheck
                size={42}
                className="text-[#24A8E0]"
              />

              <h3 className="text-2xl font-bold mt-6">
                Security Planning
              </h3>

              <p className="text-gray-300 leading-8 mt-4">
                Build customized security strategies
                combining AI surveillance,
                access control,
                networking,
                and cloud monitoring.
              </p>

            </div>

          </div>

        </div>

              {/* Overview Section */}

      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-24">

        <div className="grid lg:grid-cols-2 gap-14 items-center">

          <div>

            <span className="uppercase tracking-[4px] text-[#24A8E0] font-semibold">
              Professional Security Consulting
            </span>

            <h2 className="text-5xl font-bold mt-5 leading-tight">
              Building Strong Security
              <span className="text-[#F1CF45]"> Strategies</span>
            </h2>

            <p className="mt-8 text-gray-300 leading-8 text-lg">
              Honey Vision helps organizations identify security risks,
              improve surveillance infrastructure, and design complete
              protection strategies. Our experts evaluate your premises,
              existing systems, and operational challenges before
              recommending the most effective security architecture.
            </p>

            <p className="mt-6 text-gray-400 leading-8">
              From corporate offices and industries to educational
              institutions and smart cities, our consulting services ensure
              that every solution is customized for maximum efficiency,
              scalability, and long-term protection.
            </p>

          </div>

          <div className="grid gap-6">

            <div className="bg-[#1D416A] rounded-3xl p-8 border border-[#24A8E0]/20">

              <h3 className="text-2xl font-bold">
                Risk Assessment
              </h3>

              <p className="mt-4 text-gray-300 leading-8">
                Identify vulnerabilities through detailed site inspections
                and professional security audits.
              </p>

            </div>

            <div className="bg-[#1D416A] rounded-3xl p-8 border border-[#24A8E0]/20">

              <h3 className="text-2xl font-bold">
                Solution Planning
              </h3>

              <p className="mt-4 text-gray-300 leading-8">
                Design intelligent surveillance systems with AI, access
                control, networking, and monitoring solutions.
              </p>

            </div>

            <div className="bg-[#1D416A] rounded-3xl p-8 border border-[#24A8E0]/20">

              <h3 className="text-2xl font-bold">
                Future Ready
              </h3>

              <p className="mt-4 text-gray-300 leading-8">
                Build scalable security infrastructure that grows with your
                organization and future technology requirements.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* Consulting Process */}

      <section className="bg-[#1D416A]/20 py-24">

        <div className="max-w-7xl mx-auto px-6 lg:px-10">

          <div className="text-center">

            <span className="uppercase tracking-[5px] text-[#24A8E0] font-semibold">
              Our Process
            </span>

            <h2 className="text-5xl font-bold mt-5">
              How We Work
            </h2>

            <p className="max-w-3xl mx-auto mt-6 text-gray-300 leading-8">
              Every project follows a structured consulting process to
              ensure reliable, scalable, and future-ready security
              solutions.
            </p>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">

            <div className="bg-[#111015] rounded-3xl p-8 border border-[#24A8E0]/20 hover:border-[#F1CF45] transition">

              <div className="text-5xl font-bold text-[#F1CF45]">
                01
              </div>

              <h3 className="mt-6 text-2xl font-bold">
                Site Survey
              </h3>

              <p className="mt-4 text-gray-300 leading-7">
                Analyze infrastructure, entry points, blind spots, and
                operational risks.
              </p>

            </div>

            <div className="bg-[#111015] rounded-3xl p-8 border border-[#24A8E0]/20 hover:border-[#F1CF45] transition">

              <div className="text-5xl font-bold text-[#F1CF45]">
                02
              </div>

              <h3 className="mt-6 text-2xl font-bold">
                Risk Analysis
              </h3>

              <p className="mt-4 text-gray-300 leading-7">
                Evaluate vulnerabilities and identify the best technology
                for your environment.
              </p>

            </div>

            <div className="bg-[#111015] rounded-3xl p-8 border border-[#24A8E0]/20 hover:border-[#F1CF45] transition">

              <div className="text-5xl font-bold text-[#F1CF45]">
                03
              </div>

              <h3 className="mt-6 text-2xl font-bold">
                Design Solution
              </h3>

              <p className="mt-4 text-gray-300 leading-7">
                Create a complete surveillance and security architecture
                tailored to your business.
              </p>

            </div>

            <div className="bg-[#111015] rounded-3xl p-8 border border-[#24A8E0]/20 hover:border-[#F1CF45] transition">

              <div className="text-5xl font-bold text-[#F1CF45]">
                04
              </div>

              <h3 className="mt-6 text-2xl font-bold">
                Implementation
              </h3>

              <p className="mt-4 text-gray-300 leading-7">
                Support deployment, optimization, training, and long-term
                maintenance.
              </p>

            </div>

          </div>

        </div>

      </section>

            {/* Why Choose Honey Vision */}

      <section className="py-24">

        <div className="max-w-7xl mx-auto px-6 lg:px-10">

          <div className="text-center">

            <span className="uppercase tracking-[5px] text-[#24A8E0] font-semibold">
              Why Choose Us
            </span>

            <h2 className="text-5xl font-bold mt-5">
              Trusted Security
              <span className="text-[#F1CF45]"> Consulting Experts</span>
            </h2>

            <p className="max-w-3xl mx-auto mt-6 text-gray-300 leading-8">
              We combine years of industry experience with modern AI-powered
              technologies to design security systems that are practical,
              scalable, and future-ready.
            </p>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">

            <div className="bg-[#1D416A] rounded-3xl p-8 text-center border border-[#24A8E0]/20 hover:border-[#F1CF45] transition">

              <h3 className="text-5xl font-bold text-[#F1CF45]">
                15+
              </h3>

              <p className="mt-4 text-gray-300">
                Years of Experience
              </p>

            </div>

            <div className="bg-[#1D416A] rounded-3xl p-8 text-center border border-[#24A8E0]/20 hover:border-[#F1CF45] transition">

              <h3 className="text-5xl font-bold text-[#24A8E0]">
                500+
              </h3>

              <p className="mt-4 text-gray-300">
                Projects Delivered
              </p>

            </div>

            <div className="bg-[#1D416A] rounded-3xl p-8 text-center border border-[#24A8E0]/20 hover:border-[#F1CF45] transition">

              <h3 className="text-5xl font-bold text-[#F1CF45]">
                AI
              </h3>

              <p className="mt-4 text-gray-300">
                Intelligent Solutions
              </p>

            </div>

            <div className="bg-[#1D416A] rounded-3xl p-8 text-center border border-[#24A8E0]/20 hover:border-[#F1CF45] transition">

              <h3 className="text-5xl font-bold text-[#24A8E0]">
                24/7
              </h3>

              <p className="mt-4 text-gray-300">
                Expert Support
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* Industries */}

      <section className="pb-24">

        <div className="max-w-7xl mx-auto px-6 lg:px-10">

          <h2 className="text-4xl font-bold text-center">
            Industries We
            <span className="text-[#F1CF45]"> Protect</span>
          </h2>

          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6 mt-14">

            {[
              "Corporate",
              "Manufacturing",
              "Healthcare",
              "Education",
              "Government",
              "Smart Cities",
            ].map((industry) => (

              <div
                key={industry}
                className="bg-[#1D416A] rounded-2xl py-8 border border-[#24A8E0]/20 text-center hover:border-[#F1CF45] transition"
              >

                <p className="font-semibold text-lg">
                  {industry}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* CTA */}

      <section className="pb-24">

        <div className="max-w-7xl mx-auto px-6 lg:px-10">

          <div className="bg-[#F1CF45] rounded-[35px] p-14 text-center">

            <h2 className="text-5xl font-bold text-[#111015]">
              Secure Your Business with Expert Guidance
            </h2>

            <p className="max-w-3xl mx-auto mt-6 text-lg leading-8 text-gray-800">
              Partner with Honey Vision's security consultants to design
              intelligent surveillance strategies that safeguard your
              people, assets, and operations.
            </p>

            <Link
              to="/contact"
              className="mx-auto mt-10 flex w-fit items-center gap-3 rounded-full bg-[#111015] px-10 py-4 font-semibold text-white transition hover:bg-[#24A8E0]"
            >
              Schedule a Consultation
              <ArrowRight size={20} />
            </Link>

          </div>

        </div>

      </section>

    </section>

    </>
  );
};

export default Security;