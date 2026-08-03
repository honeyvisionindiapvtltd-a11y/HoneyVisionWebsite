import { useState, useEffect, useRef } from "react";
import { demoApi, ApiError } from "../services/api";

const Demo = () => {
  const videos = [
    {
      id: 1,
      title: "HoneyVision - Overview Demo",
      src: "https://res.cloudinary.com/q6iqvtbe/video/upload/v1785478129/WhatsApp_Video_2026-07-31_at_10.20.06_AM_yxut0c.mp4",
    },
    {
      id: 2,
      title: "AI Tracking & Analytics",
      src: "https://res.cloudinary.com/q6iqvtbe/video/upload/v1785478114/WhatsApp_Video_2026-07-31_at_10.13.24_AM_osbpg8.mp4",
    },
    {
      id: 3,
      title: "Edge & Cloud Integration",
      src: "https://res.cloudinary.com/q6iqvtbe/video/upload/v1785478118/WhatsApp_Video_2026-07-31_at_10.20.06_AM_1_dpotoy.mp4",
    },
  ];

  const initialFormState = {
    fullName: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  };

  const [showDemoForm, setShowDemoForm] = useState(false);
  const [form, setForm] = useState(initialFormState);
  const [successMessage, setSuccessMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const demoFormRef = useRef(null);

  const openDemoForm = () => {
    setError("");
    setSuccessMessage("");
    setShowDemoForm(true);
  };

  useEffect(() => {
    if (showDemoForm && demoFormRef.current) {
      demoFormRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [showDemoForm]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccessMessage("");
    setLoading(true);

    try {
      const data = await demoApi.submit(form);
      setSuccessMessage(data.message || "Demo request sent successfully.");
      setForm(initialFormState);
      setShowDemoForm(false);
    } catch (err) {
      setError(err instanceof ApiError ? err.message : "Failed to submit demo request.");
      setSuccessMessage("");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="min-h-screen bg-[#05070f] text-white py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center mb-12">
          <p className="uppercase tracking-[6px] text-[#24A8E0] font-semibold">Demo</p>
          <h1 className="text-4xl md:text-5xl font-bold mt-4">See HoneyVision in action</h1>
          <p className="mx-auto mt-4 max-w-2xl text-gray-300">Browse demo videos that showcase detection, analytics, and platform workflows. Request a live demo to try features with your environment.</p>
          <div className="mt-6">
            <button
              type="button"
              onClick={openDemoForm}
              className="rounded-full bg-[#F1CF45] px-6 py-3 font-semibold text-[#111015]"
            >
              Request Live Demo
            </button>
          </div>
        </div>
        {successMessage && !showDemoForm && (
          <div className="mx-auto mb-10 max-w-3xl rounded-2xl border border-[#24A8E0]/30 bg-[#112035] px-6 py-4 text-center text-[#8ed8ff] shadow-[0_12px_40px_rgba(36,168,224,0.12)]">
            {successMessage}
          </div>
        )}

        <div className="grid gap-8 md:grid-cols-3">
          {videos.map((v) => (
            <div key={v.id} className="rounded-xl overflow-hidden border border-[#24A8E0]/20 bg-[#0c1223]">
              <div className="aspect-video">
                <video
                  className="w-full h-full object-cover"
                  src={v.src}
                  title={v.title}
                  controls
                  preload="metadata"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold">{v.title}</h3>
                <p className="mt-2 text-sm text-gray-300">Short walkthrough of the feature and how it benefits real deployments.</p>
                <div className="mt-4">
                  <button
                    type="button"
                    onClick={openDemoForm}
                    className="inline-block rounded-full bg-[#24A8E0] px-4 py-2 text-sm font-semibold"
                  >
                    Get this demo
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {showDemoForm && (
          <div ref={demoFormRef} className="mt-16 rounded-4xl border border-[#24A8E0]/20 bg-[#0c1223]/90 p-10 shadow-[0_24px_70px_rgba(36,168,224,0.12)]">
            <h3 className="text-3xl font-bold mb-8">Request Live Demo</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <input
                type="text"
                name="fullName"
                value={form.fullName}
                onChange={handleChange}
                placeholder="Full Name"
                className="w-full bg-[#071015] border border-white/10 rounded-xl p-4 outline-none focus:border-[#24A8E0]"
                required
              />
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Email Address"
                className="w-full bg-[#071015] border border-white/10 rounded-xl p-4 outline-none focus:border-[#24A8E0]"
                required
              />
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                className="w-full bg-[#071015] border border-white/10 rounded-xl p-4 outline-none focus:border-[#24A8E0]"
              />
              <input
                type="text"
                name="company"
                value={form.company}
                onChange={handleChange}
                placeholder="Company Name"
                className="w-full bg-[#071015] border border-white/10 rounded-xl p-4 outline-none focus:border-[#24A8E0]"
              />
              <textarea
                name="message"
                rows="6"
                value={form.message}
                onChange={handleChange}
                placeholder="Tell us about your project..."
                className="w-full bg-[#071015] border border-white/10 rounded-xl p-4 outline-none resize-none focus:border-[#24A8E0]"
                required
              />
              {error && <p className="text-sm text-red-300">{error}</p>}
              {successMessage && <p className="text-sm text-[#8ed8ff]">{successMessage}</p>}
              <div className="flex flex-wrap gap-3">
                <button
                  type="submit"
                  disabled={loading}
                  className="rounded-full bg-[#F1CF45] px-6 py-3 font-semibold text-[#111015] transition disabled:opacity-60"
                >
                  {loading ? "Sending..." : "Submit Request"}
                </button>
                <button
                  type="button"
                  onClick={() => setShowDemoForm(false)}
                  className="rounded-full border border-[#24A8E0] px-6 py-3 text-sm text-[#24A8E0] hover:bg-[#24A8E0]/10"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </section>
  );
};

export default Demo;
