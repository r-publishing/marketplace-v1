import { put, takeEvery } from "redux-saga/effects";
import * as rchainToolkit from "rchain-toolkit";
import { deflate } from "pako";

import { store } from "../store";
import replacer from "../../utils/replacer";
import prepareDeploy from "../../utils/prepareDeploy";
import waitForUnforgeable from "../../utils/waitForUnforgeable";
//import validAfterBlockNumber from '../../utils/validAfterBlockNumber';
//import { getPrivateKey } from '../index';
const { createPursesTerm } = require("rchain-token");

const publish = function* (action) {
  console.log("publishing file", action.payload);
  const newBagId = action.payload.id;
  const state = store.getState();

  const privateKey = action.payload.privateKey;
  console.log("checking private key", action.payload.privateKey);
  const publicKey = rchainToolkit.utils.publicKeyFromPrivateKey(privateKey);

  const fileDocument = action.payload.file;

  const priceInRevlettes = action.payload.price * 1000000;

  Object.entries(fileDocument).map((file) => {
    file[1].price = action.payload.price;
    console.log("this is the file", file[1]);
  });

  const documentAsJson = JSON.stringify(fileDocument);

  const payload = {
    purses: {
      [newBagId]: {
        id: newBagId,
        boxId: process.env.NEXT_PUBLIC_STORE_BOX,
        type: "0",
        quantity: 1,
        price: priceInRevlettes,
      },
    },
    data: {
      [newBagId]: documentAsJson,
    },
    masterRegistryUri: process.env.NEXT_PUBLIC_MASTER_REGISTRY,
    contractId: process.env.NEXT_PUBLIC_STORE_CONTRACT,
    boxId: process.env.NEXT_PUBLIC_STORE_BOX,
  };

  console.log(payload);

  const term = createPursesTerm(payload);

  console.log("state before finalized block", state.reducer);

  let validAfterBlockNumberResponse;
  try {
    validAfterBlockNumberResponse = JSON.parse(
      yield rchainToolkit.http.blocks(state.reducer.readOnlyUrl, {
        position: 1,
      })
    )[0].blockNumber;
  } catch (err) {
    console.log(err);
    throw new Error("Unable to get last finalized block");
  }

  console.log("validAfterBlockNumber", validAfterBlockNumberResponse);

  const timestamp = new Date().getTime();

  const pd = yield prepareDeploy(
    state.reducer.readOnlyUrl,
    publicKey,
    timestamp
  );

  const deployOptions = yield rchainToolkit.utils.getDeployOptions(
    "secp256k1",
    timestamp,
    term,
    privateKey,
    publicKey,
    1,
    4000000000,
    validAfterBlockNumberResponse
  );

  try {
    const deployResponse = yield rchainToolkit.http.deploy(
      state.reducer.validatorUrl,
      deployOptions
    );

    yield waitForUnforgeable(
      JSON.parse(pd).names[0],
      state.reducer.readOnlyUrl
    );
  } catch (err) {
    console.info("Unable to deploy");
    console.error(err);
  }

  console.log(state);

  return true;
};

export const publishSaga = function* () {
  yield takeEvery("PUBLISH_TO_PUBLIC_STORE", publish);
};
