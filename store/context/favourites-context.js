import { createContext, useState } from "react";

export const FavoruitesContext = createContext({
  ids: [],
  addFavourite: (id) => {},
  removeFavourite: (id) => {},
});

function FavoruitesContextProvider({ children }) {
  const [favouriteMealIds, setFavouriteMealIds] = useState([]);

  function addFavourite(id) {
    setFavouriteMealIds((currentFavIds) => [...currentFavIds, id]);
  }
  function removeFavourite(id) {
    setFavouriteMealIds((currentFavIds) =>
      currentFavIds.filter((mealId) => mealId !== id)
    );
  }

  const value = {
    ids: favouriteMealIds,
    addFavourite: addFavourite,
    removeFavourite: removeFavourite,
  };

  return (
    <FavoruitesContext.Provider value={value}>
      {children}
    </FavoruitesContext.Provider>
  );
}

export default FavoruitesContextProvider;
