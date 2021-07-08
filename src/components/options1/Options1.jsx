import React from 'react';
import styles from "./Options1.module.css"

const Options1 = () => {
    return (
      <div className={styles.options}>
        <label for="">High level value:</label>
        <input type="number" mim = "0" max = "150" /> 
      </div>
    );
  }
  
  export default Options1;