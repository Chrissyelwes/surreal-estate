import React from "react";
import PropTypes from "prop-types";
import "../styles/properties.css";
import PropertyCard from "./PropertyCard";

const Properties = () => {
  const props = {
    title: "2 Bedroom Flat",
    type: "Flat",
    city: "Manchester",
    bathrooms: 2,
    bedrooms: 2,
    price: 1000,
  };

  return (
    <div>
      <div className="properties_header-image" />
      <h1 className="properties_title">Properties</h1>
      <h4 className="properties_subtitle">
        Check out our available properties
      </h4>
      <PropertyCard
        title={props.title}
        type={props.type}
        city={props.city}
        bathrooms={props.bathrooms}
        bedrooms={props.bedrooms}
        price={props.price}
      />
    </div>
  );
};

Properties.propTypes = {
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  bathrooms: PropTypes.number.isRequired,
  bedrooms: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
};

export default Properties;
