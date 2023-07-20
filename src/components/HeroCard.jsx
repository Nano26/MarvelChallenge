import classes from "./HeroCard.module.css";
import FavButton from "./FavButton";
import ComicsList from "./ComicsList";
import { useState } from "react";

function HeroCard(props) {
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
          title={props.heroName}
          onClick={hideModalHandler}
          heroNumber={props.heroNumber}
        />
      ) : null}
      <div
        onClick={hideModalHandler}
        className={classes.card}
        style={{ backgroundImage: `url(${props.image})` }}
      >
        <div className={classes.div}>
          <FavButton favId={`favorite_${props.heroNumber}`} />
        </div>
        <p className={classes.name}>{capitalizeFirstLetter(props.heroName)}</p>
      </div>
    </>
  );
}

export default HeroCard;
