import React from "react";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  const goToPage = (path) => {
    navigate(path);
  };
  return (
    <>
      <nav className="flex flex-row justify-between w-full">
        <button onClick={() => goToPage("../major")}>Go to Major Arcana Page</button>
        <button onClick={() => goToPage("../swords")}>Go to Swords Page</button>
        <button onClick={() => goToPage("../cups")}>Go to Cups Page</button>
        <button onClick={() => goToPage("../wands")}>Go to Wands Page</button>
        <button onClick={() => goToPage("../pentacles")}>Go to Pentacles Page</button>
        <button onClick={() => goToPage("../about")}>Go to About Page</button>
      </nav>    
    </>
  );
}

