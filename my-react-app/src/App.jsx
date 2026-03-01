import "./App.css";
import { useCallback, useMemo, useState } from "react";
import UserList from "./UserList";
import Item from "./Item";
import Child from "./Child";
import TodoList from "./TodoList";
import ExpensiveCalculation from "./ExpensiveCalculation";

function App() {
  const [users, setUsers] = useState([
    { id: 1, name: "Анна", age: 25 },
    { id: 2, name: "Борис", age: 30 },
    { id: 3, name: "Вика", age: 22 },
  ]);
  const [count, setCount] = useState(0);
  const [data, setData] = useState([10, 5, 20, 15, 30]);
  const [countMemo, setCountMemo] = useState(0);
  const [countUseMemo, setCountUseMemo] = useState(0);
  const [value, setValue] = useState(0);
  const [countClick, setCountClick] = useState(0);

  const handleClick = useCallback(() => {
    console.log("Клик!");
  }, []);

  const expensiveCalculationUseMemo = useMemo(() => {
    console.log("Тяжёлый расчёт...");
    return countUseMemo ** 2;
  }, [countUseMemo]);

  const addUser = () => {
    const newUser = {
      id: Date.now(),
      name: "Новый пользователь",
      age: Math.floor(Math.random() * 40) + 18,
    };
    setUsers([...users, newUser]);
  };

  return (
    <div>
      <div>
        <h1>Задание 1</h1>
        <button onClick={addUser}>Добавить пользователя</button>
        <UserList users={users} />
      </div>
      <div>
        <h1>Задание 2</h1>
        <button onClick={() => setCount(count + 1)}>
          Кнопка ререндера с счетчиком (count: {count})
        </button>
        <button
          onClick={() => setData([...data, Math.floor(Math.random() * 100)])}
        >
          Добавить случайное число в массив
        </button>
        <ExpensiveCalculation numbers={data} />
      </div>
      <div>
        <h1>Задание 3</h1>
        <TodoList />
      </div>
      <div>
        <h1>Примеры из заданий</h1>
        {/* Знаю что делать это не нужно было но решил повторить то что было в уроке */}
        <button onClick={() => setCountMemo(countMemo + 1)}>
          Клик: {countMemo}
        </button>
        <Item name="Товар 1" />
      </div>
      <div>
        <button onClick={() => setCountUseMemo(countUseMemo + 1)}>
          Увеличить
        </button>
        <button onClick={() => setValue(value + 1)}>Изменить value</button>
        <p>Результат 1: {expensiveCalculationUseMemo}</p>
        <p>Результат 2: {value}</p>
      </div>
      <div>
        <button onClick={() => setCountClick(countClick + 1)}>
          Клик: {countClick}
        </button>
        <Child onClick={handleClick} />
      </div>
    </div>
  );
}

export default App;
