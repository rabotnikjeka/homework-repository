import { useState } from "react";
import "./App.css";

function Counter() {
  const [count, setCount] = useState(0);
  const [error, setError] = useState("");

  const increment = () => {
    if (count < 10) {
      setCount((prevState) => prevState + 1);
      setError("");
    } else {
      setError("Количество не может быть больше 10!");
    }
  };

  const decrement = () => {
    if (count > 0) {
      setCount((prevState) => prevState - 1);
      setError("");
    } else {
      setError("Количество не может быть меньше 0!");
    }
  };

  return (
    <div>
      <p>Текущее состояние: {count}</p>{" "}
      <button onClick={increment}>Увеличить</button>
      <button onClick={decrement}>Уменьшить</button>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}

export default Counter;
