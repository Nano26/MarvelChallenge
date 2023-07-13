import HeroCard from "./HeroCard";
import classes from './CardList.module.css';

function CardList() {
  return (
    <ul className={classes.ul}>
      <HeroCard heroName="Spider-Man" image="/spiderman.jpg" />
      <HeroCard heroName="Wolverine" image="/wolverine.jpg"/>
      <HeroCard heroName="IronMan" image="/ironman.jpg"/>
      <HeroCard heroName="Deadpool" image="/deadpool.jpg"/>
      <HeroCard heroName="MoonKnight" image="/moonknight.jpg"/>
    </ul>
  );
}

export default CardList;
