import React, { createContext, useState } from "react";

const FavContext = createContext();

const FavProvider = ({ children }) => {
  const [favList, setFavList] = useState([]);

  const addToFavList = (itemId) => {
    setFavList((prevList) => [...prevList, itemId]);
    localStorage.setItem("favList", JSON.stringify([...favList, itemId]));
  };

  const removeFromFavList = (itemId) => {
    setFavList((prevList) => prevList.filter((id) => id !== itemId));
    const newFavList = favList.filter((elem) => elem.id !== itemId);
    localStorage.setItem("favList", JSON.stringify(newFavList));
  };

  return (
    <FavContext.Provider value={{ favList, addToFavList, removeFromFavList }}>
      {children}
    </FavContext.Provider>
  );
};

export { FavContext, FavProvider };
