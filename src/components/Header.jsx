import classes from "./header.module.css";

function Header() {
  return (
    <header className={classes.header}>
      <div className={classes.div}>
        <img src="/Marvel_Logo.svg" alt="Marvel Logo" className={classes.img} />
        <input type="text" placeholder="Buscar" className={classes.input}/>
      </div>
      <button />
    </header>
  );
}

export default Header;
