import React, { useState, useRef, useEffect } from "react";
import {
  SearchIcon,
  Google,
  Microsoft,
  Amazon,
  Instagram,
  Facebook,
  Tencent,
  Samsung,
} from "../../Utilities/Svgs";
import AliBaba from "../../assets/alibaba.png";
import closeIcon from "../../assets/close-icon.png";
import Card from "./Card";

const techCompaniesData = [
  { logo: <Google />, name: "Google" },
  { logo: <Microsoft />, name: "Microsoft" },
  { logo: <Amazon />, name: "Amazon" },
  { logo: <Instagram />, name: "Instagram" },
  { logo: <Facebook />, name: "Facebook" },
  { logo: AliBaba, name: "Alibaba" },
  { logo: <Tencent />, name: "Tencent" },
  { logo: <Samsung />, name: "Samsung" },
];

const Discover = () => {
  const searchWrapperRef = useRef();
  const containerRef = useRef();
  const [searchBarActive, setSearchBarActive] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [w, setW] = useState(window.innerWidth < 768 ? 49 : 57);

  const handleSearchBarClick = () => {
    setSearchBarActive(true);
  };

  const handleSearchBarCloseClick = (e) => {
    e.stopPropagation();
    setSearchBarActive(false);
    setSearchTerm(""); // Clear search term when closing search bar
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

  const filteredCompanies = techCompaniesData.filter((company) =>
    company.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
          {filteredCompanies.map(({ logo, name }) => (
            <Card key={name} companyLogo={logo} companyName={name} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Discover;
