import classes from "./Header.module.css";
import FavButtonHeader from "../FavButtonHeader/FavButtonHeader";
import { FaSistrix } from "react-icons/fa";
import { useState } from "react";
function Header({ isHeaderActive, setHeaderActive, onSearchChange }) {
  const [searchText, setSearchText] = useState("");

  const handleSearchChange = (event) => {
    const newSearchText = event.target.value;
    setSearchText(newSearchText);
    onSearchChange(newSearchText);
  };
  return (
    <header className={classes.header}>
      <div className={classes.div}>
        <img src="/Marvel_Logo.svg" alt="Marvel Logo" className={classes.img} />
        <div className={classes.line} />
        <div className={classes.searcher}>
          <FaSistrix />
          <input
            type="text"
            value={searchText}
            onChange={handleSearchChange}
            placeholder={"Buscar"}
            className={classes.input}
          />
        </div>
      </div>
      <div className={classes.favFilter}>
        <FavButtonHeader
          isHeaderActive={isHeaderActive}
          setHeaderActive={setHeaderActive}
        />
      </div>
    </header>
  );
}

export default Header;
