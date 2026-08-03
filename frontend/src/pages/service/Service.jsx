import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";
import {
  Wrench,
  ShieldCheck,
  GraduationCap,
  Settings,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

import { getCloudinaryImageUrl } from "../../utils/cloudinary";
const bgImage = "https://res.cloudinary.com/q6iqvtbe/image/upload/v1785692267/bg_z1keoj.png";

const hero1 = getCloudinaryImageUrl("https://res.cloudinary.com/q6iqvtbe/image/upload/v1785388062/installation3_iuv7sv.jpg");
const hero2 = getCloudinaryImageUrl("https://res.cloudinary.com/q6iqvtbe/image/upload/v1785388065/maintanance_kkjdla.jpg");
const hero3 = getCloudinaryImageUrl("https://res.cloudinary.com/q6iqvtbe/image/upload/v1785388085/security2_cbd9ra.jpg");
const hero4 = getCloudinaryImageUrl("https://res.cloudinary.com/q6iqvtbe/image/upload/v1785388100/training_ck6rqk.jpg");
const hero5 = getCloudinaryImageUrl("https://res.cloudinary.com/q6iqvtbe/image/upload/v1785388058/installation2_keib4o.jpg");
const hero6 = getCloudinaryImageUrl("https://res.cloudinary.com/q6iqvtbe/image/upload/v1785388070/maintanance1_jp3rmv.jpg");
const hero7 = getCloudinaryImageUrl("https://res.cloudinary.com/q6iqvtbe/image/upload/v1785388088/services_velzvz.jpg");
const hero8 = getCloudinaryImageUrl("https://res.cloudinary.com/q6iqvtbe/image/upload/v1785388044/AI_Consultation_kyr0iu.jpg");

const services = [
  {
    title: "Professional Installation",
    desc: "Certified installation for CCTV, AI surveillance, access control, and AV systems.",
    icon: <Wrench size={34} />,
    image: hero1,
    route: "/service/installation",
  },
  {
    title: "Maintenance & Support",
    desc: "Preventive maintenance and rapid issue resolution to maximize uptime.",
    icon: <Settings size={34} />,
    image: hero2,
    route: "/service/maintenance",
  },
  {
    title: "Security Consulting",
    desc: "End-to-end security planning, risk assessment, and solution design.",
    icon: <ShieldCheck size={34} />,
    image: hero3,
    route: "/service/security-consulting",
  },
  {
    title: "Training & 24×7 Support",
    desc: "Operator training and round-the-clock technical assistance whenever needed.",
    icon: <GraduationCap size={34} />,
    image: hero4,
    route: "/service/training-support",
  },
];

const Service = () => {
  return (
    <>
      <Navbar />

      <section
        className="relative overflow-hidden text-white"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-black/30" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(36,168,224,0.16),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(241,207,69,0.08),transparent_25%)]" />

        {/* Hero */}

        <section className="relative h-[75vh] overflow-hidden">

          <img
            src={hero7}
            className="absolute inset-0 h-full w-full object-cover"
            alt=""
          />

          <div className="absolute inset-0 bg-black/65" />

          <div className="relative z-10 max-w-6xl mx-auto h-full flex items-center px-6">

            <div className="max-w-3xl">

              <p className="uppercase tracking-[5px] text-[#24A8E0] font-semibold">
                Honey Vision Services
              </p>

              <h1 className="text-6xl font-bold mt-5 leading-tight">
                Professional Services For
                <span className="text-[#F1CF45]"> Intelligent Security</span>
              </h1>

              <p className="mt-8 text-lg text-gray-300 leading-8">
                We don't simply deliver products—we design, install, optimize,
                and maintain complete intelligent security ecosystems that
                protect businesses, industries, institutions, and smart cities.
              </p>

              <Link
                to="/service/installation"
                className="mt-10 inline-flex w-fit items-center gap-2 rounded-full bg-[#F1CF45] px-8 py-4 font-semibold text-black transition hover:bg-[#24A8E0] hover:text-white"
              >
                Explore Services
                <ArrowRight size={20} />
              </Link>

            </div>

          </div>

        </section>

        {/* Service Categories */}

        <section className="max-w-7xl mx-auto px-6 py-24">

          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">

            {services.map((service, index) => (

              <Link
                key={index}
                to={service.route}
                className="group block rounded-3xl overflow-hidden bg-[#1D416A] hover:-translate-y-3 transition duration-300"
              >

                <img
                  src={service.image}
                  className="h-56 w-full object-cover group-hover:scale-110 transition duration-500"
                  alt=""
                />

                <div className="p-7">

                  <div className="text-[#24A8E0]">
                    {service.icon}
                  </div>

                  <h3 className="mt-5 text-2xl font-bold">
                    {service.title}
                  </h3>

                  <p className="mt-4 text-gray-300 leading-7">
                    {service.desc}
                  </p>

                </div>

              </Link>

            ))}

          </div>

        </section>

        {/* Service Categories */}

<div className="max-w-7xl mx-auto px-6 py-24">

  <div className="text-center mb-16">
    <p className="uppercase tracking-[5px] text-[#24A8E0] font-semibold">
      What We Offer
    </p>

    <h2 className="text-5xl font-bold mt-4">
      Professional
      <span className="text-[#F1CF45]"> Services</span>
    </h2>

    <p className="max-w-3xl mx-auto mt-6 text-gray-300 leading-8">
      Honey Vision provides complete security services from planning and
      installation to long-term maintenance and technical support.
    </p>
  </div>

  <div className="grid lg:grid-cols-2 gap-8">

    {services.map((service, index) => (

      <Link
        key={index}
        to={service.route}
        className="group flex bg-[#171F2E] rounded-3xl overflow-hidden border border-white/10 hover:border-[#24A8E0] transition duration-500"
      >

        <div className="w-52 overflow-hidden">

          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
          />

        </div>

        <div className="flex-1 p-8">

          <div className="w-14 h-14 rounded-xl bg-[#24A8E0]/15 flex items-center justify-center text-[#24A8E0]">
            {service.icon}
          </div>

          <h3 className="text-2xl font-bold mt-6">
            {service.title}
          </h3>

          <p className="mt-5 text-gray-300 leading-8">
            {service.desc}
          </p>

          <span className="mt-7 flex items-center gap-2 text-[#F1CF45] font-semibold transition-all hover:gap-4">
            Learn More
            <ArrowRight size={18} />
          </span>

        </div>

      </Link>

    ))}

  </div>

</div>

{/* How We Work */}

<div className="bg-[#151A24] py-24">

  <div className="max-w-7xl mx-auto px-6">

    <div className="text-center">

      <p className="uppercase tracking-[5px] text-[#24A8E0] font-semibold">
        Our Process
      </p>

      <h2 className="text-5xl font-bold mt-4">
        How We
        <span className="text-[#F1CF45]"> Work</span>
      </h2>

      <p className="max-w-3xl mx-auto mt-6 text-gray-300 leading-8">
        Every Honey Vision project follows a structured process to ensure
        quality, reliability, and customer satisfaction from consultation to
        long-term support.
      </p>

    </div>

    <div className="relative mt-24">

      {/* Vertical Line */}

      <div className="hidden lg:block absolute left-1/2 top-0 -translate-x-1/2 w-1 h-full bg-[#24A8E0]/20"></div>

      <div className="space-y-16">

        {[
          {
            no: "01",
            title: "Requirement Analysis",
            desc: "We understand your business needs, assess the site, and identify the most suitable surveillance and security solution."
          },
          {
            no: "02",
            title: "Solution Design",
            desc: "Our engineers design a customized system architecture with the right cameras, AI solutions, networking, and storage."
          },
          {
            no: "03",
            title: "Installation & Integration",
            desc: "Certified professionals install and integrate all devices while ensuring seamless performance and reliability."
          },
          {
            no: "04",
            title: "Testing & Training",
            desc: "Every system is thoroughly tested and customers receive complete training before project handover."
          },
          {
            no: "05",
            title: "Maintenance & Support",
            desc: "We provide preventive maintenance, upgrades, remote monitoring, and 24×7 technical support."
          }

        ].map((step, index) => (

          <div
            key={index}
            className={`relative flex flex-col lg:flex-row items-center ${
              index % 2 !== 0 ? "lg:flex-row-reverse" : ""
            }`}
          >

            <div className="lg:w-1/2 p-6">

              <div className="bg-[#1D416A] rounded-3xl p-8 border border-[#24A8E0]/20 hover:border-[#F1CF45] transition">

                <span className="text-5xl font-bold text-[#24A8E0]">
                  {step.no}
                </span>

                <h3 className="text-2xl font-bold mt-5">
                  {step.title}
                </h3>

                <p className="mt-4 text-gray-300 leading-8">
                  {step.desc}
                </p>

              </div>

            </div>

            <div className="hidden lg:flex w-10 h-10 rounded-full bg-[#F1CF45] border-4 border-[#111015] items-center justify-center absolute left-1/2 -translate-x-1/2">
            </div>

            <div className="lg:w-1/2"></div>

          </div>

        ))}

      </div>

    </div>

  </div>

</div>

{/* Featured Projects */}

<div className="max-w-7xl mx-auto px-6 py-24">

  <div className="text-center mb-20">

    <p className="uppercase tracking-[5px] text-[#24A8E0] font-semibold">
      Success Stories
    </p>

    <h2 className="text-5xl font-bold mt-4">
      Featured
      <span className="text-[#F1CF45]"> Projects</span>
    </h2>

    <p className="max-w-3xl mx-auto mt-6 text-gray-300 leading-8">
      We have successfully delivered surveillance, AI, and audio-visual
      solutions for businesses, industries, educational institutions,
      and government organizations.
    </p>

  </div>

  <div className="space-y-24">

    {/* Project 1 */}

    <div className="grid lg:grid-cols-2 gap-12 items-center">

      <div>

        <img
          src={hero6}
          alt="Corporate Office"
          className="rounded-3xl w-full h-[420px] object-cover"
        />

      </div>

      <div>

        <span className="text-[#24A8E0] uppercase tracking-[4px] font-semibold">
          Corporate Security
        </span>

        <h3 className="text-4xl font-bold mt-5">
          AI Surveillance for Enterprise Campuses
        </h3>

        <p className="text-gray-300 mt-6 leading-8">
          Installed intelligent CCTV systems with facial recognition,
          visitor management, ANPR, and centralized monitoring for
          large corporate offices.
        </p>

        <div className="grid grid-cols-2 gap-5 mt-8">

          <div className="bg-[#1D416A] rounded-2xl p-5">
            <h4 className="text-[#F1CF45] text-3xl font-bold">
              150+
            </h4>

            <p className="text-gray-300 mt-2">
              AI Cameras
            </p>
          </div>

          <div className="bg-[#1D416A] rounded-2xl p-5">
            <h4 className="text-[#24A8E0] text-3xl font-bold">
              24×7
            </h4>

            <p className="text-gray-300 mt-2">
              Live Monitoring
            </p>
          </div>

        </div>

      </div>

    </div>

    {/* Project 2 */}

    <div className="grid lg:grid-cols-2 gap-12 items-center">

      <div className="order-2 lg:order-1">

        <span className="text-[#24A8E0] uppercase tracking-[4px] font-semibold">
          Smart Education
        </span>

        <h3 className="text-4xl font-bold mt-5">
          Digital Classroom Integration
        </h3>

        <p className="text-gray-300 mt-6 leading-8">
          Complete audio visual infrastructure including smart boards,
          projectors, conferencing systems, digital displays,
          and campus-wide surveillance.
        </p>

        <div className="flex gap-5 mt-8">

          <div className="bg-[#1D416A] rounded-2xl px-8 py-5">
            <h4 className="text-3xl font-bold text-[#F1CF45]">
              50+
            </h4>

            <p className="text-gray-300">
              Smart Rooms
            </p>
          </div>

          <div className="bg-[#1D416A] rounded-2xl px-8 py-5">
            <h4 className="text-3xl font-bold text-[#24A8E0]">
              100%
            </h4>

            <p className="text-gray-300">
              Connected
            </p>
          </div>

        </div>

      </div>

      <div className="order-1 lg:order-2">

        <img
          src={hero8}
          alt="Education Project"
          className="rounded-3xl w-full h-[420px] object-cover"
        />

      </div>

    </div>

  </div>

</div>

{/* Why Choose Honey Vision */}

<div className="bg-gradient-to-b from-[#111015] to-[#1A2436] py-24">

  <div className="max-w-7xl mx-auto px-6">

    <div className="text-center">

      <p className="uppercase tracking-[5px] text-[#24A8E0] font-semibold">
        Why Honey Vision
      </p>

      <h2 className="text-5xl font-bold mt-4">
        Trusted by
        <span className="text-[#F1CF45]"> Businesses</span>
      </h2>

      <p className="max-w-3xl mx-auto mt-6 text-gray-300 leading-8">
        We combine innovation, quality, and expert support to deliver
        intelligent surveillance and security solutions that grow with
        your business.
      </p>

    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">

      {[
        {
          number: "10+",
          title: "Years Experience",
          desc: "Delivering reliable surveillance and AI solutions."
        },
        {
          number: "500+",
          title: "Projects",
          desc: "Successfully deployed across multiple industries."
        },
        {
          number: "24×7",
          title: "Support",
          desc: "Dedicated technical assistance whenever required."
        },
        {
          number: "100%",
          title: "Customer Focus",
          desc: "Customized solutions designed around client needs."
        }

      ].map((item) => (

        <div
          key={item.title}
          className="bg-[#1D416A] rounded-3xl p-8 border border-[#24A8E0]/20 hover:border-[#F1CF45] hover:-translate-y-3 transition duration-500 text-center"
        >

          <h3 className="text-5xl font-bold text-[#F1CF45]">
            {item.number}
          </h3>

          <h4 className="text-2xl font-semibold mt-5">
            {item.title}
          </h4>

          <p className="mt-4 text-gray-300 leading-7">
            {item.desc}
          </p>

        </div>

      ))}

    </div>

  </div>

</div>

{/* CTA */}

<div className="max-w-7xl mx-auto px-6 py-24">

  <div className="relative overflow-hidden rounded-[40px] bg-gradient-to-r from-[#24A8E0] via-[#1D416A] to-[#111015] p-14 lg:p-20">

    <div className="absolute -right-24 -top-24 w-72 h-72 rounded-full bg-white/10"></div>
    <div className="absolute -left-20 bottom-0 w-60 h-60 rounded-full bg-[#F1CF45]/20"></div>

    <div className="relative z-10 text-center">

      <p className="uppercase tracking-[5px] text-[#F1CF45] font-semibold">
        Let's Build Together
      </p>

      <h2 className="text-5xl lg:text-6xl font-bold mt-5">
        Ready to Secure Your Business?
      </h2>

      <p className="max-w-3xl mx-auto mt-8 text-lg text-gray-200 leading-8">
        Whether you need AI Surveillance, Audio Visual Systems,
        Smart Agriculture, Smart City solutions, or complete
        security infrastructure, Honey Vision is ready to help.
      </p>

      <div className="flex flex-wrap justify-center gap-6 mt-12">

        <Link
          to="/contact"
          className="rounded-full bg-[#F1CF45] px-10 py-4 font-semibold text-black transition duration-300 hover:bg-white"
        >
          Request Consultation
        </Link>

        <Link
          to="/contact"
          className="rounded-full border border-white px-10 py-4 transition duration-300 hover:bg-white hover:text-black"
        >
          Contact Us
        </Link>

      </div>

    </div>

  </div>

</div>

</section>

</>

);
};

export default Service;