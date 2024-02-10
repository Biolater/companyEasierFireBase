import React, { useState } from "react";
import { NavbarLogo } from "../../Utilities/Svgs";
import { Link, useNavigate } from "react-router-dom";
import Axios from "axios";
import loginImg from "../../assets/loginBg.png"
const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();

    try {
      const response = await Axios.post("http://localhost:3001/api/signUp", {
        email,
        password,
      });

      console.log("User registered:", response.data.user);

      // Clear previous error messages on successful registration
      setErrorMessage(null);

      // Navigate to login page after successful registration
      navigate("/login");
    } catch (error) {
      console.error("Registration failed:", error.response.data.error);

      // Set the error message state for display
      setErrorMessage(error.response.data.error);
    }
  };

  return (
    <div className="min-h-screen login w-full flex items-center justify-center">
      <div className="container px-4 mx-auto">
        <div className="signUp__wrapper  max-w-6xl mx-auto lg:py-4 rounded-lg lg:flex items-center bg-grey-bg">
          <div className="signUp__left lg:flex flex-col item  flex-1">
            <div className="signUp__logo rounded-ss-lg rounded-se-lg  p-4 bg-navy lg:bg-opacity-75 lg:backdrop-blur-xl  self-center lg:rounded">
              <Link to="/" className="cursor-pointer">
                <NavbarLogo />
              </Link>
            </div>
            <div className="signUp__body p-4 md:p-6 lg:p-8">
              <form className="signUp__form flex flex-col gap-4" onSubmit={handleSignUp}>
                <p className="font-bold text-2xl lg:text-4xl lg:mt-4">
                  Create Account
                </p>
                <div className="form__item">
                  <label className="font-semibold" htmlFor="email">
                    Email address
                  </label>
                  <input
                    required
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
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
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                    className="w-full bg-transparent border-b-2 border-y-violet-400 outline-none py-3"
                  />
                </div>
                <button
                  type="submit"
                  className="signUp__button w-full p-3 mt-6 bg-navy rounded text-white"
                >
                  Create Account
                </button>
              </form>
              <p className="mt-3">
                Already have an account?{" "}
                <Link
                  to="/login"
                  className="cursor-pointer text-navy font-semibold"
                >
                  Login Now
                </Link>
              </p>
              {/* Display error message if registration fails */}
              {errorMessage && (
                <p className="text-red-500 mt-2">{errorMessage}</p>
              )}
            </div>
          </div>
          <div className="login__right hidden max-w-lg lg:block flex-1">
            <img src={loginImg} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
