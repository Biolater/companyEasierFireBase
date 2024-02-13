import { useState, createContext, useContext, useEffect } from "react";
const FavoriteCompaniesContext = createContext();

export const useFavoriteCompanies = () => {
  return useContext(FavoriteCompaniesContext);
};

export const FavContext = ({ children }) => {
  const [favoriteCompaniesGlobal, setFavoriteCompaniesGlobally] = useState(
    JSON.parse(localStorage.getItem("favoriteCompanies")) || []
  );

  useEffect(() => {
    localStorage.setItem(
      "favoriteCompanies",
      JSON.stringify(favoriteCompaniesGlobal)
    );
  }, [favoriteCompaniesGlobal]);

  return (
    <FavoriteCompaniesContext.Provider
      value={{ favoriteCompaniesGlobal, setFavoriteCompaniesGlobally }}
    >
      {children}
    </FavoriteCompaniesContext.Provider>
  );
};
