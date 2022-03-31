import React from "react";

import FileList from "../components/fileList";

import styles from "../styles/Market.module.css";

export default function marketplace() {
  return (
    <div className={styles.wrapper}>
      <div className={`container ${styles.margin}`}>
        <h2>Explore Collections</h2>
        <FileList />
      </div>
    </div>
  );
}
