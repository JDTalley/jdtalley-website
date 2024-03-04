import React from "react";
import styles from './styles.module.css';

function ProjectList() {
  return (
    <div className={styles.list}>
      <ul>
        <li>AsteroidsJS</li>
        <li>Bouncing Logo Overlay</li>
        <li>Impossible List</li>
      </ul>
    </div>
  );
}

export default ProjectList;
