import React, { useState, useEffect } from "react";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import Link from "next/link";
import Image from "next/image";

import { useEthers } from "@usedapp/core";

// let Web3 = require("web3");
import { State } from "../interfaces/interface";

import styles from "../styles/Nav.module.scss";
import Logo from "../public/FINAL LOGOS MAR 29/FINAL LOGO GREEN ICON BLK TEXT TRNS BCKGRNDhorizontal tight copy.png";

interface NavComponentProps {
  init_wallet: (arg0: {
    address: string;
    userContractId: string;
    userBoxId: string;
  }) => void;
}

function NavComponent(props: NavComponentProps) {
  let address: string;
  let slicedAddress: string;

  const { activateBrowserWallet, account } = useEthers();

  function ConnectMetaMask() {
    activateBrowserWallet();
  }
  useEffect(() => {
    if (account !== undefined) {
      address = account;
      slicedAddress = SliceAddress();

      props.init_wallet({
        address: address,
        userContractId: slicedAddress,
        userBoxId: slicedAddress,
      });
    }
  }, [account]);

  function SliceAddress() {
    const walletAddress = account?.toString();
    if (!walletAddress) {
      return "";
    }
    const slicedAddressFirst = account?.toString().slice(0, 5);
    const slicedAddressLast = account
      ?.toString()
      .slice(walletAddress.length - 4, walletAddress.length);
    return `${slicedAddressFirst}...${slicedAddressLast}`;
  }

  return (
    <nav
      className={`navbar navbar-expand-lg navbar-light bg-light ${styles.navigation}`}
    >
      <div className={styles.list}>
        <Link href="/">
          <Image
            className={`navbar-brand`}
            src={Logo}
            alt=""
            width="200"
            height="50"
            role="button"
          />
        </Link>
      </div>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className={`navbar-nav ${styles.parent}`}>
          <div className={styles.list}>
            <Link href="/marketplace">
              <a className={styles.red}>Explore</a>
            </Link>
          </div>
          <div className={styles.list}>
            <Link href="/about">
              <a className={styles.red}>About</a>
            </Link>
          </div>
          <div className={styles.list}>
            <Link href="/create">
              <a className={styles.red}>Upload</a>
            </Link>
          </div>
          <div className={styles.dropdown}>
            <button
              className={`fas fa-wallet ${styles.red} ${styles.dropbtn}`}
            ></button>
            <i className={`fa fa-caret-down ${styles.caret}`}></i>
            <div className={`px-4 ${styles.dropdownContent}`}>
              <div className={styles.list}>
                {account === undefined ? (
                  <Link href="/account">
                    <a className={`${styles.red}`} role="button">
                      <i
                        className={`far fa-user-circle fa-2x ${styles.caret}`}
                      ></i>
                      My profile
                    </a>
                  </Link>
                ) : (
                  <Link href="/account">
                    <div className={`d-flex`}>
                      <Image
                        src={`https://robohash.org/${account}`}
                        alt=""
                        width="35%"
                        height="35%"
                        className={styles.profile}
                      />
                      <p className={`mb-1 p-2 ${styles.red}`}>My profile</p>
                    </div>
                  </Link>
                )}
              </div>
              <div className={styles.list}>
                {account === undefined ? (
                  <Link href="#">
                    <a className={`${styles.red}`} onClick={ConnectMetaMask}>
                      <i className={`fas fa-wallet fa-2x ${styles.caret}`}></i>
                      Connect wallet
                    </a>
                  </Link>
                ) : (
                  <></>
                )}
              </div>
            </div>
          </div>
          <div className={styles.mobileProfile}>
            <div className={styles.list}>
              <Link href="/account">
                <a className={`${styles.red}`}>View</a>
              </Link>
            </div>
            <div className={styles.list}>
              {account === undefined ? (
                <Link href="#">
                  <a
                    className={`fas fa-wallet fa-2x ${styles.red}`}
                    onClick={ConnectMetaMask}
                  ></a>
                </Link>
              ) : (
                <Image
                  src={`https://robohash.org/${account}`}
                  alt=""
                  width="35%"
                  height="35%"
                  className={styles.profile}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

const Nav = connect(
  (state: State) => {
    return {
      state: state,
    };
  },
  (dispatch: Dispatch) => {
    return {
      init_wallet: (props: { address: string; userContractId: string; userBoxId: string; }) => {
        dispatch({
          type: "INIT_USER_WALLET",
          payload: {
            address: props.address,
            userContractId: props.userContractId,
            userBoxId: props.userBoxId,
          },
        });
      },
    };
  }
)(NavComponent);

export default Nav;
