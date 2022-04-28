import { takeLatest } from "redux-saga/effects";
import * as rchainToolkit from "rchain-toolkit";

import { Document, State } from "../../interfaces/interface";
import { store } from "../store";
import prepareDeploy from "../../utils/prepareDeploy";
import waitForUnforgeable from "../../utils/waitForUnforgeable";
const { createPursesTerm } = require("rchain-token");

const uploadFile = function* (action: { 
  type: string;
  payload: { user: string; id: string; file: Document; }; 
}) {
  console.log("uploading file", action.payload);

  let user = action.payload.user;
  const newBagId = action.payload.id;
  const fileDocument = action.payload.file;
  const state = store.getState();

  const privateKey = process.env.NEXT_PUBLIC_PRIVATE_KEY;
  const public_store = process.env.NEXT_PUBLIC_STORE;
  const masterRegistry = process.env.NEXT_PUBLIC_MASTER_REGISTRY;
  const publicKey = rchainToolkit.utils.publicKeyFromPrivateKey(privateKey);

  const documentAsJson = JSON.stringify(fileDocument);

  const payload = {
    purses: {
      [newBagId]: {
        id: newBagId,
        boxId: user,
        type: "0",
        quantity: 1,
        price: null,
      },
    },
    data: {
      [newBagId]: documentAsJson,
    },
    masterRegistryUri: masterRegistry,
    contractId: public_store,
    boxId: user,
  };

  console.log(payload);

  const term = createPursesTerm(payload);

  console.log("state before finalized block", state.reducer);

  const timestamp = new Date().getTime();

  let validAfterBlockNumberResponse: number;
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

export const uploadFileSaga = function* () {
  yield takeLatest("UPLOAD", uploadFile);
};
