import { FaRegTimesCircle } from "react-icons/fa";
import Modal from "../modal/Modal";
import classes from "./ComicsList.module.css";
import useApiData from "../../hooks/useAPIData";

function ComicsList({ title, heroId, onClick }) {
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const { data, loading, error } = useApiData(
    `https://pokeapi.co/api/v2/pokemon/${title}`
  );

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <Modal onClose={onClick}>
      <div className={classes.container}>
        {loading ? (
          <h1>Cargando...</h1>
        ) : (
          <>
            <button className={classes.button} onClick={onClick}>
              <FaRegTimesCircle />
            </button>
            <h1>{capitalizeFirstLetter(title)}</h1>
            <img
              className={classes.img}
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${heroId}.svg`}
              alt="Pokemon Image"
            />
            <h2>Estadisticas base</h2>
            <ul className={classes.ul}>
              {data.stats.map((e, index) => {
                return (
                  <li key={index}>
                    {e.stat.name} : {e.base_stat}
                  </li>
                );
              })}
            </ul>
          </>
        )}
      </div>
    </Modal>
  );
}

export default ComicsList;
