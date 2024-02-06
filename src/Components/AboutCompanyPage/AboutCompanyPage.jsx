import { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
const apiKey = "sk_f1797393fb176bcd1d77c58766d7f5e5";
const AboutCompanyPage = ({ companyName, companyLogo, companyLink }) => {
  const [aboutCompany, setAboutCompany] = useState({});
  useEffect(() => {
    const enrichCompanyData = async () => {
      try {
        const response = await fetch(
          `https://company.clearbit.com/v2/companies/find?domain=${companyLink}`,
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${apiKey}`,
              "Content-Type": "application/json",
            },
          }
        );

        if (!response.ok) {
          throw new Error(`Failed to fetch company data: ${response.status}`);
        }

        const data = await response.json();

        if (data && data.description && data.tags) {
          setAboutCompany((prev) => {
            const newObj = { ...prev };
            newObj.description = data.description;
            newObj.tags = data.tags.filter((_, idx) => idx < 5);
            return newObj;
          });
        } else {
          throw new Error("Invalid company data format");
        }
      } catch (error) {
        console.error("Error fetching company data:", error);
      }
    };
    enrichCompanyData();
  }, []);
  return aboutCompany.description ? (
    <>
      <Navbar />
      <div className="container mx-auto px-4">
        <div className="companyDetails flex flex-col items-center pt-24">
          <div className="companyDetails__logo p-1 bg-grey-bg rounded-full shadow-2xl w-24 h-24">
            <img src={companyLogo} className="rounded-full" alt="" />
          </div>
          <h3 className="companyDetails__name mt-6 text-2xl font-semibold">
            About {companyName}
          </h3>
          <p className="companyDetails__about text-center mt-3 font-semibold text-xl">
            {aboutCompany.description ? aboutCompany.description : "Loading..."}
          </p>
        </div>
      </div>
    </>
  ) : (
    <div className="flex flex-col gap-5 items-center justify-center min-h-screen">
      <span class="loader"></span>
      <p className="text-2xl font-semibold text-center">Loading...</p>
    </div>
  );
};

export default AboutCompanyPage;
