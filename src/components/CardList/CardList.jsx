import { FavContext } from "../../helpers/FavContext";
import HeroCard from "../HeroCard/HeroCard";
import classes from "./CardList.module.css";
import { useContext } from "react";

function CardList({ isHeaderActive, objects, searchText }) {
  const { favList } = useContext(FavContext);
  const filteredComics = objects.filter(
    (hero) => hero.name.toLowerCase().includes(searchText.toLowerCase())
    //  || hero.comics.items.some((comic) =>
    //   comic.name.toLowerCase().includes(searchText.toLowerCase())
    // )
  );

  const cardsWithData = filteredComics;
  const favData = cardsWithData;
  const randomizeData = cardsWithData.sort(() => Math.random() - 0.5);
  const randomDataSubset = randomizeData.slice(0, 8);

  const contentFavToRender =
    favList?.length === 0 ? (
      <p>There are no favorite heroes</p>
    ) : (
      favData.map((favCard) => {
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
    );
  const contentToRender =
    randomDataSubset?.length === 0 ? (
      <p>Our system does not find any hero or comic with that title</p>
    ) : (
      randomDataSubset.map((card) => (
        <HeroCard
          key={card.id}
          heroName={card.name}
          image={`${card.thumbnail.path}.${card.thumbnail.extension}`}
          heroId={card.id}
        />
      ))
    );
  return (
    <ul className={classes.ul}>
      {isHeaderActive ? contentFavToRender : contentToRender}
    </ul>
  );
}

export default CardList;
