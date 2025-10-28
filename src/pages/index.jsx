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
        <div className="flex gap-4 flex-col text-center text-[#c3a38c] text-2xl">
          <h1 className="mb-4 text-5xl tracking-wider text-gray-200">
            Tarot Cards
          </h1>
          <ul className="flex gap-4 flex-col">
            <li className="hover:scale-110 transition ease-in flex justify-center items-center">
            <button onClick={() => goToPage("../play")} className="bg-[#8c7464] text-gray-200 px-6 py-2 rounded uppercase">
              {" "}
              play
            </button>
          </li>

          <li className={navList}>
            <button onClick={() => goToPage("../cards")}>
              {" "}
              Cards
            </button>
          </li>
          <li className={navList}>
            <button onClick={() => goToPage("../about")}>
              {" "}
              About
            </button>
          </li>
          </ul>
        </div>
      </nav>
    </main>
  );
}

const navList =
  "hover:scale-125 transition ease-in flex justify-center items-center";
