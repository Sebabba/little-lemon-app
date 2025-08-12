import React from "react";
import "./About.css";
import Image from "../../../assets/restaurantfood.jpg";
import ImageRestaurant from "../../../assets/restaurant.jpg";

const About = () => {
  return (
    <div className="about">
      <div>
        <h1 className="about-title">Little Lemon</h1>
        <h2 className="about-subtitle">Chicago</h2>
        <p className="about-description">
          We are a family owned Mediterranean restaurant, focused on traditional
          recipes served with a modern twist. Located in the heart of Chicago,
          we bring together the rich flavors and timeless techniques of the
          Mediterranean with contemporary culinary creativity. Our menu features a
          variety of carefully crafted dishes — from tender lamb and fresh seafood
          to vibrant mezze and house-made breads — all prepared using the finest
          locally sourced ingredients. Each plate reflects our commitment to quality
          and authenticity, while embracing innovation that excites the palate.
        </p>
      </div>

      <img
        className="about-image-bruchetta"
        src={ImageRestaurant}
        alt="Restarurant food"
        height={200}
        width={200}
      />
      <img
        className="about-image-restaurant"
        src={Image}
        alt="Restarurant food"
        height={200}
        width={200}
      />
    </div>
  );
};

export default About;