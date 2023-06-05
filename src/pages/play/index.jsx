import { useState, useEffect } from "react";
import Loader from "./Loader";
import { useNavigate } from "react-router-dom";

export default function Index() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulating a delay of 3 seconds
    const delay = 3000;

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, delay);

    return () => clearTimeout(timer); // Clear the timeout if the component unmounts
  }, []);

  const navigate = useNavigate();
  const goToPage = (path) => {
    navigate(path);
  };

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div
          style={{ backgroundColor: "#2a3042" }}
          className="flex flex-col items-center justify-center w-full h-screen gap-4 text-2xl font-semibold text-center text-gray-200 font-playfair"
        >
          <h1>This page is under development</h1>
          <button
            onClick={() => goToPage("/")}
            className="border-2 px-6 py-2 rounded border-[#c3a38c] text-[#c3a38c] uppercase transition hover:scale-110 hover:opacity-70"
          >
            home
          </button>
        </div>
      )}
    </>
  );
}
