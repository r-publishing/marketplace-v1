import React from 'react'
import Link from 'next/Link';
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
                <div className={styles.list}><Link href="/marketplace"><a>Browse</a></Link></div>
                <div className={styles.list}><Link href="/about"><a>About Us</a></Link></div>
                <div className={styles.list}><Link href="/account"><a>Profile</a></Link></div>
                <div className={styles.list}><Link href="/create"><a>Upload</a></Link></div>
                <button type="button" className="btn btn-sm btn-outline-danger">Connect Wallet</button>
            </div>
        </div>
    </nav>
  )
}
