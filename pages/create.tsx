import React from "react";

import UploadForm from "../components/uploadForm";

import styles from "../styles/uploadPage.module.scss";

export default function create() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.upload}>
        <UploadForm />
      </div>
    </div>
  );
}
