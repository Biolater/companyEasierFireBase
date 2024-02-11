import React, { useState, useEffect } from "react";
import { NavbarLogo } from "../../Utilities/Svgs";
import { Link, useNavigate } from "react-router-dom";
import loginImg from "../../assets/loginBg.png";
import { doSignInWithEmailAndPassword, doSignInWithGoogle } from "../../auth";
import { useAuth } from "../../contexts/authContext/index";

const Login = () => {
  const { userLoggedIn } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSigningIn, setIsSigningIn] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!isSigningIn) {
      try {
        setIsSigningIn(true);
        await doSignInWithEmailAndPassword(email, password);
        // Redirect after successful login
        navigate("/", { replace: true });
      } catch (error) {
        setError(error.message);
      }
    }
  };

  const onGoogleSignIn = async (e) => {
    e.preventDefault();
    if (!isSigningIn) {
      try {
        setIsSigningIn(true);
        await doSignInWithGoogle();
        // Redirect after successful login
        navigate("/", { replace: true });
      } catch (error) {
        setError(error.message);
      }
    }
  };
  useEffect(() => {
    // Redirect after successful login
    if (userLoggedIn) {
      navigate("/", { replace: true });
    }
  }, [userLoggedIn, navigate]);

  return (
    <div className="min-h-screen login w-full flex items-center justify-center">
      <div className="container px-4 mx-auto">
        <div className="login__wrapper max-w-6xl mx-auto lg:py-4 rounded-lg lg:flex items-center bg-grey-bg">
          <div className="login__left lg:flex flex-col item  flex-1">
            <div className="login__logo rounded-ss-lg rounded-se-lg  p-4 bg-navy lg:bg-opacity-75 lg:backdrop-blur-xl   self-center lg:rounded">
              <a href="/" className="cursor-pointer">
                <NavbarLogo />
              </a>
            </div>
            <div className="login__body p-4 md:p-6 lg:p-8">
              <form
                className="login__form flex flex-col gap-4"
                onSubmit={handleLogin}
              >
                <p className="font-bold text-2xl lg:text-4xl lg:mt-4">
                  Welcome Back
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
                  <label className="font-semibold" htmlFor="password">
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
                  className="login__button w-full p-3 mt-6 bg-navy rounded text-white"
                >
                  Login
                </button>
                <button
                  type="submit"
                  onClick={(e) => onGoogleSignIn(e)}
                  className="google__loginButton w-full p-3  bg-red-500 rounded text-white"
                >
                  Login with Google
                </button>
              </form>
              <p className="mt-3">
                Don't have an account?{" "}
                <Link
                  to="/signUp"
                  className="cursor-pointer text-navy font-semibold"
                >
                  Sign up now
                </Link>
              </p>
              {error && <p className="text-red-500 mt-2">{error}</p>}
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

export default Login;
