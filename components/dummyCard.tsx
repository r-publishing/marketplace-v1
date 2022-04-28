import React from 'react';
import Image from 'next/image';

import styles from "../styles/cardItem.module.scss";
import placeholder from "../public/placeholder.jpg";

export default function DummyCard() {
    return (
        <div className={`col`} >
        <div className={`card shadow-sm ${styles.customCard}`}>
          <Image
            src={placeholder}
            className="card-img-top"
            alt={'file?.name'}
            width={350}
            height={500}
            layout="intrinsic"
            
          />
          <div className="card-body">
            <p className="card-text">dummy NFT</p>
            <div className="d-flex justify-content-between align-items-center">
              <div className="btn-group">
                <button
                  type="button"
                  className={`btn btn-sm ${styles.customBtn}`}
                >
                  Purchase this NFT for 10 rev
                </button>
              </div>
              <small className="text-muted"></small>
            </div>
          </div>
        </div>
      </div>
    );
}