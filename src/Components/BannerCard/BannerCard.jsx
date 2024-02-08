const BannerCard = () => {
  return (
    <div id="news" className="bannerCard">
      <div className="container px-4 py-16 mx-auto">
        <h2 className="bannerCard__title  text-4xl text-center font-extrabold mb-6 md:text-5xl ">
          Stay Informed,
          <br></br>
          Sign In Today!
        </h2>
        <div className="bannerCard__wrapper md:max-w-2xl mx-auto mt-6 sm:mt-8 md:mt-12 p-5 text-center rounded-3xl">
          <p className="bannerCard__explanation font-bold text-lg sm:max-w-lg sm:text-xl md:text-2xl mx-auto">
            Get the latest insights and news about companies you love. Sign in
            now to stay informed and make better decisions.
          </p>
          <div className="bannerCard__buttons flex gap-3  justify-center">
            <button className="bg-orange-banner transition-transform active:shadow-2xl hover:scale-105 text-white text-lg py-2 font-semibold mt-3 px-4 rounded-2xl">
              Sign In
            </button>
            <button className="bg-bluish transition-transform active:shadow-2xl hover:scale-105 text-white text-lg py-2 font-semibold mt-3 px-4 rounded-2xl">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerCard;
