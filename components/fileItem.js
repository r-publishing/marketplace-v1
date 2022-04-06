// import fs from 'fs';
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { connect } from "react-redux";

import styles from "../styles/cardItem.module.css";
import placeholder from "../public/IMG_6438.jpg";

function FileItemComponent(props) {
  const nftData = props.userNftData;

  const [price, setPrice] = useState();
  const [id, setId] = useState();
  const [fileData, setFileData] = useState({});

  function handlePriceChange(e) {
    e.preventDefault();
    setPrice(e.target.value);
  }

  function getNftData(file) {
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

  function handleSubmit(e) {
    e.preventDefault();

    if (nftData.length !== 0) {
      props.publish({
        id: id,
        price: price,
        registryUri: process.env.NEXT_PUBLIC_MASTER_REGISTRY,
        privateKey: process.env.NEXT_PUBLIC_PRIVATE_KEY,
        file: fileData,
      });
    }
  }

  useEffect(() => {
    let boxId;
    if (props.userBoxId !== "") {
      boxId = props.userBoxId;

      props.init({
        user: boxId,
        registryUri: process.env.NEXT_PUBLIC_MASTER_REGISTRY,
        privateKey: process.env.NEXT_PUBLIC_PRIVATE_KEY,
      });
    }
  }, [props.userBoxId]);

  return (
    <>
      <div className={styles.container}>
        {nftData.length !== 0 ? (
          <>
            {Object.values(nftData).map((file) => (
              <div className={`col`} key={file.name}>
                <div className={`card shadow-sm ${styles.customCard}`}>
                  <Image
                    src={`data:${file?.mimeType};base64, ${file?.data}`}
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
                          data-toggle="modal"
                          data-target="#setPriceModal"
                          onClick={() => getNftData(file)}
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
      {/* <!-- Modal --> */}
      <div
        className="modal fade"
        id="setPriceModal"
        tabIndex="-1"
        role="dialog"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLongTitle">
                Publish on public marketplace
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <label htmlFor="">
                <b>Set Price</b>
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                aria-describedby=""
                placeholder="Enter Price in Rev"
                value={price}
                onChange={handlePriceChange}
              />
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Cancel
              </button>
              <button
                type="button"
                className={`btn ${styles.customBtn}`}
                onClick={handleSubmit}
              >
                Publish
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

const FileItem = connect(
  (state) => {
    return {
      state: state,
      userNftData: state.reducer.userNftData,
      userBoxId: state.reducer.userBoxId,
    };
  },
  (dispatch) => {
    return {
      init: (props) => {
        dispatch({
          type: "INIT",
          payload: {
            user: props.user,
            registryUri: props.registryUri,
            privateKey: props.privateKey,
          },
        });
      },
      publish: (props) => {
        dispatch({
          type: "PUBLISH_TO_PUBLIC_STORE",
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
)(FileItemComponent);

export default FileItem;
