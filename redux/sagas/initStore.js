import { takeLatest, put } from "redux-saga/effects";
import * as rchainToolkit from "rchain-toolkit";

import { store } from "../store";
import { addressFromPurseId } from "../../utils/addressFromPurseId";
import { replaceAllBackSlash } from "../../utils/replaceAllBackSlash";

const {
  readPursesTerm,
  readBoxTerm,
  readPursesDataTerm,
} = require("rchain-token");

const load = function* (action) {
  const state = store.getState();
  //console.log('see state',state.reducer)
  yield put({
    type: "SET_LOADING",
    payload: true,
  });

  const privateKey = process.env.NEXT_PUBLIC_PRIVATE_KEY;
  const public_store = process.env.NEXT_PUBLIC_STORE;
  const masterRegistry = process.env.NEXT_PUBLIC_MASTER_REGISTRY;
  const publicKey = rchainToolkit.utils.publicKeyFromPrivateKey(privateKey);

  const term2 = readBoxTerm({
    boxId: public_store,
    masterRegistryUri: masterRegistry,
  });

  const readBoxResult = yield rchainToolkit.http.exploreDeploy(
    state.reducer.readOnlyUrl,
    {
      term: term2,
    }
  );
  console.log("readBoxResult:", readBoxResult);

  const box = rchainToolkit.utils.rhoValToJs(JSON.parse(readBoxResult).expr[0]);
  console.log("box:", box);
  const pursesIds =
    Object.keys(box.purses).length > 0 ? box.purses[public_store] : [];
  console.log("purseId", pursesIds);

  const term1 = readPursesTerm({
    masterRegistryUri: masterRegistry,
    contractId: public_store,
    pursesIds: pursesIds || [],
  });

  const readAllPursesResult = yield rchainToolkit.http.exploreDeploy(
    state.reducer.readOnlyUrl,
    {
      term: term1,
    }
  );
  console.log("readAllPursesResult", readAllPursesResult);

  const expr = JSON.parse(readAllPursesResult).expr;
  const boxData = rchainToolkit.utils.rhoValToJs(expr ? expr[0] : {});
  //   console.log('boxData',boxData)

  const purses = boxData;
  const pursesKeys = Object.keys(purses || {});
  let readPursesDataResult;

  if (pursesKeys.length > 0) {
    const term3 = readPursesDataTerm({
      masterRegistryUri: masterRegistry,
      pursesIds: pursesKeys,
      contractId: public_store,
    });

    readPursesDataResult = yield rchainToolkit.http.exploreDeploy(
      state.reducer.readOnlyUrl,
      {
        term: term3,
      }
    );
  }
  console.log("readAllPursesDataResult", readPursesDataResult);

  const rchainTokenValues = rchainToolkit.utils.rhoValToJs(
    JSON.parse(readBoxResult).expr[0]
  );

  let bagsData = Object();

  if (readPursesDataResult) {
    bagsData = rchainToolkit.utils.rhoValToJs(
      JSON.parse(readPursesDataResult).expr[0]
    );

    console.log("this is bagsData", bagsData);
    const newBagsData = {};

    Object.keys(bagsData).forEach((key) => {
      const dataObject = JSON.parse(replaceAllBackSlash(bagsData[key]));

      Object.keys(dataObject).forEach((key) => {
        newBagsData[addressFromPurseId(masterRegistry, key)] = dataObject[key];
      });
      return;
    });

    console.log("this is new bags data:", newBagsData);

    yield put({
      type: "SAVE_STORE_NFT_DATA_COMPLETED",
      payload: newBagsData,
    });

    yield put({
      type: "SET_LOADING",
      payload: false,
    });
  }
  return true;
};

export const initStoreSaga = function* () {
  yield takeLatest("INIT_STORE", load);
};
