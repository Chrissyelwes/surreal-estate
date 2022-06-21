import React from "react";
import "../styles/navbar.css";

const NavBar = () => {
  return (
    <div className="navbar">
      <img
        className="logo"
        src="https://mcrcodes.s3.eu-west-2.amazonaws.com/course/surreal-estate/logo.png"
        alt="surreal-estate-logo"
      />
      <ul className="navbar-links">
        <li className="navbar-links-item">
          <a href="link">View Properties</a>
        </li>
        <li className="navbar-links-item">
          <a href="link">Add a Property</a>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
