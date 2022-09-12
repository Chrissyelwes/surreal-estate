import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
// import PropTypes from "prop-types";
import "../styles/properties.css";
import PropertyCard from "./PropertyCard";
import SideBar from "./SideBar";

const Properties = () => {
  const [properties, setProperties] = useState([]);
  const [alert, setAlert] = useState("");

  useEffect(() => {
    axios
      .get("https://surreal-api.herokuapp.com/api/v1/PropertyListing")
      .then(({ data }) => {
        setProperties(data);
        setAlert({
          message: "Properties Available",
        });
      })
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.log(error);
        alert({
          message: "Could not fetch data. Please try again later.",
        });
      });
  }, []);

  const { search } = useLocation();
  useEffect(() => {
    axios
      .get(`https://surreal-api.herokuapp.com/api/v1/PropertyListing${search}`)
      .then(({ data }) => setProperties(data))
      // eslint-disable-next-line no-console
      .catch((error) => console.error(error));
  }, [search]);

  return (
    <div>
      <div className="properties_header-image" />
      <h1 className="properties_title">Properties</h1>
      <h4 className="properties_subtitle">
        Check out our available properties
      </h4>
      <SideBar />
      <div className="properties">
        {properties.map((property) => (
          <div key={property._id} className="item">
            <PropertyCard {...property} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Properties;
