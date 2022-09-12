import React from "react";
import { Link } from "react-router-dom";
import "../styles/side-bar.css";

const SideBar = () => {
  return (
    <div className="side-bar_wrapper">
      <div className="side-bar_items">
        <div className="side-bar_item">
          <Link
            classname="side-bar_link"
            to={`/properties/?query={"city": "Manchester"}`}
          >
            <h1>Manchester</h1>Manchester
          </Link>
          <Link
            classname="side-bar_link"
            to={`/properties/?query={"city": "Leeds"}`}
          >
            Leeds
          </Link>
          <Link
            classname="side-bar_link"
            to={`/properties/?query={"city": "Sheffield"}`}
          >
            Sheffield
          </Link>
          <Link
            classname="side-bar_link"
            to={`/properties/?query={"city": "Liverpool"}`}
          >
            Liverpool
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
