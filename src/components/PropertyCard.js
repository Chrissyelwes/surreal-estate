import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import PropTypes from "prop-types";

const PropertyCard = (props) => {
  const { bathrooms, bedrooms, city, price, title, type } = props;

  return (
    <div className="property-card" data-testid="property-card">
      <div className="property-card_items">
        <div className="property-card_title">{title}</div>
        <div className="property-card_type-city">
          <FontAwesomeIcon
            className="property-card_icon-house"
            data-testid="icon_house"
            icon={solid("house")}
          />
          {type}
          -
          <FontAwesomeIcon
            className="property-card_icon-building"
            data-testid="icon_building"
            icon={solid("building")}
          />
          {city}
        </div>
        <div className="property-card_bathrooms">
          <FontAwesomeIcon
            className="property-card_icon-toilet"
            data-testid="icon_toilet"
            icon={solid("toilet")}
          />
          {bathrooms}
        </div>
        <div className="property-card_bedrooms">
          <FontAwesomeIcon
            className="property-card_icon-bed"
            data-testid="icon_bed"
            icon={solid("bed")}
          />
          {bedrooms}
        </div>
        <div className="property-card_price">£{price}</div>
        <p>
          <a href="mailto:someone@example.com">EMAIL</a>
          <FontAwesomeIcon icon="fa-solid fa-building" />
        </p>
      </div>
    </div>
  );
};

PropertyCard.propTypes = {
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  bathrooms: PropTypes.number.isRequired,
  bedrooms: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
};

export default PropertyCard;
