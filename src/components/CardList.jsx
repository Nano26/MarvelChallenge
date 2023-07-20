import HeroCard from "./HeroCard";
import classes from "./CardList.module.css";
import useApiData from "../hooks/useAPIData";

function CardList() {
  const { data, loading, error } = useApiData(
    "https://pokeapi.co/api/v2/pokemon/?limit=151"
  );

  if (loading) {
    return <p>Cargando...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }
  return (
    <ul className={classes.ul}>
      {data.results.map((card) => {
        const index = data.results.indexOf(card) + 1;
        return (
          <HeroCard
            key={index}
            heroName={card.name}
            image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index}.png`}
            heroNumber={index}
          />
        );
      })}
    </ul>
  );
}

export default CardList;
