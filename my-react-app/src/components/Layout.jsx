import { Link, Outlet } from "react-router-dom";
import { useAuth } from "../hooks/useAuth.js";

function Layout() {
  const { isAuth, role } = useAuth();

  return (
    <div className="layout">
      <header className="header">
        <nav>
          <Link to="/">Главная</Link>
          <Link to="/profile">Профиль</Link>
          <Link to="/admin">Админка</Link>
          {!isAuth && <Link to="/login">Войти</Link>}
        </nav>
        {isAuth && (
          <span className="user-info">
            Вы вошли как: <b>{role}</b>
          </span>
        )}
      </header>
      <main className="main">
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
