import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Navbar from "./components/navbar";
import HeroSection from "./components/HeroSection";
import DataElements from "./components/maps";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Navbar />
    <HeroSection />
    <DataElements  />
  </React.StrictMode>
);
