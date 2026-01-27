import "./App.css";
import UserCard from "./UserCard";

function App() {
  return (
    <div className="root">
      <UserCard name="Alex" age={30} />
      <hr />
      <UserCard name="Anna" age={18} />
      <hr />
      <UserCard name="Bob" age={5} />
    </div>
  );
}

export default App;
