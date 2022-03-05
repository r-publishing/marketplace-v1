import React from 'react'

import styles from '../styles/cardItem.module.css';

export default function cardItem() {
  return (
    <div className={`col`}>
    <div className={`card shadow-sm ${styles.customCard}`}>
      <svg className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"/><text x="50%" y="50%" fill="#eceeef" dy=".3em">NFT</text></svg>

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
