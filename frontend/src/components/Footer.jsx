import { Link } from "react-router-dom";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa6";

import { getCloudinaryImageUrl } from "../utils/cloudinary";

const logo = getCloudinaryImageUrl("https://res.cloudinary.com/q6iqvtbe/image/upload/v1785387607/logo_xhoudq.png");

const Footer = () => {
  return (
    <footer className="bg-[#111015] border-t border-[#1D416A] text-white">

      {/* Top Footer */}
      <div className="max-w-7xl mx-auto px-8 py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-12">

        {/* Company */}
        <div>

          <Link to="/" className="flex items-center gap-3 mb-6 hover:opacity-90 transition">
            <img
              src={logo}
              alt="Honey Vision"
              className="w-16 h-16 object-contain"
            />

            <div>
              <h2 className="text-2xl font-bold">
                Honey
                <span className="text-[#F1CF45]">Vision</span>
              </h2>

              <p className="text-sm text-[#24A8E0]">
                India Pvt. Ltd.
              </p>
            </div>
          </Link>

          <p className="text-gray-400 leading-7">
            Honey Vision delivers intelligent AI-powered surveillance,
            smart agriculture, professional audio-visual systems,
            automation, and innovative technology solutions proudly
            developed in India.
          </p>

          <div className="flex gap-4 mt-8 items-center h-16">

            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              title="Facebook"
              className="group flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-[#1877F2] shadow-sm transition duration-300 hover:-translate-y-1 hover:scale-105 hover:border-[#1877F2]/40 hover:bg-[#1877F2] hover:text-white"
            >
              <FaFacebookF className="h-5 w-5 transition duration-300 group-hover:scale-110" aria-hidden />
            </a>

            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              title="Instagram"
              className="group flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-pink-500 shadow-sm transition duration-300 hover:-translate-y-1 hover:scale-105 hover:border-pink-400/50 hover:bg-gradient-to-br hover:from-pink-500 hover:via-fuchsia-500 hover:to-orange-400 hover:text-white"
            >
              <FaInstagram className="h-5 w-5 transition duration-300 group-hover:scale-110" aria-hidden />
            </a>

            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              title="LinkedIn"
              className="group flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-[#0A66C2] shadow-sm transition duration-300 hover:-translate-y-1 hover:scale-105 hover:border-[#0A66C2]/40 hover:bg-[#0A66C2] hover:text-white"
            >
              <FaLinkedinIn className="h-5 w-5 transition duration-300 group-hover:scale-110" aria-hidden />
            </a>

            <a
              href="https://www.youtube.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="YouTube"
              title="YouTube"
              className="group flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-[#FF0000] shadow-sm transition duration-300 hover:-translate-y-1 hover:scale-105 hover:border-red-500/40 hover:bg-[#FF0000] hover:text-white"
            >
              <FaYoutube className="h-5 w-5 transition duration-300 group-hover:scale-110" aria-hidden />
            </a>

          </div>

        </div>

        {/* Quick Links */}

        <div>

          <h3 className="text-xl font-semibold text-[#F1CF45] mb-6">
            Quick Links
          </h3>

          <ul className="space-y-4">

            <li>
              <Link to="/" className="hover:text-[#24A8E0] transition">
                Home
              </Link>
            </li>

            <li>
              <a href="/#about" className="hover:text-[#24A8E0] transition">
                About
              </a>
            </li>

            <li>
              <a href="/#whychooseus" className="hover:text-[#24A8E0] transition">
                Why Choose Us
              </a>
            </li>

            <li>
              <Link to="/service" className="hover:text-[#24A8E0] transition">
                Services
              </Link>
            </li>

            <li>
              <Link to="/cms" className="hover:text-[#24A8E0] transition">
                CMS Pages
              </Link>
            </li>

            <li>
              <a href="#contact" className="hover:text-[#24A8E0] transition">
                Contact
              </a>
            </li>

          </ul>

        </div>

        {/* Solutions */}

        <div>

          <h3 className="text-xl font-semibold text-[#F1CF45] mb-6">
            Our Solutions
          </h3>

          <ul className="space-y-4 text-gray-400">

            <li>
              <Link to="/solutions/ai-surveillance" className="hover:text-[#24A8E0] transition">
                AI Surveillance
              </Link>
            </li>

            <li>
              <Link to="/solutions/smartagriculture" className="hover:text-[#24A8E0] transition">
                Smart Agriculture
              </Link>
            </li>

            <li>
              <Link to="/solutions/audiovisuals" className="hover:text-[#24A8E0] transition">
                Audio Visual Systems
              </Link>
            </li>

            <li>
              <Link to="/solutions/computervision" className="hover:text-[#24A8E0] transition">
                Computer Vision
              </Link>
            </li>

            <li>
              <Link to="/solutions" className="hover:text-[#24A8E0] transition">
                Access Control
              </Link>
            </li>

            <li>
              <Link to="/technology" className="hover:text-[#24A8E0] transition">
                Cloud Monitoring
              </Link>
            </li>

            <li>
              <Link to="/solutions/smartcity" className="hover:text-[#24A8E0] transition">
                Smart Cities
              </Link>
            </li>

          </ul>

        </div>

        {/* Contact */}

        <div>

          <h3 className="text-xl font-semibold text-[#F1CF45] mb-6">
            Contact Us
          </h3>

          <div className="space-y-5">

            <div className="flex gap-4">

              <FaMapMarkerAlt className="text-[#24A8E0] mt-1" />

              <a
                href="https://maps.google.com/?q=Honey+Vision+Technologies+Bhubaneswar+Odisha+India"
                target="_blank"
                rel="noreferrer"
                className="block text-gray-400 hover:text-[#24A8E0] transition"
              >
                3rd floor,Rukmani Plaza,Tamando,pincode-752054
                <br />
                Bhubaneswar,
                <br />
                Odisha, India
              </a>

            </div>

            <div className="flex gap-4">

              <FaPhoneAlt className="text-[#24A8E0] mt-1 shrink-0" style={{ fontSize: '1.25rem' }} />

              <a href="tel:+918270004040" className="block text-gray-400 hover:text-[#24A8E0] transition">
                +91 82700 04040
              </a>

            </div>

            <div className="flex gap-4">

              <FaWhatsapp className="w-8 h-8 text-[#25D366] mt-1 shrink-0 p-1 rounded-full border border-white/10" aria-hidden />

              <a
                href="https://wa.me/918270004040?text=Hello%20Honey%20Vision%2C%20I%20would%20like%20to%20know%20more%20about%20your%20services."
                target="_blank"
                rel="noreferrer"
                className="block text-gray-400 hover:text-[#25D366] transition"
              >
                Chat on WhatsApp
              </a>

            </div>

            <div className="flex gap-4">

              <FaEnvelope className="text-[#24A8E0] mt-1 shrink-0" style={{ fontSize: '1.25rem' }} />

              <a href="mailto:contact.honeyvision@gmail.com" className="block text-gray-400 hover:text-[#24A8E0] transition">
                contact.honeyvision@gmail.com
              </a>

            </div>

          </div>

        </div>

      </div>

      {/* Middle Banner */}

      <div className="bg-[#1D416A] py-8">

        <div className="max-w-7xl mx-auto px-8 text-center">

          <h2 className="text-3xl font-bold">
            Innovating Today for a
            <span className="text-[#F1CF45]"> Smarter Tomorrow</span>
          </h2>

          <p className="mt-4 text-gray-300 max-w-3xl mx-auto">
            Our mission is to build intelligent technologies that empower
            businesses, secure communities, transform agriculture,
            and proudly represent Made-in-India innovation.
          </p>

        </div>

      </div>

      {/* Bottom */}

      <div className="border-t border-[#1D416A] py-6">

        <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center">

          <p className="text-gray-500 text-center">
            © {new Date().getFullYear()} Honey Vision Technologies.
            All Rights Reserved.
          </p>

          <div className="flex gap-8 mt-4 md:mt-0">

            <Link
              to="/privacy-policy"
              className="hover:text-[#24A8E0] transition"
            >
              Privacy Policy
            </Link>

            <Link
              to="/terms"
              className="hover:text-[#24A8E0] transition"
            >
              Terms & Conditions
            </Link>

          </div>

        </div>

      </div>

    </footer>
  );
};

export default Footer;