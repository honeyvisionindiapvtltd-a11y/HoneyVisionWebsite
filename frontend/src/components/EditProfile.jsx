import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const EditProfile = () => {
  const navigate = useNavigate();
  const { user, updateProfile } = useAuth();

  const [form, setForm] = useState({
    fullName: "",
    phone: "",
    company: "",
    location: "",
  });
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (user) {
      setForm({
        fullName: user.fullName || "",
        phone: user.phone || "",
        company: user.company || "",
        location: user.location || "",
      });
    }
  }, [user]);

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
    setLoading(true);

    try {
      await updateProfile(form);
      setMessage("Profile updated successfully!");
      setTimeout(() => navigate("/profile"), 1000);
    } catch (err) {
      setError(err.message || "Failed to update profile.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="min-h-screen bg-[#111015] flex items-center justify-center px-6">

      <form
        onSubmit={handleSubmit}
        className="w-full max-w-xl rounded-3xl bg-[#18171f] p-8 border border-[#2f3a4a]"
      >

        <h2 className="mb-8 text-3xl font-bold text-white">
          Edit Profile
        </h2>

        <div className="space-y-5">

          <input
            type="text"
            name="fullName"
            value={form.fullName}
            onChange={handleChange}
            placeholder="Full name"
            className="w-full rounded-lg bg-[#111015] border border-[#2f3a4a] p-3 text-white"
            required
          />

          <input
            type="email"
            value={user?.email || ""}
            placeholder="Email"
            className="w-full rounded-lg bg-[#111015] border border-[#2f3a4a] p-3 text-gray-400 cursor-not-allowed"
            disabled
          />

          <input
            type="text"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="Phone"
            className="w-full rounded-lg bg-[#111015] border border-[#2f3a4a] p-3 text-white"
          />

          <input
            type="text"
            name="company"
            value={form.company}
            onChange={handleChange}
            placeholder="Company"
            className="w-full rounded-lg bg-[#111015] border border-[#2f3a4a] p-3 text-white"
          />

          <input
            type="text"
            name="location"
            value={form.location}
            onChange={handleChange}
            placeholder="Location"
            className="w-full rounded-lg bg-[#111015] border border-[#2f3a4a] p-3 text-white"
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
          className="mt-8 w-full rounded-full bg-[#F1CF45] py-3 font-semibold text-black disabled:opacity-60"
        >
          {loading ? "Saving..." : "Save Changes"}
        </button>

      </form>

    </section>
  );
};

export default EditProfile;
