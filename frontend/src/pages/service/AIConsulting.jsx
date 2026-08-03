import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";
import {
  Brain,
  Lightbulb,
  ShieldCheck,
  Cpu,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

const AIConsulting = () => {
  return (
    <>
      <Navbar />

      <section className="bg-[#111015] text-white pt-28 pb-20">

        {/* Hero Section */}
        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          <div className="text-center">

            <p className="uppercase tracking-[6px] text-[#24A8E0] font-semibold">
              AI Consulting Services
            </p>

            <h1 className="text-5xl lg:text-6xl font-bold mt-5">
              Build Smarter Businesses with
              <span className="text-[#F1CF45]"> Artificial Intelligence</span>
            </h1>

            <p className="mt-8 text-lg text-gray-300 leading-8 max-w-4xl mx-auto">
              Honey Vision helps organizations adopt Artificial Intelligence
              through expert consulting, strategic planning, machine learning
              solutions, and intelligent automation. We transform innovative
              ideas into practical AI-powered business solutions.
            </p>

          </div>

          {/* Overview */}

          <div className="grid lg:grid-cols-2 gap-14 mt-24 items-center">

            <div>

              <h2 className="text-4xl font-bold">
                AI Strategy &
                <span className="text-[#24A8E0]"> Digital Transformation</span>
              </h2>

              <p className="mt-6 text-gray-300 leading-8">
                Our AI consultants evaluate your current business processes,
                identify automation opportunities, and design AI roadmaps that
                improve productivity, reduce operational costs, and enhance
                customer experiences.
              </p>

              <p className="mt-5 text-gray-300 leading-8">
                From computer vision and predictive analytics to intelligent
                surveillance and business automation, Honey Vision provides
                complete consulting services tailored to your industry.
              </p>

            </div>

            <div className="bg-[#1D416A] rounded-3xl p-10 border border-[#24A8E0]/20">

              <Brain className="text-[#24A8E0]" size={60} />

              <h3 className="text-3xl font-bold mt-6">
                Why AI Consulting?
              </h3>

              <ul className="space-y-5 mt-8 text-gray-300">

                <li className="flex gap-3">
                  <CheckCircle className="text-[#F1CF45]" />
                  Identify AI opportunities.
                </li>

                <li className="flex gap-3">
                  <CheckCircle className="text-[#F1CF45]" />
                  Improve operational efficiency.
                </li>

                <li className="flex gap-3">
                  <CheckCircle className="text-[#F1CF45]" />
                  Reduce manual processes.
                </li>

                <li className="flex gap-3">
                  <CheckCircle className="text-[#F1CF45]" />
                  Increase business intelligence.
                </li>

                <li className="flex gap-3">
                  <CheckCircle className="text-[#F1CF45]" />
                  Future-ready digital transformation.
                </li>

              </ul>

            </div>

          </div>

          {/* Services */}

          <div className="mt-24">

            <h2 className="text-4xl font-bold text-center">
              Our AI Consulting Services
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">

              <div className="bg-[#1D416A] rounded-3xl p-8">
                <Lightbulb className="text-[#F1CF45]" size={45} />
                <h3 className="text-2xl font-bold mt-5">
                  AI Strategy
                </h3>
                <p className="mt-4 text-gray-300 leading-7">
                  Business AI roadmap, planning, feasibility studies, and
                  technology selection.
                </p>
              </div>

              <div className="bg-[#1D416A] rounded-3xl p-8">
                <Cpu className="text-[#24A8E0]" size={45} />
                <h3 className="text-2xl font-bold mt-5">
                  Machine Learning
                </h3>
                <p className="mt-4 text-gray-300 leading-7">
                  Custom ML models, predictive analytics, and intelligent
                  automation solutions.
                </p>
              </div>

              <div className="bg-[#1D416A] rounded-3xl p-8">
                <Brain className="text-[#F1CF45]" size={45} />
                <h3 className="text-2xl font-bold mt-5">
                  Computer Vision
                </h3>
                <p className="mt-4 text-gray-300 leading-7">
                  Facial recognition, object detection, intelligent video
                  analytics, and automation.
                </p>
              </div>

              <div className="bg-[#1D416A] rounded-3xl p-8">
                <ShieldCheck className="text-[#24A8E0]" size={45} />
                <h3 className="text-2xl font-bold mt-5">
                  AI Security
                </h3>
                <p className="mt-4 text-gray-300 leading-7">
                  Smart surveillance, intelligent monitoring, and enterprise
                  security consulting.
                </p>
              </div>

            </div>

          </div>

          {/* Process */}

          <div className="mt-28">

            <h2 className="text-4xl font-bold text-center">
              Our Consulting Process
            </h2>

            <div className="grid md:grid-cols-4 gap-8 mt-16">

              {[
                "Business Analysis",
                "AI Strategy",
                "Implementation Plan",
                "Continuous Support",
              ].map((step, index) => (

                <div
                  key={index}
                  className="bg-[#1D416A] rounded-3xl p-8 text-center"
                >

                  <div className="w-14 h-14 rounded-full bg-[#F1CF45] text-black flex items-center justify-center mx-auto font-bold text-xl">
                    {index + 1}
                  </div>

                  <h3 className="mt-6 text-xl font-bold">
                    {step}
                  </h3>

                </div>

              ))}

            </div>

          </div>

          {/* CTA */}

          <div className="mt-28 bg-gradient-to-r from-[#1D416A] to-[#24A8E0] rounded-3xl p-14 text-center">

            <h2 className="text-5xl font-bold">
              Ready to Transform Your Business?
            </h2>

            <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-100 leading-8">
              Partner with Honey Vision to unlock the power of Artificial
              Intelligence and accelerate your digital transformation journey.
            </p>

            <Link
              to="/contact"
              className="mt-10 flex w-fit items-center gap-2 rounded-full bg-[#F1CF45] px-10 py-4 font-semibold text-black transition hover:bg-white mx-auto"
            >
              Talk to Our Experts
              <ArrowRight size={20} />
            </Link>

          </div>

        </div>

      </section>
    </>
  );
};

export default AIConsulting;