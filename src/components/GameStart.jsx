import { useState, useEffect, useRef } from "react";
import constants from "../constants";
import { useNavigate } from "react-router-dom";

const { cups, majorArcana, pentacles, swords, wands } = constants;
const allCards = [...cups, ...majorArcana, ...pentacles, ...swords, ...wands];

// Function to get cards with reversed state
function getRandomCardsWithReversed(array, count) {
  const shuffled = [...array].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count).map((card) => ({
    card,
    isReversed: Math.random() < 0.5,
  }));
}

export default function GameStart() {
  const navigate = useNavigate();
  const [cardsWithState, setCardsWithState] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [isAnimating, setIsAnimating] = useState(true);

  const animationTimeout = useRef(null);

  function drawCards() {
    const drawn = getRandomCardsWithReversed(allCards, 6);
    setCardsWithState(drawn);
    setOpenModal(false);
    setIsAnimating(true);

    if (animationTimeout.current) {
      clearTimeout(animationTimeout.current);
    }

    animationTimeout.current = setTimeout(() => {
      setIsAnimating(false);
    }, 3200);
  }

  useEffect(() => {
    drawCards();
    return () => {
      if (animationTimeout.current) clearTimeout(animationTimeout.current);
    };
  }, []);

  function handleOpenModal(index) {
    if (!isAnimating) {
      setSelectedIndex(index);
      setOpenModal(true);
    }
  }

  function handleCloseModal() {
    setOpenModal(false);
    setSelectedIndex(null);
  }

  return (
    <div
      id="GameStart"
      className="font-playfair text-gray-200 bg-[#2a3042] min-h-screen flex flex-col lg:flex-row justify-between items-center"
    >
      <button
        onClick={() => navigate("/")}
        className="uppercase text-[#8c7464] hover:text-gray-200 ease-in duration-200 text-7xl w-full hidden lg:block -rotate-90 opacity-0 animate-fadeIn"
        style={{
          animationDelay: "3s",
          animationFillMode: "forwards",
          pointerEvents: isAnimating ? "none" : "auto",
        }}
      >
        close
      </button>

      <div className="grid grid-cols-3 gap-4 md:gap-10 w-full p-4 md:p-8 lg:p-0 my-auto">
        {cardsWithState.map(({ card, isReversed }, index) => (
          <div
            key={`${card.card}-${index}`}
            className="flex flex-col items-center justify-center"
          >
            <button
              onClick={() => handleOpenModal(index)}
              disabled={isAnimating}
            >
              <div
                className="animate-flipIn opacity-0"
                style={{
                  animationDelay: `${index * 0.5}s`,
                  animationFillMode: "forwards",
                }}
              >
                <img
                  src={card.img}
                  alt={card.card}
                  className="w-48 h-auto object-contain transition-transform duration-700"
                  style={{
                    transform: isReversed ? "rotate(180deg)" : "rotate(0deg)",
                    pointerEvents: isAnimating ? "none" : "auto",
                  }}
                />
              </div>
            </button>
          </div>
        ))}


      <button
        onClick={() => navigate("/")}
         className="w-full p-2 border-2 px-6 py-2 rounded border-[#c3a38c] text-[#c3a38c] uppercase transition hover:opacity-70 md:hidden col-span-3 mt-8"
      >
          quit
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
              src={cardsWithState[selectedIndex].card.img}
              alt={cardsWithState[selectedIndex].card.card}
              className="w-20 h-auto mx-auto mb-4"
              style={{
                transform: cardsWithState[selectedIndex].isReversed
                  ? "rotate(180deg)"
                  : "none",
              }}
            />
            <div className="flex items-center justify-center">
              <a
                href={cardsWithState[selectedIndex].card.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center text-center mb-2 group"
              >
                <h2 className="text-2xl font-bold flex items-center gap-2 text-[#8c7464] group-hover:text-[#c3a38c] transition-colors">
                  {cardsWithState[selectedIndex].card.card}
                </h2>
              </a>
            </div>

            <p className="text-center mb-4">
              {cardsWithState[selectedIndex].isReversed
                ? cardsWithState[selectedIndex].card.description?.reversed ||
                  "Reversed meaning not available"
                : cardsWithState[selectedIndex].card.description?.upright ||
                  "Upright meaning not available"}
            </p>
            <button
              onClick={handleCloseModal}
              className="w-full p-2 border-2 px-6 py-2 rounded border-[#c3a38c] text-[#c3a38c] uppercase transition hover:opacity-70"
            >
              close
            </button>
            <button
              onClick={drawCards}
              className="w-full p-2 border-2 px-6 py-2 rounded border-black/60 text-black/60 bg-[#c3a38c] uppercase transition hover:opacity-70 mt-2 md:hidden"
            >
              draw again
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
