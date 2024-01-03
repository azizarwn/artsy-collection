import React, { useState, useEffect } from "react";
import "./productList.scss";
import Footer from "../../common/Footer/Footer";
import Header from "../../common/Header/Header";
import {
  CheckIcon,
  ChevronsUp,
  CloseIcon,
  Chevronsleft,
  ChevronsRight,
  FilterIcon,
  HeaderDesktop,
  HeaderMobile,
  RibbonImg,
} from "../../assets";
import { LinkButton } from "../../common/Button/LinkButton";
import { getAllPokemon, getPokemon } from "../../services/pokemon";
import { Link, useLocation } from "react-router-dom";
import queryString from "query-string";
import Filterbar from "./components/Filterbar";

const Productlist = () => {
  const [filterBar, setFilterBar] = useState(false);
  const [pokemon, setPokemon] = useState([]);
  const [nextUrl, setNextUrl] = useState("");
  const [prevUrl, setPrevUrl] = useState("");
  const [loading, setLoading] = useState(true);
  const [totalPages, setTotalPages] = useState();
  const [paginLimit, setPaginLimit] = useState(5);
  const [maxPaginLimit, setMaxPaginLimit] = useState(5);
  const [minPaginLimit, setMinPaginLimit] = useState(0);

  const toggleOpenCloseFilter = () => setFilterBar(!filterBar);

  const pokemonUrl = (offset) => {
    return `https://pokeapi.co/api/v2/pokemon?limit=24&offset=${offset}`;
  };

  const { search } = useLocation();
  const { page } = queryString.parse(search);
  const intPage = parseInt(page);

  async function fetchPokemon(getPage) {
    let res = await getAllPokemon(pokemonUrl((getPage - 1) * 24));
    console.log("res", res);
    setNextUrl(res.next);
    setPrevUrl(res.previous);

    await loadingPokemon(res.results);
    setLoading(false);

    const getTotalData = res.count;
    const pagesCount = Math.ceil(getTotalData / 24);
    setTotalPages(pagesCount);
    // console.log("pagesCount", pagesCount)
  }

  const loadingPokemon = async (item) => {
    let pokemonData = await Promise.all(
      item.map(async (pokemon) => {
        let pokemonList = await getPokemon(pokemon.url);
        return pokemonList;
      })
    );
    setPokemon(pokemonData);
  };

  const paginPage = [];
  for (let i = 1; i <= totalPages; i++) {
    paginPage.push(i);
  }
  console.log("paginPage", paginPage);

  const paginButton = paginPage.map((number, index) => {
    if (number < maxPaginLimit + 1 && number > minPaginLimit) {
      return (
        <div className="paginNum-btn" key={index} id={number}>
          <Link
            to={{
              pathname: "/product-list",
              search: `?page=${number}`,
            }}
            className={
              intPage === number
                ? "pagin-btnNum pagin-btnNumActive"
                : "pagin-btnNum"
            }
          >
            {number}
            {console.log("number", number)}
          </Link>
        </div>
      );
    } else {
      return null;
    }
  });

  const next = () => {
    const getNextUrl = new URL(nextUrl);
    const getOffsetNext = getNextUrl.searchParams.get("offset");
    const currentPageNext = getOffsetNext / 24 + 1;

    return {
      pathname: "/product-list",
      search: `?page=${currentPageNext}`,
    };
  };

  const prev = () => {
    const getPrevUrl = new URL(prevUrl);
    const getOffsetPrev = getPrevUrl.searchParams.get("offset");
    const currentPagePrev = getOffsetPrev / 24 + 1;

    return {
      pathname: "/product-list",
      search: `?page=${currentPagePrev}`,
    };
  };

  const prevBtn = () => {
    if ((page - 1) % paginLimit === 0) {
      setMaxPaginLimit(maxPaginLimit - 3);
      setMinPaginLimit(minPaginLimit - paginLimit);
    }
    console.log("mod", page % maxPaginLimit === 0);
  }

  const nextBtn = () => {
    if ((page + 1) > maxPaginLimit) {
      setMaxPaginLimit(maxPaginLimit + 3);
      setMinPaginLimit(minPaginLimit + 3);
    }
  }
  console.log("maxPaginLimit", maxPaginLimit)
  console.log("minPaginLimit", minPaginLimit)

  useEffect(() => {
    const calculatedPage = page || 1;
    fetchPokemon(calculatedPage);
    setLoading(true);
  }, [page]);

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
                                        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${item.id}.png`}
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
                              )})}
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="mainProduct__pagination">
                      {prevUrl && (
                        <div className="pagin-btn">
                          <Link
                            to={prevUrl && prev()}
                            className="pagin-btnChevrons"
                            onClick={()=>prevBtn()}
                          >
                            <img
                              src={Chevronsleft}
                              alt=""
                              className="btn-left"
                            />
                          </Link>
                        </div>
                      )}

                      {paginButton}

                      {/* {paginPage
                        .map((item, index) => {
                          return (
                            <div key={index} className="paginNum-btn">
                              <Link
                                to={{
                                  pathname: "/product-list",
                                  search: `?page=${item}`,
                                }}
                                className={
                                  page === item
                                    ? "pagin-btnNum pagin-btnNumActive"
                                    : "pagin-btnNum"
                                }
                              >
                                {item}
                              </Link>
                            </div>
                          );
                        })
                        .slice(0, 4)} */}

                      {/* <div className="paginNum-btn">
                        <Link to="" className="pagin-btnNum">
                          1
                        </Link>
                      </div>
                      <div className="paginNum-btn">
                        <Link to="" className="pagin-btnNum">
                          2
                        </Link>
                      </div>
                      <div className="paginNum-btn">
                        <Link to="" className="pagin-btnNum">
                          3
                        </Link>
                      </div> */}

                      {nextUrl && (
                        <div className="pagin-btn">
                          <Link
                            to={nextUrl && next()}
                            className="pagin-btnChevrons"
                            onClick={()=>nextBtn()}
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
