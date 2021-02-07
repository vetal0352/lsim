import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from "./Navigation.module.css"

const Navigation = () => {
  return (
    <div className={styles.navigation}>
      <ul className={styles.item}>
        <li><NavLink to="/lsim1" activeClassName={styles.activeLink}>ЛСІМ 1</NavLink></li>
        <li><NavLink to="/lsim2" activeClassName={styles.activeLink}>ЛСІМ 2</NavLink></li>
        <li><NavLink to="/lsim3" activeClassName={styles.activeLink}>ЛСІМ 3</NavLink></li>
        <li><NavLink to="/lsim4" activeClassName={styles.activeLink}>ЛСІМ 4</NavLink></li>
        <li><NavLink to="/lsim5" activeClassName={styles.activeLink}>ЛСІМ 5</NavLink></li>
      </ul>
    </div>
  );
}

export default Navigation;