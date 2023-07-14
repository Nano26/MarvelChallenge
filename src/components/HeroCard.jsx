import classes from "./HeroCard.module.css";
import FavButton from "./FavButton";

function HeroCard(props) {
  return (
    <div
      className={classes.card}
      style={{ backgroundImage: `url(${props.image})` }}
    >
      <div className={classes.div}>
        <FavButton />
      </div>
      <p className={classes.name}>{props.heroName}</p>
    </div>
  );
}

export default HeroCard;
