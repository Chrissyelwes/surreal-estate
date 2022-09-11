import React from "react";
import { render } from "@testing-library/react";
import PropertyCard from "../components/PropertyCard";

describe("PropertyCard", () => {
  const validProps = {
    title: "stub title",
    type: "flat",
    city: "Manchester",
    bathrooms: 16,
    bedrooms: 18,
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
    render(
      <PropertyCard
        title={validProps.title}
        type={validProps.type}
        city={validProps.city}
        bathrooms={validProps.bathrooms}
        bedrooms={validProps.bedrooms}
        price={validProps.price}
      />
    );

    expect(validProps.title).toBe("stub title");
    expect(validProps.type).toBe("flat");
    expect(validProps.city).toBe("Manchester");
    expect(validProps.bathrooms).toBe(16);
    expect(validProps.bedrooms).toBe(18);
    expect(validProps.price).toBe(100);
  });

  it("renders correct class for props", () => {
    const { getByText } = render(
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
    expect(getByText("flat")).toHaveClass("type");
    expect(getByText("Manchester")).toHaveClass("city");
    expect(getByText(16)).toHaveClass("bathrooms");
    expect(getByText(18)).toHaveClass("bedrooms");
    expect(getByText(100)).toHaveClass("property-card_price");
  });
});
