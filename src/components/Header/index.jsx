import React from "react";
import logo from "../images/download.jfif";
import "./style.scss";

function Header() {
  return (
    <div className="Header-wrapper">
      <img src={logo} alt="logo" />
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>

        <li>
          <a href="/services">Services</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
      </ul>
    </div>
    
  );
}

export default Header;
