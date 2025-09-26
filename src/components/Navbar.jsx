import { useNavigate } from "react-router-dom";
import { LeftOutlined, MenuOutlined } from "@ant-design/icons";
import { useState } from "react";

export default function Navbar() {
  const navigate = useNavigate();

  const goToPage = (path) => {
    navigate(path);
  };

  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Controls */}
      <button className={navControl} onClick={toggleNavbar}>
        <MenuOutlined style={{ fontSize: "1.5rem" }} />
      </button>
      <nav
        className={`${navbar} ${
          isOpen
            ? "-translate-y-0 transition-transform ease-in"
            : "-translate-y-full transition-transform ease-in"
        }`}
      >
        <button onClick={() => goToPage("/cards")} className={navItem}>
          <LeftOutlined
            style={{ color: "#B66D38", marginY: "auto" }}
            className="hidden font-bold lg:flex"
          />
          <span className="lg:hidden">Home</span>
        </button>
        <button onClick={() => goToPage("/cards/major-arcana")} className={navItem}>
          Major Arcana
        </button>
        <button onClick={() => goToPage("/cards/swords")} className={navItem}>
          Swords
        </button>
        <button onClick={() => goToPage("/cards/cups")} className={navItem}>
          Cups
        </button>
        <button onClick={() => goToPage("/cards/wands")} className={navItem}>
          {" "}
          Wands
        </button>
        <button onClick={() => goToPage("/cards/pentacles")} className={navItem}>
          Pentacles
        </button>
        <button onClick={() => goToPage("/cards/about")} className={navItem}>
          About
        </button>
      </nav>
      <button
        className={`${
          isOpen ? "" : "hidden"
        } absolute top-0 left-0 z-10 w-full h-full text-black bg-transparent`}
        onClick={() => {
          setIsOpen(false);
        }}
      ></button>
    </>
  );
}

const navbar =
  "lg:flex flex-col lg:flex-row justify-between w-full bg-[#e5e7eb] rounded -mt-2 lg:mt-8 fixed lg:relative top-0 lg:max-w-7xl items-center p-4 lg:p-0 gap-2 z-20";
const navItem =
  "px-6 py-2 flex text-[#B66D38] font-semibold transition hover:scale-105 hover:opacity-90 ease-in w-full lg:w-fit justify-center";
const navControl = "w-auto absolute top-4 left-4 lg:hidden";
