import "./App.css";

function UserCard({ name, age }) {
  return (
    <div className="user-card">
      <p>Имя: {name}</p>
      <p>Возраст: {age}</p>
    </div>
  );
}

function Props() {
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

export default Props;
