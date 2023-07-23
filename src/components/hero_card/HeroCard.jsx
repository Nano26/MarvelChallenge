import classes from "./HeroCard.module.css";
import FavButton from "../favbutton/FavButton";
import ComicsList from "../comics_list/ComicsList";
import { useState } from "react";

function HeroCard({heroName, heroId, image}) {
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
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className={classes.div}>
          <FavButton favId={`favorite_${heroId}`} />
        </div>
        <p className={classes.name}>{capitalizeFirstLetter(heroName)}</p>
      </div>
    </>
  );
}

export default HeroCard;
