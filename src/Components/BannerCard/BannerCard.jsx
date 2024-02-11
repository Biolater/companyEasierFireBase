import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const BannerCard = () => {
  return (
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
