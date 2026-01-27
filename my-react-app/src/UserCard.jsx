import "./App.css";

function UserCard({ name, age }) {
  return (
    <div className="user-card">
      <p>Имя: {name}</p>
      <p>Возраст: {age}</p>
    </div>
  );
}

export default UserCard;
