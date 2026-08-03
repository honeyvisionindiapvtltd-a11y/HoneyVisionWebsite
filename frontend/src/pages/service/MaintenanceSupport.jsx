import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";
import { getCloudinaryImageUrl } from "../../utils/cloudinary";

const hero1 = getCloudinaryImageUrl("https://res.cloudinary.com/q6iqvtbe/image/upload/v1785388074/maintanance2_vkwbfj.jpg");
const hero2 = getCloudinaryImageUrl("https://res.cloudinary.com/q6iqvtbe/image/upload/v1785388070/maintanance1_jp3rmv.jpg");
const hero3 = getCloudinaryImageUrl("https://res.cloudinary.com/q6iqvtbe/image/upload/v1785388065/maintanance_kkjdla.jpg");

import {
  Wrench,
  ShieldCheck,
  Settings,
  RefreshCw,
  Clock3,
  MonitorSmartphone,
  ArrowRight,
} from "lucide-react";

const features = [
  {
    icon: <Settings size={40} />,
    title: "Preventive Maintenance",
    description:
      "Regular inspections, cleaning, and health checks keep surveillance systems performing at their best.",
    image: hero1,
  },
  {
    icon: <RefreshCw size={40} />,
    title: "System Upgrades",
    description:
      "Firmware updates, software upgrades, and configuration optimization for maximum performance.",
    image: hero2,
  },
  {
    icon: <ShieldCheck size={40} />,
    title: "Security Audits",
    description:
      "Complete inspection of cameras, storage, networking, and security settings to prevent failures.",
    image: hero3,
  },
  {
    icon: <Clock3 size={40} />,
    title: "24×7 Support",
    description:
      "Fast troubleshooting and remote assistance whenever your surveillance system needs attention.",
    image: hero1,
  },
  {
    icon: <MonitorSmartphone size={40} />,
    title: "Remote Monitoring",
    description:
      "Continuous monitoring and proactive alerts ensure maximum uptime for your security infrastructure.",
    image: hero2,
  },
  {
    icon: <Wrench size={40} />,
    title: "Repair Services",
    description:
      "Quick replacement of damaged equipment, cables, storage devices, and surveillance accessories.",
    image: hero3,
  },
];

const MaintenanceSupport = () => {
  return (
    <>
      <Navbar />

      <section className="bg-[#111015] text-white pt-32">

        {/* Hero */}

        <div className="max-w-6xl mx-auto px-6 text-center">

          <p className="uppercase tracking-[6px] text-[#24A8E0] font-semibold">
            Reliable Support Services
          </p>

          <h1 className="text-6xl font-bold mt-5">
            System
            <span className="text-[#F1CF45]"> Maintenance</span>
          </h1>

          <p className="max-w-4xl mx-auto mt-8 text-lg text-gray-300 leading-9">
            Honey Vision provides complete preventive and corrective
            maintenance services to keep your surveillance, networking,
            and security systems running efficiently all year round.
          </p>

        </div>

        {/* Images */}

        <div className="max-w-6xl mx-auto px-6 mt-16">

          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-6">

            <div className="rounded-3xl overflow-hidden border border-[#24A8E0]/20">
              <img
                src={hero1}
                alt=""
                className="w-full h-[330px] object-cover"
              />
            </div>

            <div className="grid gap-6">

              <div className="rounded-3xl overflow-hidden border border-[#24A8E0]/20">
                <img
                  src={hero2}
                  alt=""
                  className="w-full h-[155px] object-cover"
                />
              </div>

              <div className="rounded-3xl overflow-hidden border border-[#24A8E0]/20">
                <img
                  src={hero3}
                  alt=""
                  className="w-full h-[155px] object-cover"
                />
              </div>

            </div>

          </div>

        </div>

        {/* Video */}

        <div className="max-w-5xl mx-auto px-6 mt-12">

          <div className="bg-[#1D416A]/70 border border-[#24A8E0]/20 rounded-3xl p-5">

            <div className="aspect-video rounded-2xl overflow-hidden">

              <iframe
                className="w-full h-full"
                src="https://res.cloudinary.com/q6iqvtbe/video/upload/v1785479705/videoplayback_1_kjfsra.mp4"
                title="Maintenance Services"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />

            </div>

          </div>

        </div>

        {/* Quick Highlights */}

        <div className="max-w-6xl mx-auto px-6 mt-16">

          <div className="grid md:grid-cols-3 gap-6">

            <div className="bg-[#1D416A]/70 rounded-3xl p-7 border border-[#24A8E0]/20">

              <p className="uppercase text-[#24A8E0] tracking-[3px] text-sm">
                Prevent Downtime
              </p>

              <h3 className="text-2xl font-bold mt-4">
                Continuous System Health
              </h3>

              <p className="mt-4 text-gray-300 leading-7">
                Regular servicing prevents unexpected failures and extends
                equipment life.
              </p>

            </div>

            <div className="bg-[#1D416A]/70 rounded-3xl p-7 border border-[#24A8E0]/20">

              <p className="uppercase text-[#24A8E0] tracking-[3px] text-sm">
                Expert Engineers
              </p>

              <h3 className="text-2xl font-bold mt-4">
                Certified Professionals
              </h3>

              <p className="mt-4 text-gray-300 leading-7">
                Experienced technicians provide reliable diagnostics,
                repairs, and optimization.
              </p>

            </div>

            <div className="bg-[#1D416A]/70 rounded-3xl p-7 border border-[#24A8E0]/20">

              <p className="uppercase text-[#24A8E0] tracking-[3px] text-sm">
                Fast Response
              </p>

              <h3 className="text-2xl font-bold mt-4">
                Immediate Support
              </h3>

              <p className="mt-4 text-gray-300 leading-7">
                Our support team quickly resolves technical issues to keep
                your operations running smoothly.
              </p>

            </div>

          </div>

        </div>

                {/* Maintenance Process */}

        <section className="py-24 px-6 lg:px-16">

          <div className="max-w-7xl mx-auto">

            <div className="text-center">

              <p className="uppercase tracking-[5px] text-[#24A8E0] font-semibold">
                Maintenance Process
              </p>

              <h2 className="text-5xl font-bold mt-4">
                How We Keep Your
                <span className="text-[#F1CF45]"> System Healthy</span>
              </h2>

              <p className="max-w-3xl mx-auto mt-6 text-gray-300 leading-8">
                Our preventive maintenance process minimizes downtime,
                improves equipment lifespan, and ensures uninterrupted
                security performance.
              </p>

            </div>

            <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 mt-16">

              <div className="bg-[#1D416A] rounded-3xl p-8 border border-[#24A8E0]/20">

                <div className="w-16 h-16 rounded-full bg-[#F1CF45] text-[#111015] flex items-center justify-center text-2xl font-bold">
                  01
                </div>

                <h3 className="text-2xl font-bold mt-6">
                  Inspection
                </h3>

                <p className="mt-4 text-gray-300 leading-7">
                  Complete inspection of cameras, recorders, cables,
                  storage devices, and networking equipment.
                </p>

              </div>

              <div className="bg-[#1D416A] rounded-3xl p-8 border border-[#24A8E0]/20">

                <div className="w-16 h-16 rounded-full bg-[#24A8E0] flex items-center justify-center text-2xl font-bold">
                  02
                </div>

                <h3 className="text-2xl font-bold mt-6">
                  Cleaning
                </h3>

                <p className="mt-4 text-gray-300 leading-7">
                  Camera lenses, cabinets, DVRs, NVRs and networking
                  hardware are cleaned for optimal performance.
                </p>

              </div>

              <div className="bg-[#1D416A] rounded-3xl p-8 border border-[#24A8E0]/20">

                <div className="w-16 h-16 rounded-full bg-[#F1CF45] text-[#111015] flex items-center justify-center text-2xl font-bold">
                  03
                </div>

                <h3 className="text-2xl font-bold mt-6">
                  Testing
                </h3>

                <p className="mt-4 text-gray-300 leading-7">
                  Recording quality, storage capacity, remote access,
                  alerts and AI features are tested thoroughly.
                </p>

              </div>

              <div className="bg-[#1D416A] rounded-3xl p-8 border border-[#24A8E0]/20">

                <div className="w-16 h-16 rounded-full bg-[#24A8E0] flex items-center justify-center text-2xl font-bold">
                  04
                </div>

                <h3 className="text-2xl font-bold mt-6">
                  Optimization
                </h3>

                <p className="mt-4 text-gray-300 leading-7">
                  Firmware updates, software upgrades, and system tuning
                  ensure maximum efficiency.
                </p>

              </div>

            </div>

          </div>

        </section>

        {/* AMC Plans */}

        <section className="py-24 px-6 lg:px-16 bg-[#16181D]">

          <div className="max-w-7xl mx-auto">

            <div className="text-center">

              <p className="uppercase tracking-[5px] text-[#24A8E0] font-semibold">
                Annual Maintenance
              </p>

              <h2 className="text-5xl font-bold mt-4">
                AMC
                <span className="text-[#F1CF45]"> Services</span>
              </h2>

            </div>

            <div className="grid md:grid-cols-3 gap-8 mt-16">

              <div className="bg-[#1D416A] rounded-3xl p-8 border border-[#24A8E0]/20 hover:border-[#F1CF45] transition">

                <h3 className="text-3xl font-bold">
                  Basic AMC
                </h3>

                <ul className="mt-8 space-y-4 text-gray-300">
                  <li>✓ Quarterly Inspection</li>
                  <li>✓ Cleaning Service</li>
                  <li>✓ Health Report</li>
                  <li>✓ Phone Support</li>
                </ul>

              </div>

              <div className="bg-[#F1CF45] rounded-3xl p-8 text-[#111015]">

                <p className="uppercase font-semibold">
                  Most Popular
                </p>

                <h3 className="text-3xl font-bold mt-4">
                  Premium AMC
                </h3>

                <ul className="mt-8 space-y-4">
                  <li>✓ Monthly Inspection</li>
                  <li>✓ Firmware Updates</li>
                  <li>✓ Emergency Visit</li>
                  <li>✓ Remote Monitoring</li>
                  <li>✓ Priority Support</li>
                </ul>

              </div>

              <div className="bg-[#1D416A] rounded-3xl p-8 border border-[#24A8E0]/20 hover:border-[#F1CF45] transition">

                <h3 className="text-3xl font-bold">
                  Enterprise AMC
                </h3>

                <ul className="mt-8 space-y-4 text-gray-300">
                  <li>✓ Dedicated Engineer</li>
                  <li>✓ Unlimited Visits</li>
                  <li>✓ AI System Audit</li>
                  <li>✓ Spare Replacement</li>
                  <li>✓ 24×7 Support</li>
                </ul>

              </div>

            </div>

          </div>

        </section>

        {/* Why Choose Us */}

        <section className="py-24 px-6 lg:px-16">

          <div className="max-w-7xl mx-auto">

            <div className="text-center">

              <h2 className="text-5xl font-bold">
                Why Choose Honey Vision
              </h2>

              <p className="max-w-3xl mx-auto mt-6 text-gray-300 leading-8">
                We don't just repair systems—we proactively maintain,
                optimize, and future-proof your security infrastructure.
              </p>

            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

              {features.map((feature, index) => (

                <div
                  key={index}
                  className="overflow-hidden rounded-3xl bg-[#1D416A] border border-[#24A8E0]/20 hover:border-[#F1CF45] hover:-translate-y-2 transition duration-300"
                >

                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="h-48 w-full object-cover"
                  />

                  <div className="p-8">

                    <div className="text-[#24A8E0]">
                      {feature.icon}
                    </div>

                    <h3 className="text-2xl font-bold mt-6">
                      {feature.title}
                    </h3>

                    <p className="mt-5 text-gray-300 leading-8">
                      {feature.description}
                    </p>

                  </div>

                </div>

              ))}

            </div>

          </div>

        </section>

              {/* Statistics */}

      <section className="py-24 px-6 lg:px-16 bg-[#16181D]">

        <div className="max-w-7xl mx-auto">

          <div className="grid md:grid-cols-4 gap-8">

            <div className="bg-[#1D416A] rounded-3xl p-8 text-center border border-[#24A8E0]/20">
              <h2 className="text-5xl font-bold text-[#F1CF45]">
                1000+
              </h2>
              <p className="mt-4 text-gray-300">
                Systems Maintained
              </p>
            </div>

            <div className="bg-[#1D416A] rounded-3xl p-8 text-center border border-[#24A8E0]/20">
              <h2 className="text-5xl font-bold text-[#24A8E0]">
                24×7
              </h2>
              <p className="mt-4 text-gray-300">
                Technical Support
              </p>
            </div>

            <div className="bg-[#1D416A] rounded-3xl p-8 text-center border border-[#24A8E0]/20">
              <h2 className="text-5xl font-bold text-[#F1CF45]">
                99%
              </h2>
              <p className="mt-4 text-gray-300">
                System Uptime
              </p>
            </div>

            <div className="bg-[#1D416A] rounded-3xl p-8 text-center border border-[#24A8E0]/20">
              <h2 className="text-5xl font-bold text-[#24A8E0]">
                10+
              </h2>
              <p className="mt-4 text-gray-300">
                Years Experience
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* Testimonials */}

      <section className="py-24 px-6 lg:px-16 bg-[#111015]">

        <div className="max-w-7xl mx-auto">

          <div className="text-center">

            <p className="uppercase tracking-[5px] text-[#24A8E0] font-semibold">
              Client Feedback
            </p>

            <h2 className="text-5xl font-bold mt-4">
              Trusted by
              <span className="text-[#F1CF45]"> Businesses</span>
            </h2>

          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-16">

            <div className="bg-[#1D416A] rounded-3xl p-8 border border-[#24A8E0]/20">

              <p className="italic text-gray-300 leading-8">
                "Honey Vision's maintenance team keeps our CCTV system
                running perfectly. Their response time is outstanding."
              </p>

              <h4 className="mt-8 text-xl font-semibold">
                Rahul Sharma
              </h4>

              <span className="text-[#24A8E0]">
                Manufacturing Plant
              </span>

            </div>

            <div className="bg-[#1D416A] rounded-3xl p-8 border border-[#24A8E0]/20">

              <p className="italic text-gray-300 leading-8">
                "Their AMC service has significantly reduced downtime.
                We never worry about our surveillance system anymore."
              </p>

              <h4 className="mt-8 text-xl font-semibold">
                Priya Patel
              </h4>

              <span className="text-[#24A8E0]">
                Corporate Office
              </span>

            </div>

            <div className="bg-[#1D416A] rounded-3xl p-8 border border-[#24A8E0]/20">

              <p className="italic text-gray-300 leading-8">
                "Professional engineers, fast support, and regular
                maintenance visits make Honey Vision our trusted partner."
              </p>

              <h4 className="mt-8 text-xl font-semibold">
                Amit Verma
              </h4>

              <span className="text-[#24A8E0]">
                Educational Institution
              </span>

            </div>

          </div>

        </div>

      </section>

      {/* CTA */}

      <section className="py-24 px-6 lg:px-16">

        <div className="max-w-6xl mx-auto">

          <div className="bg-[#F1CF45] rounded-[40px] p-14 text-center">

            <p className="uppercase tracking-[4px] font-semibold text-[#111015]">
              Keep Your Security System Running
            </p>

            <h2 className="text-5xl font-bold text-[#111015] mt-4">
              Schedule Your Maintenance Today
            </h2>

            <p className="max-w-3xl mx-auto mt-6 text-lg text-gray-800 leading-8">
              Prevent unexpected failures with Honey Vision's professional
              maintenance services. Our certified engineers ensure your
              surveillance and security systems perform at their best,
              every day.
            </p>

            <Link
              to="/contact"
              className="mx-auto mt-10 flex w-fit items-center gap-3 rounded-full bg-[#111015] px-10 py-4 font-semibold text-white transition duration-300 hover:bg-[#24A8E0]"
            >
              Book Maintenance Visit
              <ArrowRight size={20} />
            </Link>

          </div>

        </div>

      </section>

      </section>

    </>
  );
};

export default MaintenanceSupport;