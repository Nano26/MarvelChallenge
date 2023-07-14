import React, { useState } from "react";
import { FaRegStar, FaStar } from "react-icons/fa";
import classes from "./FavButton.module.css";

function FavButton() {
  const [isPressed, setIsPressed] = useState(false);

  const handleClick = () => {
    if (isPressed) {
      setIsPressed(false);
      return
    }
    setIsPressed(true);
  };

  return (
    <button
      className={classes.favButton}
      onClick={handleClick}
    >
      {isPressed ? <FaStar /> : <FaRegStar />}
    </button>
  );
}

export default FavButton;
