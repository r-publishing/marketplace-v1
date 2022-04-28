// import fs from 'fs';
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { connect } from "react-redux";
import { useRouter } from "next/router";
import { Dispatch } from "redux";

import { toast } from "react-toastify";

import { Document, reducerState } from "../interfaces/interface";
import styles from "../styles/cardItem.module.scss";
import placeholder from "../public/IMG_6438.jpg";

interface FileItemComponentProps {
  userNftData: Document;
  publish: (arg0: { id: string; price: number; file: {} | Document }) => void;
  userBoxId: string;
  init: (arg0: { user: string }) => void;
}

function FileItemComponent(props: FileItemComponentProps) {
  const nftData = props.userNftData;

  const router = useRouter();

  const [price, setPrice] = useState<number>();
  const [id, setId] = useState<string>();
  const [fileData, setFileData] = useState<Document | {}>();

  function handlePriceChange(e) {
    e.preventDefault();
    setPrice(e.target.value);
  }

  function getNftData(file: any) {
    setId(file.id + "_file");
    setFileData({
      [file.name]: {
        id: file.id + "_file",
        description: file.description,
        name: file.name,
        mimeType: file.mimeType,
        data: file.data,
      },
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (Object.keys(nftData).length) {
      props.publish({
        id: id,
        price: price,
        file: fileData,
      });

      toast.success("Publishing file", { position: toast.POSITION.TOP_CENTER });
      setTimeout(() => {
        router.push("/marketplace");
      }, 10000);
      setTimeout(() => {
        router.reload();
      }, 15000);
    }
  }

  useEffect(() => {
    let boxId: string;
    console.log("props.userBoxId:", props.userBoxId)
    if (props.userBoxId !== "") {
    
      boxId = props.userBoxId;

      console.log("boxId: " + props.userBoxId);
      props.init({
        user: boxId,
      });
    }
  }, [props.userBoxId]);

  return (
    <>
      <div className={styles.container}>
        {Object.keys(nftData).length ? (
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
          <div></div>
        )}
      </div>
      {/* <!-- Modal --> */}
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
  (state: reducerState) => {
    return {
      state: state,
      userNftData: state.reducer.userNftData,
      userBoxId: state.reducer.userBoxId,
    };
  },
  (dispatch: Dispatch) => {
    return {
      init: (props: { user: string; }) => {
        dispatch({
          type: "INIT",
          payload: {
            user: props.user,
          },
        });
      },
      publish: (props: { id: string; price: number; file: Document; }) => {
        dispatch({
          type: "PUBLISH_TO_PUBLIC_STORE",
          payload: {
            id: props.id,
            price: props.price,
            file: props.file,
          },
        });
      },
    };
  }
)(FileItemComponent);

export default FileItem;
