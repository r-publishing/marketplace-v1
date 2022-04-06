import React, { useState, useEffect } from "react";
import Image from "next/image";
import { connect } from "react-redux";

import styles from "../styles/cardItem.module.css";
import placeholder from "../public/IMG_6437.jpg";

function CardItemComponent(props) {
  const nftData = props.storeNftData;

  const [price, setPrice] = useState();
  const [id, setId] = useState();
  const [fileData, setFileData] = useState({});

  function getNftData(file) {
    setId(file.id);

    const priceInRevlettes = file.price * 1000000;
    setPrice(priceInRevlettes);
  }

  function purchaseNft(e) {
    e.preventDefault();

    console.log(id, price);
    if (nftData.length !== 0) {
      props.purchase({
        id: id,
        price: price,
        user: "user2",
        registryUri: process.env.NEXT_PUBLIC_MASTER_REGISTRY,
        privateKey: process.env.NEXT_PUBLIC_PRIVATE_KEY,
      });
    }
  }

  useEffect(() => {
    props.init_store({
      store: process.env.NEXT_PUBLIC_STORE_CONTRACT,
      user: process.env.NEXT_PUBLIC_STORE_BOX,
      registryUri: process.env.NEXT_PUBLIC_MASTER_REGISTRY,
      privateKey: process.env.NEXT_PUBLIC_MASTER_REGISTRY,
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
                          Purchase this NFT for {file?.price} rev
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
      {/* Modal */}
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
                Are you sure you want to purchase?
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
                onClick={purchaseNft}
              >
                Proceed
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
      storeNftData: state.reducer.storeNftData,
    };
  },
  (dispatch) => {
    return {
      init_store: (props) => {
        dispatch({
          type: "INIT_STORE",
          payload: {
            store: props.store,
            user: props.user,
            registryUri: props.registryUri,
            privateKey: props.privateKey,
          },
        });
      },
      purchase: (props) => {
        dispatch({
          type: "PURCHASE_NFT",
          payload: {
            id: props.id,
            price: props.price,
            user: props.user,
            registryUri: props.registryUri,
            privateKey: props.privateKey,
          },
        });
      },
    };
  }
)(CardItemComponent);

export default FileItem;
