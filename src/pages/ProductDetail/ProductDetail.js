import React, { useState, useEffect } from "react";
import Footer from "../../common/Footer/Footer";
import Header from "../../common/Header/Header";
import "./productDetail.scss";
import SliderGallery from "./components/SliderGallery";
import {
  AwardIcon,
  ChevronsUp,
  CloseIcon,
  InfoIcon,
  MinusIcon,
  PlusIcon,
  StarIcon,
} from "../../assets";
import { getAllPokemon } from "../../services/pokemon";
import { Link } from "react-router-dom";
import { StarsRating } from "stars-rating-react-hooks";


const ProductDetail = () => {
  const [description, setDescription] = useState(false);
  const [material, setMaterial] = useState(false);
  const [shipReturn, setShipReturn] = useState(false);
  const [qty, setQty] = useState(1);
  const [pickColorBtn, setPickColorBtn] = useState(true);
  const [cartPopup, setCartPopup] = useState(false);
  const [pokemonDetail, setPokemonDetail] = useState({});
  const [loading, setLoading] = useState(true);
  const pokemonId = window.location.pathname.split("/")[2];
  console.log("id", pokemonId);
  const pokemonUrl = `https://pokeapi.co/api/v2/pokemon/${pokemonId}`;

  useEffect(() => {
    async function fetchPokemonDetail() {
      let res = await getAllPokemon(pokemonUrl);
      // console.log("res", res);
      fetch(pokemonUrl);
      await loadPokemondetail(res);
      setLoading(false);
    }
    fetchPokemonDetail();
  }, []);

  const loadPokemondetail = async (pokemonData) => {
    setPokemonDetail(pokemonData);
  };
  console.log("pokemon", pokemonDetail);

  const toggleDesc = () => setDescription(!description);
  const toggleMat = () => setMaterial(!material);
  const toggleShip = () => setShipReturn(!shipReturn);

  const togglePlus = () => {
    setQty(qty + 1);
  };

  const toggleMin = () => {
    if (qty === 1) {
      return;
    }
    setQty(qty - 1);
  };

  const toggleInputQty = (e) => {
    const num = parseInt(e.target.value);
    setQty(num);
    // console.log(typeof e.target.value);
    // console.log(typeof num);
  };

  const togglePickColor = () => {
    setPickColorBtn(!pickColorBtn);
  };

  const toggleAddCart = () => {
    setCartPopup(!cartPopup);
    const screen = document.querySelector("body");
    if (cartPopup === false) {
      screen.classList.add("viewPopup");
    } else {
      screen.classList.remove("viewPopup");
    }
  };

  const config = {
    totalStars: 5,
    initialSelectedValue: 5,
    renderFull: <img src={StarIcon} alt="rating" className="stars-rating"/>,
  };

  return (
    <div className="screen-wrap">
      {loading ? (
        <div className="data-loading">loading....</div>
      ) : (
        <div className="popup-wrap">
          <div
            className={cartPopup ? "popup-addCart" : "closePopup"}
            id="popup1-addCart"
          >
            <div className="overlay"></div>
            <div className="addCart-content">
              <div className="content-wrap">
                <button className="close-addCart" onClick={toggleAddCart}>
                  <img
                    src={CloseIcon}
                    alt="close-btn"
                    className="close-cartImg"
                  />
                </button>
                <h2 className="popup-title">Item Added to Cart</h2>
                <div className="flex-addCart">
                  <div className="thumItemImg-wrap">
                    <img
                      src={
                        pokemonDetail.sprites.other.dream_world.front_default
                      }
                      alt="Pave threader Earrings"
                      className="thum-itemImg"
                    />
                  </div>
                  <div className="text-itemDetail">
                    <h3 className="detail-title">{pokemonDetail.name}</h3>
                    <div className="total-qty">x 1</div>
                    <div className="totalPrice-addCart">Rp. 104.300</div>
                  </div>
                </div>
                <div className="btnViewCart">
                  <a href="/" className="viewCart">
                    View My Cart
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="detail-wrap">
        <Header />
        <div className="max-main">
          {loading ? (
            <div className="data-loading">loading....</div>
          ) : (
            <div className="desktopDetail-wrap">
              <div className="page-history">
                <Link to="/" className="link-history">
                  Home
                </Link>{" "}
                | {/* <div className="line-history"></div> */}
                <Link to="/product-list?page=1" className="link-history">
                  Collections
                </Link>{" "}
                | {/* <div className="line-history"></div> */}
                <span className="bold-historyDetail">
                  {pokemonDetail.species.name}
                </span>
              </div>
              <div className="productDetail">
                <div className="productDetail__slider">
                  <SliderGallery
                    pokemon1={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonDetail.id}.png`}
                    pokemon2={
                      pokemonDetail.sprites.other.dream_world.front_default
                    }
                  />
                </div>
                <div className="productDetail__detailItem">
                  <h2 className="item-title">{pokemonDetail.species.name}</h2>
                  <div className="item-rating">
                    <StarsRating config={config} isDisabled={true}/>
                  </div>
                  <h3 className="total-priceItem">
                    Ability : {pokemonDetail.abilities[0].ability.name}
                  </h3>
                  <div className="item-discount">
                    <div className="discount-icon">
                      Base Exp. {pokemonDetail.base_experience}
                    </div>
                    <span className="before-discountPrice">
                      Weight : {pokemonDetail.weight}kg
                    </span>
                    <span className="before-discountPrice">
                      Height : {pokemonDetail.height}cm
                    </span>
                  </div>
                  <div className="productDetail__itemDesc">
                    <button
                      className={
                        description ? "openDesc" : "productDetail__btnItem"
                      }
                      onClick={toggleDesc}
                    >
                      Types
                      <img
                        src={ChevronsUp}
                        alt="chevrons-icon"
                        className="closeIcon-desc"
                      />
                    </button>
                    {description && (
                      <div className="desc-detail">
                        {pokemonDetail.types?.map((item, index) => {
                          return (
                            <p key={index} className="descDetail-text">
                              {item.type.name}
                            </p>
                            // <ul className="descDetail-ul">
                            //   <li className="descDetail-li">
                            //     Earring Drop Length: 1.32"
                            //   </li>
                            //   <li className="descDetail-li">
                            //     Earring Width: 0.11"
                            //   </li>
                            // </ul>
                          );
                        })}
                      </div>
                    )}
                  </div>
                  <div className="productDetail__itemMat">
                    <button
                      className={
                        material ? "openDesc" : "productDetail__btnItem"
                      }
                      onClick={toggleMat}
                    >
                      Stats
                      <img
                        src={ChevronsUp}
                        alt="chevrons-icon"
                        className="closeIcon-desc"
                      />
                    </button>
                    {material && (
                      <div className="material-detail">
                        {pokemonDetail.stats?.map((item, index) => {
                          return (
                            <div key={index} className="rowDetail-item">
                              <div className="firstCol">{item.base_stat}</div>
                              <div className="secondCol">{item.stat.name}</div>
                            </div>
                          );
                        })}
                        {/* <div className="rowDetail-item">
                          <div className="firstCol">Fabric</div>
                          <div className="secondCol">Metal 100%</div>
                        </div>
                        <div className="rowDetail-item">
                          <div className="firstCol">Lining</div>
                          <div className="secondCol">Partial</div>
                        </div>
                        <div className="rowDetail-item">
                          <div className="firstCol">Silhouette</div>
                          <div className="secondCol">Drop</div>
                        </div> */}
                      </div>
                    )}
                  </div>
                  <div className="productDetail__itemShip">
                    <button
                      className={
                        shipReturn ? "openDesc" : "productDetail__btnItem"
                      }
                      onClick={toggleShip}
                    >
                      Shipping & Returns
                      <img
                        src={ChevronsUp}
                        alt="chevrons-icon"
                        className="closeIcon-desc"
                      />
                    </button>
                    {shipReturn ? (
                      <div className="ship-item">
                        <div className="rowDetail-item">
                          <div className="firstCol">Standard Delivery</div>
                          <div className="secondCol">
                            Within 6 - 9 working days
                          </div>
                        </div>
                        <div className="rowDetail-item">
                          <div className="firstCol">Express Delivery</div>
                          <div className="secondCol">
                            Within 3 - 5 working days
                          </div>
                        </div>
                        <p className="return-detail">
                          Find out more about our{" "}
                          <a href="/" className="returnLink-detail">
                            Returns & Exchanges
                          </a>
                          . All orders are currently shipped out from Indonesia
                        </p>
                      </div>
                    ) : null}
                  </div>
                </div>
                <div className="productDetail__setOrder">
                  <div className="desktopSet-wrap">
                    <div className="set-qty">
                      <div className="counter-title">Set Your Qty:</div>
                      <div className="counter-set">
                        <button
                          onClick={toggleMin}
                          className="counter-btn"
                          id="minus-btn"
                        >
                          <img src={MinusIcon} alt="" className="min-icon" />
                        </button>
                        <input
                          type="text"
                          className="counter-box"
                          id="qty-counter"
                          value={qty}
                          onChange={toggleInputQty}
                        />
                        <button
                          onClick={togglePlus}
                          className="counter-btn"
                          id="plus-btn"
                        >
                          <img src={PlusIcon} alt="" className="plus-icon" />
                        </button>
                      </div>
                    </div>
                    <div className="pick-color">
                      <span className="pick-text">Pick Your Color: </span>
                      <span className="pick-bold" id="picked-color">
                        {pickColorBtn ? "GOLD" : "SILVER"}
                      </span>
                      <div className="btn-color">
                        <button
                          className={
                            pickColorBtn ? "pickedGold" : "pickColor-btnGold"
                          }
                          onClick={togglePickColor}
                        ></button>
                        <button
                          className={
                            pickColorBtn
                              ? "pickColor-btnSilver"
                              : "pickedSilver"
                          }
                          onClick={togglePickColor}
                        ></button>
                      </div>
                    </div>
                    <div className="sub-total">
                      <span className="subtotal-text">Subtotal:</span>
                      <span className="subtotal-bold">Rp. 104.300</span>
                    </div>
                    <div className="button-ordercart">
                      <button className="add-cartBtn" onClick={toggleAddCart}>
                        ADD TO CART
                      </button>
                      <button className="order-nowBtn">ORDER NOW</button>
                    </div>
                    <div className="original-mark">
                      <img src={AwardIcon} alt="award" className="award-icon" />
                      <span className="ori-text">100% Original Product</span>
                      <img src={InfoIcon} alt="info" className="info-icon" />
                    </div>
                  </div>

                  <div className="help-detail">
                    <h2 className="helpDetail-title">Need help?</h2>
                    <p className="helpDetail-link">
                      Please go to the link here,{" "}
                      <a href="/" className="linkDetail">
                        https://support.artsycollective.co.id/
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default ProductDetail;
