import React, { useState, useRef, useEffect } from "react";
import { SearchIcon } from "../../Utilities/Svgs";
import closeIcon from "../../assets/close-icon.png";
import Card from "./Card";

const Discover = () => {
  const searchWrapperRef = useRef();
  const containerRef = useRef();
  const [searchBarActive, setSearchBarActive] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [brands, setBrands] = useState([]);
  const [w, setW] = useState(window.innerWidth < 768 ? 49 : 57);

  const handleSearchBarClick = () => {
    setSearchBarActive(true);
  };

  const handleSearchBarCloseClick = (e) => {
    e.stopPropagation();
    setSearchBarActive(false);
    setSearchTerm("");
  };

  const handleSearchInputChange = (e) => {
    
    setSearchTerm(e.target.value);
  };

  useEffect(() => {
    const updateMaxWidth = () => {
      let afterW;
      if (window.innerWidth >= 768) {
        afterW = 736;
      } else {
        afterW = containerRef.current.scrollWidth;
      }
      if (searchWrapperRef.current && containerRef.current) {
        const contentWidth = searchBarActive ? afterW : w;
        searchWrapperRef.current.style.width = `${contentWidth}px`;
      }
    };

    updateMaxWidth();

    const handleResize = () => {
      const newW = window.innerWidth < 768 ? 49 : 57;
      setW(newW);
      updateMaxWidth();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [searchBarActive, w]);

  useEffect(() => {
    const fetchBrandData = async () => {
      const apiKey = "fBLzuFHGsbV0y56tml96oECj16FSYmQcwcB0Y+aSL8Y="; // Replace with your actual API key
      const apiUrl = `https://api.brandfetch.io/v2/search/${searchTerm}`;

      try {
        const response = await fetch(apiUrl, {
          headers: {
            Authorization: `Bearer ${apiKey}`,
            Referer: window.location.origin,
          },
        });

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();

        const uniqueBrands = Array.from(
          new Set(data.map((brand) => brand.name))
        ).map((name) => data.find((brand) => brand.name === name));

        setBrands(uniqueBrands);
      } catch (error) {
        console.error("Error fetching brand data:", error.message);
      }
    };

    if (searchTerm) {
      fetchBrandData();
    } else {
      setBrands([]);
    }
  }, [searchTerm]);

  return (
    <section id="discover" className="min-h-screen">
      <div className="container flex flex-col mx-auto pt-24 sm:pt-44 pb-16 px-4">
        <h2
          ref={containerRef}
          className="discover__title text-4xl text-center font-extrabold mb-6 md:text-5xl "
        >
          Discover Companies
        </h2>
        <div
          onClick={handleSearchBarClick}
          className="search-bar max-w-full mx-auto rounded-md mb-4 bg-grey-bg"
        >
          <div
            ref={searchWrapperRef}
            className="search-bar__wrapper flex items-center pe-3 justify-between"
          >
            <div className="left flex items-center sm:gap-3">
              <div className="search-icon p-3 md:p-4 cursor-pointer">
                <SearchIcon />
              </div>
              <div className="search-input">
                <input
                  type="text"
                  placeholder="Search for a company"
                  className="bg-transparent outline-none text-sm sm:text-base"
                  value={searchTerm}
                  onChange={handleSearchInputChange}
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
        </div>
        <div className="cards grid grid-cols-2 gap-4 md:grid-cols-3">
          {brands.map((brand) => (
            <Card
              key={brand.domain}
              companyLogo={brand.icon}
              companyName={brand.name}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Discover;
