import constants from "../constants";
import { useNavigate } from "react-router-dom";
import { DownloadOutlined, MobileOutlined } from "@ant-design/icons";
import { useState, useEffect } from "react";

const tarots = constants.tarots;

export default function about() {
  const navigate = useNavigate();
  const [deferredPrompt, setDeferredPrompt] = useState(null);

  useEffect(() => {
    const handler = (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
    };
    window.addEventListener("beforeinstallprompt", handler);
    return () => window.removeEventListener("beforeinstallprompt", handler);
  }, []);

  const handleInstallClick = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      if (outcome === "accepted") {
        setDeferredPrompt(null);
      }
    } else {
      alert("To install this app:\n\nOn Desktop: Look for the install icon in your browser's address bar.\n\nOn Mobile: Tap the share button → 'Add to Home Screen'");
    }
  };

  const goToPage = (path) => {
    navigate(path);
  };

  return (
    <div className={mainBox} id="about">
      <h1 className="text-3xl">About</h1>
      {tarots.map((tarot) => (
        <div
          key={tarot.code}
          className="flex flex-col items-center justify-center gap-4"
        >
          <h3 className={title}>{tarot.title}</h3>
          <div className="max-w-xl">
            <p className={description}>{tarot.description}</p>
          </div>
        </div>
      ))}

      <div className="flex flex-col items-center gap-4 mt-8 p-6 rounded-lg border-2 border-[#c3a38c]/30 bg-[#1a1e2e]/50 max-w-xl">
        <div className="flex items-center gap-2 text-[#c3a38c]">
          <MobileOutlined style={{ fontSize: "2rem" }} />
          <h3 className="text-xl font-semibold">Install Our App</h3>
        </div>
        <p className="text-sm text-gray-300 text-center">
          Experience Tarot ni Alma as a native app! Install it on your device for quick access and offline use.
        </p>
        <button 
          onClick={handleInstallClick}
          className="flex items-center gap-2 bg-[#8c7464] text-gray-200 px-6 py-3 rounded uppercase hover:opacity-90 transition"
        >
          <DownloadOutlined />
          Install Now
        </button>
      </div>

      <button onClick={() => goToPage("/")} className={navItem}>
        {" "}
        home
      </button>

      <p className="text-xs mt-2">Developed by softwareengineerjoe for Alma</p>
    </div>
  );
}

const mainBox =
  "flex flex-col justify-center items-center text-justify gap-6 py-8 px-12 font-playfair text-gray-200 bg-[#2a3042] relative min-h-screen";
const title = "text-2xl text-[#c3a38c] text-center";
const description = "text-sm text-justify";
const navItem =
  "border-2 px-6 py-2 rounded border-[#c3a38c] text-[#c3a38c] uppercase transition hover:scale-110 hover:opacity-70 mt-2";
