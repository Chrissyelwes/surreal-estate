import React from "react";
import { render } from "@testing-library/react";
import PropertyCard from "../components/PropertyCard";

describe("PropertyCard", () => {
  const validProps = {
    title: "stub title",
    type: "stub type",
    city: "Manchester",
    bathrooms: 16,
    bedrooms: 16,
    price: 100,
  };

  it("renders correctly", () => {
    const { asFragment } = render(
      <PropertyCard
        title={validProps.title}
        type={validProps.type}
        city={validProps.city}
        bathrooms={validProps.bathrooms}
        bedrooms={validProps.bedrooms}
        price={validProps.price}
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders correct values for props", () => {
    const { getByText, getByTestId } = render(
      <PropertyCard
        title={validProps.title}
        type={validProps.type}
        city={validProps.city}
        bathrooms={validProps.bathrooms}
        bedrooms={validProps.bedrooms}
        price={validProps.price}
      />
    );

    expect(getByText("stub title")).toHaveClass("property-card_title");
  });
});
