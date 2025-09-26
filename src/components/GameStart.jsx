import { useState, useMemo, useEffect } from "react";
import constants from "../constants";
import { useNavigate } from "react-router-dom";

const { cups, majorArcana, pentacles, swords, wands } = constants;

const allCards = [...cups, ...majorArcana, ...pentacles, ...swords, ...wands];

function getRandomCards(array, count) {
  const shuffled = [...array].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

export default function GameStart() {
  const navigate = useNavigate();

  const selectedCards = useMemo(() => getRandomCards(allCards, 6), []);
  const reversedStates = useMemo(
    () => selectedCards.map(() => Math.random() < 0.5),
    [selectedCards]
  );

  const [openModal, setOpenModal] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [isAnimating, setIsAnimating] = useState(true);

  function handleOpenModal(index) {
    setSelectedIndex(index);
    setOpenModal(true);
  }

  function handleCloseModal() {
    setOpenModal(false);
    setSelectedIndex(null);
  }

  useEffect(() => {
    const animationDuration = 3200;
    const timer = setTimeout(() => {
      setIsAnimating(false);
    }, animationDuration);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      id="GameStart"
      className="font-playfair text-gray-200 bg-[#2a3042] min-h-screen flex flex-col lg:flex-row justify-between items-center"
    >
      <button
        onClick={() => {
          navigate("/");
        }}
        className="uppercase text-[#8c7464] text-7xl w-full hidden lg:block -rotate-90 opacity-0 animate-fadeIn"
        style={{
          animationDelay: "3s",
          animationFillMode: "forwards",
          pointerEvents: isAnimating ? "none" : "auto",
        }}
      >
        close
      </button>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-10 w-full p-8 lg:p-0">
        {selectedCards.map((card, index) => {
          const isReversed = reversedStates[index];
          return (
            <div
              key={`${card.card}-${index}`}
              className="flex flex-col items-center justify-center"
            >
              <button
                onClick={() => {
                  if (!isAnimating) handleOpenModal(index);
                }}
                disabled={isAnimating}
              >
                <img
                  src={card.img}
                  alt={card.card}
                  className={`w-48 h-auto object-contain animate-flipIn opacity-0`}
                  style={{
                    transform: isReversed ? "rotate(180deg)" : "none",
                    animationDelay: `${index * 0.5}s`,
                    animationFillMode: "forwards",
                    pointerEvents: isAnimating ? "none" : "auto",
                  }}
                />
              </button>
            </div>
          );
        })}
      </div>

      <button
        onClick={() => {
          window.location.reload();
        }}
        className="uppercase text-[#8c7464] text-7xl w-full hidden lg:block rotate-90 opacity-0 animate-fadeIn"
        style={{
          animationDelay: "3s",
          animationFillMode: "forwards",
          pointerEvents: isAnimating ? "none" : "auto",
        }}
      >
        draw again
      </button>

      <div className="grid md:grid-cols-2 w-full lg:hidden">
        <button
          onClick={() => {
            navigate("/");
          }}
          className="border md:border-2 py-4 md:py-12 text-gray-200 uppercase bg-[#8c7464] text-xl md:text-3xl w-full lg:hidden opacity-0 animate-fadeIn"
          style={{
            animationDelay: "3s",
            animationFillMode: "forwards",
            pointerEvents: isAnimating ? "none" : "auto",
          }}
        >
          close
        </button>
        <button
          onClick={() => {
            window.location.reload();
          }}
          className="border md:border-2 py-4 md:py-12 text-gray-200 uppercase bg-[#8c7464] text-xl md:text-3xl w-full lg:hidden opacity-0 animate-fadeIn"
          style={{
            animationDelay: "3s",
            animationFillMode: "forwards",
            pointerEvents: isAnimating ? "none" : "auto",
          }}
        >
          draw again
        </button>
      </div>

      {/* Modal */}
      {openModal && selectedIndex !== null && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4"
          onClick={handleCloseModal}
        >
          <div
            className="bg-[#2a3042] p-6 rounded shadow-lg max-w-lg w-full relative max-h-[90dvh] overflow-scroll"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedCards[selectedIndex].img}
              alt={selectedCards[selectedIndex].card}
              className="w-20 h-auto mx-auto mb-4"
              style={{
                transform: reversedStates[selectedIndex]
                  ? "rotate(180deg)"
                  : "none",
              }}
            />
            <div className="flex items-center justify-center">
              <a
                href={selectedCards[selectedIndex].link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center text-center mb-2 group"
              >
                <h2 className="text-2xl font-bold flex items-center gap-2 text-[#8c7464] group-hover:text-[#c3a38c] transition-colors">
                  {selectedCards[selectedIndex].card}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-[#8c7464] group-hover:text-[#c3a38c] transition-colors"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                    aria-hidden="true"
                    focusable="false"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M18 13v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6m4-4h4m0 0v4m0-4L10 14"
                    />
                  </svg>
                </h2>
              </a>
            </div>

            <p className="text-center mb-4">
              {reversedStates[selectedIndex]
                ? selectedCards[selectedIndex].description?.reversed ||
                  "Reversed meaning not available"
                : selectedCards[selectedIndex].description?.upright ||
                  "Upright meaning not available"}
            </p>
            <button
              onClick={handleCloseModal}
              className="w-full p-2 border-2 px-6 py-2 rounded border-[#c3a38c] text-[#c3a38c] uppercase transition hover:opacity-70"
            >
              close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
