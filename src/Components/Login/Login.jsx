import { NavbarLogo } from "../../Utilities/Svgs";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div className="min-h-screen login w-full flex items-center justify-center">
      <div className="container px-4 mx-auto">
        <div className="login__wrapper   bg-grey-bg">
          <div className="login__left">
            <div className="login__logo  flex p-4 bg-navy">
              <a href="/" className="cursor-pointer">
                <NavbarLogo />
              </a>
            </div>
            <div className="login__body p-4">
              <form className="login__form flex flex-col gap-4">
                <p className="font-bold text-2xl">Welcome Back</p>
                <div className="form__item">
                  <label className="font-semibold" htmlFor="email">
                    Email address
                  </label>
                  <input
                    required
                    type="email"
                    id="email"
                    placeholder="Enter your email address"
                    className="w-full bg-transparent border-b-2 border-y-violet-400 outline-none py-3"
                  />
                </div>
                <div className="form__item">
                  <label className="font-semibold" htmlFor="email">
                    Password
                  </label>
                  <input
                    required
                    type="password"
                    id="password"
                    placeholder="Enter your password"
                    className="w-full bg-transparent border-b-2 border-y-violet-400 outline-none py-3"
                  />
                </div>
                <button
                  type="submit"
                  className="login__button w-full p-3 mt-6 bg-navy rounded text-white"
                >
                  Login
                </button>
              </form>
              <p className="mt-3">
                Don't have an account? <Link to="/signUp"  className="cursor-pointer text-navy font-semibold">Sign up now</Link>
              </p>
            </div>
          </div>
          <div className="login__right"></div>
        </div>
      </div>
    </div>
  );
};

export default Login;
