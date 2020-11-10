import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Header = () => {
  return (
    <div>
      <div className="header-pointing-menu">
        <Link to="/" className="logo">
          <img src={logo} alt="logo" />
        </Link>
        <Link to="/" className="item">
          Home
        </Link>
      </div>
      <div className="header-right-menu"></div>
    </div>
  );
};
export default Header;