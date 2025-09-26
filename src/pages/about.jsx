import constants from "../constants";
import { useNavigate } from "react-router-dom";

const tarots = constants.tarots;
console.log(tarots);

export default function about() {
  const navigate = useNavigate();
  const goToPage = (path) => {
    navigate(path);
  };
  return (
      <div className={mainBox} id="about">
        <h1 className="text-3xl">
          <span>A</span>
          <span>b</span>
          <span>o</span>
          <span>u</span>
          <span>t</span>
        </h1>
        {tarots.map((tarot) => (
          <div
            key={tarot.code}
            className="flex flex-col items-center justify-center gap-4"
          >
            <h3 className={title}>{tarot.title}</h3>
            <div className="max-w-xl">
              <p className={description}>{tarot.description}</p>
            </div>
          </div>
        ))}
        <button onClick={() => goToPage("/")} className={navItem}>
          {" "}
          home
        </button>

        <p className="text-xs mt-2">Developed by softwareengineerjoe for Alma</p>
      </div>
  );
}

const mainBox =
  "flex flex-col justify-center items-center text-justify gap-6 py-8 px-12 font-playfair text-gray-200 bg-[#2a3042] relative min-h-screen";
const title = "text-2xl text-[#c3a38c] text-center";
const description = "text-sm text-justify";
const navItem = "border-2 px-6 py-2 rounded border-[#c3a38c] text-[#c3a38c] uppercase transition hover:scale-110 hover:opacity-70 mt-2";
