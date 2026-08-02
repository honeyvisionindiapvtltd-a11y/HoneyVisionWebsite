import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { authApi, ApiError } from "../services/api";

const ChangePassword = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setMessage("");

    if (form.newPassword.length < 6 || form.newPassword.length > 72) {
      setError("New password must be between 6 and 72 characters.");
      return;
    }

    if (form.newPassword !== form.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setLoading(true);

    try {
      await authApi.changePassword({
        currentPassword: form.currentPassword,
        newPassword: form.newPassword,
      });
      setMessage("Password changed successfully!");
      setTimeout(() => navigate("/profile"), 1000);
    } catch (err) {
      setError(err instanceof ApiError ? err.message : "Failed to change password.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="min-h-screen bg-[#111015] flex items-center justify-center px-6">

      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg rounded-3xl bg-[#18171f] border border-[#2f3a4a] p-8"
      >

        <h2 className="mb-8 text-3xl font-bold text-white">
          Change Password
        </h2>

        <div className="space-y-5">

          <input
            type="password"
            name="currentPassword"
            placeholder="Current Password"
            value={form.currentPassword}
            onChange={handleChange}
            className="w-full rounded-lg bg-[#111015] border border-[#2f3a4a] p-3 text-white"
            required
          />

          <input
            type="password"
            name="newPassword"
            placeholder="New Password"
            value={form.newPassword}
            onChange={handleChange}
            className="w-full rounded-lg bg-[#111015] border border-[#2f3a4a] p-3 text-white"
            required
            minLength={6}
            maxLength={72}
          />

          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={form.confirmPassword}
            onChange={handleChange}
            className="w-full rounded-lg bg-[#111015] border border-[#2f3a4a] p-3 text-white"
            required
            minLength={6}
            maxLength={72}
          />

        </div>

        {error && (
          <p className="mt-4 text-sm text-red-400">{error}</p>
        )}

        {message && (
          <p className="mt-4 text-sm text-[#24A8E0]">{message}</p>
        )}

        <button
          type="submit"
          disabled={loading}
          className="mt-8 w-full rounded-full bg-[#24A8E0] py-3 font-semibold text-white disabled:opacity-60"
        >
          {loading ? "Updating..." : "Update Password"}
        </button>

      </form>

    </section>
  );
};

export default ChangePassword;
