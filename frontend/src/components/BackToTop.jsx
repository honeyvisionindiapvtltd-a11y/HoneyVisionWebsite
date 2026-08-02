import { useEffect, useState } from "react";
import { ArrowUp, MessageCircle } from "lucide-react";

const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisible = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisible);

    return () => {
      window.removeEventListener("scroll", toggleVisible);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      className={`fixed bottom-8 right-8 z-[9999] flex flex-col items-end gap-3 ${
        visible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-5 pointer-events-none"
      } transition-all duration-300`}
    >
      <a
        href="https://wa.me/918270004040?text=Hello%20Honey%20Vision%2C%20I%20would%20like%20to%20know%20more%20about%20your%20services."
        target="_blank"
        rel="noreferrer"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl shadow-black/30 transition hover:bg-[#1da851]"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={24} />
      </a>

      <button
        onClick={scrollToTop}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-[#24A8E0] text-white shadow-xl shadow-black/30 transition hover:bg-[#F1CF45] hover:text-[#111015]"
        aria-label="Back to Top"
      >
        <ArrowUp size={24} />
      </button>
    </div>
  );
};

export default BackToTop;