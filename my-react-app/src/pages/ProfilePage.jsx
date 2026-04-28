import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth.js";

function ProfilePage() {
  const { role, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <div>
      <h1>Профиль</h1>
      <p>Ваша роль: {role}</p>
      <button onClick={handleLogout}>Выйти</button>
    </div>
  );
}

export default ProfilePage;
