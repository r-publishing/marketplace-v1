import React from "react";

import CardList from "../components/cardList";

import styles from "../styles/Market.module.css";

export default function marketplace() {
  return (
    <div className={styles.wrapper}>
      <div className={`container ${styles.margin}`}>
        <h2>Explore</h2>
        <CardList />
      </div>
    </div>
  );
}
