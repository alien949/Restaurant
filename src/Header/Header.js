import React from "react";
import { Outlet } from "react-router-dom";
import Navigation from "./Navigation";
import "./Header.css";
function Header(props) {
  return (
    <>
      <div className="header-outer-div">
        <Navigation
          currency={props.currency}
          setCurrency={props.setCurrency}
          cartNumber={props.cartNumber}
        />
      </div>
      <Outlet />
    </>
  );
}

export default Header;
