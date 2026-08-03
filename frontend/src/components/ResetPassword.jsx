import { useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { authApi, ApiError } from "../services/api";
import { useAuth } from "../context/AuthContext";

const ResetPassword = () => {
  const [searchParams] = useSearchParams();
  const token = searchParams.get("token") || "";
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { persistAuth } = useAuth();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");
    setMessage("");

    if (!token) {
      setError("Invalid reset link. Please request a new password reset.");
      return;
    }

    if (password.length < 6 || password.length > 72) {
      setError("Password must be between 6 and 72 characters.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setLoading(true);

    try {
      const data = await authApi.resetPassword({ token, password });
      persistAuth(data.token, data.user, true);
      setMessage("Password reset successful! Redirecting to your profile...");
      setTimeout(() => navigate("/profile"), 1500);
    } catch (err) {
      setError(err instanceof ApiError ? err.message : "Failed to reset password.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(36,168,224,0.16),_transparent_35%),linear-gradient(135deg,_#0f1118,_#111015_55%,_#161722)] px-6 py-8 text-white flex items-center justify-center">
      <div className="mx-auto flex w-full max-w-2xl items-center justify-center">
        <div className="w-full rounded-[28px] border border-[#927223]/60 bg-[#111015]/90 p-6 shadow-2xl shadow-black/30 backdrop-blur-xl sm:p-8">
          <div className="mb-6 text-center">
            <p className="text-sm font-semibold uppercase tracking-[6px] text-[#24A8E0]">Reset password</p>
            <h1 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
              Create a new <span className="text-[#F1CF45]">password</span>
            </h1>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="New password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full rounded-2xl border border-[#2f3a4a] bg-[#15141d] px-4 py-3 pr-12 text-white placeholder:text-gray-400 focus:border-[#24A8E0] focus:outline-none focus:ring-2 focus:ring-[#24A8E0]/30"
                required
                minLength={6}
                maxLength={72}
              />
              <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 transition hover:text-[#24A8E0]"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>

            <input
              type="password"
              placeholder="Confirm new password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full rounded-2xl border border-[#2f3a4a] bg-[#15141d] px-4 py-3 text-white placeholder:text-gray-400 focus:border-[#24A8E0] focus:outline-none focus:ring-2 focus:ring-[#24A8E0]/30"
              required
              minLength={6}
              maxLength={72}
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-full bg-[#F1CF45] px-6 py-3 font-semibold text-black transition hover:bg-[#24A8E0] hover:text-white disabled:opacity-60"
            >
              {loading ? "Resetting..." : "Reset Password"}
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
            <Link to="/login" className="font-semibold text-[#24A8E0] hover:text-[#F1CF45]">Back to login</Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ResetPassword;
