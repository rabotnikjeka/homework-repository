import { useRef } from "react";
function RenderCounter() {
  const renders = useRef(0);
  renders.current += 1;

  return <div>Количество ререндеров: {renders.current}</div>;
}

export default RenderCounter;
