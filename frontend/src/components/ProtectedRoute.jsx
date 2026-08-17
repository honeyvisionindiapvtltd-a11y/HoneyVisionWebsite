import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const ProtectedRoute = ({ children, requireAdmin = false }) => {
  const navigate = useNavigate();
  const { isAuthenticated, user, loading } = useAuth();

  useEffect(() => {
    if (loading) return;

    if (!isAuthenticated) {
      navigate("/login", { replace: true });
      return;
    }

    if (requireAdmin && user?.role !== "admin") {
      navigate("/", { replace: true });
    }
  }, [isAuthenticated, user, loading, navigate, requireAdmin]);

  // Show loading state while checking authentication
  if (loading) {
    return (
      <div className="min-h-screen bg-[#09101c] flex items-center justify-center">
        <div className="rounded-full border border-[#24A8E0]/30 bg-[#09101c]/90 px-6 py-3 text-sm font-semibold text-[#24A8E0]">
          Loading...
        </div>
      </div>
    );
  }

  // Only render children if user is authenticated and has proper role
  if (!isAuthenticated) {
    return null;
  }

  if (requireAdmin && user?.role !== "admin") {
    return null;
  }

  return children;
};

export default ProtectedRoute;
