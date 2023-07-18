import HeroCard from "./HeroCard";
import classes from "./CardList.module.css";
import { useEffect, useState } from "react";

function CardList() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("https://pokeapi.co/api/v2/pokemon/?limit=151");
      const jsonData = await response.json();
      setCards(jsonData.results);
    } catch (error) {
      console.log("Error al obtener los datos:", error);
    }
  };

  return (
    <ul className={classes.ul}>
      {cards.map((card) => {
        const index = cards.indexOf(card) + 1;
        return (
          <HeroCard
            key={index}
            heroName={card.name}
            image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
              index
            }.png`}
            heroNumber={index}
          />
        );
      })}
    </ul>
  );
}

export default CardList;
