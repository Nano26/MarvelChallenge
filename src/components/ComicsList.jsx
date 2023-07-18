import { useEffect, useState } from "react";
import { FaRegTimesCircle } from "react-icons/fa";
import Modal from "./Modal";
import classes from "./ComicsList.module.css";

function ComicsList(props) {
  const [moves, setMoves] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${props.title}`
      );
      const jsonData = await response.json();
      setMoves(jsonData.stats);
    } catch (error) {
      console.log("Error al obtener los datos:", error);
    }
  };
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  return (
    <Modal onClose={props.onClick}>
      <div className={classes.container}>
        <button className={classes.button} onClick={props.onClick}>
          <FaRegTimesCircle />
        </button>
        <h1>{capitalizeFirstLetter(props.title)}</h1>
        <img className={classes.img} src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${props.heroNumber}.svg`} alt="Pokemon Image" />
        <h2>Estadisticas base</h2>
        <ul className={classes.ul}>
          {moves.map((e, index) => {
            return <li key={index}>{e.stat.name} :  {e.base_stat}</li>;
          })}
        </ul>
      </div>
    </Modal>
  );
}

export default ComicsList;
