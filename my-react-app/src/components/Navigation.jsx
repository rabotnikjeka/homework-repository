import { NavLink } from "react-router-dom";
import "./Navigation.css";

function Navigation() {
  return (
    <nav className="navigation">
      <ul className="nav-list">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
            end
          >
            Лента постов
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Об авторе
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/feedback"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Обратная связь
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
