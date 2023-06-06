import { useNavigate } from "react-router-dom";
import { useState } from "react";
import card from "../../assets/zback.jpg";
import majorArcana from "../../constants/majorArcana";
import cups from "../../constants/cups";
import swords from "../../constants/swords";
import pentacles from "../../constants/pentacles";
import wands from "../../constants/wands";
import { motion } from "framer-motion";

export default function Game() {
  const navigate = useNavigate();
  const goToPage = (path) => {
    navigate(path);
  };

  const constants = [
    ...majorArcana,
    ...cups,
    ...swords,
    ...pentacles,
    ...wands,
  ];

  console.log("constants:", constants);

  const [showModal, setShowModal] = useState(false);
  const [selectedCards, setSelectedCards] = useState([]);
  const [selectedCardIndex, setSelectedCardIndex] = useState(null);
  const [generateButtonVisible, setGenerateButtonVisible] = useState(true);

  const generateRandomCards = () => {
    const randomCards = [];
    while (randomCards.length < 6) {
      const randomIndex = Math.floor(Math.random() * constants.length);
      const randomCard = constants[randomIndex];
      if (!randomCards.includes(randomCard)) {
        // Add a random orientation property to each card
        randomCard.orientation = getRandomRotation();
        randomCards.push(randomCard);
      }
    }
    setSelectedCards(randomCards);
    setGenerateButtonVisible(false);
  };

  const getRandomRotation = () => {
    return Math.random() < 0.5 ? 0 : -180; // Randomly return 0 or 180
  };

  const openModal = (index) => {
    setSelectedCardIndex(index);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedCardIndex(null);
  };

  return (
    <div
      style={{ backgroundColor: "#2a3042" }}
      className="flex flex-col items-center justify-center w-full min-h-screen gap-4 p-8 text-gray-200 font-playfair"
    >
      <div className="container max-w-7xl">
        {/* Render the selected cards here */}
        <div className="grid grid-flow-col grid-rows-3 gap-4 justify-evenly lg:grid-rows-2">
          {selectedCards.map((card, index) => (
            <>
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  rotateY: 180,
                  rotateX: card.orientation,
                }}
                animate={{ opacity: 1, rotateY: 0, rotateX: card.orientation }}
                transition={{
                  duration: 1,
                  delay: index * 0.5,
                  ease: "easeOut",
                }}
              >
                <img
                  src={card.img}
                  alt=""
                  className="w-32 mx-auto lg:w-48"
                  onClick={() => openModal(index)}
                />
              </motion.div>
            </>
          ))}
        </div>
      </div>
      {/* Modal */}
      {selectedCardIndex !== null && showModal && (
        <div className={modal}>
          <div className={modalContent}>
            <a
              href={selectedCards[selectedCardIndex].link}
              target="blank"
              className="text-2xl text-center indent-0 text-[#c3a38c] w-fit self-center"
            >
              {selectedCards[selectedCardIndex].card}
            </a>
            <h3 className="text-xl text-[#c3a38c] indent-0">Upright Position</h3>
            <p>{selectedCards[selectedCardIndex].description.upright}</p>
            <h3 className="text-xl text-[#c3a38c] indent-0">Reversed Position</h3>
            <p>{selectedCards[selectedCardIndex].description.reversed}</p>
            <button className={closeButton} onClick={closeModal}>
              Close
            </button>
          </div>
        </div>
      )}

      {/* Button to generate random cards */}
      {generateButtonVisible && (
        <button
          onClick={generateRandomCards}
          className={`${generate} ${generateButtonVisible ? "" : "hidden"}`}
        >
          Click me
        </button>
      )}
      {!generateButtonVisible && (
        <button onClick={() => goToPage("/cards")} className={generate}>
          cards
        </button>
      )}
      <button onClick={() => goToPage("/")} className={home}>
        home
      </button>
    </div>
  );
}

const generate =
  "px-6 py-2 rounded  bg-[#8c7464] text-gray-200 uppercase  transition hover:scale-110 hover:opacity-70";
const home =
  "border-2 px-6 py-2 rounded border-[#c3a38c] text-[#c3a38c] uppercase transition hover:scale-110 hover:opacity-70";
const modal =
  "absolute top-0 md:fixed md:top-auto bg-gray-800 bg-gray-800 text-[#c3a38c] max-w-4xl p-8 rounded";
const modalContent =
  " text-gray-200 tracking-wide leading-2 indent-8 relative text-justify flex flex-col gap-2";
const closeButton =
  "border-2 px-6 py-2 rounded border-[#c3a38c] text-[#c3a38c] uppercase transition hover:opacity-70 self-center w-full mt-4";
