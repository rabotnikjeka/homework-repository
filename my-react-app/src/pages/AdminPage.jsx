import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth.js";

function AdminPage() {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <div>
      <h1>Админка</h1>
      <p>Это закрытая зона для администраторов.</p>
      <button onClick={handleLogout}>Выйти</button>
    </div>
  );
}

export default AdminPage;
