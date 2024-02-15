import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/authContext";
import { useFavoriteCompanies } from "../../contexts/FavContext/FavContext";
import NewsItem from "./NewsItem";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import { useState, useEffect } from "react";
const BannerCard = () => {
  const { favoriteCompaniesGlobal } = useFavoriteCompanies();
  const { userLoggedIn } = useAuth();
  const [slidesPerView, setSlidesPerView] = useState(1);
  const [currentWidth, setCurrentWidth] = useState(window.innerWidth);
  useEffect(() => {
    const updateWidth = () => {
      setCurrentWidth(window.innerWidth);
    };
    window.addEventListener("resize", updateWidth);
    if (currentWidth < 768) {
      setSlidesPerView(1);
    } else {
      setSlidesPerView(2);
    }
    return () => window.removeEventListener("resize", updateWidth);
  }, [slidesPerView, currentWidth]);
  return userLoggedIn ? (
    <div className="container py-16 px-4 mx-auto text-center">
      {favoriteCompaniesGlobal.length > 0 ? (
        <>
          <h1 className="text-4xl text-center font-extrabold py-16 md:text-5xl md:max-w-3xl mx-auto ">
            Here are the latest news about your favorite companies
          </h1>
          <Swiper
            spaceBetween={30}
            slidesPerView={slidesPerView}
            loop={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            navigation={true}
            modules={[Autoplay, Navigation]}
            className="mySwiper"
          >
            {favoriteCompaniesGlobal.map((company, index) => {
              if (
                company.news &&
                company.news.articles &&
                company.news.articles.length > 0
              ) {
                const article = company.news.articles[0];
                if (article.image && article.title && article.description) {
                  return (
                    <SwiperSlide key={company.id || index}>
                      <NewsItem
                        img={article.image}
                        title={article.title}
                        description={article.description}
                      />
                    </SwiperSlide>
                  );
                } else {
                  return (
                    <p key={company.id || index}>
                      News article missing some information
                    </p>
                  );
                }
              } else {
                return (
                  <p key={company.id || index}>
                    Couldn't find any news about {company.companyName}
                  </p>
                );
              }
            })}
          </Swiper>
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
