import { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  MessageCircle,
} from "lucide-react";
import aboutBg from "../assets/aboutbg.jpg";
import { contactApi, ApiError } from "../services/api";

const Contact = () => {
  const whatsappNumber = "918270004040";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hello Honey Vision, I would like to know more about your services.")}`;

  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setMessage("");
    setLoading(true);

    try {
      const data = await contactApi.submit(form);
      setMessage(data.message);
      setForm({ fullName: "", email: "", phone: "", company: "", message: "" });
    } catch (err) {
      setError(err instanceof ApiError ? err.message : "Failed to send message.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden text-white py-24 min-h-[80vh]"
      style={{
        backgroundImage: `url(${aboutBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
      }}
    >
      <div className="absolute inset-0 bg-black/10" />
      <div className="relative max-w-7xl mx-auto px-8">

        <div className="text-center mb-20">

          <span className="uppercase tracking-[6px] text-[#24A8E0] font-semibold">
            Contact Us
          </span>

          <h2 className="text-5xl md:text-6xl font-bold mt-4">
            Let's Build the Future
            <span className="text-[#F1CF45]"> Together</span>
          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-300 leading-8">
            Whether you're looking for AI-powered surveillance, smart
            agriculture solutions, audio-visual systems, or enterprise
            technologies, our experts are ready to help.
          </p>

        </div>

        <div className="grid lg:grid-cols-2 gap-12">

          <div>

            <div className="bg-[#1D416A] rounded-3xl p-10 border border-[#24A8E0]/20">

              <h3 className="text-3xl font-bold mb-10">
                Get In Touch
              </h3>

              <div className="space-y-8">

                <div className="flex gap-5">

                  <div className="w-14 h-14 rounded-full bg-[#24A8E0]/20 flex items-center justify-center">
                    <MapPin className="text-[#24A8E0]" />
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold">
                      Office Address
                    </h4>

                    <p className="text-gray-300 mt-2">
                      3rd floor,Rukmani Plaza,Tamando,pincode-752054
                      <br />
                      Bhubaneswar, Odisha, India
                    </p>
                  </div>

                </div>

                <div className="flex gap-5">

                  <div className="w-14 h-14 rounded-full bg-[#24A8E0]/20 flex items-center justify-center">
                    <Phone className="text-[#24A8E0]" />
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold">
                      Phone / WhatsApp
                    </h4>

                    <p className="text-gray-300 mt-2">
                      +91 82700 04040
                    </p>

                    <a
                      href={whatsappLink}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#1da851]"
                    >
                      <MessageCircle size={18} />
                      Chat on WhatsApp
                    </a>
                  </div>

                </div>

                <div className="flex gap-5">

                  <div className="w-14 h-14 rounded-full bg-[#24A8E0]/20 flex items-center justify-center">
                    <Mail className="text-[#24A8E0]" />
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold">
                      Email
                    </h4>

                    <p className="text-gray-300 mt-2">
                      honeyvisionindiapvtltd@gmail.com
                    </p>
                  </div>

                </div>

                <div className="flex gap-5">

                  <div className="w-14 h-14 rounded-full bg-[#24A8E0]/20 flex items-center justify-center">
                    <Clock className="text-[#24A8E0]" />
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold">
                      Working Hours
                    </h4>

                    <p className="text-gray-300 mt-2">
                      Monday - Saturday
                      <br />
                      9:00 AM – 6:30 PM
                    </p>
                  </div>

                </div>

              </div>

            </div>

            <div className="mt-10 bg-gradient-to-r from-[#1D416A] to-[#24A8E0] rounded-3xl p-8">

              <h3 className="text-2xl font-bold">
                "Innovation Begins With a Conversation."
              </h3>

              <p className="mt-4 text-gray-100 leading-7">
                Tell us your vision and our team will help transform it
                into intelligent technology solutions powered by AI,
                surveillance, automation, and innovation.
              </p>

            </div>

          </div>

          <div className="bg-[#1D416A] rounded-3xl p-10 border border-[#24A8E0]/20">

            <h3 className="text-3xl font-bold mb-8">
              Send Us a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">

              <input
                type="text"
                name="fullName"
                placeholder="Full Name"
                value={form.fullName}
                onChange={handleChange}
                className="w-full bg-[#111015] border border-[#24A8E0]/30 rounded-xl p-4 outline-none focus:border-[#24A8E0]"
                required
              />

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={form.email}
                onChange={handleChange}
                className="w-full bg-[#111015] border border-[#24A8E0]/30 rounded-xl p-4 outline-none focus:border-[#24A8E0]"
                required
              />

              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={form.phone}
                onChange={handleChange}
                className="w-full bg-[#111015] border border-[#24A8E0]/30 rounded-xl p-4 outline-none focus:border-[#24A8E0]"
              />

              <input
                type="text"
                name="company"
                placeholder="Company Name"
                value={form.company}
                onChange={handleChange}
                className="w-full bg-[#111015] border border-[#24A8E0]/30 rounded-xl p-4 outline-none focus:border-[#24A8E0]"
              />

              <textarea
                name="message"
                rows="6"
                placeholder="Tell us about your project..."
                value={form.message}
                onChange={handleChange}
                className="w-full bg-[#111015] border border-[#24A8E0]/30 rounded-xl p-4 outline-none resize-none focus:border-[#24A8E0]"
                required
              ></textarea>

              {error && (
                <p className="text-sm text-red-300">{error}</p>
              )}

              {message && (
                <p className="text-sm text-[#8ed8ff]">{message}</p>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#F1CF45] text-black py-4 rounded-xl font-bold flex items-center justify-center gap-3 hover:bg-[#24A8E0] hover:text-white transition duration-300 disabled:opacity-60"
              >
                <Send size={20} />
                {loading ? "Sending..." : "Send Message"}
              </button>

            </form>

          </div>

        </div>

        <div className="mt-24 grid md:grid-cols-3 gap-8">

          <div className="bg-[#1D416A] rounded-2xl p-8 text-center border border-[#24A8E0]/20">

            <h3 className="text-4xl font-bold text-[#F1CF45]">
              AI
            </h3>

            <p className="mt-3 text-gray-300">
              Intelligent Solutions
            </p>

          </div>

          <div className="bg-[#1D416A] rounded-2xl p-8 text-center border border-[#24A8E0]/20">

            <h3 className="text-4xl font-bold text-[#24A8E0]">
              24/7
            </h3>

            <p className="mt-3 text-gray-300">
              Customer Support
            </p>

          </div>

          <div className="bg-[#1D416A] rounded-2xl p-8 text-center border border-[#24A8E0]/20">

            <h3 className="text-4xl font-bold text-[#F1CF45]">
              Made in India
            </h3>

            <p className="mt-3 text-gray-300">
              Technology & Innovation
            </p>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;
