import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { cookieConsentApi } from "../services/api";

const CookieConsentBanner = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consentCookie = document.cookie
      .split("; ")
      .find((row) => row.startsWith("cookieConsent="));
    const storedConsent = localStorage.getItem("cookieConsent");

    if (consentCookie || storedConsent) {
      setVisible(false);
      return;
    }

    setVisible(true);
  }, []);

  const { user } = useAuth();

  const setConsent = async (value) => {
    document.cookie = `cookieConsent=${value}; path=/; max-age=${365 * 24 * 60 * 60}; SameSite=Lax`;
    localStorage.setItem("cookieConsent", value);

    if (value === "accepted") {
      const payload = {
        accepted: true,
        user: user
          ? {
              id: user.id || user._id,
              fullName: user.fullName,
              email: user.email,
            }
          : null,
        path: window.location.pathname,
      };

      try {
        await cookieConsentApi.create(payload);
      } catch (error) {
        console.error("Failed to record cookie consent:", error);
      }
    }

    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[10000] border-t border-[#24A8E0]/30 bg-[#111015]/95 px-4 py-6 backdrop-blur md:px-8 md:py-8">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-5 md:flex-row md:items-center">
        <div className="max-w-3xl">
          <h3 className="text-base font-semibold text-[#F1CF45]">We value your privacy</h3>
          <p className="mt-2 text-sm leading-6 text-gray-200">
            We use cookies to keep you signed in, remember your preferences, and improve your browsing experience on our website. By clicking Accept, you agree to our use of essential and functional cookies. You can change your choice anytime in your browser settings.
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          <button
            onClick={() => setConsent("declined")}
            className="rounded-full border border-gray-600 px-5 py-2.5 text-sm font-semibold text-gray-200 transition hover:border-[#24A8E0] hover:text-[#24A8E0]"
          >
            Decline
          </button>
          <button
            onClick={() => setConsent("accepted")}
            className="rounded-full bg-[#F1CF45] px-5 py-2.5 text-sm font-semibold text-[#111015] transition hover:bg-[#24A8E0] hover:text-white"
          >
            Accept Cookies
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsentBanner;
