import "./App.css";
import { useContext } from "react";
import { AuthContext, AuthProvider } from "./AuthContext";

function Content() {
  const { isLoggedIn, login } = useContext(AuthContext);

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      {isLoggedIn ? (
        <p style={{ fontSize: "24px", color: "green" }}>Вы авторизованы!</p>
      ) : (
        <button
          onClick={login}
          style={{ padding: "10px 20px", fontSize: "18px" }}
        >
          Войти
        </button>
      )}
    </div>
  );
}

export function App() {
  return (
    <AuthProvider>
      <Content />
    </AuthProvider>
  );
}
