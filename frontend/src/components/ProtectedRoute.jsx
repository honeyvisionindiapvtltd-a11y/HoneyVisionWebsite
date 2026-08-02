import { useState } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import AuthPromptModal from "./AuthPromptModal";

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, loading } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const [showPrompt, setShowPrompt] = useState(true);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#111015] flex items-center justify-center text-white">
        <p className="text-lg text-[#24A8E0]">Loading...</p>
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <>
        <AuthPromptModal
          isOpen={showPrompt}
          title="Protected feature requires login"
          description="You need to sign in or register to access this page. Your data will stay safe and your session will be preserved."
          primaryText="Login"
          secondaryText="Register"
          onPrimary={() => navigate("/login", { state: { from: location.pathname } })}
          onSecondary={() => navigate("/register")}
          onClose={() => setShowPrompt(false)}
        />
        {!showPrompt && (
          <Navigate to="/login" replace state={{ from: location.pathname }} />
        )}
      </>
    );
  }

  return children;
};

export default ProtectedRoute;
