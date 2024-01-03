import React from "react";
import "./collectionsComponent.scss"
import { LeafBracelet, LeafEarring, LeafNecklace, LeafRing } from "../../../assets";
import {LinkButton} from "../../../common/Button/LinkButton";

const CollectionsComponent = () => {
  return (
    <div className="main__content">
      <div className="collection-txt">
        <h2 className="collection-title">Leaf Pendant Collections</h2>
        <span className="collection-subtitle">
          Style your modest wear with our understated picks
        </span>
        {/* <a href="/" className="shop-btn">
          Shop Now
        </a> */}
        <LinkButton text ="Shop Now" linkHref="/" linkClass="shop-btn"/>
      </div>
      <div className="collection-wrap">
        <div className="leaf-item">
          <a href="/" className="leaf-link" title="Leaf Stud Earrings">
            <img
              className="leaf-img"
              src={LeafEarring}
              alt="Leaf Stud Earrings"
            />
            Leaf Stud Earrings
          </a>
        </div>
        <div className="leaf-item">
          <a href="/" className="leaf-link" title="Leaf Pendant Bead Necklace">
            <img
              className="leaf-img"
              src={LeafNecklace}
              alt="Leaf Pendant Bead Necklace"
            />
            Leaf Pendant Bead Necklace
          </a>
        </div>

        <div className="leaf-item">
          <a href="/" className="leaf-link" title="Leaf Band Ring">
            <img
              className="leaf-img"
              src={LeafRing}
              alt="Leaf Band Ring"
            />
            Leaf Band Ring
          </a>
        </div>
        <div className="leaf-item">
          <a href="/" className="leaf-link" title="Leaf Bead Bracelet">
            <img
              className="leaf-img"
              src={LeafBracelet}
              alt="Leaf Bead Bracelet"
            />
            Leaf Bead Bracelet
          </a>
        </div>
      </div>
    </div>
  );
};

export default CollectionsComponent;
