import React, { useState, useEffect } from "react";
import "./productList.scss";
import Footer from "../../common/Footer/Footer";
import Header from "../../common/Header/Header";
import {
  Chevronsleft,
  ChevronsRight,
  FilterIcon,
  HeaderDesktop,
  HeaderMobile,
  RibbonImg,
} from "../../assets";
import { LinkButton } from "../../common/Button/LinkButton";
import { getAllPokemon, getPokemon } from "../../services/pokemon";
import { Link, useLocation, useHistory } from "react-router-dom";
import queryString from "query-string";
import Filterbar from "./components/Filterbar";

const Productlist = () => {
  const history = useHistory();
  const [filterBar, setFilterBar] = useState(false);
  const [pokemon, setPokemon] = useState([]);
  const [nextUrl, setNextUrl] = useState("");
  const [prevUrl, setPrevUrl] = useState("");
  const [loading, setLoading] = useState(true);
  const [totalPages, setTotalPages] = useState(0);
  const [currentButton, setCurrentButton] = useState(0);
  const [arrOfCurBtn, setArrOfCurBtn] = useState([]);

  const toggleOpenCloseFilter = () => setFilterBar(!filterBar);

  // set api pokemon
  const limit = 24;
  const pokemonUrl = (offset) => {
    return `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`;
  };

  // get page number using querystring
  const { search } = useLocation();
  const { page } = queryString.parse(search);
  const intPage = parseInt(page);

  async function fetchPokemon(getPage) {
    let res = await getAllPokemon(pokemonUrl((getPage - 1) * limit));
    console.log("pokemon", pokemon);
    setNextUrl(res.next);
    setPrevUrl(res.previous);
    await loadingPokemon(res.results);
    setLoading(false);

    //set total pages
    let getTotalData = res.count;
    let pagesCount = Math.ceil(getTotalData / limit);
    setTotalPages(pagesCount);

    //set current pagin button
    setCurrentButton(intPage);
  }

  // set array of total pagin button
  const numberOfPages = [];
  for (let i = 1; i <= totalPages; i++) {
    numberOfPages.push(i);
  }

  //check params condition
  const checkUrl = () => {
    // console.log("intPage", intPage);

    if (isNaN(intPage)) {
      history.replace({
        pathname: "/product-list",
        search: "?page=1",
      });
    } else if (intPage === 0) {
      history.replace({
        pathname: "/product-list",
        search: "?page=1",
      });
    }
  };

  const paginButton = () => {
    let tempNumberOfPages = [...arrOfCurBtn];
    let dots = "...";
    let sliced1 = numberOfPages.slice(currentButton - 3, currentButton); // sliced1 (5-3, 5) -> [3,4,5]
    let sliced2 = numberOfPages.slice(currentButton, currentButton + 2); // sliced2 (5, 5+2) -> [6,7]
    let sliced3 = numberOfPages.slice(numberOfPages.length - 5); // slice(47-4)

    switch (true) {
      case currentButton >= 1 && currentButton <= 4:
        tempNumberOfPages = [1, 2, 3, 4, 5, dots, numberOfPages.length];
        break;
      case currentButton > 4 && currentButton < numberOfPages.length - 3:
        tempNumberOfPages = [
          1,
          dots,
          ...sliced1,
          ...sliced2,
          dots,
          numberOfPages.length,
        ];
        break;
      case currentButton > numberOfPages.length - 4:
        tempNumberOfPages = [1, dots, ...sliced3];
        break;
      default:
        return tempNumberOfPages = numberOfPages;
    }
    setArrOfCurBtn(tempNumberOfPages);

    // if (currentButton >= 1 && currentButton <= 4) {
    //   tempNumberOfPages = [1, 2, 3, 4, 5, dots, numberOfPages.length];
    // } else if (currentButton > 4 && currentButton < numberOfPages.length - 3) {
    //   // from 5 to 45 -> (47 - 2)
    //   const sliced1 = numberOfPages.slice(currentButton - 3, currentButton); // sliced1 (5-3, 5) -> [3,4,5]
    //   const sliced2 = numberOfPages.slice(currentButton, currentButton + 2); // sliced2 (5, 5+2) -> [6,7]
    //   tempNumberOfPages = [
    //     1,
    //     dots,
    //     ...sliced1,
    //     ...sliced2,
    //     dots,
    //     numberOfPages.length,
    //   ]; // [1, '...', 3, 4, 5, 6, 7, '...', 47]
    // } else if (currentButton > numberOfPages.length - 4) {
    //   // > 45
    //   const sliced = numberOfPages.slice(numberOfPages.length - 5); // slice(47-4)
    //   tempNumberOfPages = [1, dots, ...sliced];
    //   //[1, '...', 44, 45, 46, 47]
    // }
  };

  useEffect(() => {
    const calculatedPage = page || 1;
    fetchPokemon(calculatedPage);
    setLoading(true);
  }, [page]);

  useEffect(() => {
    checkUrl();
    paginButton();
  }, [currentButton]);

  const next = () => {
    const getNextUrl = new URL(nextUrl);
    const getOffsetNext = getNextUrl.searchParams.get("offset");
    const currentPageNext = getOffsetNext / limit + 1;

    return {
      pathname: "/product-list",
      search: `?page=${currentPageNext}`,
    };
  };

  const prev = () => {
    const getPrevUrl = new URL(prevUrl);
    const getOffsetPrev = getPrevUrl.searchParams.get("offset");
    const currentPagePrev = getOffsetPrev / limit + 1;

    return {
      pathname: "/product-list",
      search: `?page=${currentPagePrev}`,
    };
  };

  const loadingPokemon = async (item) => {
    let pokemonData = await Promise.all(
      item.map(async (pokemon) => {
        let pokemonList = await getPokemon(pokemon.url);
        return pokemonList;
      })
    );
    setPokemon(pokemonData);
  };

  return (
    <div className="screen-wrap">
      {filterBar ? (
        <div className="mobileFilter">
          <Filterbar toggleOpenCloseFilter={toggleOpenCloseFilter} />
        </div>
      ) : (
        <div className="productList-container">
          <Header />
          <div className="max-main">
            <div className="desktop-wrap">
              <div className="header-historyLink">
                <Link to="/" className="link-home">
                  Home | Collection |{" "}
                </Link>
                <span className="bold-span">View All</span>
              </div>
              <div className="desktop-flex">
                {/* <!-- Filter Product List Desktop --> */}
                <div className="leftItem-wrap">
                  <Filterbar toggleOpenCloseFilter={toggleOpenCloseFilter} />
                </div>

                {/* <!-- Main Product List --> */}
                <div className="mainProduct">
                  <div className="rightItem-wrap">
                    <div className="banner-wrap">
                      <div className="all-artsy">
                        <img
                          className="banner-img"
                          src={HeaderMobile}
                          alt="Artsy Collections"
                        />
                        <img
                          className="banner-desktop"
                          src={HeaderDesktop}
                          alt="Artsy Collections"
                        />
                      </div>
                    </div>
                    <div className="mainProduct__main">
                      <div className="flex-sortBtn">
                        <h2 className="view-title">View All Collections</h2>
                        <div className="btn-filterSort">
                          <div className="btnFilterSort-wrap filter-mainBtn">
                            <button
                              className="main-btn"
                              onClick={toggleOpenCloseFilter}
                            >
                              Filter
                              <img src={FilterIcon} alt="filter-icon" />
                            </button>
                          </div>
                          <div className="btnFilterSort-wrap">
                            <div className="sort-text">
                              <h2 className="total-desktop">
                                <span className="total-light">
                                  234097 Produk |{" "}
                                </span>
                                Urut Berdasarkan
                              </h2>
                            </div>
                            <div className="select-sortType">
                              <div className="select-box">
                                <div className="option-container">
                                  <div className="option">
                                    <input
                                      type="radio"
                                      name="sortType"
                                      className="radio"
                                      id="bestSelling"
                                    />
                                    <label
                                      className="labSort-type"
                                      htmlFor="bestSelling"
                                    >
                                      Best Selling
                                    </label>
                                  </div>
                                  <div className="option">
                                    <input
                                      type="radio"
                                      name="sortType"
                                      className="radio"
                                      id="newArrivals"
                                    />
                                    <label
                                      className="labSort-type"
                                      htmlFor="newArrivals"
                                    >
                                      New Arrivals
                                    </label>
                                  </div>
                                  <div className="option">
                                    <input
                                      type="radio"
                                      name="sortType"
                                      className="radio"
                                      id="lowToHigh"
                                    />
                                    <label
                                      className="labSort-type"
                                      htmlFor="lowToHigh"
                                    >
                                      Low to High
                                    </label>
                                  </div>
                                  <div className="option">
                                    <input
                                      type="radio"
                                      name="sortType"
                                      className="radio"
                                      id="highToLow"
                                    />
                                    <label
                                      className="labSort-type"
                                      htmlFor="highToLow"
                                    >
                                      High to Low
                                    </label>
                                  </div>
                                </div>
                                <button className="selected">Sort</button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <h2 className="total-mainProduct">234097 Produk</h2>
                      <div>
                        {loading ? (
                          <div className="data-notFound">loading....</div>
                        ) : page > 47 ? (
                          <div className="data-notFound">
                            Pokemon Data is Not Found
                          </div>
                        ) : (
                          <div className="mainProduct__collection">
                            {pokemon.map((item, index) => {
                              return (
                                <div className="img-collection" key={index}>
                                  <div className="imgCollection-wrap">
                                    <Link
                                      to={`/product-detail/${item.id}`}
                                      className="img-select"
                                      title={item.species.name}
                                    >
                                      <img
                                        src={item.sprites.other["official-artwork"].front_default}
                                        alt={item.species.name}
                                        className="main-img"
                                      />
                                      {/* <img
                                        src={`https://img.pokemondb.net/artwork/${item.id}.jpg`}
                                        alt={item.species.name}
                                        className="main-img"
                                      /> */}
                                      {item.base_experience > 100 && (
                                        <div className="ribbon-wrap">
                                          <div className="discount-img">
                                            <img
                                              className="ribbon-discount"
                                              src={RibbonImg}
                                              alt="ribbon"
                                            />
                                            <div className="detail-discount">
                                              Base Exp. {item.base_experience}
                                            </div>
                                          </div>
                                        </div>
                                      )}
                                      <div className="tag-img">
                                        {item.types.map((type) => {
                                          return (
                                            <div className="tag-item">
                                              {type.type.name}
                                            </div>
                                          );
                                        })}
                                      </div>
                                    </Link>
                                    <div className="text-detailWrap">
                                      <Link
                                        to={`/product-detail/${item.id}`}
                                        className="text-detail"
                                        title={item.species.name}
                                      >
                                        Ability :{" "}
                                        {item.abilities[0].ability.name}
                                      </Link>
                                    </div>
                                    <div className="flex-price">
                                      <Link
                                        to={`/product-detail/${item.id}`}
                                        className="bold-price"
                                        title={item.species.name}
                                      >
                                        {item.species.name}
                                      </Link>
                                      <div className="block-heightWeight">
                                        <Link
                                          to={`/product-detail/${item.id}`}
                                          className="before-discount"
                                          title={item.species.name}
                                        >
                                          Weight : {item.weight}kg
                                        </Link>
                                        <Link
                                          to={`/product-detail/${item.id}`}
                                          className="before-discount"
                                          title={item.species.name}
                                        >
                                          Height : {item.height}cm
                                        </Link>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        )}
                      </div>
                    </div>
                    {page <= 47 && (
                      <div className="mainProduct__pagination">
                        {prevUrl && (
                          <div className="pagin-btn">
                            <Link
                              to={prevUrl && prev()}
                              className="pagin-btnChevrons"
                            >
                              <img
                                src={Chevronsleft}
                                alt=""
                                className="btn-left"
                              />
                            </Link>
                          </div>
                        )}
                        <div className="paginNum-wrap">
                          {arrOfCurBtn.map((item, index) => {
                            return (
                              <div key={index} className="paginNum-btn">
                                {item === "..." ? (
                                  <div className="dot-btn">...</div>
                                ) : (
                                  <Link
                                    to={{
                                      pathname: "/product-list",
                                      search: `?page=${item}`,
                                    }}
                                    onClick={() => setCurrentButton(item)}
                                    className={
                                      currentButton === item
                                        ? "pagin-btnNum pagin-btnNumActive"
                                        : "pagin-btnNum"
                                    }
                                  >
                                    {item}
                                  </Link>
                                )}
                              </div>
                            );
                          })}
                        </div>
                        {nextUrl && (
                          <div className="pagin-btn">
                            <Link
                              to={nextUrl && next()}
                              className="pagin-btnChevrons"
                            >
                              <img
                                src={ChevronsRight}
                                alt=""
                                className="btn-right"
                              />
                            </Link>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      )}
    </div>
  );
};

export default Productlist;
