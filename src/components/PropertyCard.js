import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import PropTypes from "prop-types";
import "../styles/property-card.css";

const PropertyCard = (props) => {
  const { bathrooms, bedrooms, city, price, title, type } = props;

  return (
    <div className="property-card_wrapper" data-testid="property-card_wrapper">
      <div className="property-card_items">
        <div className="property-card_image" />
        <div className="property-card_title">{title}</div>
        <div className="property-card_type-city">
          <div className="type">
            <FontAwesomeIcon
              className="property-card_icon-house"
              data-testid="icon_house"
              icon={solid("house")}
              color="#BD9561"
            />
            {type}
          </div>
          |
          <div className="city">
            <FontAwesomeIcon
              className="property-card_icon-building"
              data-testid="icon_building"
              icon={solid("building")}
              color="#BD9561"
            />
            {city}
          </div>
        </div>

        <div className="property-card_bathrooms-bedrooms">
          <div className="bathrooms">
            <FontAwesomeIcon
              className="property-card_icon-toilet"
              data-testid="icon_toilet"
              icon={solid("toilet")}
              color="#BD9561"
            />
            {bathrooms}
          </div>
          |
          <div className="bedrooms">
            <FontAwesomeIcon
              className="property-card_icon-bed"
              data-testid="icon_bed"
              icon={solid("bed")}
              color="#BD9561"
            />
            {bedrooms}
          </div>
        </div>

        <div className="property-card_price">
          <FontAwesomeIcon
            className="property-card_icon-price"
            data-testid="icon_price"
            icon={solid("sterling-sign")}
            color="#BD9561"
          />
          {price}
        </div>
        <button
          className="button_type-3"
          type="button"
          onClick={() => {
            window.location = "mailto:info@surrealestate.co.uk";
          }}
        >
          Email
        </button>
      </div>

      {/* Mock data */}

      {/* END OF MOCK DATA */}
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
