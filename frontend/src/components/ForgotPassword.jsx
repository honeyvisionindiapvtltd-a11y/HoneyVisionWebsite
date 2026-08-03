import { useState } from "react";
import { Link } from "react-router-dom";
import { authApi, ApiError } from "../services/api";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [resetUrl, setResetUrl] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");
    setMessage("");
    setResetUrl("");

    if (!email) {
      setError("Please enter your email address.");
      return;
    }

    setLoading(true);

    try {
      const data = await authApi.forgotPassword(email);
      setMessage(data.message);
      if (data.resetUrl) {
        setResetUrl(data.resetUrl);
      }
      setEmail("");
    } catch (err) {
      setError(err instanceof ApiError ? err.message : "Failed to send reset link.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(36,168,224,0.16),_transparent_35%),linear-gradient(135deg,_#0f1118,_#111015_55%,_#161722)] px-6 py-8 text-white flex items-center justify-center">
      <div className="mx-auto flex w-full max-w-2xl items-center justify-center">
        <div className="w-full rounded-[28px] border border-[#927223]/60 bg-[#111015]/90 p-6 shadow-2xl shadow-black/30 backdrop-blur-xl sm:p-8">
          <div className="mb-6 text-center">
            <p className="text-sm font-semibold uppercase tracking-[6px] text-[#24A8E0]">Account recovery</p>
            <h1 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
              Forgot your <span className="text-[#F1CF45]">password?</span>
            </h1>
            <p className="mt-3 text-sm text-gray-400">
              Enter your email and we’ll send reset instructions to help you get back in quickly.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="email"
              placeholder="Email address"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className="w-full rounded-2xl border border-[#2f3a4a] bg-[#15141d] px-4 py-3 text-white placeholder:text-gray-400 focus:border-[#24A8E0] focus:outline-none focus:ring-2 focus:ring-[#24A8E0]/30"
              required
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-full bg-[#F1CF45] px-6 py-3 font-semibold text-black transition hover:bg-[#24A8E0] hover:text-white disabled:opacity-60"
            >
              {loading ? "Sending..." : "Send Reset Link"}
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

          {resetUrl && (
            <p className="mt-3 rounded-2xl border border-[#F1CF45]/30 bg-[#927223]/20 px-4 py-3 text-xs text-[#F1CF45] break-all">
              Dev reset link: <a href={resetUrl} className="underline">{resetUrl}</a>
            </p>
          )}

          <p className="mt-5 text-center text-sm text-gray-400">
            Remembered it? <Link to="/login" className="font-semibold text-[#24A8E0] hover:text-[#F1CF45]">Back to login</Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ForgotPassword;
