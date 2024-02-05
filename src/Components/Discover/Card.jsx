import React from "react";

const Card = ({ companyLogo, companyName, linkToCompany }) => {
  return (
    <div className="company-card sm:py-10 cursor-pointer transition-transform bg-rgba-black-2 rounded-2xl py-5 backdrop-blur-lg flex flex-col items-center justify-center">
      {companyLogo && (
        <div className="company-card__logo mb-3 sm:mb-5">
          <img src={companyLogo} alt="" />
        </div>
      )}
      <div className="company-card__info text-center">
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
      </div>
    </div>
  );
};

export default Card;
