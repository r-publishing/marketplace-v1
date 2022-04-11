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
// import * as RChainWeb from "rchain-web";

const uploadFile = function* (action) {
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

  // const rchainWeb = new RChainWeb.http({
  //   readOnlyHost: "http://127.0.0.1:40403",
  //   validatorHost: "http://127.0.0.1:40403",
  // });

  // console.log(rchainWeb);

  // const vab = yield rchainWeb.validAfterBlockNumber();

  const timestamp = new Date().getTime();

  // const deployData = {
  //   term: term,
  //   timestamp,
  //   validAfterBlockNumber: vab,
  //   phloLimit: 100000000,
  //   phloPrice: 1,
  // };

  // const dds = RChainWeb.utils.getDeployDataToSign(deployData);

  // const sig = yield window.ethereum
  //   .request({
  //     method: "personal_sign",
  //     params: [
  //       [...dds],
  //       process.env.NEXT_PUBLIC_USER_1_ETH_ADDRESS
  //     ],
  //   })

  //   const optionsDeploy = {
  //     data: deployData,
  //     deployer: process.env.NEXT_PUBLIC_USER_1_PUBLIC_KEY,
  //     signature: RChainWeb.utils.encodeBase16(
  //       RChainWeb.utils.decodeBase16(sig)
  //     ),
  //     sigAlgorithm: "secp256k1:eth",
  //   };

  //   const result = yield rchainWeb
  //   .deploy(
  //     optionsDeploy,
  //     120000 * 10 // will try to get value on x during 20 minutes
  //   )
  //   .then((a) => {
  //     resolve(a);
  //   })

  // console.log(result)

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
  yield takeEvery("UPLOAD", uploadFile);
};
