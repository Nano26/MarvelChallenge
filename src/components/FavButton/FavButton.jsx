import { FaRegStar, FaStar } from "react-icons/fa";
import classes from "./FavButton.module.css";
import { useContext } from "react";
import { FavContext } from "../../helpers/FavContext";

function FavButton({ favId }) {
  const { favList, addToFavList, removeFromFavList } = useContext(FavContext);
  const handleClick = (favId, event) => {
    event.stopPropagation();
    if (favList?.includes(favId)) {
      removeFromFavList(favId);
    } else {
      addToFavList(favId);
    }
  };
  return (
    <button
      className={classes.favButton}
      onClick={(event) => handleClick(favId, event)}
    >
      {favList?.includes(favId) ? (
        <FaStar style={{ color: "yellow" }} className={classes.star} />
      ) : (
        <FaRegStar className={classes.star} />
      )}
    </button>
  );
}

export default FavButton;
