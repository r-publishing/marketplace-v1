import React, { useState, useEffect } from "react";
import Image from "next/image";
import { connect } from "react-redux";
import { useRouter } from "next/router";
import { Dispatch } from "redux";

import { toast } from "react-toastify";

import { reducerState, Document } from "../interfaces/interface";
import styles from "../styles/cardItem.module.scss";
import placeholder from "../public/IMG_6437.jpg";

interface CardItemComponentProps {
  storeNftData: Document;
  userBoxId: string;
  purchase: (arg0: {
    id: string;
    price: number;
    user: string;
    file: {} | Document;
  }) => void;
  init_store: () => void;
}

function CardItemComponent(props: CardItemComponentProps) {
  const nftData = props.storeNftData;

  const router = useRouter();

  const [price, setPrice] = useState<number>();
  const [id, setId] = useState<string>();
  const [fileData, setFileData] = useState<Document | {}>();

  function getNftData(file) {
    setId(file.id);

    const priceInRevlettes = file.price * 1000000;
    setPrice(priceInRevlettes);
  }

  function purchaseNft(e) {
    e.preventDefault();

    console.log(id, price);
    if (Object.keys(nftData).length !== 0) {
      let boxId: string;
      if (props.userBoxId !== "") {
        boxId = props.userBoxId;
      }

      props.purchase({
        id: id,
        price: price,
        user: boxId,
        file: props.storeNftData,
      });

      toast.success("Purchasing file", { position: toast.POSITION.TOP_CENTER });
      setTimeout(() => {
        router.push("/account");
      }, 10000);
      setTimeout(() => {
        router.reload();
      }, 15000);
    }
  }

  useEffect(() => {
    props.init_store();
  }, []);

  return (
    <>
      <div className={styles.container}>
        {Object.keys(nftData).length? (
          <>
            {Object.values(nftData).map((file) => (
              <div className={`col`} key={file.name}>
                <div className={`card shadow-sm ${styles.customCard}`}>
                  <Image
                    src={`data:${file?.mimeType};base64, ${file?.data}`}
                    className="card-img-top"
                    alt={file?.name}
                    width={300}
                    height={400}
                    layout="intrinsic"
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
          <div></div>
        )}
      </div>
      {/* Modal */}
      <div
        className="modal fade"
        id="setPriceModal"
        tabIndex={-1}
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
  (state: reducerState) => {
    return {
      state: state,
      storeNftData: state.reducer.storeNftData,
      userBoxId: state.reducer.userBoxId,
    };
  },
  (dispatch: Dispatch) => {
    return {
      init_store: () => {
        dispatch({
          type: "INIT_STORE",
          payload: {},
        });
      },
      purchase: (props: {
        id: string;
        price: number;
        user: string;
        file: Document;
      }) => {
        dispatch({
          type: "PURCHASE_NFT",
          payload: {
            id: props.id,
            price: props.price,
            user: props.user,
            file: props.file,
          },
        });
      },
    };
  }
)(CardItemComponent);

export default FileItem;
