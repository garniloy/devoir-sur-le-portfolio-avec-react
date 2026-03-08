import { NavLink } from "react-router";
import './Header-and-footer.css';

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">

        <NavLink className="navbar-brand touppercase" to="/">
          jonh doe
        </NavLink>

        {/* Hamburger button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Collapsible menu */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">

            <li className="nav-item">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  "touppercase nav-link " + (isActive ? "text-warning" : "text-white")
                }
              >
                home
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="/services"
                className={({ isActive }) =>
                  "touppercase nav-link " + (isActive ? "text-warning" : "text-white")
                }
              >
                services
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="/realisations"
                className={({ isActive }) =>
                  "touppercase nav-link " + (isActive ? "text-warning" : "text-white")
                }
              >
                portfolio
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  "touppercase nav-link " + (isActive ? "text-warning" : "text-white")
                }
              >
                contact
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="/mentions"
                className={({ isActive }) =>
                  "touppercase nav-link " + (isActive ? "text-warning" : "text-white")
                }
              >
                mentions légales
              </NavLink>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;