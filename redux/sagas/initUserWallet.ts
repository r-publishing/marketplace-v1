import { takeLatest, put } from "redux-saga/effects";
import * as rchainToolkit from "rchain-toolkit";

import { Document } from "../../interfaces/interface";
import { store } from "../store";
import prepareDeploy from "../../utils/prepareDeploy";
import waitForUnforgeable from "../../utils/waitForUnforgeable";

const { readBoxTerm, deployTerm, deployBoxTerm } = require("rchain-token");

const initWallet = function* (action: { 
  type: string;
  payload: { userBoxId: string; }; 
}) {
  const state = store.getState();
  // console.log("initing user wallet.....", state);

  yield put({
    type: "SET_LOADING",
    payload: true,
  });

  const privateKey = process.env.NEXT_PUBLIC_PRIVATE_KEY;
  const public_store = process.env.NEXT_PUBLIC_STORE;
  const masterRegistry = process.env.NEXT_PUBLIC_MASTER_REGISTRY;
  const publicKey = rchainToolkit.utils.publicKeyFromPrivateKey(privateKey);

  const boxId = action.payload.userBoxId;

  const term2 = readBoxTerm({
    boxId: boxId,
    masterRegistryUri: masterRegistry,
  });

  const readBoxResult = yield rchainToolkit.http.exploreDeploy(
    state.reducer.readOnlyUrl,
    {
      term: term2,
    }
  );

  // console.log("readBoxResult", readBoxResult);

  const box = rchainToolkit.utils.rhoValToJs(JSON.parse(readBoxResult).expr[0]);
  // console.log("box:", box);

  const checkBox = box.toString();
  if (checkBox.startsWith("error")) {
    const payload = {
      masterRegistryUri: masterRegistry,
      boxId: state.reducer.userBoxId,
      publicKey: publicKey,
    };

    const term = deployBoxTerm(payload);

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

    // start of deploy NFT contract
    const payload2 = {
      masterRegistryUri: process.env.NEXT_PUBLIC_MASTER_REGISTRY,
      fungible: false,
      boxId: boxId,
      contractId: boxId,
      fee: null,
      expires: null,
    };

    const term1 = deployTerm(payload2);

    let validAfterBlockNumberResponse1: number;
    try {
      validAfterBlockNumberResponse1 = JSON.parse(
        yield rchainToolkit.http.blocks(state.reducer.readOnlyUrl, {
          position: 1,
        })
      )[0].blockNumber;
    } catch (err) {
      console.log(err);
      throw new Error("Unable to get last finalized block");
    }

    // console.log("validAfterBlockNumber", validAfterBlockNumberResponse1);

    const timestamp1 = new Date().getTime();

    const pd1 = yield prepareDeploy(
      state.reducer.readOnlyUrl,
      process.env.NEXT_PUBLIC_PUBLIC_KEY,
      timestamp1
    );

    const deployOptions1 = yield rchainToolkit.utils.getDeployOptions(
      "secp256k1",
      timestamp,
      term1,
      process.env.NEXT_PUBLIC_PRIVATE_KEY,
      process.env.NEXT_PUBLIC_PUBLIC_KEY,
      1,
      4000000000,
      validAfterBlockNumberResponse
    );

    try {
      const deployResponse1 = yield rchainToolkit.http.deploy(
        state.reducer.validatorUrl,
        deployOptions1
      );

      yield waitForUnforgeable(
        JSON.parse(pd1).names[0],
        state.reducer.readOnlyUrl
      );
    } catch (err) {
      console.info("Unable to deploy");
      console.error(err);
    }
  }

  return true;
};

export const initWalletSaga = function* () {
  yield takeLatest("INIT_USER_WALLET", initWallet);
};
