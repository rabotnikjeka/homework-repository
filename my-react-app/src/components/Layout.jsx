import { Link, Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className="layout">
      <header className="header">
        <nav>
          <Link to="/">Главная</Link>
          <Link to="/posts">Посты</Link>
        </nav>
      </header>
      <main className="main">
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
