import HeroCard from "../hero_card/HeroCard";
import classes from "./CardList.module.css";
import useApiData from "../../hooks/useAPIData";

import { useEffect, useState } from "react";

function CardList({ isHeaderActive }) {
  const [favList, setFavList] = useState(
    JSON.parse(localStorage.getItem("favList")) || []
  );
  useEffect(() => {
    console.log("99");
    const handleLocalStorageChange = (event) => {
      console.log("event.key", event.key);
      if (event.key === "favList") {
        setFavList(JSON.parse(localStorage.getItem("favList")) || []);
      }
    };

    window.addEventListener("storage", handleLocalStorageChange);

    return () => {
      window.removeEventListener("storage", handleLocalStorageChange);
    };
  }, []);
  const { data, loading, error } = useApiData(
    "http://gateway.marvel.com/v1/public/characters?ts=1000&apikey=2d1f3ca2aae6e7d1dcf286943ea83e71&hash=30cb45c0b67c40153deb047e87c44d44"
  );

  if (loading) {
    return <p>Cargando...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }
  // Transformar los objetos de data.results para incluir la propiedad "id" desde la URL
  const cardsWithData = data.data.results;
  const favData = cardsWithData;
  const randomizeData = cardsWithData.sort(() => Math.random() - 0.5);
  const randomDataSubset = randomizeData.slice(0, 8);
  return (
    <ul className={classes.ul}>
      {isHeaderActive
        ? favData.map((favCard) => {
            if (favList?.includes(`favorite_${favCard.id}`)) {
              const imageUrl = `${favCard.thumbnail.path}.${favCard.thumbnail.extension}`;
              return (
                <HeroCard
                  key={favCard.id}
                  heroName={favCard.name}
                  image={imageUrl}
                  heroId={favCard.id}
                />
              );
            }
          })
        : randomDataSubset.map((card) => (
            <HeroCard
              key={card.id}
              heroName={card.name}
              image={`${card.thumbnail.path}.${card.thumbnail.extension}`}
              heroId={card.id}
            />
          ))}
    </ul>
  );
}

export default CardList;
