import { useWindowSize } from "./useWindowSize";

function WindowSize() {
  const [windowHeight, windowWidth] = useWindowSize();

  return (
    <div>
      <p>{`Высота окна ` + windowHeight}</p>
      <p>{`Ширина окна ` + windowWidth}</p>
    </div>
  );
}

export default WindowSize;
