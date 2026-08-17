import { BrowserRouter, Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { lazy, Suspense, useEffect, useState } from "react";
import { AuthProvider, useAuth } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
import Navbar from "./components/Navbar"
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";
import CookieConsentBanner from "./components/CookieConsentBanner";

const Hero = lazy(() => import("./Hero"));
const Solutions = lazy(() => import("./pages/solutions/Solutions"));
const AISurveillance = lazy(() => import("./pages/solutions/AISurveillance"));
const ComputerVision = lazy(() => import("./pages/solutions/ComputerVision"));
const SmartAgriculture = lazy(() => import("./pages/solutions/SmartAgriculture"));
const SmartCity = lazy(() => import("./pages/solutions/SmartCity"));
const AudioVisual = lazy(() => import("./pages/solutions/AudioVisual"));
const Technology = lazy(() => import("./pages/technology/Technology"));
const AIVisionsystems = lazy(() => import("./pages/technology/AIVisionsystems"));
const RadarTechnology = lazy(() => import("./pages/technology/RadarTechnology"));
const StorageBandwidth = lazy(() => import("./pages/technology/StorageBandwidth"));
const SmartEdgeComputing = lazy(() => import("./pages/technology/SmartEdgeComputing"));
const AudioVideoIntegration = lazy(() => import("./pages/technology/AudioVideoIntegration"));
const CloudConnectivity = lazy(() => import("./pages/technology/CloudConnectivity"));
const Demo = lazy(() => import("./pages/Demo"));
const Service = lazy(() => import("./pages/service/Service"));
const AIConsulting = lazy(() => import("./pages/service/AIConsulting"));
const Security = lazy(() => import("./pages/service/Security"));
const Installation = lazy(() => import("./pages/service/Installation"));
const TrainingSupport = lazy(() => import("./pages/service/TrainingSupport"));
const MaintenanceSupport = lazy(() => import("./pages/service/MaintenanceSupport"));
const Product = lazy(() => import("./pages/products/Product"));
const ProductDetail = lazy(() => import("./pages/products/ProductDetail"));
const AICCTVCameras = lazy(() => import("./pages/products/AICCTVCameras"));
const IPCameraSystems = lazy(() => import("./pages/products/IPCameraSystems"));
const AudioVisualSystems = lazy(() => import("./pages/products/AudioVisualSystems"));
const AgriculturalAIDrones = lazy(() => import("./pages/products/AgriculturalAIDrones"));
const AccessControl = lazy(() => import("./pages/products/AccessControl"));
const Industry = lazy(() => import("./pages/Industry"));
const Login = lazy(() => import("./components/Login"));
const Register = lazy(() => import("./components/Register"));
const Profile = lazy(() => import("./components/Profile"));
const ForgotPassword = lazy(() => import("./components/ForgotPassword"));
const ChangePassword = lazy(() => import("./components/ChangePassword"));
const EditProfile = lazy(() => import("./components/EditProfile"));
const ResetPassword = lazy(() => import("./components/ResetPassword"));
const Contact = lazy(() => import("./components/Contact"));
const CMSPage = lazy(() => import("./pages/CMSPage"));
const CMSIndex = lazy(() => import("./pages/CMSIndex"));
const AdminDashboard = lazy(() => import("./pages/admin/AdminDashboard"));

const AuthGate = () => {
  const { loading } = useAuth();

  useEffect(() => {
    if (loading) return;
  }, [loading]);

  return null;
};

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [pathname]);

  return null;
};

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <div className="relative min-h-screen overflow-hidden bg-[#09101c] text-white">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(36,168,224,0.16),transparent_28%)] pointer-events-none" />
          <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[length:90px_90px] opacity-30 pointer-events-none" />
          <div className="absolute left-8 top-24 h-56 w-56 rounded-full bg-[#24A8E0]/18 blur-3xl opacity-90 animate-floatSlow pointer-events-none" />
          <div className="absolute right-8 bottom-12 h-72 w-72 rounded-full bg-[#F1CF45]/12 blur-3xl opacity-90 animate-floatSlow pointer-events-none" />
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute left-[-120px] top-24 h-px w-[540px] bg-gradient-to-r from-transparent via-[#24A8E0]/70 to-transparent rotate-[10deg] animate-shimmerLine" />
            <div className="absolute left-20 top-60 h-px w-[420px] bg-gradient-to-r from-transparent via-[#F1CF45]/55 to-transparent rotate-[-8deg] animate-shimmerLine" />
          </div>

          {/* Global animated glowing particles */}
          <div className="global-particles" aria-hidden>
            <span className="particle" style={{"--left":"6%","--top":"12%","--size":"18px","--duration":"14s","--delay":"0s","--color":"rgba(36,168,224,0.16)"}} />
            <span className="particle" style={{"--left":"20%","--top":"28%","--size":"10px","--duration":"9s","--delay":"1s","--color":"rgba(241,207,69,0.12)"}} />
            <span className="particle" style={{"--left":"38%","--top":"8%","--size":"14px","--duration":"11s","--delay":"-2s","--color":"rgba(36,168,224,0.12)"}} />
            <span className="particle" style={{"--left":"60%","--top":"20%","--size":"22px","--duration":"18s","--delay":"-4s","--color":"rgba(36,168,224,0.10)"}} />
            <span className="particle" style={{"--left":"80%","--top":"10%","--size":"12px","--duration":"10s","--delay":"2s","--color":"rgba(241,207,69,0.10)"}} />
            <span className="particle" style={{"--left":"12%","--top":"65%","--size":"16px","--duration":"13s","--delay":"-1s","--color":"rgba(36,168,224,0.14)"}} />
            <span className="particle" style={{"--left":"30%","--top":"72%","--size":"9px","--duration":"8s","--delay":"0.5s","--color":"rgba(241,207,69,0.11)"}} />
            <span className="particle" style={{"--left":"48%","--top":"62%","--size":"20px","--duration":"16s","--delay":"-3s","--color":"rgba(36,168,224,0.12)"}} />
            <span className="particle" style={{"--left":"68%","--top":"76%","--size":"11px","--duration":"10s","--delay":"1.2s","--color":"rgba(241,207,69,0.12)"}} />
            <span className="particle" style={{"--left":"88%","--top":"52%","--size":"14px","--duration":"12s","--delay":"-2s","--color":"rgba(36,168,224,0.11)"}} />
            <span className="particle" style={{"--left":"50%","--top":"34%","--size":"8px","--duration":"7s","--delay":"0s","--color":"rgba(255,255,255,0.06)"}} />
            <span className="particle" style={{"--left":"72%","--top":"28%","--size":"6px","--duration":"9s","--delay":"-1s","--color":"rgba(36,168,224,0.09)"}} />
          </div>

          <Navbar />
          <ScrollToTop />
          <AuthGate />
          <Suspense
            fallback={
              <div className="flex min-h-screen items-center justify-center bg-[#09101c] text-white">
                <div className="rounded-full border border-[#24A8E0]/30 bg-[#09101c]/90 px-6 py-3 text-sm font-semibold text-[#24A8E0]">
                  Loading page...
                </div>
              </div>
            }
          >
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/solutions" element={<Solutions />} />
            <Route path="/technology" element={<Technology />} />
            <Route path="/technology/ai-vision-systems" element={<AIVisionsystems />} />
            <Route path="/technology/aivisionsystems" element={<AIVisionsystems />} />
            <Route path="/technology/radar-technology" element={<RadarTechnology />} />
            <Route path="/technology/radartechnology" element={<RadarTechnology />} />
            <Route path="/technology/storage-bandwidth" element={<StorageBandwidth />} />
            <Route path="/technology/storagebandwidth" element={<StorageBandwidth />} />
            <Route path="/technology/smart-edge-computing" element={<SmartEdgeComputing />} />
            <Route path="/technology/smartedgecomputing" element={<SmartEdgeComputing />} />
            <Route path="/technology/audio-video-integration" element={<AudioVideoIntegration />} />
            <Route path="/technology/audiovideointegration" element={<AudioVideoIntegration />} />
            <Route path="/technology/cloud-connectivity" element={<CloudConnectivity />} />
            <Route path="/technology/cloudconnectivity" element={<CloudConnectivity />} />
            <Route path="/demo" element={<Demo />} />
            <Route path="/service" element={<Service />} />
            <Route path="/service/ai-consulting" element={<AIConsulting />} />
            <Route path="/service/security-consulting" element={<Security />} />
            <Route path="/service/installation" element={<Installation />} />
            <Route path="/service/training-support" element={<TrainingSupport />} />
            <Route path="/service/maintenance" element={<MaintenanceSupport />} />
            <Route path="/solutions/ai-surveillance" element={<AISurveillance />} />
            <Route path="/solutions/computervision" element={<ComputerVision />} />
            <Route path="/solutions/smartagriculture" element={<SmartAgriculture />} />
            <Route path="/solutions/smartcity" element={<SmartCity />} />
            <Route path="/solutions/audiovisuals" element={<AudioVisual />} />
            <Route path="/product" element={<Product />} />
            <Route path="/product/:slug" element={<ProductDetail />} />
            <Route path="/product/ai-cctv-cameras" element={<AICCTVCameras />} />
            <Route path="/product/ip-camera-systems" element={<IPCameraSystems />} />
            <Route path="/product/audiovisual-systems" element={<AudioVisualSystems />} />
            <Route path="/product/agricultural-ai-drones" element={<AgriculturalAIDrones />} />
            <Route path="/product/access-control" element={<AccessControl />} />
            <Route path="/industries" element={<Industry />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forgotpassword" element={<ForgotPassword />} />
            <Route path="/reset-password" element={<ResetPassword />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cms" element={<CMSIndex />} />
            <Route path="/cms/:slug" element={<CMSPage />} />
            <Route path="/admin" element={<ProtectedRoute><AdminDashboard /></ProtectedRoute>} />
            <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
            <Route path="/changepassword" element={<ProtectedRoute><ChangePassword /></ProtectedRoute>} />
            <Route path="/editprofile" element={<ProtectedRoute><EditProfile /></ProtectedRoute>} />
          </Routes>
          </Suspense>
          <BackToTop />
          <Footer />
          <CookieConsentBanner />
        </div>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;