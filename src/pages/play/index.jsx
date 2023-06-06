import { useState, useEffect } from "react";
import Loader from "./Loader";
import Game from "./Game";

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

  return <>{isLoading ? <Loader /> : <Game />}</>;
}
