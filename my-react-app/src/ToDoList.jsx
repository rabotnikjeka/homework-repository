import "./App.css";

function ToDoList() {
  const listItems = ["помыть посуду", "сделать домашнее задание", "прочитать книгу"];
  return (
    <div className="root">
      <h1 className="title">Список дел</h1>
      <ul>
        {listItems.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ul>
    </div>
  );
}

export default ToDoList;
