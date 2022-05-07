import React from "react";
import { CityFeatures } from "../Components/CityFeatures";
import { FeaturedPro } from "../Components/FeaturedPro";
import { Header } from "../Components/Header";
import { NavBarHome } from "../Components/NavBarHome";
import { Property } from "../Components/Property";
import "./Home.css";

export const Home = () => {
  return (
    <div>
      <NavBarHome />
      <Header />
      <div className="homeContainer">
        <CityFeatures />
        <h1 className="homeTitle">Browser by the Properties</h1>
        <Property />
        <h1 className="homeTitle">Love to know More</h1>
        <FeaturedPro/>
      </div>
    </div>
  );
};
