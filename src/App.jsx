import React, { useState } from "react";
import {
  Navbar,
  Hero,
  About,
  Discover,
  BannerCard,
  Footer,
  Login,
  SignUp,
} from "./Utilities/Components";
import AboutCompanyPage from "./Components/AboutCompanyPage/AboutCompanyPage";
import { Routes, Route } from "react-router-dom";
const App = () => {
  const [companyDetails, setCompanyDetails] = useState({});
  const handlePathChange = (companyPath, companyLogo, companyLink) => {
    setCompanyDetails((prev) => {
      const newObj = { ...prev };
      newObj.path = companyPath;
      newObj.logo = companyLogo;
      newObj.link = companyLink;
      return newObj;
    });
  };
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Hero />
              <About />
              <Discover
                onButtonSelect={(e) =>
                  handlePathChange(e.companyName, e.companyLogo, e.companyLink)
                }
              />
              <BannerCard />
              <Footer />
            </>
          }
        />
        <Route
          path={`/${companyDetails.path}`}
          element={
            <AboutCompanyPage
              companyName={companyDetails.path}
              companyLogo={companyDetails.logo}
              companyLink={companyDetails.link}
            />
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/signUp" element={<SignUp />} />
      </Routes>
    </>
  );
};

export default App;
