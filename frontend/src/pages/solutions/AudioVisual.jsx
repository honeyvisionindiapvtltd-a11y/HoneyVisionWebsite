import Navbar from "../../components/Navbar";
import { getCloudinaryImageUrl } from "../../utils/cloudinary";

const avMain = getCloudinaryImageUrl("https://res.cloudinary.com/q6iqvtbe/image/upload/v1785388176/audiovideo3_joml6b.jpg");
const av1 = getCloudinaryImageUrl("https://res.cloudinary.com/q6iqvtbe/image/upload/v1785388176/audiovideo3_joml6b.jpg");
const av2 = getCloudinaryImageUrl("https://res.cloudinary.com/q6iqvtbe/image/upload/v1785388172/audiovideo2_lauk9o.jpg");
const av3 = getCloudinaryImageUrl("https://res.cloudinary.com/q6iqvtbe/image/upload/v1785388151/AI_Surveillance1_icjvor.jpg");
const av4 = getCloudinaryImageUrl("https://res.cloudinary.com/q6iqvtbe/image/upload/v1785388180/computervision_zwka3r.jpg");
const av5 = getCloudinaryImageUrl("https://res.cloudinary.com/q6iqvtbe/image/upload/v1785632655/audiovideo2_p1tjsy.jpg");
const av6 = getCloudinaryImageUrl("https://res.cloudinary.com/q6iqvtbe/image/upload/v1785632656/audiovideo1_nll5kq.jpg");

import {
  Monitor,
  Presentation,
  Mic,
  Speaker,
  Tv,
  Video,
} from "lucide-react";

const features = [
  {
    icon: <Presentation size={40} />,
    title: "Smart Conference Rooms",
    description:
      "Interactive meeting rooms equipped with intelligent displays, video conferencing, and wireless collaboration systems.",
    image: avMain,
  },
  {
    icon: <Monitor size={40} />,
    title: "Digital Signage",
    description:
      "High-quality digital displays for advertisements, announcements, and public information.",
    image: av3,
  },
  {
    icon: <Video size={40} />,
    title: "Video Conferencing",
    description:
      "Enterprise-grade conferencing with crystal-clear audio and HD video.",
    image: av6,
  },
  {
    icon: <Speaker size={40} />,
    title: "Professional Audio",
    description:
      "Premium sound systems for auditoriums and commercial environments.",
    image: av3,
  },
  {
    icon: <Mic size={40} />,
    title: "Auditorium Solutions",
    description:
      "Complete AV integration with microphones, projectors and control systems.",
    image: av5,
  },
  {
    icon: <Tv size={40} />,
    title: "Interactive Displays",
    description:
      "Smart touch displays for classrooms, boardrooms and collaboration.",
    image: av2,
  },
];

const AudioVisual = () => {
  return (
    <>
      <Navbar />

      <section className="bg-[#111015] text-white pt-32 pb-24">

        {/* Hero */}

        <div className="max-w-6xl mx-auto px-6 text-center">

          <p className="uppercase tracking-[6px] text-[#24A8E0] font-semibold">
            Professional Audio Visual Solutions
          </p>

          <h1 className="text-6xl font-bold mt-5">
            Audio
            <span className="text-[#F1CF45]"> Visual Solutions</span>
          </h1>

          <p className="max-w-4xl mx-auto mt-8 text-lg leading-9 text-gray-300">
            Honey Vision delivers intelligent Audio Visual solutions that
            enhance collaboration, communication, education and business
            productivity through modern AV technologies.
          </p>

        </div>

        {/* Images */}

        <div className="max-w-6xl mx-auto px-6 mt-16">

          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-8">

            <div className="overflow-hidden rounded-3xl border border-[#24A8E0]/20 shadow-xl">
              <img
                src={avMain}
                alt=""
                className="w-full h-[340px] object-cover"
              />
            </div>

            <div className="grid gap-8">

              <div className="overflow-hidden rounded-3xl border border-[#24A8E0]/20 shadow-xl">
                <img
                  src={av1}
                  alt=""
                  className="w-full h-[160px] object-cover"
                />
              </div>

              <div className="overflow-hidden rounded-3xl border border-[#24A8E0]/20 shadow-xl">
                <img
                  src={av2}
                  alt=""
                  className="w-full h-[160px] object-cover"
                />
              </div>

            </div>

          </div>

          {/* Video */}

          <div className="mt-12">

            <div className="max-w-4xl mx-auto rounded-3xl border border-[#24A8E0]/20 bg-[#1D416A]/70 p-5 shadow-xl">

              <div className="aspect-video overflow-hidden rounded-2xl">

                <iframe
                  className="w-full h-full"
                  src="https://res.cloudinary.com/q6iqvtbe/video/upload/v1785482025/15334475_3840_2160_60fps_h6x1oh.mp4"
                  title="Audio Visual Solutions"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />

              </div>

            </div>

          </div>

        </div>

        {/* Information Cards */}

        <div className="max-w-6xl mx-auto px-6 mt-16">

          <div className="grid md:grid-cols-3 gap-6">

            <div className="rounded-3xl border border-[#24A8E0]/20 bg-[#1D416A]/70 p-6">

              <p className="uppercase tracking-[3px] text-[#24A8E0] text-sm">
                Collaboration
              </p>

              <h3 className="text-2xl font-semibold mt-3">
                Smart Meeting Rooms
              </h3>

              <p className="mt-3 text-gray-300 leading-7">
                Interactive displays, wireless presentation systems and
                professional conferencing for productive meetings.
              </p>

            </div>

            <div className="rounded-3xl border border-[#24A8E0]/20 bg-[#1D416A]/70 p-6">

              <p className="uppercase tracking-[3px] text-[#24A8E0] text-sm">
                Communication
              </p>

              <h3 className="text-2xl font-semibold mt-3">
                Crystal Clear Audio
              </h3>

              <p className="mt-3 text-gray-300 leading-7">
                Premium speakers, microphones and sound systems designed for
                classrooms, auditoriums and commercial spaces.
              </p>

            </div>

            <div className="rounded-3xl border border-[#24A8E0]/20 bg-[#1D416A]/70 p-6">

              <p className="uppercase tracking-[3px] text-[#24A8E0] text-sm">
                Innovation
              </p>

              <h3 className="text-2xl font-semibold mt-3">
                Modern AV Technology
              </h3>

              <p className="mt-3 text-gray-300 leading-7">
                Integrated audio, video and display solutions that create
                engaging communication experiences across every industry.
              </p>

            </div>

          </div>

        </div>

        {/* Overview */}

        <div className="max-w-6xl mx-auto px-6 mt-24">

          <div className="rounded-3xl border border-[#24A8E0]/20 bg-gradient-to-br from-[#1D416A] to-[#111015] p-10">

            <div className="grid lg:grid-cols-2 gap-10 items-center">

              <div>

                <p className="uppercase tracking-[3px] text-[#24A8E0] text-sm">
                  Smart AV Platform
                </p>

                <h2 className="text-4xl font-bold mt-4">
                  Create Better Communication Experiences
                </h2>

                <p className="mt-6 text-gray-300 leading-8">
                  Honey Vision designs complete Audio Visual environments that
                  combine professional displays, conferencing systems, audio
                  equipment and intelligent control technology to improve
                  collaboration and communication.
                </p>

              </div>

              <div className="grid grid-cols-2 gap-5">

                <div className="bg-[#111015]/70 rounded-2xl border border-[#24A8E0]/20 p-6">
                  <h3 className="text-xl font-semibold">Display</h3>
                  <p className="mt-3 text-sm text-gray-300 leading-7">
                    Large-format displays with stunning 4K clarity.
                  </p>
                </div>

                <div className="bg-[#111015]/70 rounded-2xl border border-[#24A8E0]/20 p-6">
                  <h3 className="text-xl font-semibold">Connect</h3>
                  <p className="mt-3 text-sm text-gray-300 leading-7">
                    Wireless presentations and seamless conferencing.
                  </p>
                </div>

                                <div className="bg-[#111015]/70 rounded-2xl border border-[#24A8E0]/20 p-6">
                  <h3 className="text-xl font-semibold">Collaborate</h3>
                  <p className="mt-3 text-sm text-gray-300 leading-7">
                    Interactive meeting spaces designed for teamwork and productivity.
                  </p>
                </div>

                <div className="bg-[#111015]/70 rounded-2xl border border-[#24A8E0]/20 p-6">
                  <h3 className="text-xl font-semibold">Control</h3>
                  <p className="mt-3 text-sm text-gray-300 leading-7">
                    Centralized AV management with simple and intuitive controls.
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>

        {/* Our Solutions */}

        <div className="max-w-6xl mx-auto px-6 mt-28">

          <h2 className="text-5xl font-bold text-center">
            Our
            <span className="text-[#F1CF45]"> Solutions</span>
          </h2>

          <p className="text-center text-gray-300 max-w-3xl mx-auto mt-6 leading-8">
            From conference rooms to auditoriums, Honey Vision provides complete
            Audio Visual solutions that combine intelligent displays, premium
            sound systems, and seamless collaboration technology.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

            {features.map((feature, index) => (

              <div
                key={index}
                className="overflow-hidden rounded-3xl border border-[#24A8E0]/20 bg-[#1D416A] hover:border-[#F1CF45] hover:-translate-y-2 transition duration-300"
              >

                <img
                  src={feature.image}
                  alt={feature.title}
                  className="h-40 w-full object-cover"
                />

                <div className="p-8">

                  <div className="text-[#24A8E0]">
                    {feature.icon}
                  </div>

                  <h3 className="text-2xl font-bold mt-5">
                    {feature.title}
                  </h3>

                  <p className="mt-4 text-gray-300 leading-8">
                    {feature.description}
                  </p>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>

    </>
  );
};

export default AudioVisual;