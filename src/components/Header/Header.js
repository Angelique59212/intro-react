import React from "react";
import './Header.css';
import './Header.css';
import logo from '../../assets/img/logo.png';

export const Header = () => {
    const title = 'Welcome to my Shop';
    return (
        <div className= "Header">
            <img src={logo} alt="Shop logo"/>
            <h1>{title}</h1>
        </div>
    );
}