import React from "react";
import { NavLink, Link } from "react-router-dom";
import "./Navigation.css";
import Cart from "../Images/cart.png";
function Navigation(props) {
  //currency changing function
  function gel() {
    props.setCurrency("Gel");
  }

  function usd() {
    props.setCurrency("$");
  }
  return (
    <>
      <ul className="navigation-ul">
        <li>
          <NavLink className="Navlink" to="home">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className="Navlink" to="menu">
            Menu
          </NavLink>
        </li>
        <li>
          <NavLink className="Navlink" to="contact">
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink className="Navlink" to="about">
            About
          </NavLink>
        </li>
      </ul>

      <Link className="cart-link" to="cart">
        <img className="cart" src={Cart} />
        <div className="cart-number">{props.cartNumber}</div>
      </Link>
      <div className="navigation-currency">
        <p
          className={`${props.currency}` === "$" ? "currency-background" : ""}
          onClick={usd}
        >
          $
        </p>
        <p
          className={`${props.currency}` === "Gel" ? "currency-background" : ""}
          onClick={gel}
        >
          Gel
        </p>
      </div>
    </>
  );
}

export default Navigation;
