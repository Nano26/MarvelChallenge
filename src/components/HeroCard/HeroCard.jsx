import classes from "./HeroCard.module.css";
import FavButton from "../FavButton/FavButton";
import ComicsList from "../ComicsList/ComicsList";
import { useState } from "react";

function HeroCard({ heroName, heroId, image }) {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  function hideModalHandler() {
    if (modalIsVisible) {
      setModalIsVisible(false);
      return;
    }
    setModalIsVisible(true);
  }
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  return (
    <>
      {modalIsVisible ? (
        <ComicsList
          title={heroName}
          onClick={hideModalHandler}
          heroId={heroId}
        />
      ) : null}
      <div
        onClick={hideModalHandler}
        className={classes.card}
      >
        <img
          src={`${image}`}
          alt="Imagen de Fondo"
          className={classes.backgroundImage}
        />
        <div className={classes.div}>
          <FavButton favId={`favorite_${heroId}`} />
        </div>
        <p className={classes.name}>{capitalizeFirstLetter(heroName)}</p>
      </div>
    </>
  );
}

export default HeroCard;
