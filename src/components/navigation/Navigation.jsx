import React from 'react';
import styles from "./Navigation.module.css"

const Navigation = () => {
  return (
    <div className={styles.navigation}>
      <ul className={styles.item}>
        <li><a href="#">ЛСІМ 1</a></li>
        <li><a href="#">ЛСІМ 2</a></li>
        <li><a href="#">ЛСІМ 3</a></li>
        <li><a href="#">ЛСІМ 4</a></li>
        <li><a href="#">ЛСІМ 5</a></li>
        <li><hr /></li>
        <li><a href="#">Налаштування</a></li>
      </ul>
    </div>
  );
}

export default Navigation;