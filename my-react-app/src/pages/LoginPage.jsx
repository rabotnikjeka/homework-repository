import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth.js";

function LoginPage() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = (role) => {
    login(role);
    if (role === "admin") {
      navigate("/admin");
    } else {
      navigate("/profile");
    }
  };

  return (
    <div>
      <h1>Вход</h1>
      <div className="login-buttons">
        <button onClick={() => handleLogin("user")}>
          Войти как пользователь
        </button>
        <button onClick={() => handleLogin("admin")}>Войти как админ</button>
      </div>
    </div>
  );
}

export default LoginPage;
