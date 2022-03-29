import React from 'react'
import Link from 'next/link';
import Image from 'next/image';

import styles from '../styles/Nav.module.css';
import Logo from '../public/Screenshot 2022-03-04 at 17.59.39.png';

export default function nav() {
  return (
    <nav className={`navbar navbar-expand-lg navbar-light bg-light ${styles.navigation}`}>
        <div className={styles.list}><Link className={`navbar-brand`} href="/"><a><Image src={Logo} alt="" width="30" height="30"/><div className={styles.red}><h4>DEMO</h4></div></a></Link></div>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className={`navbar-nav ${styles.parent}`}>
                <div className={styles.list}><Link href="/marketplace"><a>Explore Collections</a></Link></div>
                <div className={styles.list}><Link href="/create"><a className={`fa fa-upload fa-2x ${styles.red}`}></a></Link></div>
                <div className={styles.list}><Link href="/account"><a className={`far fa-user-circle fa-2x ${styles.red}`}></a></Link></div>
                <div className={styles.list}><Link href="/account"><a className={`fas fa-wallet fa-2x ${styles.red}`}></a></Link></div>
            </div>
        </div>
    </nav>
  )
}
