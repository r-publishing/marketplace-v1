import React from "react";

import CardList from "../components/CardList";

import styles from "../styles/Market.module.css";

export default function marketplace() {
  return (
    <div className={styles.wrapper}>
      <div className={`container ${styles.margin}`}>
        <h2>Explore Collections</h2>
        <CardList />
      </div>
    </div>
  );
}
