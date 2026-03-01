import { memo } from "react";

const Child = memo(({ onClick }) => {
  console.log("Ререндер Child");
  return <button onClick={onClick}>Дочерняя кнопка</button>;
});
export default Child;
