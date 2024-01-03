import React, { useState } from "react";
import { CheckIcon, ChevronsUp, CloseIcon } from "../../../assets";

const Filterbar = ({toggleOpenCloseFilter}) => {
  const [category, setCategory] = useState(true);
  const [featured, setFeatured] = useState(true);
  const [price, setPrice] = useState(true);
  const [color, setColor] = useState(true);
  const [material, setMaterial] = useState(true);

  const toggleCategory = () => setCategory(!category);
  const toggleFeatured = () => setFeatured(!featured);
  const togglePrice = () => setPrice(!price);
  const toggleColor = () => setColor(!color);
  const toggleMaterial = () => setMaterial(!material);
  return (
    <div className="product">
      <div className="product__header">
        <h2 className="filter-header">Filter</h2>
        <button className="closeFilter" onClick={toggleOpenCloseFilter}>
          <img className="close-btn" src={CloseIcon} alt="close-button" />
        </button>
        <button className="resetFilter">Reset</button>
      </div>
      <div className="product__filter">
        <div className="product__checkbox">
          <div className="product__category">
            <button
              className={category ? "product__btnFilter" : "rotateButton"}
              id="cat-btn"
              onClick={toggleCategory}
            >
              Category
              <img
                className="drop-filterBtn"
                src={ChevronsUp}
                alt="chevrons-icon"
              />
            </button>
            {category ? (
              <div className="product__checkFilter" id="item-cat">
                <div className="check-wrap">
                  <div className="check-block">
                    <input
                      type="checkbox"
                      name="category-1"
                      id="category1"
                      className="check-item"
                      defaultValue="ViewAll"
                    />
                    <label
                      htmlFor="category1"
                      id="catLabel1"
                      className="label-wrap"
                    >
                      <div className="box">
                        <img className="box-img" src={CheckIcon} alt="" />
                      </div>
                      <span className="label-item">View All</span>
                    </label>
                  </div>
                </div>
                <div className="check-wrap">
                  <div className="check-block">
                    <input
                      type="checkbox"
                      name="category-2"
                      id="category2"
                      className="check-item"
                      defaultValue="Rings"
                    />
                    <label
                      htmlFor="category2"
                      id="catLabel2"
                      className="label-wrap"
                    >
                      <div className="box">
                        <img
                          className="box-img"
                          src={CheckIcon}
                          alt="check-icon"
                        />
                      </div>
                      <span className="label-item">Rings</span>
                    </label>
                  </div>
                </div>
                <div className="check-wrap">
                  <div className="check-block">
                    <input
                      type="checkbox"
                      name="category-3"
                      id="category3"
                      className="check-item"
                      defaultValue="Bracelets"
                    />
                    <label
                      htmlFor="category3"
                      id="catLabel3"
                      className="label-wrap"
                    >
                      <div className="box">
                        <img
                          className="box-img"
                          src={CheckIcon}
                          alt="check-icon"
                        />
                      </div>
                      <span className="label-item">Bracelets</span>
                    </label>
                  </div>
                </div>
                <div className="check-wrap">
                  <div className="check-block">
                    <input
                      type="checkbox"
                      name="category-4"
                      id="category4"
                      className="check-item"
                      defaultValue="Necklaces"
                    />
                    <label
                      htmlFor="category4"
                      id="catLabel4"
                      className="label-wrap"
                    >
                      <div className="box">
                        <img
                          className="box-img"
                          src={CheckIcon}
                          alt="check-icon"
                        />
                      </div>
                      <span className="label-item">Necklaces</span>
                    </label>
                  </div>
                </div>
                <div className="check-wrap">
                  <div className="check-block">
                    <input
                      type="checkbox"
                      name="category-5"
                      id="category5"
                      className="check-item"
                      defaultValue="Earrings"
                    />
                    <label
                      htmlFor="category5"
                      id="catLabel5"
                      className="label-wrap"
                    >
                      <div className="box">
                        <img
                          className="box-img"
                          src={CheckIcon}
                          alt="check-icon"
                        />
                      </div>
                      <span className="label-item">Earrings</span>
                    </label>
                  </div>
                </div>
              </div>
            ) : null}
          </div>
          <div className="product__featured">
            <button
              className={featured ? "product__btnFilter" : "rotateButton"}
              id="fea-btn"
              onClick={toggleFeatured}
            >
              Featured
              <img className="drop-filterBtn" src={ChevronsUp} alt="" />
            </button>
            {featured ? (
              <div className="product__checkFilter" id="item-fea">
                <div className="check-wrap">
                  <div className="check-block">
                    <input
                      type="checkbox"
                      name="featured-1"
                      id="featured1"
                      className="check-item"
                      defaultValue="CocoCrush"
                    />
                    <label
                      htmlFor="featured1"
                      id="feaLabel1"
                      className="label-wrap"
                    >
                      <div className="box">
                        <img
                          className="box-img"
                          src={CheckIcon}
                          alt="check-icon"
                        />
                      </div>
                      <span className="label-item">Coco Crush</span>
                    </label>
                  </div>
                </div>
                <div className="check-wrap">
                  <div className="check-block">
                    <input
                      type="checkbox"
                      name="featured-2"
                      id="featured2"
                      className="check-item"
                      defaultValue="Camélia"
                    />
                    <label
                      htmlFor="featured2"
                      id="feaLabel2"
                      className="label-wrap"
                    >
                      <div className="box">
                        <img
                          className="box-img"
                          src={CheckIcon}
                          alt="check-icon"
                        />
                      </div>
                      <span className="label-item">Camélia</span>
                    </label>
                  </div>
                </div>
                <div className="check-wrap">
                  <div className="check-block">
                    <input
                      type="checkbox"
                      name="featured-3"
                      id="featured3"
                      className="check-item"
                      defaultValue="Comète"
                    />
                    <label
                      htmlFor="featured3"
                      id="feaLabel3"
                      className="label-wrap"
                    >
                      <div className="box">
                        <img
                          className="box-img"
                          src={CheckIcon}
                          alt="check-icon"
                        />
                      </div>
                      <span className="label-item">Comète</span>
                    </label>
                  </div>
                </div>
                <div className="check-wrap">
                  <div className="check-block">
                    <input
                      type="checkbox"
                      name="featured-4"
                      id="featured4"
                      className="check-item"
                      defaultValue="Ruban"
                    />
                    <label
                      htmlFor="featured4"
                      id="feaLabel4"
                      className="label-wrap"
                    >
                      <div className="box">
                        <img
                          className="box-img"
                          src={CheckIcon}
                          alt="check-icon"
                        />
                      </div>
                      <span className="label-item">Ruban</span>
                    </label>
                  </div>
                </div>
                <div className="check-wrap">
                  <div className="check-block">
                    <input
                      type="checkbox"
                      name="featured-5"
                      id="featured5"
                      className="check-item"
                      defaultValue="Baroque"
                    />
                    <label
                      htmlFor="featured5"
                      id="feaLabel5"
                      className="label-wrap"
                    >
                      <div className="box">
                        <img
                          className="box-img"
                          src={CheckIcon}
                          alt="check-icon"
                        />
                      </div>
                      <span className="label-item">Baroque</span>
                    </label>
                  </div>
                </div>
                <div className="check-wrap">
                  <div className="check-block">
                    <input
                      type="checkbox"
                      name="featured-6"
                      id="featured6"
                      className="check-item"
                      defaultValue="SoleildeArtsy"
                    />
                    <label
                      htmlFor="featured6"
                      id="feaLabel6"
                      className="label-wrap"
                    >
                      <div className="box">
                        <img
                          className="box-img"
                          src={CheckIcon}
                          alt="check-icon"
                        />
                      </div>
                      <span className="label-item">Soleil de Artsy</span>
                    </label>
                  </div>
                </div>
              </div>
            ) : null}
          </div>
          <div className="product__price">
            <button
              className={price ? "product__btnFilter" : "rotateButton"}
              id="price-btn"
              onClick={togglePrice}
            >
              Price Range (RP)
              <img className="drop-filterBtn" src={ChevronsUp} alt="" />
            </button>
            {price ? (
              <div className="product__rangeWrap" id="item-price">
                <div className="product__values">
                  <div id="range1">0</div>
                  <div id="range2">13479000</div>
                </div>
                <div className="product__range">
                  <div className="slider-track"></div>
                  {/* <input
                          type="range"
                          name=""
                          min="0"
                          max="13479000"
                          defaultValue="0"
                          className="range"
                          id="slider-1"
                          onInput={slideOne}
                        />
                        <input
                          type="range"
                          name=""
                          min="0"
                          max="13479000"
                          defaultValue="13479000"
                          className="range"
                          id="slider-2"
                          onInput={slideTwo}
                        /> */}
                  <input
                    type="range"
                    name=""
                    min="0"
                    max="13479000"
                    defaultValue="0"
                    className="range"
                    id="slider-1"
                  />
                  <input
                    type="range"
                    name=""
                    min="0"
                    max="13479000"
                    defaultValue="13479000"
                    className="range"
                    id="slider-2"
                  />
                </div>
                <div className="total-product">
                  <span>234097 Produk</span>
                </div>
              </div>
            ) : null}
          </div>
          <div className="product__color">
            <div className="button-wrap">
              <button
                className={color ? "product__btnFilter" : "rotateButton"}
                id="color-btn"
                onClick={toggleColor}
              >
                Color
                <img className="drop-filterBtn" src={ChevronsUp} alt="" />
              </button>
            </div>
            {color ? (
              <div className="product__colorWrap" id="item-color">
                <div className="flex-color">
                  <div className="product__checkColor">
                    <div className="wrap-color">
                      <input
                        className="color-radio"
                        type="radio"
                        name="color"
                        id="color1"
                        defaultValue="black"
                      />
                      <label
                        htmlFor="color1"
                        id="colorLabel1"
                        className="color-label"
                      >
                        <div className="ellipse black select-ellipse"></div>
                      </label>
                    </div>
                  </div>
                  <div className="product__checkColor">
                    <div className="wrap-color">
                      <input
                        className="color-radio"
                        type="radio"
                        name="color"
                        id="color2"
                        defaultValue="grey"
                      />
                      <label
                        htmlFor="color2"
                        id="colorLabel2"
                        className="color-label"
                      >
                        <div className="ellipse grey select-ellipse"></div>
                      </label>
                    </div>
                  </div>
                  <div className="product__checkColor">
                    <div className="wrap-color">
                      <input
                        className="color-radio"
                        type="radio"
                        name="color"
                        id="color3"
                        defaultValue="gradientCaramel"
                      />
                      <label
                        htmlFor="color3"
                        id="colorLabel3"
                        className="color-label"
                      >
                        <div className="ellipse grad-caramel select-ellipse"></div>
                      </label>
                    </div>
                  </div>
                  <div className="product__checkColor">
                    <div className="wrap-color">
                      <input
                        className="color-radio"
                        type="radio"
                        name="color"
                        id="color4"
                        defaultValue="gradientGrey"
                      />
                      <label
                        htmlFor="color4"
                        id="colorLabel4"
                        className="color-label"
                      >
                        <div className="ellipse grad-grey select-ellipse"></div>
                      </label>
                    </div>
                  </div>
                  <div className="product__checkColor">
                    <div className="wrap-color">
                      <input
                        className="color-radio"
                        type="radio"
                        name="color"
                        id="color5"
                        defaultValue="gradientPink"
                      />
                      <label
                        htmlFor="color5"
                        id="colorLabel5"
                        className="color-label"
                      >
                        <div className="ellipse grad-pink select-ellipse"></div>
                      </label>
                    </div>
                  </div>
                  <div className="product__checkColor">
                    <div className="wrap-color">
                      <input
                        className="color-radio"
                        type="radio"
                        name="color"
                        id="color6"
                        defaultValue="maroon"
                      />
                      <label
                        htmlFor="color6"
                        id="colorLabel6"
                        className="color-label"
                      >
                        <div className="ellipse maroon select-ellipse"></div>
                      </label>
                    </div>
                  </div>
                  <div className="product__checkColor">
                    <div className="wrap-color">
                      <input
                        className="color-radio"
                        type="radio"
                        name="color"
                        id="color7"
                        defaultValue="green"
                      />
                      <label
                        htmlFor="color7"
                        id="colorLabel7"
                        className="color-label"
                      >
                        <div className="ellipse green select-ellipse"></div>
                      </label>
                    </div>
                  </div>
                  <div className="product__checkColor">
                    <div className="wrap-color">
                      <input
                        className="color-radio"
                        type="radio"
                        name="color"
                        id="color8"
                        defaultValue="blue"
                      />
                      <label
                        htmlFor="color8"
                        id="colorLabel8"
                        className="color-label"
                      >
                        <div className="ellipse blue select-ellipse"></div>
                      </label>
                    </div>
                  </div>
                  <div className="product__checkColor">
                    <div className="wrap-color">
                      <input
                        className="color-radio"
                        type="radio"
                        name="color"
                        id="color9"
                        defaultValue="brown"
                      />
                      <label
                        htmlFor="color9"
                        id="colorLabel9"
                        className="color-label"
                      >
                        <div className="ellipse brown select-ellipse"></div>
                      </label>
                    </div>
                  </div>
                  <div className="product__checkColor">
                    <div className="wrap-color">
                      <input
                        className="color-radio"
                        type="radio"
                        name="color"
                        id="color10"
                        defaultValue="brokenWhite"
                      />
                      <label
                        htmlFor="color10"
                        id="colorLabel10"
                        className="color-label"
                      >
                        <div className="ellipse broken-white select-ellipse"></div>
                      </label>
                    </div>
                  </div>
                  <div className="product__checkColor">
                    <div className="wrap-color">
                      <input
                        className="color-radio"
                        type="radio"
                        name="color"
                        id="color11"
                        defaultValue="gradientRainbow"
                      />
                      <label
                        htmlFor="color11"
                        id="colorLabel11"
                        className="color-label"
                      >
                        <div className="ellipse grad-rainbow select-ellipse"></div>
                      </label>
                    </div>
                  </div>
                  <div className="product__checkColor">
                    <div className="wrap-color">
                      <input
                        className="color-radio"
                        type="radio"
                        name="color"
                        id="color12"
                        defaultValue="khaki"
                      />
                      <label
                        htmlFor="color12"
                        id="colorLabel12"
                        className="color-label"
                      >
                        <div className="ellipse khaki select-ellipse"></div>
                      </label>
                    </div>
                  </div>
                  <div className="product__checkColor">
                    <div className="wrap-color">
                      <input
                        className="color-radio"
                        type="radio"
                        name="color"
                        id="color13"
                        defaultValue="puple"
                      />
                      <label
                        htmlFor="color13"
                        id="colorLabel13"
                        className="color-label"
                      >
                        <div className="ellipse puple select-ellipse"></div>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            ) : null}
          </div>
          <div className="product__material">
            <button
              className={material ? "product__btnFilter" : "rotateButton"}
              id="mat-btn"
              onClick={toggleMaterial}
            >
              Material
              <img src={ChevronsUp} className="drop-filterBtn" alt="" />
            </button>
            {material ? (
              <div className="product__checkFilter" id="item-mat">
                <div className="check-wrap">
                  <div className="check-block">
                    <input
                      type="checkbox"
                      name="material-1"
                      id="material1"
                      className="check-item"
                      defaultValue="AntiRust"
                    />
                    <label
                      htmlFor="material1"
                      id="matLabel1"
                      className="label-wrap"
                    >
                      <div className="box">
                        <img
                          className="box-img"
                          src={CheckIcon}
                          alt="check-icon"
                        />
                      </div>
                      <span className="label-item">Anti-Rust</span>
                    </label>
                  </div>
                </div>
                <div className="check-wrap">
                  <div className="check-block">
                    <input
                      type="checkbox"
                      name="material-2"
                      id="material2"
                      className="check-item"
                      defaultValue="Mixed"
                    />
                    <label
                      htmlFor="material2"
                      id="matLabel2"
                      className="label-wrap"
                    >
                      <div className="box">
                        <img
                          className="box-img"
                          src={CheckIcon}
                          alt="check-icon"
                        />
                      </div>
                      <span className="label-item">Mixed</span>
                    </label>
                  </div>
                </div>
                <div className="check-wrap">
                  <div className="check-block">
                    <input
                      type="checkbox"
                      name="material-3"
                      id="material3"
                      className="check-item"
                      defaultValue="Gold"
                    />
                    <label
                      htmlFor="material3"
                      id="matLabel3"
                      className="label-wrap"
                    >
                      <div className="box">
                        <img
                          className="box-img"
                          src={CheckIcon}
                          alt="check-icon"
                        />
                      </div>
                      <span className="label-item">Gold</span>
                    </label>
                  </div>
                </div>
                <div className="check-wrap">
                  <div className="check-block">
                    <input
                      type="checkbox"
                      name="material-4"
                      id="material4"
                      className="check-item"
                      defaultValue="Silver"
                    />
                    <label
                      htmlFor="material4"
                      id="matLabel4"
                      className="label-wrap"
                    >
                      <div className="box">
                        <img
                          className="box-img"
                          src={CheckIcon}
                          alt="check-icon"
                        />
                      </div>
                      <span className="label-item">Silver</span>
                    </label>
                  </div>
                </div>
                <div className="check-wrap">
                  <div className="check-block">
                    <input
                      type="checkbox"
                      name="material-5"
                      id="material5"
                      className="check-item"
                      defaultValue="Metallic"
                    />
                    <label
                      htmlFor="material5"
                      id="matLabel5"
                      className="label-wrap"
                    >
                      <div className="box">
                        <img
                          className="box-img"
                          src={CheckIcon}
                          alt="check-icon"
                        />
                      </div>
                      <span className="label-item">Metallic</span>
                    </label>
                  </div>
                </div>
                <div className="check-wrap">
                  <div className="check-block">
                    <input
                      type="checkbox"
                      name="material-6"
                      id="material6"
                      className="check-item"
                      defaultValue="Metallic"
                    />
                    <label
                      htmlFor="material6"
                      id="matLabel6"
                      className="label-wrap"
                    >
                      <div className="box">
                        <img
                          className="box-img"
                          src={CheckIcon}
                          alt="check-icon"
                        />
                      </div>
                      <span className="label-item">Diamond</span>
                    </label>
                  </div>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
      <div className="product__bottomBtn">
        <div className="btnBottom-wrap">
          <button className="reset-btn">Reset</button>
        </div>
        <div className="btnBottom-wrap">
          <button className="apply-btn">Apply</button>
        </div>
      </div>
    </div>
  );
};

export default Filterbar;
