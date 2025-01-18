import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "/src/components/styles/Navbar.css";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("");
  useEffect(() => {
    const currentPath = window.location.pathname;
    if (currentPath === "/") {
      setActiveLink("home");
    } else if (currentPath === "/projects") {
      setActiveLink("projects");
    } else if (currentPath === "/contact") {
      setActiveLink("contact");
    }
  }, [window.location.pathname]);

  return (
    <nav className="navbar">
      <div className="content">
        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/projects"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
