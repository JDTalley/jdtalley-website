import React from "react";
import styles from "./styles.module.css";
import ToggleIcon from "../ToggleIcon";

function Header() {
  return (
    <div className={styles.header}>
      <div>
        <h1>Dakota Talley</h1>
        <p>Web Developer, Game Developer, and Content Creator</p>
      </div>
      <div>
        <ToggleIcon iconName={"o"} />
      </div>
    </div>
  );
}

export default Header;
