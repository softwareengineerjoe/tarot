import constants from "../../../constants";
import { UpSquareOutlined } from "@ant-design/icons";
import { useState } from "react";
import Navbar from "../../../components/Navbar";

const majorArcana = constants.majorArcana;
console.log(majorArcana);

export default function index() {
  const [isExpanded, setIsExpanded] = useState(
    Array(majorArcana.length).fill(false)
  );

  const toggleImage = (index) => {
    let img = [...isExpanded];
    img[index] = !img[index];
    setIsExpanded(img);
  };
  return (
    <>
      <div className={mainBox} id="top">
        <Navbar />
        <h1 className="mt-4 text-3xl lg:mt-0">
          <span>M</span>
          <span>a</span>
          <span>j</span>
          <span>o</span>
          <span>r</span>
          <span> </span>
          <span>A</span>
          <span>r</span>
          <span>c</span>
          <span>a</span>
          <span>n</span>
          <span>a</span>
          <span> </span>
          <span>C</span>
          <span>a</span>
          <span>r</span>
          <span>d</span>
          <span>s</span>
        </h1>
        {majorArcana.map((card, index) => (
          <div
            key={card.code}
            className="flex flex-col items-center justify-center gap-4 max-w-7xl"
          >
            <a href={card.link} target="blank" className={title}>
              {card.card}
            </a>
            <button onClick={() => toggleImage(index)}>
              {isExpanded[index] ? (
                <img src={card.img} alt={card.card} className="w-full" />
              ) : (
                <img src={card.img} alt={card.card} className="w-32" />
              )}
            </button>
            <h3 className={subtitle}>{card.card} Upright Position</h3>
            <p className={description}>{card.description.upright}</p>
            <h3 className={subtitle}>{card.card} Reversed Position</h3>
            <p className={description}>{card.description.reversed}</p>
          </div>
        ))}
        <a
          href="#top"
          className="fixed bottom-3 right-2 lg:bottom-8 lg:right-10"
        >
          <UpSquareOutlined
            style={{ fontSize: "30px", color: "#c3a38c" }}
            className="lg:hidden"
          />
          <UpSquareOutlined
            style={{ fontSize: "40px", color: "#c3a38c" }}
            className="hidden lg:block"
          />
        </a>
      </div>
    </>
  );
}

const title = "text-2xl text-[#c3a38c] text-center";
const subtitle = "text-lg text-[#c3a38c] text-center";
const description = "indent-8 text-sm text-justify";
const mainBox =
  "flex flex-col justify-center items-center text-justify gap-6 py-8 px-12 lg:px-32 font-playfair text-gray-200 bg-[#2a3042] relative";
