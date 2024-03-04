import React from 'react';
import styles from './styles.module.css';
import Header from '../Header';
import ProjectList from '../ProjectList';

function HomeGrid() {
  return (
    <div className={styles.grid}>
      <Header />
      <div className={styles.projects}>
        <ProjectList />
      </div>
    </div>
  );
}

export default HomeGrid;
