import React from 'react';
import styles from '../styles/Footer.module.css';

export default function footer() {
  return (
 <nav
    className={`navbar navbar-expand-sm navbar-light bg-light ${styles.footer}`}
  >
    <div className={`${styles.footer}`}>
      <a
        className="navbar-brand copyright"
        href="#"
      >
        {" "}
        <p> @Copyright by the RPC Team</p>{" "}
      </a>
    </div>
  </nav>
  )
}
