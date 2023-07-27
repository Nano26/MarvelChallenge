import { FaRegTimesCircle } from "react-icons/fa";
import Modal from "../tempmodal/Modal";
import classes from "./ComicsList.module.css";
import useApiData from "../../hooks/useApiData";
import { Link } from "react-router-dom";

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
            <h1 className={classes.title}>{capitalizeFirstLetter(title)}</h1>
            <ul className={classes.ul}>
              {data.data.results.map((e, index) => {
                return (
                  <div key={index} className={classes.listItem}>
                    <img
                      className={classes.img}
                      src={`${e.thumbnail.path}.${e.thumbnail.extension}`}
                      alt="Portada de comics"
                    />
                    <div>
                      <Link to={`/comic/${e.id}`}>{e.title}</Link>
                      <p className={classes.desc}>{e.description}</p>
                    </div>
                  </div>
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
