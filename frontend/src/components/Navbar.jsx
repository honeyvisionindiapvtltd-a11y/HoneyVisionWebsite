import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import {
  ChevronDown,
  UserCircle2,
  Menu,
  X,
  LogOut,
} from "lucide-react";

import { getCloudinaryImageUrl } from "../utils/cloudinary";

const logo = getCloudinaryImageUrl("https://res.cloudinary.com/q6iqvtbe/image/upload/v1785387607/logo_xhoudq.png");
import AuthPromptModal from "./AuthPromptModal";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { pathname, hash } = location;
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState(null);
  const { isAuthenticated, user, logout } = useAuth();
  const [showAuthPrompt, setShowAuthPrompt] = useState(false);
  const [pendingPath, setPendingPath] = useState("");

  const isActiveLink = (targetPath, sectionHash = "") => {
    if (targetPath === "/") {
      if (sectionHash) {
        return pathname === "/" && hash === sectionHash;
      }
      return pathname === "/" && !hash;
    }

    if (targetPath === "/solutions") return pathname.startsWith("/solutions");
    if (targetPath === "/technology") return pathname.startsWith("/technology");
    if (targetPath === "/product") return pathname.startsWith("/product");
    if (targetPath === "/service") return pathname.startsWith("/service");

    return pathname === targetPath;
  };

  const getLinkClass = (active, mobile = false) =>
    active
      ? mobile
        ? "rounded-full bg-[#F1CF45]/15 px-3 py-2 text-[#F1CF45] font-semibold whitespace-nowrap"
        : "rounded-full bg-[#F1CF45]/10 px-3 py-2 text-xs sm:text-sm text-[#F1CF45] font-semibold whitespace-nowrap"
      : mobile
        ? "rounded-full px-3 py-2 text-white/90 hover:bg-[#24A8E0]/10 hover:text-[#24A8E0] whitespace-nowrap"
        : "px-3 py-2 text-xs sm:text-sm hover:text-[#F1CF45] transition whitespace-nowrap";

  const toggleMobileDropdown = (menu) => {
    setMobileDropdown((prev) => (prev === menu ? null : menu));
  };

  const closeMenu = () => {
    setMenuOpen(false);
    setMobileDropdown(null);
  };

  const handleProtectedNav = (e, path) => {
    if (e && e.preventDefault) e.preventDefault();
    if (isAuthenticated) {
      navigate(path);
      closeMenu();
      return;
    }
    setPendingPath(path);
    setShowAuthPrompt(true);
    closeMenu();
  };

  const toggleMenu = () => {
    setMenuOpen((prev) => {
      const next = !prev;
      if (!next) {
        setMobileDropdown(null);
      }
      return next;
    });
  };

  const scrollToAnchor = (target) => {
    if (typeof document === "undefined") return;
    const element = document.getElementById(target);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      window.history.replaceState(null, "", `#${target}`);
    }
  };

  const handleHomeAnchor = (e, target) => {
    if (e && e.preventDefault) e.preventDefault();
    const pathWithHash = `/#${target}`;
    if (pathname !== "/") {
      navigate(pathWithHash);
      setTimeout(() => scrollToAnchor(target), 120);
    } else {
      navigate(pathWithHash, { replace: true });
      setTimeout(() => scrollToAnchor(target), 80);
    }
    closeMenu();
  };

  const handleHomeClick = (e) => {
    if (e && e.preventDefault) e.preventDefault();
    const hasHash = hash && hash.length > 0;
    if (pathname !== "/" || hasHash) {
      navigate("/");
      if (hasHash) {
        setTimeout(() => {
          if (typeof window !== "undefined") {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }
        }, 100);
      }
    }
    closeMenu();
  };

  // global capture handler: intercept clicks on internal links when guest has timed out
  useEffect(() => {
    const handler = (e) => {
      const anchor = e.target && e.target.closest && e.target.closest("a");
      if (!anchor) return;
      // ensure the clicked anchor is inside this navbar
      if (!anchor.closest || !anchor.closest("nav")) return;
      const href = anchor.getAttribute("href");
      if (!href) return;
      if (!href.startsWith("/")) return; // only internal routes

      if (!isAuthenticated) {
        e.preventDefault();
        setPendingPath(href);
        setShowAuthPrompt(true);
        closeMenu();
      }
    };

    document.addEventListener("click", handler, true);
    return () => document.removeEventListener("click", handler, true);
  }, [isAuthenticated]);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#111015]/95 backdrop-blur-lg border-b border-[#927223]/30 shadow-lg">
      <div className="flex w-full items-center justify-between gap-3 px-4 sm:px-5 lg:px-6 xl:px-8 h-16 sm:h-18 lg:h-20">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 sm:gap-3 shrink-0">

          <img
            src={logo}
            alt="Honey Vision"
            className="h-10 w-auto object-contain sm:h-12 lg:h-14"
          />

          <div className="hidden sm:block min-w-0">
            <h1 className="text-base sm:text-xl lg:text-2xl font-bold text-white">
              Honey
              <span className="text-[#F1CF45]">Vision</span>
            </h1>

            <p className="text-[10px] sm:text-xs tracking-[2px] sm:tracking-[3px] uppercase text-[#24A8E0]">
              India PVT. LTD.
            </p>
          </div>

        </Link>

        {/* Navigation */}

        <ul className="hidden lg:flex items-center justify-start gap-2 font-medium text-white px-0 ml-6">
          <li>
            <button type="button" onClick={handleHomeClick} className={`whitespace-nowrap ${getLinkClass(isActiveLink("/"))}`}>
              Home
            </button>
          </li>

          <li>
            <button
              type="button"
              onClick={(e) => handleHomeAnchor(e, "about")}
              className={`whitespace-nowrap ${getLinkClass(isActiveLink("/", "#about"))}`}
            >
              About
            </button>
          </li>

          {/* Solutions */}

          <li className="relative group">

            <Link
              to="/solutions"
              className={`flex items-center gap-1 ${getLinkClass(isActiveLink("/solutions"))}`}
            >
              Solutions
              <ChevronDown size={16} />
            </Link>

            <div className="absolute top-full left-0 mt-3 w-72 rounded-xl bg-[#1D416A] border border-[#24A8E0]/20 shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">

              <Link
                to="/solutions/ai-surveillance"
                className="block px-5 py-3 hover:bg-[#24A8E0]/20"
              >
                AI Surveillance
              </Link>

              <Link
                to="/solutions/computervision"
                className="block px-5 py-3 hover:bg-[#24A8E0]/20"
              >
                ComputerVision
              </Link>

              <Link
                to="/solutions/smartagriculture"
                className="block px-5 py-3 hover:bg-[#24A8E0]/20"
              >
                Smart Agriculture
              </Link>

              <Link
                to="/solutions/smartcity"
                className="block px-5 py-3 hover:bg-[#24A8E0]/20"
              >
                SmartCity
              </Link>

              <Link
                to="/solutions/audiovisuals"
                className="block px-5 py-3 hover:bg-[#24A8E0]/20"
              >
                Audio Visuals Solutions
              </Link>

            </div>

          </li>

          {/* Technology */}

          <li className="relative group">

            <Link
              to="/technology"
              className={`flex items-center gap-1 ${getLinkClass(isActiveLink("/technology"))}`}
            >
              Technology
              <ChevronDown size={16} />
            </Link>

            <div className="absolute top-full left-0 mt-3 w-72 rounded-xl bg-[#1D416A] border border-[#24A8E0]/20 shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">

             <Link to="/technology/aivisionsystems" className="block px-5 py-3 hover:bg-[#24A8E0]/20">
                AI Vision Systems
              </Link>

              <Link to="/technology/radartechnology" className="block px-5 py-3 hover:bg-[#24A8E0]/20">
                Radar Technology
              </Link>

              <Link to="/technology/storagebandwidth" className="block px-5 py-3 hover:bg-[#24A8E0]/20">
                Storage & Bandwidth Optimization
              </Link>

              <Link to="/technology/smartedgecomputing" className="block px-5 py-3 hover:bg-[#24A8E0]/20">
                Smart Edge Computing
              </Link>

              <Link to="/technology/audiovideointegration" className="block px-5 py-3 hover:bg-[#24A8E0]/20">
                Audio & Video Integration
              </Link>

              <Link to="/technology/cloudconnectivity" className="block px-5 py-3 hover:bg-[#24A8E0]/20">
                Cloud Connectivity
              </Link>

            </div>

          </li>

          {/* Products */}

          {/* Products Dropdown */}
<li className="relative group">
  <Link
    to="/product"
    className={`flex items-center gap-1 ${getLinkClass(isActiveLink("/product"))}`}
  >
    Products <ChevronDown size={16} />
  </Link>

  <div className="absolute top-full left-0 mt-3 w-72 bg-[#1D416A] rounded-xl shadow-2xl border border-[#24A8E0]/30 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">

    <Link
      to="/product/ai-cctv-cameras"
      className="block px-5 py-3 text-white hover:bg-[#24A8E0] rounded-t-xl"
    >
      AI CCTV Cameras
    </Link>

    <Link
      to="/product/ip-camera-systems"
      className="block px-5 py-3 text-white hover:bg-[#24A8E0]"
    >
      IP Camera Systems
    </Link>

    <Link
      to="/product/audiovisual-systems"
      className="block px-5 py-3 text-white hover:bg-[#24A8E0]"
    >
      Audiovisual Systems
    </Link>

    <Link
      to="/product/agricultural-ai-drones"
      className="block px-5 py-3 text-white hover:bg-[#24A8E0]"
    >
      Agricultural AI Drones
    </Link>

    <Link
      to="/product/access-control"
      className="block px-5 py-3 text-white hover:bg-[#24A8E0] rounded-b-xl"
    >
      Access Control
    </Link>

  </div>
</li>


          {/* Industries */}

          <li>
            <Link
              to="/industries"
              className={getLinkClass(isActiveLink("/industries"))}
            >
              Industries
            </Link>
          </li>

          {/* Services */}

          <li className="relative group">

            <Link
              to="/service"
              className={`flex items-center gap-1 ${getLinkClass(isActiveLink("/service"))}`}
            >
              Services
              <ChevronDown size={16} />
            </Link>

            <div className="absolute top-full left-0 mt-3 w-72 rounded-xl bg-[#1D416A] border border-[#24A8E0]/20 shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">

              <Link to="/service/ai-consulting" className="block px-5 py-3 hover:bg-[#24A8E0]/20">
                AI Consulting
              </Link>

              <Link to="/service/installation" className="block px-5 py-3 hover:bg-[#24A8E0]/20">
                Installation
              </Link>

              <Link to="/service/maintenance" className="block px-5 py-3 hover:bg-[#24A8E0]/20">
                Maintenance
              </Link>

              <Link to="/service/security-consulting" className="block px-5 py-3 hover:bg-[#24A8E0]/20">
                Security Consulting
              </Link>

              <Link to="/service/training-support" className="block px-5 py-3 hover:bg-[#24A8E0]/20">
                Training & 24×7 Support
              </Link>

            </div>

          </li>

          <li>
            <Link to="/demo" className={getLinkClass(isActiveLink("/demo"))}>
              Demo
            </Link>
          </li>
          <li>
            <button
              type="button"
              onClick={(e) => handleHomeAnchor(e, "contact")}
              className={getLinkClass(isActiveLink("/", "#contact"))}
            >
              Contact
            </button>
          </li>

        </ul>

        {/* CTA */}

        {/* User Section */}
        <div className="hidden lg:flex items-center gap-2 justify-end">

      {isAuthenticated ? (
    <>
      {user?.role === "admin" && (
        <a
          href="/admin"
          onClick={(e) => handleProtectedNav(e, "/admin")}
          className="hidden lg:flex items-center gap-1 rounded-full border border-[#F1CF45] bg-[#F1CF45]/10 px-2.5 py-1 text-[12px] text-[#F1CF45] hover:bg-[#F1CF45]/20 transition duration-300"
        >
          Admin Dashboard
        </a>
      )}
      <a
        href="/profile"
        onClick={(e) => handleProtectedNav(e, "/profile")}
        className="flex items-center gap-1 rounded-full border border-[#24A8E0] px-2.5 py-1 text-[12px] text-white hover:bg-[#24A8E0] transition duration-300"
      >
        <UserCircle2 size={18} />
        <span className="hidden lg:block">{user?.fullName?.split(" ")[0] || "Profile"}</span>
      </a>

      <button
        type="button"
        onClick={logout}
        className="flex items-center gap-1 rounded-full border border-red-500/50 px-2.5 py-1 text-[12px] text-red-400 hover:bg-red-500 hover:text-white transition duration-300"
      >
        <LogOut size={16} />
        <span className="hidden lg:block">Logout</span>
      </button>
    </>
  ) : (
    <>
              <button
                type="button"
                onClick={() => navigate("/login")}
                className="rounded-full border border-[#24A8E0] px-3 py-2 text-xs xl:text-sm text-[#24A8E0] font-semibold hover:bg-[#24A8E0] hover:text-white transition duration-300"
              >
                Login
              </button>

              <span className="w-2" />

              <button
                type="button"
                onClick={() => navigate("/register")}
                className="rounded-full bg-[#F1CF45] px-3 py-2 text-xs xl:text-sm font-semibold text-[#111015] hover:bg-[#24A8E0] hover:text-white transition duration-300"
              >
                Register
              </button>
    </>
  )}
</div>

{/* Mobile Menu Button */}
<button
  onClick={toggleMenu}
  className="ml-auto flex-shrink-0 text-white lg:hidden"
>
  {menuOpen ? (
    <X size={30} />
  ) : (
    <Menu size={30} />
  )}
</button>



      </div>

      {menuOpen && (

<div className="lg:hidden bg-[#111015] border-t border-[#24A8E0]/20 max-h-[calc(100vh-4rem)] overflow-y-auto">

  <div className="flex flex-col items-center p-4 sm:p-6 space-y-3 sm:space-y-4 text-white text-center">

    <Link to="/" onClick={closeMenu} className={getLinkClass(isActiveLink("/"), true)}>
      Home
    </Link>

    <button
      type="button"
      onClick={(e) => handleHomeAnchor(e, "about")}
      className={getLinkClass(isActiveLink("/", "#about"), true)}
    >
      About
    </button>

    <div>
      <div className="flex items-center justify-center gap-2">

  <Link 
    to="/solutions"
    onClick={closeMenu}
    className={getLinkClass(isActiveLink("/solutions"), true)}
  >
    Solutions
  </Link>

  <button
    type="button"
    onClick={() => toggleMobileDropdown("solutions")}
  >
    <ChevronDown 
      size={16}
      className={`${mobileDropdown === "solutions" ? "rotate-180" : ""} transition`}
    />
  </button>

</div>
      {mobileDropdown === "solutions" && (
        <div className="mt-2 ml-4 flex flex-col space-y-2 text-sm text-gray-300">
          <Link to="/solutions/ai-surveillance" onClick={closeMenu}>AI Surveillance</Link>
          <Link to="/solutions/computervision" onClick={closeMenu}>ComputerVision</Link>
          <Link to="/solutions/smartagriculture" onClick={closeMenu}>Smart Agriculture</Link>
          <Link to="/solutions/smartcity" onClick={closeMenu}>SmartCity</Link>
          <Link to="/solutions/audiovisuals" onClick={closeMenu}>Audio Visuals Solutions</Link>
        </div>
      )}
    </div>

    <div>
      <div className="flex items-center justify-center gap-2">


  <Link
    to="/technology"
    onClick={closeMenu}
    className={getLinkClass(isActiveLink("/technology"), true)}
  >
    Technology
  </Link>


  <button
    type="button"
    onClick={() => toggleMobileDropdown("technology")}
  >

    <ChevronDown
      size={16}
      className={`${mobileDropdown === "technology" ? "rotate-180" : ""} transition`}
    />

  </button>


</div>

      {mobileDropdown === "technology" && (
        <div className="mt-2 ml-4 flex flex-col space-y-2 text-sm text-gray-300">
          <Link to="/technology/aivisionsystems" onClick={closeMenu}>AI Vision Systems</Link>
          <Link to="/technology/radartechnology" onClick={closeMenu}>Radar Technology</Link>
          <Link to="/technology/storagebandwidth" onClick={closeMenu}>Storage & Bandwidth</Link>
          <Link to="/technology/smartedgecomputing" onClick={closeMenu}>Smart Edge Computing</Link>
          <Link to="/technology/cloudconnectivity" onClick={closeMenu}>Cloud Connectivity</Link>
          <Link to="/technology/audiovideointegration" onClick={closeMenu}>Audio & Video Integration</Link>
        </div>
      )}
    </div>

    <div>
      <div className="flex items-center justify-center gap-2">


<Link
 to="/product"
 onClick={closeMenu}
 className={getLinkClass(isActiveLink("/product"), true)}
>
 Products
</Link>


<button
 type="button"
 onClick={() => toggleMobileDropdown("products")}
>

<ChevronDown
 size={16}
 className={`${mobileDropdown === "products" ? "rotate-180" : ""} transition`}
/>

</button>


</div>
      {mobileDropdown === "products" && (
        <div className="mt-2 ml-4 flex flex-col space-y-2 text-sm text-gray-300">
          <Link to="/product/ai-cctv-cameras" onClick={closeMenu}>AI CCTV Cameras</Link>
          <Link to="/product/ip-camera-systems" onClick={closeMenu}>IP Camera Systems</Link>
          <Link to="/product/audiovisual-systems" onClick={closeMenu}>Audiovisual Systems</Link>
          <Link to="/product/agricultural-ai-drones" onClick={closeMenu}>Agricultural AI Drones</Link>
          <Link to="/product/access-control" onClick={closeMenu}>Access Control</Link>
        </div>
      )}
    </div>

    <Link to="/industries" onClick={closeMenu} className={getLinkClass(isActiveLink("/industries"), true)}>
      Industries
    </Link>

    <Link to="/demo" onClick={closeMenu} className={getLinkClass(isActiveLink("/demo"), true)}>
      Demo
    </Link>

    <div>
      <div className="flex items-center justify-center gap-2">


<Link
 to="/service"
 onClick={closeMenu}
>
 Services
</Link>


<button
 type="button"
 onClick={() => toggleMobileDropdown("services")}
>

<ChevronDown
 size={16}
 className={`${mobileDropdown === "services" ? "rotate-180" : ""} transition`}
/>

</button>


</div>
      {mobileDropdown === "services" && (
        <div className="mt-2 ml-4 flex flex-col space-y-2 text-sm text-gray-300">
          <Link to="/service/ai-consulting" onClick={closeMenu}>AI Consulting</Link>
          <Link to="/service/installation" onClick={closeMenu}>Installation</Link>
          <Link to="/service/maintenance" onClick={closeMenu}>Maintenance</Link>
          <Link to="/service/training-support" onClick={closeMenu}>24×7 Support</Link>
        </div>
      )}
    </div>

    <button
      type="button"
      onClick={(e) => handleHomeAnchor(e, "contact")}
      className={getLinkClass(isActiveLink("/", "#contact"), true)}
    >
      Contact
    </button>

    <hr className="border-gray-700"/>

    {isAuthenticated ? (
      <>
        <a
          href="/profile"
          onClick={(e) => handleProtectedNav(e, "/profile")}
          className="flex items-center gap-2"
        >
          <UserCircle2 size={20}/>
          {user?.fullName || "Profile"}
        </a>

        <button
          type="button"
          onClick={() => { logout(); closeMenu(); }}
          className="flex items-center justify-center gap-2 rounded-lg border border-red-500/50 py-3 px-4 text-red-400"
        >
          <LogOut size={18} />
          Logout
        </button>
      </>
    ) : (
      <>
        <Link
          to="/login"
          onClick={closeMenu}
          className="rounded-lg border border-[#24A8E0] py-3 px-4 text-center"
        >
          Login
        </Link>

        <Link
          to="/register"
          onClick={closeMenu}
          className="rounded-lg bg-[#F1CF45] py-3 px-4 text-center text-black font-semibold"
        >
          Register
        </Link>
      </>
    )}

  </div>

</div>

)}
      <AuthPromptModal
        isOpen={showAuthPrompt}
        title="Please sign in to continue"
        description="This feature requires an account. Would you like to sign in or register now?"
        primaryText="Login"
        secondaryText="Register"
        onPrimary={() => {
          setShowAuthPrompt(false);
          navigate("/login", { state: { from: pendingPath } });
        }}
        onSecondary={() => {
          setShowAuthPrompt(false);
          navigate("/register");
        }}
        onClose={() => setShowAuthPrompt(false)}
      />
    </nav>
  );
};

export default Navbar;