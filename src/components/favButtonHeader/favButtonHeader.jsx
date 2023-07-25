import { FaRegStar, FaStar } from "react-icons/fa";
import classes from "./FavButtonHeader.module.css";
import { handleChangeHeader } from "../../helpers";

function FavButtonHeader({ isHeaderActive, setHeaderActive }) {
  return (
    <button
      className={classes.favButton}
      onClick={() => handleChangeHeader(isHeaderActive, setHeaderActive)}
    >
      {isHeaderActive ? (
        <FaStar style={{ color: "yellow" }} className={classes.star} />
      ) : (
        <FaRegStar className={classes.star} />
      )}
    </button>
  );
}

export default FavButtonHeader;
