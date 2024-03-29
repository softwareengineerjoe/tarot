import { useNavigate } from "react-router-dom";

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
          <h1 className="mb-4 text-5xl tracking-wider text-gray-200">
            Tarot Cards
          </h1>
          <li className={navList}>
            <button
              onClick={() => goToPage("../major-arcana")}
              className={navItem}
            >
              {" "}
              Major Arcana
            </button>
          </li>
          <li className={navList}>
            <button onClick={() => goToPage("../swords")} className={navItem}>
              {" "}
              Swords
            </button>
          </li>
          <li className={navList}>
            <button onClick={() => goToPage("../cups")} className={navItem}>
              {" "}
              Cups
            </button>
          </li>
          <li className={navList}>
            <button onClick={() => goToPage("../wands")} className={navItem}>
              {" "}
              Wands
            </button>
          </li>
          <li className={navList}>
            <button
              onClick={() => goToPage("../pentacles")}
              className={navItem}
            >
              {" "}
              Pentacles
            </button>
          </li>
          <li className={navList}>
            <button onClick={() => goToPage("../about")} className={navItem}>
              {" "}
              About
            </button>
          </li>
        </ul>
      </nav>
    </main>
  );
}

const navList =
  "hover:scale-125 transition ease-in flex justify-center items-center";
const navItem = "flex flex-row gap-1 items-center";
