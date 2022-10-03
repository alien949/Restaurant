import React from "react";
import { NavLink } from "react-router-dom";
import "./Navigation.css";
function Navigation() {
  return (
    <>
      <ul className="navigation-ul">
        <li>
          <NavLink className="Navlink" to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className="Navlink" to="/menu">
            Menu
          </NavLink>
        </li>
        <li>
          <NavLink className="Navlink" to="/contact">
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink className="Navlink" to="/about">
            About
          </NavLink>
        </li>
      </ul>
    </>
  );
}

export default Navigation;
