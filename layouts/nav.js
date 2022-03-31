import React from "react";
import Link from "next/link";
import Image from "next/image";

import styles from "../styles/Nav.module.css";
import Logo from "../public/FINAL LOGOS MAR 29/FINAL LOGO GREEN ICON BLK TEXT TRNS BCKGRNDhorizontal tight copy.png";

export default function nav() {
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-light bg-light ${styles.navigation}`}
    >
      <div className={styles.list}>
        <Link className={`navbar-brand`} href="/">
          <a>
            <Image src={Logo} alt="" width="200" height="50" />
            <div className={styles.red}>
              <h4></h4>
            </div>
          </a>
        </Link>
      </div>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className={`navbar-nav ${styles.parent}`}>
          <div className={styles.list}>
            <Link href="/marketplace">
              <a className={styles.red}>Explore Collections</a>
            </Link>
          </div>
          <div className={styles.list}>
            <Link href="/create">
              <a className={styles.red}>Upload</a>
            </Link>
          </div>
          <div className={styles.list}>
            <Link href="/account">
              <a className={`far fa-user-circle fa-2x ${styles.red}`}></a>
            </Link>
          </div>
          <div className={styles.list}>
            <Link href="/account">
              <a className={`fas fa-wallet fa-2x ${styles.red}`}></a>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
