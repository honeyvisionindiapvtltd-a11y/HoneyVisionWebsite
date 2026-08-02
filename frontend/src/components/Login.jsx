import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useAuth } from "../context/AuthContext";
import { ApiError } from "../services/api";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { login } = useAuth();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");
    setMessage("");

    if (!formData.email || !formData.password) {
      setError("Please enter both your email and password.");
      return;
    }

    setLoading(true);

    try {
      await login(
        { email: formData.email, password: formData.password },
        rememberMe
      );
      setMessage("Welcome back! Login successful.");
      const redirectTo = location.state?.from || "/";
      setTimeout(() => navigate(redirectTo), 800);
    } catch (err) {
      setError(err instanceof ApiError ? err.message : "Login failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(36,168,224,0.16),_transparent_35%),linear-gradient(135deg,_#0f1118,_#111015_55%,_#161722)] px-6 py-8 text-white flex items-center justify-center">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-center">
        <div className="w-full max-w-xl rounded-[28px] border border-[#927223]/60 bg-[#111015]/90 p-6 shadow-2xl shadow-black/30 backdrop-blur-xl sm:p-8">
          <div className="mb-6 text-center">
            <p className="text-sm font-semibold uppercase tracking-[6px] text-[#24A8E0]">Welcome back</p>
            <h1 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
              Sign in to <span className="text-[#F1CF45]">Honey Vision</span>
            </h1>
            <p className="mt-3 text-sm text-gray-400">
              Access your account and continue your security journey.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="email"
              name="email"
              placeholder="Email address"
              value={formData.email}
              onChange={handleChange}
              className="w-full rounded-2xl border border-[#2f3a4a] bg-[#15141d] px-4 py-3 text-white placeholder:text-gray-400 focus:border-[#24A8E0] focus:outline-none focus:ring-2 focus:ring-[#24A8E0]/30"
              required
            />

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                className="w-full rounded-2xl border border-[#2f3a4a] bg-[#15141d] px-4 py-3 pr-12 text-white placeholder:text-gray-400 focus:border-[#24A8E0] focus:outline-none focus:ring-2 focus:ring-[#24A8E0]/30"
                required
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

            <div className="flex items-center justify-between text-sm text-gray-400">
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="h-4 w-4 rounded border-gray-600 bg-transparent text-[#24A8E0] focus:ring-[#24A8E0]"
                />
                Remember me
              </label>
              <button
                type="button"
                onClick={() => navigate("/forgotpassword")}
                className="text-[#24A8E0] hover:text-[#F1CF45]"
              >
                Forgot password?
              </button>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-full bg-[#F1CF45] px-6 py-3 font-semibold text-black transition hover:bg-[#24A8E0] hover:text-white disabled:opacity-60"
            >
              {loading ? "Signing in..." : "Sign In"}
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
            Don’t have an account? <Link to="/register" className="font-semibold text-[#24A8E0] hover:text-[#F1CF45]">Create one</Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Login;
