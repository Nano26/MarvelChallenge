import { useState } from "react";
import { FaRegTimesCircle } from "react-icons/fa";
import Modal from "./Modal";
import classes from "./ComicsList.module.css";

function ComicsList(props) {
  
  return (
        <Modal onClose={props.onClick}>
          <div className={classes.container}>
            <button className={classes.button} onClick={props.onClick}>
              <FaRegTimesCircle />
            </button>
            <h1>Spider-man</h1>
            <ul>
              <li>Spider-man 1</li>
              <li>Spider-man 2</li>
              <li>Spider-man 3</li>
            </ul>
          </div>
        </Modal>
  );
}

export default ComicsList;
