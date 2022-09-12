import React from "react";
import { Link } from "react-router-dom";
import "../styles/side-bar.css";

const SideBar = () => {
  return (
    <div className="side-bar_wrapper">
      <div className="side-bar_items">
        <div className="side-bar_item">
          <Link classname="side-bar_link" to={`/?query={"city": "Manchester"}`}>
            Manchester
          </Link>
          <Link classname="side-bar_link" to={`/?query={"city": "Leeds"}`}>
            Leeds
          </Link>
          <Link classname="side-bar_link" to={`/?query={"city": "Sheffield"}`}>
            Sheffield
          </Link>
          <Link classname="side-bar_link" to={`/?query={"city": "Liverpool"}`}>
            Liverpool
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
