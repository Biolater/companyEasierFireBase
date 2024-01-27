import { NavbarLogo, NavbarLogoButton } from "../../Utilities/Svgs";
const Navbar = () => {
  return (
    <header>
      <nav className="navbar bg-navy-navbar h-13">
        <div className="container mx-auto px-4 h-full flex justify-between items-center">
          <a href="#" className="navbar__logo">
            <NavbarLogo />
          </a>
          <ul className="navbar__links hidden"></ul>
          <div className="navbar__auth-buttons hidden">
            <button className="navbar__signin-btn">Sign In</button>
            <button className="navbar__signup-btn">Sign Up</button>
          </div>
          <button className="navbar__toggle-button">
            <NavbarLogoButton />
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
