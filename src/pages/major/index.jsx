import React from "react";
import constants from "../../constants.js";

const { majorArcana } = constants;
console.log(majorArcana);

export default function index() {
  return (
    <>
      <div className="flex flex-col justify-center items-center text-justify gap-6 py-8 px-12 font-playfair text-gray-200 bg-[#2a3042]">
        <h1 className="text-3xl">Major Arcana Cards</h1>
        {majorArcana.map((card) => (
          <div
            key={card.code}
            className="flex flex-col items-center justify-center gap-4"
          >
            <h3 className={title}>{card.card}</h3>
            <img src={card.img} alt={card.card} className="w-32" />
            <h3 className={subtitle}>
              {card.card} Upright Position
            </h3>
            <p className={description}>{card.description.upright}</p>
            <h3 className={subtitle}>
              {card.card} Reversed Position
            </h3>
            <p className={description}>{card.description.reversed}</p>
          </div>
        ))}
      </div>
    </>
  );
}

const title = "text-2xl text-[#c3a38c]";
const subtitle = "text-lg text-[#c3a38c]"
const description = "text-sm"
