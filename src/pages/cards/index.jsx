import { useNavigate } from "react-router-dom";
import card from "../../assets/zback.jpg"

export default function index() {
  const navigate = useNavigate();
  const goToPage = (path) => {
    navigate(path);
  };

  return (
    <main
      className="h-screen font-playfair"
      style={{ backgroundColor: "#2a3042" }}
    >
      <nav className="flex items-center justify-center h-full">
        <ul className="flex gap-4 flex-col text-center text-[#c3a38c] text-2xl">
          <img src={card} alt="" className="w-20 mx-auto"/>
          <li className={navList}>
            <button
              onClick={() => goToPage("../cards/major-arcana")}
            
            >
              {" "}
              Major Arcana
            </button>
          </li>
          <li className={navList}>
            <button onClick={() => goToPage("../cards/swords")}>
              {" "}
              Swords
            </button>
          </li>
          <li className={navList}>
            <button onClick={() => goToPage("../cards/cups")}>
              {" "}
              Cups
            </button>
          </li>
          <li className={navList}>
            <button onClick={() => goToPage("../cards/wands")}>
              {" "}
              Wands
            </button>
          </li>
          <li className={navList}>
            <button
              onClick={() => goToPage("../cards/pentacles")}
            
            >
              {" "}
              Pentacles
            </button>
          </li>
          <li className={navList}>
            <button
              onClick={() => goToPage("/")}
              className="text-gray-200"
            >
              {" "}
              Go Back
            </button>
          </li>
        </ul>
      </nav>
    </main>
  );
}

const navList =
  "hover:scale-125 transition ease-in flex justify-center items-center";
