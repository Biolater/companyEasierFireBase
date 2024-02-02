import React from "react";

const Card = ({ companyLogo, companyName }) => {
  return (
    <div className="company-card sm:py-10 cursor-pointer transition-transform bg-rgba-black-2 rounded-2xl py-5 backdrop-blur-lg flex flex-col items-center justify-center">
      <div className="company-card__logo mb-3 sm:mb-5">
        {React.isValidElement(companyLogo) ? (
          <>{companyLogo}</>
        ) : (
          <img style={{borderRadius : '20px'}} src={companyLogo} alt={companyName} />
        )}
      </div>
      <div className="company-card__info">
        <h3 className="company-card__name text-white font-extrabold sm:text-2xl">{companyName}</h3>
      </div>
    </div>
  );
};

export default Card;
