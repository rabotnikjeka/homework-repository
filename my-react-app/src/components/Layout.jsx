import { Outlet } from "react-router-dom";
import Navigation from "./Navigation";
import "./Layout.css";

function Layout() {
  return (
    <div className="layout">
      <header className="header">
        <h1>Мой Блог</h1>
      </header>

      <Navigation />

      <main className="main-content">
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
