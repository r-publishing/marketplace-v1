import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import Link from "next/link";
import Image from "next/image";

import { useEthers } from "@usedapp/core";

// let Web3 = require("web3");

import styles from "../styles/Nav.module.css";
import Logo from "../public/FINAL LOGOS MAR 29/FINAL LOGO GREEN ICON BLK TEXT TRNS BCKGRNDhorizontal tight copy.png";

function NavComponent(props) {
  // const [slicedAccount, setSlicedAccount] = useState(null);
  // const [address, setAddress] = useState(null);
  let address;
  let slicedAddress;

  const { activateBrowserWallet, account } = useEthers();

  function ConnectMetaMask() {
    activateBrowserWallet();
  }
  useEffect(() => {
    if (account !== undefined) {
      address = account;
      slicedAddress = SliceAddress();

      console.log(slicedAddress, address);

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
        <Link className={`navbar-brand`} href="/">
          <a>
            <Image src={Logo} alt="" width="200" height="50" />
            <div className={styles.red}>
              <h4></h4>
            </div>
          </a>
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
              <a className={styles.red}>Explore Collections</a>
            </Link>
          </div>
          <div className={styles.list}>
            <Link href="/create">
              <a className={styles.red}>Upload</a>
            </Link>
          </div>
          <div className={styles.list}>
            <Link href="/account">
              <a className={`far fa-user-circle fa-2x ${styles.red}`}></a>
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
    </nav>
  );
}

const Nav = connect(
  (state) => {
    return {
      state: state,
    };
  },
  (dispatch) => {
    return {
      init_wallet: (props) => {
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
