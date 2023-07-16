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
  return (
    <>
      {modalIsVisible ? <ComicsList onClick={hideModalHandler} /> : null}
      <div
        onClick={hideModalHandler}
        className={classes.card}
        style={{ backgroundImage: `url(${props.image})` }}
      >
        <div className={classes.div}>
          <FavButton />
        </div>
        <p className={classes.name}>{props.heroName}</p>
      </div>
    </>
  );
}

export default HeroCard;
