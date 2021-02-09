import React from 'react';
import styles from "./Smile.module.css"

const Smile = () => {
    return (
      <div className={styles.smile}>
        <svg version="1.1" width="100%" height="100%">
          <rect x="0" y="0" width="350" height="200" rx="20"/>
          <line x1="40" y1="30" x2="310" y2="30" />
          <line x1="30" y1="40" x2="320" y2="40" />
          <line x1="50" y1="65" x2="130" y2="65" />
          <line x1="40" y1="55" x2="50" y2="65" />
          <line x1="220" y1="65" x2="300" y2="65" />
          <line x1="300" y1="65" x2="310" y2="55" />
          <circle cx="80" cy="80" r="8" />
          <circle cx="270" cy="80" r="8" />
          <line x1="175" y1="80" x2="175" y2="140" />
          <line x1="90" y1="170" x2="260" y2="170" />
          <line x1="80" y1="160" x2="90" y2="170" />
          <line x1="260" y1="170" x2="270" y2="160" />
        </svg>
      </div>
    );
  }
  
  export default Smile;