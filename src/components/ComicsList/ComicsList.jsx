import { FaRegTimesCircle } from "react-icons/fa";
import Modal from "../modal/Modal";
import classes from "./ComicsList.module.css";
import useApiData from "../../hooks/useApiData";

function ComicsList({ title, heroId, onClick }) {
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const { data, loading, error } = useApiData(
    `http://gateway.marvel.com/v1/public/characters/${heroId}/comics?ts=1000&apikey=2d1f3ca2aae6e7d1dcf286943ea83e71&hash=30cb45c0b67c40153deb047e87c44d44`
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
            <h2>Comics</h2>
            <ul className={classes.ul}>
              {data.data.results.map((e, index) => {
                return (
                  <li key={index}>
                    {e.title}
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
