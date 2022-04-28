import React, { useEffect } from "react";
import Image from "next/image";
import FileList from "../components/fileList";
import { connect } from "react-redux";

import styles from "../styles/Account.module.scss";

export default function account() {
  const wallet = "11112WCJcTMtk7Pr1QAWWLebgVDcmAoPbZDZc5i67bgnzE3r98Pemb";
  const start = wallet.substring(0, 5);
  const end = wallet.substring(wallet.length - 5, wallet.length);

  const balance = 10;

  return (
    <div className={styles.wrapper}>
      <div className={`container ${styles.profileContainer}`}>
        <div className={styles.parent}>
          {/* avatar will be generated from user's wallet address */}
          <Image
            src={`https://robohash.org/${wallet}`}
            alt=""
            width="120%"
            height="120%"
            className={styles.profile}
          />
        </div>
        <div className={styles.address}>
          {start}...{end}
        </div>
        <div className={styles.balance}>
          <b>{balance} REV</b>
        </div>
        <div className={styles.collection}>
          <h3>My files</h3>
          <FileList />
        </div>
      </div>
    </div>
  );
}
