import React from "react";
import { Outlet } from "react-router-dom";
import Navigation from "./Navigation";
import "./Header.css";
function Header() {
  return (
    <>
      <div className="header-outer-div">
        <Navigation />
      </div>
      <Outlet />
    </>
  );
}

export default Header;
