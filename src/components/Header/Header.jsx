import React from "react";
import "./Header.css";
import logo from "../../assets/img/logo.png";
import { Link } from "react-router-dom";

export const Header = function () {
  return (
    <div className="Header">
      <img src={logo} alt="Shop logo" />
      <nav className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/promotions?color=aquamarine">Promotions</Link>
        <Link to="/user-account">User Account</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </div>
  );
};
