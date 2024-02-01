import { SearchIcon } from "../../Utilities/Svgs";
import closeIcon from "../../assets/close-icon.png";
import Card from "./Card";
import { useState } from "react";
import {
  Google,
  Microsoft,
  Amazon,
  Instagram,
  Facebook,
  Tencent,
  Samsung,
} from "../../Utilities/Svgs";
import AliBaba from "../../assets/alibaba.png";
const Discover = () => {
  const techCompanies = [
    {
      logo: <Google />,
      name: "Google",
    },
    {
      logo: <Microsoft />,
      name: "Microsoft",
    },
    {
      logo: <Amazon />,
      name: "Amazon",
    },
    {
      logo: <Instagram />,
      name: "Instagram",
    },
    {
      logo: <Facebook />,
      name: "Facebook",
    },
    {
      logo: AliBaba,
      name: "Alibaba",
    },
    {
      logo: <Tencent />,
      name: "Tencent",
    },
    {
      logo: <Samsung />,
      name: "Samsung",
    },
  ];
  const [searchBarActive, setSearchBarActive] = useState(false);
  const handleSearchBarClick = () => {
    setSearchBarActive((prev) => !prev);
  };

  return (
    <section id="discover">
      <div className="container flex flex-col mx-auto py-16 px-4">
        <h2 className="discover__title text-4xl text-center font-extrabold mb-6 md:text-5xl ">
          Discover Companies
        </h2>
        <div onClick={handleSearchBarClick} className={`search-bar transition-all ${searchBarActive ? "mx-auto w-80 rounded-md" : "w-16 mx-auto cursor-pointer justify-center rounded-full"}  mb-4  px-4 py-5 bg-grey-bg flex items-center`}>
          <div className={`left flex items-center ${searchBarActive && "gap-3"}`}>
            <div className={`search-icon ${searchBarActive && "cursor-pointer"}`}>
              <SearchIcon />
            </div>
            <div className={`search-input transition-opacity ${searchBarActive ? "block w-auto opacity-100" : "w-0 opacity-0 pointer-events-none"}`}>
              <input
                type="text"
                placeholder="Search for a company"
                className="bg-transparent outline-none"
              />
            </div>
          </div>
          <div onClick={() => setSearchBarActive(false)} className={`search-bar__close ${searchBarActive ? "block cursor-pointer" : "hidden"}  cursor-pointer`}>
            <img src={closeIcon} alt="close Icon" />
          </div>
        </div>
        <div className="cards grid grid-cols-2 gap-4">
          {techCompanies.map((_, idx) => (
            <Card
              companyLogo={techCompanies[idx].logo}
              companyName={techCompanies[idx].name}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Discover;
