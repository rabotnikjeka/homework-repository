import { useEffect, useState } from "react";
import { useWindowSize } from "./useWindowSize";

function WindowSize() {
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setWindowHeight(window.innerHeight);
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      <p>{`Высота окна ` + windowHeight}</p>
      <p>{`Ширина окна ` + windowWidth}</p>
    </div>
  );
}

export default WindowSize;
