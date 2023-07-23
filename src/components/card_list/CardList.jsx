import HeroCard from "../hero_card/HeroCard";
import classes from "./CardList.module.css";
import useApiData from "../../hooks/useAPIData";

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
  // Transformar los objetos de data.results para incluir la propiedad "id" desde la URL
  const cardsWithData = data.results.map((card) => {
    const id = card.url.split("/").slice(-2, -1)[0]; // Extraer el "id" desde la URL
    return {
      id,
      name: card.name,
    };
  });
  const favData = cardsWithData;
  const randomizeData = cardsWithData.sort(() => Math.random() - 0.5);
  const randomDataSubset = randomizeData.slice(0, 8);
  return (
    <ul className={classes.ul}>
      {JSON.parse(localStorage.getItem("header"))
        ? favData.map((favCard) => {
            if (JSON.parse(localStorage.getItem(`favorite_${favCard.id}`))) {
             return <HeroCard
                key={favCard.id}
                heroName={favCard.name}
                image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${favCard.id}.png`}
                heroId={favCard.id}
              />;
            }
          })
        : randomDataSubset.map((card) => (
            <HeroCard
              key={card.id}
              heroName={card.name}
              image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${card.id}.png`}
              heroId={card.id}
            />
          ))}
    </ul>
  );
}

export default CardList;
