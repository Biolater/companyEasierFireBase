import { useState, createContext, useContext, useEffect } from "react";
const FavoriteCompaniesContext = createContext();

export const useFavoriteCompanies = () => {
  return useContext(FavoriteCompaniesContext);
};

export const FavContext = ({ children, userId }) => {
  const [favoriteCompaniesGlobal, setFavoriteCompaniesGlobally] = useState(
    userId
      ? JSON.parse(localStorage.getItem(`favoriteCompanies_${userId}`)) || []
      : []
  );

  useEffect(() => {
    if (userId) {
      localStorage.setItem(
        `favoriteCompanies_${userId}`,
        JSON.stringify(favoriteCompaniesGlobal)
      );
    }
  }, [favoriteCompaniesGlobal, userId]);

  return (
    <FavoriteCompaniesContext.Provider
      value={{ favoriteCompaniesGlobal, setFavoriteCompaniesGlobally }}
    >
      {children}
    </FavoriteCompaniesContext.Provider>
  );
};
