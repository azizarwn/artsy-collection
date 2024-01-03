import React from "react";
import { HeroImg } from "../../../assets";
import { LinkButton } from "../../../common/Button/LinkButton";
import "./heroComponent.scss";


const HeroComponent = () => {
  return (
    <div className="main__hero">
      <div className="hero-collection">
        <h2 className="hero-title">Collection Camelia</h2>
        <p className="hero-subtitle">
          More than a flower, the Artsy camellia is an inspiration. Its
          geometric curves lend themselves to an endless variety of styles, from
          the most naturalistic to the most abstract.
        </p>
        {/* <a href="/" className="hero-goldBtn">
          See Camelia Collection
        </a> */}
        <LinkButton text ="See Camelia Collection" linkHref="/" linkClass="hero-btn"/>
      </div>
      <img
        src={HeroImg}
        alt="See Camelia Collection"
        className="heroImg"
      />
    </div>
  );
};

export default HeroComponent;
