import { put, takeLatest } from "redux-saga/effects";
import * as rchainToolkit from "rchain-toolkit";

import prepareDeploy from "../../utils/prepareDeploy";
import waitForUnforgeable from "../../utils/waitForUnforgeable";
import { store } from "../store";
import { Document } from "../../interfaces/interface";

const {
  purchaseTerm,
  readPursesDataTerm,
  createPursesTerm,
} = require("rchain-token");

const purchase = function* (action: { 
  type: string;
  payload: { user: string; id: string; file: Document; price: number; }; }) {
  console.log("Purchasing file", action.payload);
  let user = action.payload.user;
  const newBagId = action.payload.id;
  const state = store.getState();

  const privateKey = process.env.NEXT_PUBLIC_PRIVATE_KEY;
  const public_store = process.env.NEXT_PUBLIC_STORE;
  const masterRegistry = process.env.NEXT_PUBLIC_MASTER_REGISTRY;
  const publicKey = rchainToolkit.utils.publicKeyFromPrivateKey(privateKey);

  let readPursesDataResult: string;

  const term3 = readPursesDataTerm({
    masterRegistryUri: masterRegistry,
    pursesIds: [newBagId],
    contractId: public_store,
  });

  readPursesDataResult = yield rchainToolkit.http.exploreDeploy(
    state.reducer.readOnlyUrl,
    {
      term: term3,
    }
  );

  let bagData: { [name: string]: Document; };
  if (readPursesDataResult) {
    bagData = rchainToolkit.utils.rhoValToJs(
      JSON.parse(readPursesDataResult).expr[0]
    );
  }

  console.log("bagData", bagData);

  const payload = {
    purseId: newBagId,
    quantity: 1,
    merge: true,
    newId: null,
    data: bagData[newBagId],
    masterRegistryUri: masterRegistry,
    price: action.payload.price,
    contractId: public_store,
    boxId: user,
    publicKey: publicKey,
  };

  const term = purchaseTerm(payload);

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

export const purchaseSaga = function* () {
  yield takeLatest("PURCHASE_NFT", purchase);
};
