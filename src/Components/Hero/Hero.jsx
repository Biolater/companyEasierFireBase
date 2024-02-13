import React from "react";
import { animate, motion } from "framer-motion";
import {
  Google,
  Instagram,
  Snapchat,
  X,
  Pinterest,
  Reddit,
  Spotify,
  Microsoft,
} from "../../Utilities/Svgs";

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen pt-24 overflow-hidden flex items-center pb-10">
      <div className="container px-4 mx-auto">
        <div className="hero__wrapper flex flex-col lg:grid lg:grid-cols-2 lg:items-center lg:gap-7 xl:gap-0 justify-center">
          <motion.div   transition={{ type: "spring", stiffness: 50 }} initial={{x: "-100vw"}} animate={{x:0}}>
            <div className="hero__text-content flex flex-col items-center lg:items-start">
              <h2 className="hero__title text-center lg:text-start text-4.5xl sm:text-5xl sm:max-w-96 sm:mx-auto sm:leading-tight font-extrabold md:max-w-none md:text-6xl md:leading-snug">
                Empower Your <span className="text-navy">Insight</span>.
                Discover <span className="text-bluish">Companies</span>, Stay{" "}
                <span className="text-navy">Informed.</span>
              </h2>
              <a href="#discover" className="bg-bluish transition-transform active:shadow-2xl hover:scale-105 text-white text-lg py-2 font-semibold mt-3 px-4 rounded-2xl">
                Start Now
              </a>
            </div>
          </motion.div>
          <motion.div  transition={{ type: "spring", stiffness: 50 }} initial={{x: "100vw"}} animate={{x:0}}  className="hero__icons inline-grid lg:hidden gap-6 mt-10 grid-cols-4 items-center">
            {[
              Google,
              Instagram,
              Snapchat,
              X,
              Pinterest,
              Reddit,
              Spotify,
              Microsoft,
            ].map((Icon, index) => (
              <div
                key={index}
                className="hero__icon flex justify-center items-center cursor-pointer"
              >
                <Icon />
              </div>
            ))}
          </motion.div>
          <motion.div  transition={{ type: "spring", stiffness: 50 }} initial={{x: "100vw"}} animate={{x:0}} className="hero-image hidden lg:block lg:w-3/4 ms-auto">
            <img
              className="rounded-xl"
              src="https://prompts.aituts.com/images/illustration/detailed-tech-brand-illustrations/user%20being%20inspired%20by%20the%20possibilities%20of%20an%20app,%20illustration%20for%20a%20tech%20company,%20by%20slack%20and%20dropbox,%20style%20of%20behance%20.webp"
              alt=""
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
