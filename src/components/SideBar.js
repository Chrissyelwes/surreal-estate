import React from "react";
import { Link, useLocation } from "react-router-dom";
import qs from "qs";
import "../styles/side-bar.css";

const buildQueryString = (operation, valueObj) => {
  const { search } = useLocation();

  const currentQueryParams = qs.parse(search, { ignoreQueryPrefix: true });

  const newQueryParams = {
    ...currentQueryParams,
    [operation]: JSON.stringify(valueObj),
  };
  return qs.stringify(newQueryParams, { addQueryPrefix: true, encode: false });
};
const SideBar = () => {
  return (
    <div className="side-bar_wrapper">
      <div className="side-bar_items">
        <h5 className="side-bar_subtitle">Filter by city:</h5>
        <div className="side-bar_item">
          <Link
            className="side-bar_link"
            to={buildQueryString("query", { city: "Manchester" })}
          >
            Manchester
          </Link>
          <Link
            className="side-bar_link"
            to={buildQueryString("query", { city: "Leeds" })}
          >
            Leeds
          </Link>
          <Link
            className="side-bar_link"
            to={buildQueryString("query", { city: "Sheffield" })}
          >
            Sheffield
          </Link>
          <Link
            className="side-bar_link"
            to={buildQueryString("query", { city: "Liverpool" })}
          >
            Liverpool
          </Link>
        </div>
        <h5 className="side-bar_subtitle">Sort by price:</h5>
        <div className="side-bar_item">
          <Link
            className="side-bar_link"
            to={buildQueryString("sort", { price: 1 })}
          >
            Ascending
          </Link>
          <Link
            className="side-bar_link"
            to={buildQueryString("sort", { price: -1 })}
          >
            Descending
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
