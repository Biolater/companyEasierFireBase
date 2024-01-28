import { Google, Instagram, Snapchat, X, Pinterest, Reddit, Spotify, Microsoft } from "../../Utilities/Svgs"

const Hero = () => {
  return (
    <section id="hero" className="h-screen">
      <div className="container px-4 pt-24 mx-auto">
        <div className="hero__wrapper">
          <h2 className="hero__title text-center text-4.5xl font-extrabold">
            Empower Your <span className="text-navy">Insight</span>. Discover{" "}
            <span className="text-bluish">Companies</span>, Stay <span className="text-navy">Informed.</span>
          </h2>
          <div className="hero__icons inline-grid gap-6 mt-10 grid-cols-4 items-center">
            <div className="hero__icon flex justify-center items-center cursor-pointer">
              <Google />
            </div>
            <div className="hero__icon flex justify-center items-center cursor-pointer">
              <Instagram />
            </div>
            <div className="hero__icon flex justify-center items-center cursor-pointer">
              <Snapchat />
            </div>
            <div className="hero__icon flex justify-center items-center cursor-pointer">
              <X />
            </div>
            <div className="hero__icon flex justify-center items-center cursor-pointer">
              <Pinterest />
            </div>
            <div className="hero__icon flex justify-center items-center cursor-pointer">
              <Reddit />
            </div>
            <div className="hero__icon flex justify-center items-center cursor-pointer">
              <Spotify />
            </div>
            <div className="hero__icon flex justify-center items-center cursor-pointer">
              <Microsoft />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
