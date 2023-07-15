import React from "react";
import photoGrid from "../assets/photo-grid.png";
import "../App.css";

export default function HeroSection() {
  return (
    <section className="hero">
      <img className="hero--photo" src={photoGrid}></img>
      <h1 className="hero--header"> Online Experiences</h1>
      <p className="hero--text">
        Join unique interactive activities led by one-of-a-kind hosts—all
        without leaving home.
      </p>
    </section>
  );
}
