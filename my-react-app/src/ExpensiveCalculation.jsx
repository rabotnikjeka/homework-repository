import { useMemo } from "react";

function ExpensiveCalculation({ numbers }) {
  const sortedNumbers = useMemo(() => {
    console.log("Выполняю сортировку...");
    return [...numbers].sort((a, b) => a - b);
  }, [numbers]);

  return (
    <div>
      <h3>Отсортированный список:</h3>
      {sortedNumbers.map((num, index) => (
        <div key={index}>{num}</div>
      ))}
    </div>
  );
}

export default ExpensiveCalculation;
