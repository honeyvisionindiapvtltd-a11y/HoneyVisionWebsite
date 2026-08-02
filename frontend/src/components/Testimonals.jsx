import { Link } from "react-router-dom";
import aboutBg from "../assets/aboutbg.jpg";
import {
  Star,
  Quote,
  Building2,
  ShieldCheck,
  Sprout,
} from "lucide-react";

const Testimonials = () => {
  const sectionStyle = {
    backgroundImage: `url(${aboutBg})`,
    backgroundSize: "cover",
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
  };

  const testimonials = [
    {
      name: "Rajesh Kumar",
      company: "Industrial Manufacturing",
      icon: <Building2 className="text-[#24A8E0]" size={40} />,
      review:
        "Honey Vision completely transformed our factory's security infrastructure. Their AI-powered surveillance system has significantly improved monitoring efficiency and workplace safety.",
    },
    {
      name: "Priya Sharma",
      company: "Smart Agriculture",
      icon: <Sprout className="text-[#F1CF45]" size={40} />,
      review:
        "The intelligent monitoring solutions helped us optimize irrigation and crop management. Honey Vision's technology has become an essential part of our farming operations.",
    },
    {
      name: "Amit Verma",
      company: "Corporate Enterprise",
      icon: <ShieldCheck className="text-[#24A8E0]" size={40} />,
      review:
        "Professional installation, excellent support, and cutting-edge AI technology. Honey Vision delivers exactly what modern businesses need for intelligent security.",
    },
  ];

  return (
    <section
      id="testimonials"
      className="relative py-24 text-white overflow-hidden"
      style={sectionStyle}
    >
      <div className="pointer-events-none absolute inset-0 bg-black/10" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(36,168,224,0.1),transparent_25%),radial-gradient(circle_at_bottom_right,rgba(241,207,69,0.05),transparent_20%)]" />
      <div className="pointer-events-none absolute left-10 top-16 h-72 w-72 rounded-full border border-[#24A8E0]/15 blur-3xl opacity-45" />
      <div className="pointer-events-none absolute right-12 bottom-20 h-80 w-80 rounded-full border border-[#F1CF45]/12 blur-3xl opacity-35" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[length:90px_90px] opacity-20" />
      <div className="relative max-w-7xl mx-auto px-8">

        {/* Heading */}

        <div className="text-center">

          <span className="uppercase tracking-[6px] text-[#24A8E0] font-semibold">
            Testimonials
          </span>

          <h2 className="text-5xl md:text-6xl font-bold mt-5 text-white/95 leading-tight">
            Trusted By
            <span className="text-[#F1CF45]"> Industry Leaders</span>
          </h2>

          <p className="mt-8 max-w-4xl mx-auto text-lg text-slate-200 leading-8">
            At Honey Vision, our success is measured by the trust of our
            customers. We are proud to deliver intelligent technology
            solutions that improve security, productivity, and business
            performance across multiple industries.
          </p>

        </div>

        {/* Testimonial Cards */}

        <div className="grid lg:grid-cols-3 gap-8 mt-20">

          {testimonials.map((client, index) => (

            <div
              key={index}
              className="rounded-[2rem] border border-white/10 bg-[#07121f]/90 p-8 shadow-[0_24px_70px_rgba(36,168,224,0.12)] transition duration-500 ease-out hover:-translate-y-3 hover:shadow-[0_40px_110px_rgba(36,168,224,0.22)]"
            >

              <Quote
                className="text-[#F1CF45] mb-6"
                size={45}
              />

              <p className="text-slate-200 leading-8 italic">
                "{client.review}"
              </p>

              <div className="flex mt-6">

                <Star className="fill-[#F1CF45] text-[#F1CF45]" size={20} />
                <Star className="fill-[#F1CF45] text-[#F1CF45]" size={20} />
                <Star className="fill-[#F1CF45] text-[#F1CF45]" size={20} />
                <Star className="fill-[#F1CF45] text-[#F1CF45]" size={20} />
                <Star className="fill-[#F1CF45] text-[#F1CF45]" size={20} />

              </div>

              <div className="flex items-center gap-4 mt-8">

                <div className="w-16 h-16 rounded-full bg-[#071015] flex items-center justify-center shadow-[0_0_30px_rgba(36,168,224,0.12)]">
                  {client.icon}
                </div>

                <div>

                  <h3 className="text-xl font-bold text-white">
                    {client.name}
                  </h3>

                  <p className="text-[#90c5ff]">
                    {client.company}
                  </p>

                </div>

              </div>

            </div>

          ))}

        </div>

        {/* Company Highlights */}

        <div className="mt-24 grid md:grid-cols-4 gap-8">

          <div className="bg-[#1D416A] rounded-2xl p-8 text-center border border-[#24A8E0]/20">

            <h3 className="text-5xl font-bold text-[#F1CF45]">
              500+
            </h3>

            <p className="mt-3 text-slate-200">
              Successful Installations
            </p>

          </div>

          <div className="bg-[#1D416A] rounded-2xl p-8 text-center border border-[#24A8E0]/20">

            <h3 className="text-5xl font-bold text-[#24A8E0]">
              100+
            </h3>

            <p className="mt-3 text-slate-200">
              Enterprise Clients
            </p>

          </div>

          <div className="bg-[#1D416A] rounded-2xl p-8 text-center border border-[#24A8E0]/20">

            <h3 className="text-5xl font-bold text-[#F1CF45]">
              AI
            </h3>

            <p className="mt-3 text-slate-200">
              Intelligent Solutions
            </p>

          </div>

          <div className="bg-[#1D416A] rounded-2xl p-8 text-center border border-[#24A8E0]/20">

            <h3 className="text-5xl font-bold text-[#24A8E0]">
              24/7
            </h3>

            <p className="mt-3 text-slate-200">
              Technical Support
            </p>

          </div>

        </div>

        {/* CTA */}

        <div className="mt-24 bg-gradient-to-r from-[#1D416A] to-[#24A8E0] rounded-3xl p-14 text-center">

          <h2 className="text-4xl md:text-5xl font-bold">
            Join Our Growing Community
          </h2>

          <p className="mt-6 text-lg max-w-3xl mx-auto text-slate-200 leading-8">
            Businesses, industries, educational institutions, and farmers
            across India trust Honey Vision for intelligent AI-powered
            surveillance, smart automation, and innovative technology
            solutions.
          </p>

          <Link
            to="/contact"
            className="mt-10 inline-flex items-center justify-center rounded-full bg-[#F1CF45] px-8 py-4 font-semibold text-black transition duration-300 hover:bg-white"
          >
            Become Our Partner
          </Link>

        </div>

      </div>
    </section>
  );
};

export default Testimonials;