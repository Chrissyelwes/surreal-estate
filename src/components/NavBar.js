import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { Link } from "react-router-dom";
import "../styles/navbar.css";
import Logo from "../assets/surreal-estate_logo2.svg";

const NavBar = () => {
  return (
    <div className="navbar">
      <img className="logo" src={Logo} alt="surreal-estate-logo" />
      <ul className="navbar-Links">
        <li className="navbar-links_item">
          <Link className="navitem" to="/" alt="link to home navigation">
            <FontAwesomeIcon
              className="navbar_icon-house"
              data-testid="navbar-icon_house"
              icon={solid("house")}
            />
          </Link>
        </li>
        <li className="navbar-links_item">
          <Link className="navitem" to="/properties">
            View Properties
          </Link>
        </li>
        <li className="navbar-links_item">
          <Link className="navitem" to="/add-property">
            Add a Property
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
