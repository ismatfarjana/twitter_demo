import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import home from "../assets/home.png";
import GoogleAuth from "./GoogleAuth";

const Header = () => {
  return (
    <div>
      <div className="header-pointing-menu">
        <Link to="/" className="logo">
          <img src={logo} alt="logo" />
        </Link>
        <Link to="/" className="item">
          <img className="home" src={home} alt="home" />
        </Link>
        <GoogleAuth />
      </div>
    </div>
  );
};
export default Header;
