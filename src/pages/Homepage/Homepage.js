import React from "react";
import DiscoverComponent from "../../common/Discover/DiscoverComponent";
import Footer from "../../common/Footer/Footer";
import Header from "../../common/Header/Header";
import CollectionsComponent from "./components/CollectionsComponent";

import HeroComponent from "./components/HeroComponent";
import "./homepage.scss";

const Homepage = () => {
  return (
    <div>
      <Header />
      <main className="max-main">
        <div className="main">
          <HeroComponent />
          {/* <a href="/todolist" className='link-todoilst'>TODO LIST</a> */}
          <CollectionsComponent/>
          <DiscoverComponent/>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Homepage;
