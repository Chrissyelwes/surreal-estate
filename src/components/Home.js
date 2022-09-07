/* eslint-disable react/no-unescaped-entities */
import React from "react";
import "../styles/home.css";
import PropertyCard from "./PropertyCard";

const Home = () => {
  return (
    <div className="home_wrapper">
      <header className="home_header">
        <div className="home_header-image" />
      </header>

      <section className="home_section-a">
        <div className="section-a_item">
          <h1 className="title">Welcome to your dream home</h1>
          <p className="section-a_body">
            It's everyones' dream to have a home. Let that dream be true with us
            here at Surreal Estate. You can have whatever home you wish for, for
            zero fee. And when you're done with your dream home, you can sell it
            with us hassle free.
          </p>
          <button className="button_type-1" type="button">
            Buy a Home
          </button>
          <button className="button_type-2" type="button">
            Sell a Home
          </button>
        </div>
      </section>

      <section className="home_section-b">
        <div className="section-b_item">
          <h1>Properties</h1>
          <h5>Recent properties to watch out for</h5>
        </div>

        <div className="section-b_item">
          <PropertyCard />
        </div>
      </section>
    </div>
  );
};

export default Home;
