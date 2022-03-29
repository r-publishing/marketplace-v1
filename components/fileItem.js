// import fs from 'fs';
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { connect } from 'react-redux';

import styles from '../styles/cardItem.module.css';

function FileItemComponent(props) {
  
  useEffect(() => {
    props.init(
      {
        store: 'storeContract',
        user: 'store',
        registryUri: 't3t3yg8aw6gj4h46bf97cjegwrfps1m3gq7ogp4dtjrr9aryg6h514',
        privateKey: 'db6bf41db59265f09862784875d6fa9a4d9d6b4529d6bfbe176e85e226fb1588',
      }
    )
  }, [])

  const nftData = props.userNftData;

  return (
    <>
<div className={styles.container}>
  {nftData.length !== 0 ? (
    <>
     {Object.values(nftData).map(file => (
    <div className={`col`} key={file.name}>
      <div className={`card shadow-sm ${styles.customCard}`}>
       <Image src={`data:${file?.mimeType};base64, ${file?.data}`} className="card-img-top" alt={file?.name} height={500} width={500} />
       <div className="card-body">
        <p className="card-text">{file?.name}</p>
        <div className="d-flex justify-content-between align-items-center">
        <div className="btn-group">
            <button type="button" className="btn btn-sm btn-outline-danger">Mint as NFT</button>
            </div>
          <small className="text-muted"></small>
        </div>
      </div>
    </div>
  </div> 
  ))
} 
  </>
  ): (
    <div>loading!</div>
  )
  }
</div>
  </>  
  )
};

const FileItem = connect(
  (state) => {
    return {
    state: state,
    userNftData: state.reducer.userNftData
    }
  },
  (dispatch) => {
    return {
      init: (props) => {
        dispatch({
          type: 'INIT',
          payload: {
            store: props.store,
            user: props.user,
            registryUri: props.registryUri,
            privateKey: props.privateKey,
          }
        })
      }
    }
  }
)(FileItemComponent)

export default FileItem;