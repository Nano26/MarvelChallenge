import React, { useState } from "react";
import { FaRegStar, FaStar } from "react-icons/fa";
import classes from "./FavButton.module.css";

function FavButton() {
  const [isPressed, setIsPressed] = useState(false);

  const handleClick = (event) => {
    event.stopPropagation();
    if (isPressed) {
      setIsPressed(false);
      return;
    }
    setIsPressed(true);
  };

  return (
    <button className={classes.favButton} onClick={handleClick}>
      {isPressed ? (
        <FaStar className={classes.star} />
      ) : (
        <FaRegStar className={classes.star} />
      )}
    </button>
  );
}

export default FavButton;
