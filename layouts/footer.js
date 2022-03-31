import React from "react";
import Link from "next/link";
import Image from "next/image";

import styles from "../styles/Footer.module.css";
import logo from "../public/FINAL LOGOS MAR 29/FINAL LOGO GREEN ICON WHT TEXT TRNS BACKGRND horizontal tight.png";

export default function footer() {
  return (
    <div className={`${styles.footer}`}>
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm">
            <h5 className={styles.header}></h5>
          </div>
          <div className="col-sm">
            <div className={styles.header}>
              {" "}
              <Image src={logo} alt={"logo"} width={400} height={100} />
            </div>
            <p className={styles.links}>
              <li>
                <Link href="/">
                  <a className={`${styles.red}`}>Home</a>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <a className={`${styles.red}`}>About us</a>
                </Link>
              </li>
              <li>
                <Link href="/marketplace">
                  <a className={`${styles.red}`}>Explore</a>
                </Link>
              </li>
            </p>
            <p className={styles.socials}>
              <li>
                <Link href="/">
                  <a className={`fab fa-discord ${styles.red}`}></a>
                </Link>
              </li>
              <li>
                <Link href="">
                  <a className={`fab fa-facebook ${styles.red}`}></a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a className={`fab fa-linkedin ${styles.red}`}></a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a className={`fab fa-twitter ${styles.red}`}></a>
                </Link>
              </li>
            </p>
            <p>
              Terms of Service | &copy; 2022 RChain Publishing Cooperative |
              Privacy policy
            </p>
          </div>
          <div className="col-sm">
            <h5 className={styles.header}></h5>
          </div>
        </div>
      </div>
    </div>
  );
}
