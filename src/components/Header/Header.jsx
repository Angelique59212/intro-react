import React from "react";
import "./Header.css";
import "./Header.css";
import logo from "../../assets/img/logo.png";
import { Link } from "react-router-dom";

export const Header = function ({ title }) {
  return (
    <div className="Header">
      <img src={logo} alt="Shop logo" />
      <h1>{title}</h1>
      <nav className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/promotions">Promotions</Link>
        <Link to="/user-account">User Account</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </div>
  );
};
