import React from "react";

const NewsItem = ({ title, author, description }) => {
  return (
    <div className="news">
      <h1 className="font-bold text-2xl mb-4">{title}</h1>
      <h2 className="flex font-bold text-xl items-center justify-center">
        Author :
        <p className="ms-2 font-medium text-base">
          {author}
        </p>
      </h2>
      <p className="description">
        {description}
      </p>
    </div>
  );
};

export default NewsItem;
