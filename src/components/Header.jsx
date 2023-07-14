import classes from "./header.module.css";
import FavButton from "./FavButton";

function Header() {
  return (
    <header className={classes.header}>
      <div className={classes.div}>
        <img src="/Marvel_Logo.svg" alt="Marvel Logo" className={classes.img} />
        <div className={classes.line} />
        <input type="text" placeholder="Buscar" className={classes.input}/>
      </div>
      <FavButton />
    </header>
  );
}

export default Header;
