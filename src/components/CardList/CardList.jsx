import HeroCard from "../HeroCard/HeroCard";
import classes from "./CardList.module.css";
import { useEffect, useState } from "react";

function CardList({ isHeaderActive, objects, searchText }) {
  console.log("1");
  const [favList, setFavList] = useState(
    JSON.parse(localStorage.getItem("favList")) || []
  );
  useEffect(() => {
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

  const filteredComics = objects.filter(
    (hero) =>
      hero.name.toLowerCase().includes(searchText.toLowerCase()) ||
      hero.comics.items.some((comic) =>
        comic.name.toLowerCase().includes(searchText.toLowerCase())
      )
  );

  const cardsWithData = filteredComics;
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
