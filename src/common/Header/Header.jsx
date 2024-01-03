import React, { useState } from "react";
import "./header.scss";
import {
  CocoRing,
  CameliaBracelet,
  RubanCollection,
  CartIcon,
  UserIcon,
  MenuIcon,
  CloseIcon,
  CareServiceMobileMenu,
  BridalMobileMenu,
  JewelryMobileMenu,
  CocoMobileMenu,
  CollectionMobileMenu,
} from "../../assets/index";

import Signup from "./components/Signup";
import Login from "./components/Login";
import { Link } from "react-router-dom";

const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [user, setUser] = useState(false);
  const [signUp, setSignUp] = useState(false);

  const toggleMenu = () => {
    setMobileMenu(!mobileMenu);
    const screen = document.querySelector("body");
    if (mobileMenu === false) {
      screen.classList.add("mobileView");
    } else {
      screen.classList.remove("mobileView");
    }
  };

  const toggleUser = () => {
    setUser(!user);
    setSignUp(false);
    const screen = document.querySelector("body");
    if (user === false) {
      screen.classList.add("mobileView");
    } else {
      screen.classList.remove("mobileView");
    }
  };

  const toggleSignUp = () => {
    setSignUp(true);
    const screen = document.querySelector("body");
    if (signUp === false) {
      screen.classList.add("mobileView");
    } else {
      screen.classList.remove("mobileView");
    }
  };

  const toggleSignIn = () => {
    setSignUp(false);
    const screen = document.querySelector("body");
    if (signUp === false) {
      screen.classList.remove("mobileView");
    } else {
      screen.classList.add("mobileView");
    }
  };

  const MenuList = [
    {
      link: "/product-list?page=1",
      title: "Collections",
      sub: "All Artsy’s fine jewelry",
      img: CollectionMobileMenu,
    },
    {
      link: "/",
      title: "Coco Crush",
      sub: "Special Coco Crush’s Edition",
      img: CocoMobileMenu,
    },
    {
      link: "/",
      title: "High Jewelry",
      sub: "Artsy high jewelry signature",
      img: JewelryMobileMenu,
    },
    {
      link: "/",
      title: "Bridal",
      sub: "Wedding, Engagement Rings",
      img: BridalMobileMenu,
    },
    {
      link: "/",
      title: "Care & Services",
      sub: "Book an Appoinment",
      img: CareServiceMobileMenu,
    },
  ];

  // const data = [
  //   {
  //     title: "Collections",
  //     detail: "All Artsy’s fine jewelry",
  //     link: "/productList",
  //     dropdown: {
  //       cat: {
  //         title: "Shop By Categories",
  //         sub: [
  //           {
  //             title: "View All",
  //             link: "/productList",
  //           },
  //           { title: "Rings", link: "/productList" },
  //           { title: "Bracelets", link: "/productList" },
  //           { title: "Necklaces", link: "/productList" },
  //           { title: "Earrings", link: "/productList" },
  //         ],
  //       },
  //       featuredBP: {
  //         title: "jennie",
  //         color: "pink",
  //       },
  //     },

  //     // [
  //     //   { title: "Featured Collections" },
  //     //   { sub: "Coco Crush" },
  //     //   { sub: "Camelia" },
  //     //   { sub: "Ultra" },
  //     //   { sub: "Comète" },
  //     //   { sub: "Ruban" },
  //     //   { sub: "Baroque" },
  //     //   { sub: "Soleil de Artsy" },
  //     // ],
  //     // [
  //     //   {
  //     //     image: cocoImg,
  //     //     title: "Coco Crush Ring",
  //     //   },
  //     //   {
  //     //     image: cameliaImg,
  //     //     title: "Camélia Bracelet",
  //     //   },
  //     //   {
  //     //     image: rubanImg,
  //     //     title: "Ruban Collection",
  //     //   },
  //     // ],
  //   },
  //   {
  //     title: "Coco Crush",
  //     detail: "Special Coco Crush’s Edition",
  //     link: "/productList",
  //   },
  //   {
  //     title: "High Jewelry",
  //     detail: "Artsy high jewelry signature",

  //     link: "/productList",
  //   },
  //   {
  //     title: "Bridal",
  //     detail: "Wedding, Engagement Rings",

  //     link: "/productList",
  //   },
  //   {
  //     title: "Care & Services",
  //     detail: "Book an Appoinment",

  //     link: "/productList",
  //   },
  // ];
  // console.log("data", data);
  // console.log("dataCategory", data[0].dropdown.cat.title);

  // console.log(MenuList);

  return (
    <div className="max-nav">
      <div className="fix-nav">
        <header className="nav">
          <div className="nav__head">
            <button
              className={mobileMenu ? "closeIcon" : "head-btn"}
              onClick={toggleMenu}
            >
              <img src={MenuIcon} alt="menu-icon" className="open" />
              <img src={CloseIcon} alt="x-icon" className="close" />
            </button>
            <Link to="/" className="logo">
              Artsy Collective
            </Link>
            <div className="head-desktop">
              <div className="link-menuDesktop">
                <div className="drop-menu">
                  <a className="main-link" href="/">
                    Collections
                  </a>
                  <div className="dropdown">
                    <div className="comp-wrap">
                      <div className="comp">
                        <div className="shop-featured">
                          <h2 className="featured-title">Shop By Categories</h2>
                          <ul className="featured-ul">
                            <li className="featured-li">
                              <Link
                                to={{
                                  pathname: "/product-list",
                                  search: `?page=1`,
                                }}
                                className="featured-link"
                              >
                                View All
                              </Link>
                            </li>
                            <li className="featured-li">
                              <a className="featured-link" href="/">
                                Rings
                              </a>
                            </li>
                            <li className="featured-li">
                              <a className="featured-link" href="/">
                                Bracelets
                              </a>
                            </li>
                            <li className="featured-li">
                              <a className="featured-link" href="/">
                                Necklaces
                              </a>
                            </li>
                            <li className="featured-li">
                              <a className="featured-link" href="/">
                                Earings
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="shop-featured">
                          <h2 className="featured-title">
                            Featured Collections
                          </h2>
                          <ul className="featured-ul">
                            <li className="featured-li">
                              <a className="featured-link" href="/">
                                Coco Crush
                              </a>
                            </li>
                            <li className="featured-li">
                              <a className="featured-link" href="/">
                                Camélia
                              </a>
                            </li>
                            <li className="featured-li">
                              <a className="featured-link" href="/">
                                Ultra
                              </a>
                            </li>
                            <li className="featured-li">
                              <a className="featured-link" href="/">
                                Comète
                              </a>
                            </li>
                            <li className="featured-li">
                              <a className="featured-link" href="/">
                                Ruban
                              </a>
                            </li>
                            <li className="featured-li">
                              <a className="featured-link" href="/">
                                Baroque
                              </a>
                            </li>
                            <li className="featured-li">
                              <a className="featured-link" href="/">
                                Soleil de Artsy
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="img-block">
                          <div className="image-nav">
                            <a href="/" className="navbtn-img">
                              <img
                                src={CocoRing}
                                alt="Coco Crush Ring"
                                className="nav-img"
                              />
                              Coco Crush Ring
                            </a>
                            <a href="/" className="navbtn-img pad">
                              <img
                                src={CameliaBracelet}
                                alt="Camélia Bracelet"
                                className="nav-img"
                              />
                              Camélia Bracelet
                            </a>
                            <a href="/" className="navbtn-img pad">
                              <img
                                src={RubanCollection}
                                alt="Ruban Collection"
                                className="nav-img"
                              />
                              Ruban Collection
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="link-menuDesktop">
                <div className="drop-menu">
                  <a className="main-link" href="/">
                    Coco Crush
                  </a>
                </div>
              </div>
              <div className="link-menuDesktop">
                <div className="drop-menu">
                  <a className="main-link" href="/">
                    High Jewelry
                  </a>
                </div>
              </div>
              <div className="link-menuDesktop">
                <div className="drop-menu">
                  <a className="main-link" href="/">
                    Bridal
                  </a>
                </div>
              </div>
              <div className="link-menuDesktop">
                <div className="drop-menu">
                  <a className="main-link" href="/">
                    Care & Services
                  </a>
                </div>
              </div>
            </div>
            <div className={mobileMenu ? "removeCartUser" : "head-cartUser"}>
              <button className="btn-user btn-cartUser">
                <img
                  className="icon"
                  src={CartIcon}
                  alt="cart-icon"
                  onClick={toggleUser}
                />
              </button>
              <button className="btn-cart btn-cartUser" id="btn-cart">
                <img className="icon" src={UserIcon} alt="user-icon" />
              </button>
            </div>
          </div>
          {mobileMenu ? (
            <div className="nav-menu">
              {MenuList.map((item, index) => {
                return (
                  <Link
                    to={item.link}
                    key={index}
                    className="link-menu"
                    onClick={toggleMenu}
                  >
                    <div className="menu-item">
                      <h2 className="drop-title">{item.title}</h2>
                      <span className="drop-subtitle">{item.sub}</span>
                    </div>
                    <img className="drop-img" src={item.img} alt={item.title} />
                  </Link>
                );
              })}
            </div>
          ) : null}
        </header>
      </div>
      <div className={user ? "user-wrap" : "closeUser"}>
        <div
          className={signUp ? "register scrollSignUp" : "register hiddenScroll"}
        >
          {signUp ? (
            <Signup toggleUser={toggleUser} toggleSignIn={toggleSignIn} />
          ) : (
            <Login toggleUser={toggleUser} toggleSignUp={toggleSignUp} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
