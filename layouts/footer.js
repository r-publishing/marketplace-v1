import React from 'react';
import Link from 'next/link';

import styles from '../styles/Footer.module.css';

export default function footer() {
  return (
 <nav
    className={`navbar navbar-expand-sm navbar-light bg-light ${styles.footer}`}
  >
    <div className={`${styles.footer}`}>
      <div
        className="navbar-brand copyright"
        href="#"
      >
        {" "}
        <p className={styles.text}> @Copyright by the RPC Team..... <Link href="/about"><a className={styles.red}>About Us</a></Link></p>{" "}
        
      </div>
    </div>
  </nav>
  )
}
