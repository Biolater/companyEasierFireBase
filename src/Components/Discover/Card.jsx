import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
const Card = ({ companyLogo, companyName, linkToCompany, onButtonSelect }) => {
  const navigate = useNavigate();
  const handleLearnMore = () => {
    navigate(`/${companyName}`);
    onButtonSelect({
      companyName: companyName,
      companyLogo: companyLogo,
      companyLink: linkToCompany,
    });
  };
  return (
    <motion.div drag dragConstraints={{left:0, right:0,top:0,bottom:0}} whileHover={{scale:1.05}}>
      <div className="company-card hover:cursor-grab sm:py-10  transition-transform bg-rgba-black-2 rounded-2xl py-5 backdrop-blur-lg flex flex-col items-center justify-center">
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
