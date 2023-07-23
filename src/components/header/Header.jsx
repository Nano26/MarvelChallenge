import classes from "./header.module.css";
import FavButton from "../favbutton/FavButton";
import { FaSistrix } from "react-icons/fa";
function Header() {
  return (
    <header className={classes.header}>
      <div className={classes.div}>
        <img src="/Pokemon_Logo.svg" alt="Pokemon Logo" className={classes.img} />
        <div className={classes.line} />
        <div className={classes.searcher}>
          <FaSistrix />
          <input type="text" placeholder={"Buscar"} className={classes.input} />
        </div>
      </div>
      <div className={classes.favFilter}>
        <FavButton favId={"header"}  />
      </div>
    </header>
  );
}

export default Header;
