import React, { useEffect } from "react";
import styles from "./LoadingSpinner.module.css"

const LoadingSpinner = () => {
  return <div className={styles.loadingContainer}>
    <span className={styles.loader}></span>
  </div>
};

export default LoadingSpinner;
