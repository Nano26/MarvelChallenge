import { FaRegStar, FaStar } from "react-icons/fa";
import classes from "./FavButton.module.css";
import useButtonState from "../hooks/useButtonState";

function FavButton(props) {
  const pressed = useButtonState(false, props.favId);
  return (
    <button className={classes.favButton} onClick={pressed.handleButtonClick}>
      {pressed.isActive ? (
        <FaStar style={{ color: "yellow" }} className={classes.star} />
      ) : (
        <FaRegStar className={classes.star} />
      )}
    </button>
  );
}

export default FavButton;
