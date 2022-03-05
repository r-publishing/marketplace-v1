import React from 'react'

import CardList from '../components/cardList';

import styles from '../styles/Market.module.css'

export default function marketplace() {
  return (
    <>
        <div className={`container ${styles.margin}`}>
         <h2>Browse NFTs</h2>
            <CardList />
            <CardList />
            <CardList />
            <CardList />
        </div>
    </>
  )
}