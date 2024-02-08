import React, { useState, useRef, useEffect } from "react";
import { SearchIcon } from "../../Utilities/Svgs";
import closeIcon from "../../assets/close-icon.png";
import Card from "./Card";
import { motion } from "framer-motion";
const API_KEY = "sk_f1797393fb176bcd1d77c58766d7f5e5";

const Discover = ({ onButtonSelect }) => {
  const searchWrapperRef = useRef();
  const containerRef = useRef();
  const [searchBarActive, setSearchBarActive] = useState(false);
  const [brands, setBrands] = useState([]);
  const [loading, setLoading] = useState(false);
  const [windowWidth, setWindowWidth] = useState(
    window.innerWidth < 768 ? 49 : 57
  );
  const [searchTerm, setSearchTerm] = useState("");
  const [searchTimeout, setSearchTimeout] = useState(null);

  const handleSearchBarClick = () => {
    setSearchBarActive(true);
  };

  const handleSearchBarCloseClick = (e) => {
    e.stopPropagation();
    setSearchBarActive(false);
    setBrands([]);
    setSearchTerm("");
  };

  const handleInputChange = (event) => {
    const term = event.target.value;

    if (term !== searchTerm) {
      setSearchTerm(term);
      setLoading(true);
      if (searchTimeout) {
        clearTimeout(searchTimeout);
      }
      setSearchTimeout(
        setTimeout(() => {
          if (term.trim().length > 0) {
            fetchNameToDomain(term);
          } else {
            setBrands([]);
            setLoading(false);
          }
        }, 500)
      );
    }
  };

  const fetchNameToDomain = async (term) => {
    try {
      const response = await fetch(
        `https://company.clearbit.com/v1/domains/find?name=${term}`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${API_KEY}`,
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();
      setBrands([data]);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    const updateMaxWidth = () => {
      let contentWidth;
      if (window.innerWidth >= 768) {
        contentWidth = 736;
      } else {
        contentWidth = containerRef.current.scrollWidth;
      }
      if (searchWrapperRef.current && containerRef.current) {
        const width = searchBarActive ? contentWidth : windowWidth;
        searchWrapperRef.current.style.width = `${width}px`;
      }
    };

    updateMaxWidth();

    const handleResize = () => {
      const newWidth = window.innerWidth < 768 ? 49 : 57;
      setWindowWidth(newWidth);
      updateMaxWidth();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [searchBarActive, windowWidth]);

  return (
    <section id="discover" className="min-h-screen">
      <div className="container flex flex-col mx-auto pt-24 sm:pt-44 pb-16 px-4">
        <h2
          ref={containerRef}
          className="discover__title inline bg-rgba-black p-3 rounded backdrop-blur-md text-grey-bg text-4xl text-center font-extrabold mb-6 md:text-5xl "
        >
          Discover Companies
        </h2>
        <motion.div
          transition={{ type: "spring", stiffness: 100, duration: 0.5 }}
          initial={{ opacity: 0, y: -100 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, y: 0 }}
          onClick={handleSearchBarClick}
          className="search-bar relative z-50 max-w-full mx-auto rounded-md mb-4 bg-grey-bg"
        >
          <div
            ref={searchWrapperRef}
            className="search-bar__wrapper flex items-center pe-3"
          >
            <div className="left w-full flex items-center sm:gap-3">
              <div className="search-icon p-3 md:p-4 cursor-pointer">
                <SearchIcon />
              </div>
              <div className="search-input w-full">
                <input
                  type="text"
                  id="search-input"
                  value={searchTerm}
                  onChange={(event) => handleInputChange(event)}
                  placeholder="Search for a company"
                  className="bg-transparent w-full outline-none text-sm sm:text-base"
                />
              </div>
            </div>
            <div
              onClick={(e) => handleSearchBarCloseClick(e)}
              className="search-bar__close block cursor-pointer"
            >
              <img src={closeIcon} alt="close Icon" />
            </div>
          </div>
        </motion.div>
        <div className="cards grid grid-cols-2 gap-4 md:grid-cols-3">
          {loading ? (
            <p className="font-bold backdrop-blur-2xl bg-slate-500 bg-opacity-50 rounded p-4 col-span-2 md:col-span-3 text-center text-2xl">
              Loading...
            </p>
          ) : (
            brands.length > 0 && (
              <Card
                companyLogo={brands[0].logo}
                companyName={brands[0].name}
                linkToCompany={brands[0].domain}
                onButtonSelect={onButtonSelect}
              />
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default Discover;
