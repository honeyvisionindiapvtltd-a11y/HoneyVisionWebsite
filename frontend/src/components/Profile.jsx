import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const getInitials = (name = "") =>
  name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join("") || "U";

const Profile = () => {
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  if (!user) return null;

  return (
    <section className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(36,168,224,0.16),_transparent_35%),linear-gradient(135deg,_#0f1118,_#111015_55%,_#161722)] px-6 py-24 flex items-center justify-center text-white">
      <div className="w-full max-w-6xl rounded-[32px] border border-[#927223]/50 bg-[#111015]/90 p-8 shadow-2xl backdrop-blur-xl">

        <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
          <div className="flex h-24 w-24 items-center justify-center rounded-full border border-[#24A8E0] bg-[#1D416A]/60 text-3xl font-bold text-[#F1CF45]">
            {getInitials(user.fullName)}
          </div>

          <div>
            <p className="text-sm uppercase tracking-[6px] font-semibold text-[#24A8E0]">
              User Profile
            </p>

            <h1 className="mt-2 text-3xl font-bold">
              {user.fullName}
            </h1>

            <p className="mt-2 text-gray-400">
              {user.company ? `${user.company} • Honey Vision` : "Honey Vision Member"}
            </p>
          </div>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-[1.5fr_0.8fr]">

          <div className="rounded-3xl border border-[#2f3a4a] bg-[#15141d]/90 p-6">

            <h2 className="text-2xl font-semibold">
              Account Details
            </h2>

            <div className="mt-6 space-y-5">

              <div className="flex justify-between border-b border-[#2f3a4a] pb-3">
                <span className="text-gray-400">Full Name</span>
                <span>{user.fullName}</span>
              </div>

              <div className="flex justify-between border-b border-[#2f3a4a] pb-3">
                <span className="text-gray-400">Email</span>
                <span>{user.email}</span>
              </div>

              <div className="flex justify-between border-b border-[#2f3a4a] pb-3">
                <span className="text-gray-400">Phone</span>
                <span>{user.phone || "—"}</span>
              </div>

              <div className="flex justify-between border-b border-[#2f3a4a] pb-3">
                <span className="text-gray-400">Company</span>
                <span>{user.company || "—"}</span>
              </div>

              <div className="flex justify-between">
                <span className="text-gray-400">Location</span>
                <span>{user.location || "—"}</span>
              </div>

            </div>

          </div>

          <div className="space-y-6">

            <div className="rounded-3xl border border-[#2f3a4a] bg-[#15141d]/90 p-6">

              <h2 className="text-2xl font-semibold">
                Quick Actions
              </h2>

              <div className="mt-5 space-y-4">

                <Link
                  to="/editprofile"
                  className="block w-full rounded-full bg-[#F1CF45] py-3 text-center font-semibold text-black transition hover:bg-[#24A8E0] hover:text-white"
                >
                  Edit Profile
                </Link>

                <Link
                  to="/changepassword"
                  className="block w-full rounded-full border border-[#24A8E0] py-3 text-center font-semibold text-[#24A8E0] transition hover:bg-[#24A8E0] hover:text-white"
                >
                  Change Password
                </Link>

                <button
                  type="button"
                  onClick={handleLogout}
                  className="w-full rounded-full border border-red-500 py-3 font-semibold text-red-400 transition hover:bg-red-500 hover:text-white"
                >
                  Logout
                </button>

              </div>

            </div>

            <div className="rounded-3xl border border-[#927223]/50 bg-[#1D416A]/20 p-6">

              <h2 className="text-2xl font-semibold">
                Security Status
              </h2>

              <p className="mt-3 text-sm leading-7 text-gray-300">
                Your account is secured with encrypted passwords and JWT authentication.
                Keep your credentials private and update your password regularly.
              </p>

              <Link
                to="/"
                className="mt-5 inline-block font-semibold text-[#24A8E0] transition hover:text-[#F1CF45]"
              >
                ← Back to Home
              </Link>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Profile;
