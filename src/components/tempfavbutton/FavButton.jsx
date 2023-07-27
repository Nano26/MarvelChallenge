import { FaRegStar, FaStar } from "react-icons/fa";
import classes from "./FavButton.module.css";
import { useState } from "react";
import { handleChange, checkIsList } from "../../helpers";

function FavButton({ favId }) {
  const [isActive, setIsActive] = useState(checkIsList(favId));
  return (
    <button
      className={classes.favButton}
      onClick={(event) => handleChange(isActive, setIsActive, favId, event)}
    >
      {isActive ? (
        <FaStar style={{ color: "yellow" }} className={classes.star} />
      ) : (
        <FaRegStar className={classes.star} />
      )}
    </button>
  );
}

export default FavButton;
