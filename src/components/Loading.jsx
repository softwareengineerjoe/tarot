import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Loading({ setDrawCards }) {
  const [isReady, setIsReady] = useState(false);
  const navigate = useNavigate();

  const goToPage = (path) => {
    navigate(path);
  };

  const words = ["Draw", "your", "cards"];

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsReady(true);
    }, 3500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#2a3042] font-playfair">
      <h1 className="text-3xl text-white animate-floatColor animate-flicker">
        Let your fate be read
      </h1>

      <h2 className="flex space-x-2 text-xl font-medium text-white">
        {words.map((word, index) => (
          <span
            key={index}
            className="opacity-0 animate-fadeIn"
            style={{
              animationDelay: `${0.5 + index * 1}s`,
              animationFillMode: "forwards",
            }}
          >
            {word}
          </span>
        ))}
      </h2>

      <div
        className="flex flex-row gap-4 mt-4 opacity-0 animate-fadeIn"
        style={{
          animationDelay: "3.5s",
          animationFillMode: "forwards",
        }}
      >
        <button
          onClick={() => {
            if (isReady) goToPage("/");
          }}
          disabled={!isReady}
          className={`border-2 border-[#8c7464] text-[#8c7464] px-6 py-2 rounded uppercase transition ${
            isReady
              ? "hover:scale-110 hover:opacity-70 cursor-default"
              : "opacity-50 cursor-not-allowed"
          }`}
        >
          quit
        </button>
        <button
          onClick={() => {
            if (isReady) setDrawCards(true);
          }}
          disabled={!isReady}
          className={`bg-[#8c7464] text-gray-200 px-6 py-2 rounded uppercase transition ${
            isReady
              ? "hover:scale-110 hover:opacity-70 cursor-default"
              : "opacity-50 cursor-not-allowed"
          }`}
        >
          play
        </button>
      </div>
    </div>
  );
}
