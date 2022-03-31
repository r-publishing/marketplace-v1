import { put, takeLatest } from "redux-saga/effects";
import * as rchainToolkit from "rchain-toolkit";

import prepareDeploy from "../../utils/prepareDeploy";
import waitForUnforgeable from "../../utils/waitForUnforgeable";
import { store } from "../store";

const { purchaseTerm, readPursesDataTerm } = require("rchain-token");

const purchase = function* (action) {
  console.log("purchasing Nft...", action.payload);

  const state = store.getState();

  const privateKey = action.payload.privateKey;
  const publicKey = rchainToolkit.utils.publicKeyFromPrivateKey(privateKey);
};
