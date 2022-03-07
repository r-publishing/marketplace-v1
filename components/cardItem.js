import React from 'react'
import Image from 'next/image'

import styles from '../styles/cardItem.module.css';
import placeholder from '../public/IMG_6440.jpg';

export default function cardItem() {
  return (
    <div className={`col`}>
    <div className={`card shadow-sm ${styles.customCard}`}>
    <Image src={placeholder} class="card-img-top" alt="..." />

      <div className="card-body">
        <p className="card-text">Name</p>
        <div className="d-flex justify-content-between align-items-center">
        <div className="btn-group">
            <button type="button" className="btn btn-sm btn-outline-danger">Buy Now</button>
            </div>
          <small className="text-muted">5 REV</small>
        </div>
      </div>
    </div>
  </div>
  )
}
