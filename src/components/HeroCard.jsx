import classes from './HeroCard.module.css';

function HeroCard(props) {
  return <div className={classes.card} style={{backgroundImage: `url(${props.image})`}}>
  <button></button>
  <p className={classes.name}>{props.heroName}</p>
  </div>;
}

export default HeroCard;
