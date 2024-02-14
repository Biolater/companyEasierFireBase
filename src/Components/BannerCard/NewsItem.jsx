import React from "react";

const NewsItem = ({ img, title, description }) => {
  return (
    <div className="news">
      <img
        className="max-w-80 mb-4 mx-auto max-h-22 object-cover w-full h-full"
        src={img}
        alt="news img"
      />
      <h1 className="font-bold text-2xl mb-4">{title}</h1>
      <p className="description">{description}</p>
    </div>
  );
};

export default NewsItem;
