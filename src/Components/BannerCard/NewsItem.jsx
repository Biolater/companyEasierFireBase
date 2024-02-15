import React from "react";

const NewsItem = ({ img, title, description }) => {
  return (
    <div className="news cursor-pointer transition-all  ease-in-out hover:bg-gray-100 hover:scale-105 bg-opacity-15 py-6 rounded-2xl px-3">
      <img
        className="max-w-60 rounded-2xl mb-4 mx-auto max-h-22 object-cover w-full h-full"
        src={img}
        alt="news img"
      />
      <h1 className="font-bold text-xl max-w-56 mx-auto mb-4">{title}</h1>
      <p className="description">{description}</p>
    </div>
  );
};

export default NewsItem;
