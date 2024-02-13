import axios from "axios";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../../contexts/authContext";
import { useFavoriteCompanies } from "../../contexts/FavContext/FavContext";
const BannerCard = () => {
  const { favoriteCompaniesGlobal } = useFavoriteCompanies();
  const { userLoggedIn } = useAuth();
  const [news, setNews] = useState([]);
  useEffect(() => {
    if (userLoggedIn && favoriteCompaniesGlobal.length > 0) {
      favoriteCompaniesGlobal.forEach((company) => {
        axios
          .get(
            `https://newsapi.org/v2/everything?q=${company.companyName}&pageSize=1&apiKey=d504c64eeb594151ae4dc4323dee1d1d
            `
          )
          .then((response) => {
            setNews((prev) => [...prev, response.data.articles[0]]);
            console.log(news);
          });
      });
    }
  }, [userLoggedIn, favoriteCompaniesGlobal]);
  return userLoggedIn ? (
    <div className="container px-4 mx-auto text-center">
      {favoriteCompaniesGlobal.length > 0 ? (
        <>
          <h1 className="text-4xl text-center font-extrabold py-16 md:text-5xl md:max-w-3xl mx-auto ">
            Here are the latest news about your favorite companies
          </h1>
          {favoriteCompaniesGlobal.map((company, index) => {
            return <p key={index}>{company.companyName}</p>;
          })}
        </>
      ) : (
        <h1 className="text-4xl text-center font-extrabold py-16 md:text-5xl md:max-w-3xl mx-auto ">
          Add your favorite companies now to get news about them
        </h1>
      )}
    </div>
  ) : (
    <div id="news" className="bannerCard overflow-hidden">
      <div className="container px-4 py-16 mx-auto">
        <motion.h2
          transition={{ duration: 0.5, delay: 0.2 }}
          initial={{ y: -64, opacity: 0 }}
          viewport={{ once: true }}
          whileInView={{ y: 0, opacity: 1 }}
          className="bannerCard__title  text-4xl text-center font-extrabold mb-6 md:text-5xl "
        >
          Stay Informed,
          <br></br>
          Sign In Today!
        </motion.h2>
        <motion.div
          drag
          dragConstraints={{ left: 0, top: 0, right: 0, bottom: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          initial={{ y: -40, opacity: 0 }}
          viewport={{ once: true }}
          whileInView={{ y: 0, opacity: 1 }}
          className="bannerCard__wrapper md:max-w-2xl mx-auto mt-6 sm:mt-8 md:mt-12 p-5 text-center rounded-3xl"
        >
          <p className="bannerCard__explanation font-bold text-lg sm:max-w-lg sm:text-xl md:text-2xl mx-auto">
            Get the latest insights and news about companies you love. Sign in
            now to stay informed and make better decisions.
          </p>
          <div className="bannerCard__buttons flex gap-3 justify-center">
            <>
              <Link
                to="/login"
                className="bg-orange-banner transition-transform active:shadow-2xl hover:scale-105 text-white text-lg py-2 font-semibold mt-3 px-4 rounded-2xl"
              >
                Sign In
              </Link>
              <Link
                to="/signUp"
                className="bg-bluish transition-transform active:shadow-2xl hover:scale-105 text-white text-lg py-2 font-semibold mt-3 px-4 rounded-2xl"
              >
                Sign Up
              </Link>
            </>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default BannerCard;
