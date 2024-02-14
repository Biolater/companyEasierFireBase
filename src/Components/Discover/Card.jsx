import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaRegBookmark, FaBookmark } from "react-icons/fa";
import { motion } from "framer-motion";
import { useAuth } from "../../contexts/authContext";
import { useFavoriteCompanies } from "../../contexts/FavContext/FavContext";
import axios from "axios";
const Card = ({ companyLogo, companyName, linkToCompany, onButtonSelect }) => {
  const { favoriteCompaniesGlobal, setFavoriteCompaniesGlobally } =
    useFavoriteCompanies();
  const [isFavorite, setIsFavorite] = useState(false);
  useEffect(() => {
    const isAlreadyFavorite = favoriteCompaniesGlobal.some(
      (item) => item.companyName === companyName
    );
    setIsFavorite(isAlreadyFavorite);
  }, [favoriteCompaniesGlobal, companyName]);

  const handleFavorite = async (companyName) => {
    if (isFavorite) {
      setFavoriteCompaniesGlobally((prev) => {
        return prev.filter((company) => company.companyName !== companyName);
      });
    } else {
      setFavoriteCompaniesGlobally((prev) => {
        return [...prev, { companyName, news: null }];
      });

      try {
        const response = await axios.get(
          `https://newsapi.org/v2/everything?q=${companyName}&pageSize=1&apiKey=d504c64eeb594151ae4dc4323dee1d1d`
        );
        const news = response.data;

        setFavoriteCompaniesGlobally((prev) => {
          return prev.map((company) =>
            company.companyName === companyName ? { ...company, news } : company
          );
        });
      } catch (error) {
        console.error(error);
      }
    }
  };

  const { userLoggedIn } = useAuth();

  const navigate = useNavigate();
  const handleLearnMore = () => {
    navigate(`/${companyName}`);
    onButtonSelect({
      companyName: companyName,
      companyLogo: companyLogo,
      companyLink: linkToCompany,
    });
  };
  const isNotFavorite = !favoriteCompaniesGlobal.some(
    (item) => item.companyName === companyName
  );
  return (
    <motion.div
      className="md:max-w-64 relative"
      drag
      dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
      whileHover={{ scale: 1.05 }}
    >
      <div
        title={`${
          isNotFavorite
            ? "Add this company to your favorites"
            : "Remove this company from your favorites"
        }`}
        className="favorite absolute z-20 text-white top-3 right-5 cursor-pointer"
      >
        {userLoggedIn ? (
          <p>
            {" "}
            {isNotFavorite ? (
              <FaRegBookmark
                onClick={() => handleFavorite(companyName)}
                className="text-xl sm:text-4xl -z-10  md:text-3xl"
              />
            ) : (
              <FaBookmark
                className="text-xl sm:text-4xl  md:text-3xl"
                onClick={() => handleFavorite(companyName)}
              />
            )}
          </p>
        ) : null}
      </div>
      <div className="company-card  hover:cursor-grab sm:py-10  transition-transform bg-rgba-black-2 rounded-2xl py-5 backdrop-blur-lg flex flex-col items-center justify-center">
        {companyLogo && (
          <div className="company-card__logo mb-3 sm:mb-5">
            <img src={companyLogo} alt="" />
          </div>
        )}
        <div className="company-card__info flex flex-col items-center text-center">
          {companyName && (
            <h3 className="company-card__name text-white font-extrabold sm:text-2xl">
              {companyName}
            </h3>
          )}
          {linkToCompany ? (
            <a
              href={`https://${linkToCompany}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500"
            >
              Visit Company Website
            </a>
          ) : (
            <p className="text-red-500">Company not found</p>
          )}
          {linkToCompany && (
            <a
              onClick={handleLearnMore}
              className="about-company cursor-pointer block mt-3 text-white text-lg font-semibold bg-bluish py-2 px-4 rounded border-transparent border-2 transition hover:bg-transparent hover:border-bluish active:scale-90 shadow-2xl"
            >
              Learn More
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default Card;
