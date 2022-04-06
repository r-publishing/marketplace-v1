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

  let newBagId = action.payload.id;

  let readPursesDataResult;

  const term3 = readPursesDataTerm({
    masterRegistryUri: action.payload.registryUri,
    pursesIds: [newBagId],
    contractId: "public_store",
  });
  readPursesDataResult = yield rchainToolkit.http.exploreDeploy(
    state.reducer.readOnlyUrl,
    {
      term: term3,
    }
  );

  let bagData;
  if (readPursesDataResult) {
    bagData = rchainToolkit.utils.rhoValToJs(
      JSON.parse(readPursesDataResult).expr[0]
    );
  }

  const payload = {
    masterRegistryUri: action.payload.registryUri,
    purseId: newBagId,
    contractId: `public_store`,
    boxId: action.payload.user,
    quantity: 1,
    newId: null,
    merge: true,
    data: bagData[newBagId],
    price: action.payload.price,
    publicKey: publicKey,
  };

  const term2 = purchaseTerm(payload);

  let validAfterBlockNumberResponse;
  try {
    validAfterBlockNumberResponse = JSON.parse(
      yield rchainToolkit.http.blocks(state.reducer.readOnlyUrl, {
        position: 1,
      })
    );
  } catch (err) {
    console.log(err);
    throw new Error("Unable to get last finalized block");
  }

  const timestamp = new Date().getTime();
  const pd = yield prepareDeploy(
    state.reducer.readOnlyUrl,
    publicKey,
    timestamp
  );

  const deployOptions = yield rchainToolkit.utils.getDeployOptions(
    "secp256k1",
    timestamp,
    term2,
    privateKey,
    publicKey,
    1,
    4000000000,
    validAfterBlockNumberResponse
  );

  const deployResponse = yield rchainToolkit.http.deploy(
    state.reducer.validatorUrl,
    deployOptions
  );
  if (deployResponse.startsWith('"Success!')) {
    Swal.fire({
      text: "Purchase is in progress",
      showConfirmButton: false,
    });
  }

  yield waitForUnforgeable(JSON.parse(pd).names[0], state.reducer.readOnlyUrl);

  return true;
};

export const purchaseSaga = function* () {
  yield takeLatest("PURCHASE_NFT", purchase);
};
