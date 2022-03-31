import React, { useState, useEffect } from "react";
import Image from "next/image";
import { connect } from "react-redux";

import styles from "../styles/cardItem.module.css";
import placeholder from "../public/IMG_6437.jpg";

function CardItemComponent(props) {
  const nftData = props.userNftData;

  const [price, setPrice] = useState();
  const [id, setId] = useState();
  const [fileData, setFileData] = useState({});

  function handlePriceChange(e) {
    e.preventDefault();
    setPrice(e.target.value);
  }

  function getNftData(file) {
    console.log("this is the file", file.description);
    setId(file.id);
    setFileData({
      [file.name]: {
        id: file.id,
        description: file.description,
        name: file.name,
        mimeType: file.mimeType,
        data: file.data,
      },
    });
  }

  function handleSubmit(file) {
    e.preventDefault();

    console.log("this is the file", file.description);
    setId(file.id);
    setFileData({
      [file.name]: {
        id: file.id,
        description: file.description,
        name: file.name,
        mimeType: file.mimeType,
        data: file.data,
      },
    });

    console.log(id, fileData);
    // if(nftData.length !== 0) {
    //   props.publish({
    //     id: id,
    //     price: price,
    //     user: 'test',
    //     registryUri: 't3t3yg8aw6gj4h46bf97cjegwrfps1m3gq7ogp4dtjrr9aryg6h514',
    //     privateKey: 'db6bf41db59265f09862784875d6fa9a4d9d6b4529d6bfbe176e85e226fb1588',
    //     file: fileData
    //   })

    // }
  }

  useEffect(() => {
    props.init({
      store: "test",
      user: "test",
      registryUri: "t3t3yg8aw6gj4h46bf97cjegwrfps1m3gq7ogp4dtjrr9aryg6h514",
      privateKey:
        "db6bf41db59265f09862784875d6fa9a4d9d6b4529d6bfbe176e85e226fb1588",
    });
  }, []);

  return (
    <>
      <div className={styles.container}>
        {nftData.length !== 0 ? (
          <>
            {Object.values(nftData).map((file) => (
              <div className={`col`} key={file.name}>
                <div className={`card shadow-sm ${styles.customCard}`}>
                  <Image
                    src={placeholder}
                    className="card-img-top"
                    alt={file?.name}
                    width="100%"
                    height="100%"
                    layout="responsive"
                    objectFit="contain"
                  />
                  <div className="card-body">
                    <p className="card-text">{file?.id}</p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <button
                          type="button"
                          className={`btn btn-sm ${styles.customBtn}`}
                          onClick={() => handleSubmit(file)}
                        >
                          Publish on marketplace
                        </button>
                      </div>
                      <small className="text-muted"></small>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </>
        ) : (
          <div>loading!</div>
        )}
      </div>
    </>
  );
}

const FileItem = connect(
  (state) => {
    return {
      state: state,
      userNftData: state.reducer.userNftData,
    };
  },
  (dispatch) => {
    return {
      init: (props) => {
        dispatch({
          type: "INIT",
          payload: {
            store: props.store,
            user: props.user,
            registryUri: props.registryUri,
            privateKey: props.privateKey,
          },
        });
      },
      publish: (props) => {
        dispatch({
          type: "PURCHASE_NFT",
          payload: {
            id: props.id,
            price: props.price,
            user: props.user,
            registryUri: props.registryUri,
            privateKey: props.privateKey,
            file: props.file,
          },
        });
      },
    };
  }
)(CardItemComponent);

export default FileItem;
