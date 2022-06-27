import React from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css";

const NavBar = () => {
  return (
    <div className="navbar">
      <img
        className="logo"
        src="https://mcrcodes.s3.eu-west-2.amazonaws.com/course/surreal-estate/logo.png"
        alt="surreal-estate-logo"
      />
      <ul className="navbar-Links">
        <li className="navbar-Links-Item">
          <Link className="navitem" to="/">
            View Properties
          </Link>
        </li>
        <li className="navbar-Links-Item">
          <Link className="navitem" to="/add-property">
            Add a Property
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
