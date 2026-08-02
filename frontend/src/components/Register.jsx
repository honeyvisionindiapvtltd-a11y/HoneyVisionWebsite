import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useAuth } from "../context/AuthContext";
import { ApiError } from "../services/api";

const initialForm = {
  fullName: "",
  email: "",
  phone: "",
  company: "",
  password: "",
  confirmPassword: "",
  agreeTerms: false,
};

const Register = () => {
  const [formData, setFormData] = useState(initialForm);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { register } = useAuth();

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");
    setMessage("");

    if (formData.password.length < 6 || formData.password.length > 72) {
      setError("Password must be between 6 and 72 characters.");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match. Please try again.");
      return;
    }

    if (!formData.agreeTerms) {
      setError("Please accept the terms to continue.");
      return;
    }

    setLoading(true);

    try {
      await register(
        {
          fullName: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          company: formData.company,
          password: formData.password,
        },
        false
      );
      setMessage(`Account created. Please sign in to continue.`);
      setTimeout(() => navigate("/login"), 1000);
    } catch (err) {
      setError(err instanceof ApiError ? err.message : "Registration failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(36,168,224,0.16),_transparent_35%),linear-gradient(135deg,_#0f1118,_#111015_55%,_#161722)] px-6 py-8 text-white flex items-center justify-center">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-10 lg:flex-row lg:items-center">
        <div className="max-w-2xl space-y-6">
          <p className="text-sm font-semibold uppercase tracking-[6px] text-[#24A8E0]">
            Secure Your Future
          </p>
          <h1 className="text-4xl font-bold leading-tight sm:text-5xl">
            Register with <span className="text-[#F1CF45]">Honey Vision</span> and unlock intelligent security solutions.
          </h1>
          <p className="text-lg leading-8 text-gray-300">
            Join enterprise teams, smart city planners, and security leaders who rely on AI-powered surveillance and advanced monitoring technologies.
          </p>

          <div className="grid gap-3 rounded-2xl border border-[#927223]/60 bg-[#111015]/80 p-5 shadow-2xl shadow-black/20 sm:grid-cols-2">
            <div className="rounded-xl border border-[#24A8E0]/20 bg-[#1D416A]/50 p-4">
              <h2 className="font-semibold text-[#24A8E0]">Fast onboarding</h2>
              <p className="mt-2 text-sm text-gray-300">Start your deployment journey with guided support.</p>
            </div>
            <div className="rounded-xl border border-[#F1CF45]/20 bg-[#927223]/20 p-4">
              <h2 className="font-semibold text-[#F1CF45]">Custom solutions</h2>
              <p className="mt-2 text-sm text-gray-300">Tailored security systems for your business needs.</p>
            </div>
          </div>
        </div>

        <div className="w-full max-w-xl rounded-[28px] border border-[#927223]/60 bg-[#111015]/90 p-6 shadow-2xl shadow-black/30 backdrop-blur-xl sm:p-8">
          <div className="mb-6">
            <h2 className="text-2xl font-semibold text-white">Create your account</h2>
            <p className="mt-2 text-sm text-gray-400">Fill in your details to get started.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <input
                type="text"
                name="fullName"
                placeholder="Full name"
                value={formData.fullName}
                onChange={handleChange}
                className="w-full rounded-2xl border border-[#2f3a4a] bg-[#15141d] px-4 py-3 text-white placeholder:text-gray-400 focus:border-[#24A8E0] focus:outline-none focus:ring-2 focus:ring-[#24A8E0]/30"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email address"
                value={formData.email}
                onChange={handleChange}
                className="w-full rounded-2xl border border-[#2f3a4a] bg-[#15141d] px-4 py-3 text-white placeholder:text-gray-400 focus:border-[#24A8E0] focus:outline-none focus:ring-2 focus:ring-[#24A8E0]/30"
                required
              />
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <input
                type="tel"
                name="phone"
                placeholder="Phone number"
                value={formData.phone}
                onChange={handleChange}
                className="w-full rounded-2xl border border-[#2f3a4a] bg-[#15141d] px-4 py-3 text-white placeholder:text-gray-400 focus:border-[#24A8E0] focus:outline-none focus:ring-2 focus:ring-[#24A8E0]/30"
              />
              <input
                type="text"
                name="company"
                placeholder="Company name"
                value={formData.company}
                onChange={handleChange}
                className="w-full rounded-2xl border border-[#2f3a4a] bg-[#15141d] px-4 py-3 text-white placeholder:text-gray-400 focus:border-[#24A8E0] focus:outline-none focus:ring-2 focus:ring-[#24A8E0]/30"
              />
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full rounded-2xl border border-[#2f3a4a] bg-[#15141d] px-4 py-3 pr-12 text-white placeholder:text-gray-400 focus:border-[#24A8E0] focus:outline-none focus:ring-2 focus:ring-[#24A8E0]/30"
                  required
                  minLength={6}
                  maxLength={72}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((prev) => !prev)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 transition hover:text-[#24A8E0]"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
              <div className="relative">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  name="confirmPassword"
                  placeholder="Confirm password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="w-full rounded-2xl border border-[#2f3a4a] bg-[#15141d] px-4 py-3 pr-12 text-white placeholder:text-gray-400 focus:border-[#24A8E0] focus:outline-none focus:ring-2 focus:ring-[#24A8E0]/30"
                  required
                  minLength={6}
                  maxLength={72}
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword((prev) => !prev)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 transition hover:text-[#24A8E0]"
                  aria-label={showConfirmPassword ? "Hide confirm password" : "Show confirm password"}
                >
                  {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
            </div>

            <label className="flex items-start gap-3 rounded-2xl border border-[#2f3a4a] bg-[#15141d] px-4 py-3 text-sm text-gray-300">
              <input
                type="checkbox"
                name="agreeTerms"
                checked={formData.agreeTerms}
                onChange={handleChange}
                className="mt-1 h-4 w-4 rounded border-gray-600 bg-transparent text-[#24A8E0] focus:ring-[#24A8E0]"
              />
              <span>I agree to the privacy policy and accept the onboarding process.</span>
            </label>

            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-full bg-[#F1CF45] px-6 py-3 font-semibold text-black transition hover:bg-[#24A8E0] hover:text-white disabled:opacity-60"
            >
              {loading ? "Creating account..." : "Register Now"}
            </button>
          </form>

          {error && (
            <p className="mt-4 rounded-2xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-300">
              {error}
            </p>
          )}

          {message && (
            <p className="mt-4 rounded-2xl border border-[#24A8E0]/30 bg-[#1D416A]/40 px-4 py-3 text-sm text-[#8ed8ff]">
              {message}
            </p>
          )}

          <p className="mt-5 text-center text-sm text-gray-400">
            Already have an account? <Link to="/login" className="font-semibold text-[#24A8E0] hover:text-[#F1CF45]">Sign in</Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Register;
