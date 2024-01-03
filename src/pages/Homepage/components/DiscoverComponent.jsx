import React from "react";
import "./discoverComponent.scss";
import { DiscoverLittle, DiscoverWedding } from "../../../assets";

const DiscoverComponent = () => {
  return (
    <div className="main__discover">
      <h2 className="discover-title">Discover More</h2>
      <div className="discover-flex">
        <div className="discover-linkWrap">
          <a
            href="/"
            className="discover-link"
            title="SUMMER 2021 : THE WEDDING"
          >
            <img
              className="discover-img"
              src={DiscoverWedding}
              alt="SUMMER 2021 : THE WEDDING"
            />
          </a>
          <h3 className="discoverItem-title">SUMMER 2021 : THE WEDDING</h3>
          <p className="discoverItem-subtitle">
            Celebrate wedding in style with our elegant and eye-catching Jewel.
          </p>
          <a href="/" className="discover-itemlink">
            Shop Wedding Collection
          </a>
        </div>
        <div className="discover-linkWrap">
          <a href="/" className="discover-link" title="LITTLE COLLECTION 2021">
            <img
              className="discover-img"
              src={DiscoverLittle}
              alt="LITTLE COLLECTION 2021"
            />
          </a>
          <h3 className="discoverItem-title">LITTLE COLLECTION 2021</h3>
          <p className="discoverItem-subtitle">
            Mini trendsetters Mia and Tatiana step out with our striking pendant
            and adorable quilted jewel.
          </p>
          <a href="/" className="discover-itemlink">
            Shop Little Collection
          </a>
        </div>
      </div>
    </div>
  );
};

export default DiscoverComponent;
