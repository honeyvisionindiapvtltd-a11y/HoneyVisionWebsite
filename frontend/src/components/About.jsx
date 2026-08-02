import {Cpu,ShieldCheck,Target,Users,Code2,} from "lucide-react";
import aboutBg from "../assets/aboutbg.jpg";

const founders = [
  {
    name: "Mr. Rashmi Ranjan Sahoo",
    role: "CEO & Founder",
    desc: "Visionary entrepreneur leading Honey Vision's mission to build intelligent AI-powered surveillance and Made-in-India technologies.",
  },
  {
    name: "Mr. Abinash Acharya",
    role: "Co-Founder",
    desc: "Driving innovation, strategic planning, and business development while transforming ideas into scalable technology solutions.",
  },
  {
    name: "Mr. Ramesh Bisoi",
    role: "Mentor",
    desc: "Providing leadership guidance, industry expertise, and strategic direction for long-term growth.",
  },
  {
    name: "Miss Aparna Kumari",
    role: "Smart & Talented Specialist",
    desc: "Contributing technical expertise, innovation, and creative problem-solving across Honey Vision projects.",
  },
];

const developers = [
  {
    name: "Nirakar",
    role: "Core Developer",
  },
  {
    name: "Ayashkant",
    role: "Core Developer",
  },
  {
    name: "Omm Prasad",
    role: "Core Developer",
  },
];

const About = () => {
  const sectionStyle = {
    backgroundImage: `url(${aboutBg})`,
    backgroundSize: "cover",
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
  };

  return (
    <section className="relative overflow-hidden text-white py-24" style={sectionStyle}>
      <div className="pointer-events-none absolute inset-0 bg-black/10" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(41,155,255,0.12),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(255,221,121,0.06),transparent_25%)]" />
      <div className="pointer-events-none absolute left-12 top-16 h-80 w-80 rounded-full border border-[#24A8E0]/20 blur-3xl opacity-60" />
      <div className="pointer-events-none absolute right-12 bottom-16 h-96 w-96 rounded-full border border-[#F1CF45]/15 blur-3xl opacity-50" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[length:80px_80px] opacity-30" />
      <div className="relative max-w-7xl mx-auto px-8 animate-appear" style={{ animationDelay: "0.1s" }}>

        {/* Heading */}

        <div className="text-center">
          <span className="uppercase tracking-[6px] text-[#24A8E0] font-semibold">
            About Honey Vision
          </span>

          <h2 className="text-5xl font-bold mt-5">
            Building India's Future Through
            <span className="text-[#F1CF45]"> Intelligent Technology</span>
          </h2>

          <p className="mt-8 max-w-4xl mx-auto text-lg text-gray-300 leading-8">
            Honey Vision is an Indian technology company specializing in
            Artificial Intelligence, Computer Vision, Smart Surveillance,
            Audio-Visual Systems, Smart Agriculture, and Intelligent
            Automation.

            <br /><br />

            Our goal is to create innovative, affordable, and reliable
            technologies that improve security, productivity, and everyday
            life while proudly supporting the vision of a self-reliant India.
          </p>
        </div>

        {/* Company Highlights */}

        <div className="grid md:grid-cols-3 gap-8 mt-20">

          <div className="rounded-[2rem] border border-white/20 bg-white/10 p-8 shadow-[0_20px_80px_rgba(0,0,0,0.25)] backdrop-blur-xl backdrop-saturate-150 transition duration-500 ease-out hover:-translate-y-3 hover:shadow-[0_40px_110px_rgba(36,168,224,0.24)] animate-cardFloat" style={{ animationDelay: "0s" }}>
            <div className="inline-flex h-16 w-16 items-center justify-center rounded-3xl bg-[#24A8E0]/15 text-[#24A8E0] shadow-[0_0_30px_rgba(36,168,224,0.16)]">
              <Cpu size={28} />
            </div>

            <h3 className="text-2xl font-bold mt-7 text-white">
              AI Innovation
            </h3>

            <p className="mt-4 text-gray-300 leading-7">
              Developing intelligent surveillance and automation solutions
              powered by Artificial Intelligence.
            </p>

          </div>

          <div className="rounded-[2rem] border border-white/20 bg-white/10 p-8 shadow-[0_20px_80px_rgba(0,0,0,0.25)] backdrop-blur-xl backdrop-saturate-150 transition duration-500 ease-out hover:-translate-y-3 hover:shadow-[0_40px_110px_rgba(241,207,69,0.24)] animate-cardFloat" style={{ animationDelay: "0.12s" }}>
            <div className="inline-flex h-16 w-16 items-center justify-center rounded-3xl bg-[#F1CF45]/15 text-[#F1CF45] shadow-[0_0_30px_rgba(241,207,69,0.18)]">
              <ShieldCheck size={28} />
            </div>

            <h3 className="text-2xl font-bold mt-7 text-white">
              Smart Security
            </h3>

            <p className="mt-4 text-gray-300 leading-7">
              Reliable surveillance technologies that protect people,
              businesses, industries, and institutions.
            </p>

          </div>

          <div className="rounded-[2rem] border border-white/20 bg-white/10 p-8 shadow-[0_20px_80px_rgba(0,0,0,0.25)] backdrop-blur-xl backdrop-saturate-150 transition duration-500 ease-out hover:-translate-y-3 hover:shadow-[0_40px_110px_rgba(36,168,224,0.24)] animate-cardFloat" style={{ animationDelay: "0.22s" }}>
            <div className="inline-flex h-16 w-16 items-center justify-center rounded-3xl bg-[#24A8E0]/15 text-[#24A8E0] shadow-[0_0_30px_rgba(36,168,224,0.16)]">
              <Target size={28} />
            </div>

            <h3 className="text-2xl font-bold mt-7 text-white">
              Made in India
            </h3>

            <p className="mt-4 text-gray-300 leading-7">
              Designing and manufacturing next-generation technologies that
              represent India's innovation on the global stage.
            </p>

          </div>

        </div>

        {/* Leadership */}

        <div className="mt-24">

          <h2 className="text-4xl font-bold text-center">
            Founding Team
          </h2>

          <p className="text-center text-gray-400 mt-3">
            Visionaries leading Honey Vision towards innovation and excellence.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mt-12">

            {founders.map((person, index) => (

              <div
                key={index}
                className="rounded-[2rem] border border-white/20 bg-white/10 p-8 shadow-[0_20px_70px_rgba(0,0,0,0.22)] backdrop-blur-xl backdrop-saturate-150 transition duration-500 ease-out hover:-translate-y-3 hover:shadow-[0_40px_90px_rgba(36,168,224,0.2)] animate-cardFloat"
                style={{ animationDelay: `${index * 0.1}s` }}
              >

                <div className="w-20 h-20 rounded-full bg-[#24A8E0]/10 flex items-center justify-center text-3xl shadow-[0_0_30px_rgba(36,168,224,0.14)]">
                  <Users className="text-[#24A8E0]" />
                </div>

                <h3 className="text-2xl font-bold mt-6 text-white">
                  {person.name}
                </h3>

                <p className="text-[#F1CF45] font-semibold mt-2">
                  {person.role}
                </p>

                <p className="text-gray-300 mt-5 leading-7">
                  {person.desc}
                </p>

              </div>

            ))}

          </div>

        </div>

        {/* Development Core */}

        <div className="mt-24">

          <h2 className="text-4xl font-bold text-center">
            Development Core
          </h2>

          <p className="text-center text-gray-400 mt-3">
            The engineering team building Honey Vision's intelligent software
            and AI solutions.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mt-12">

            {developers.map((dev, index) => (

              <div
                key={index}
                className="rounded-[2rem] border border-white/20 bg-white/10 p-8 text-center shadow-[0_20px_70px_rgba(0,0,0,0.22)] backdrop-blur-xl backdrop-saturate-150 transition duration-500 ease-out hover:-translate-y-3 hover:shadow-[0_40px_90px_rgba(36,168,224,0.2)] animate-cardFloat"
                style={{ animationDelay: `${index * 0.1}s` }}
              >

                <div className="w-20 h-20 rounded-full bg-[#F1CF45]/15 flex items-center justify-center mx-auto shadow-[0_0_30px_rgba(241,207,69,0.16)]">
                  <Code2 size={40} className="text-[#F1CF45]" />
                </div>

                <h3 className="text-2xl font-bold mt-6 text-white">
                  {dev.name}
                </h3>

                <p className="text-[#24A8E0] mt-2 font-semibold">
                  {dev.role}
                </p>

              </div>

            ))}

          </div>

        </div>

        {/* Closing Quote */}

        <div className="mt-24 rounded-3xl border border-white/20 bg-white/10 p-12 text-center shadow-[0_20px_70px_rgba(0,0,0,0.23)] backdrop-blur-xl backdrop-saturate-150">

          <h2 className="text-4xl font-bold">
            "Technology Built in India, Trusted Across the World."
          </h2>

          <p className="mt-6 max-w-4xl mx-auto text-lg text-gray-100 leading-8">
            Honey Vision is committed to creating intelligent technologies
            that secure communities, empower businesses, modernize agriculture,
            and contribute to a smarter, safer, and more connected future.
          </p>

        </div>

      </div>
    </section>
  );
};

export default About;