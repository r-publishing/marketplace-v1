import { takeLatest, put } from 'redux-saga/effects';
import * as rchainToolkit from 'rchain-toolkit';

import { store } from '../store'
import { addressFromPurseId } from '../../utils/addressFromPurseId';
import { replaceAllBackSlash } from '../../utils/replaceAllBackSlash';

const {
    readPursesTerm,
    readBoxTerm,
    readPursesDataTerm,
    //readConfigTerm
  } = require("rchain-token")

const load = function* (action) {

    const state = store.getState();
  //console.log('see state',state.reducer)
    yield put(
        {
          type: "SET_LOADING",
          payload: true
        }
      );

  const privateKey = action.payload.privateKey;
  const masterRegistryUri = action.payload.registryUri;
  const user = action.payload.user;
  const storeStr = action.payload.store;
  const pubKey = rchainToolkit.utils.publicKeyFromPrivateKey(privateKey);

const term2 = readBoxTerm({ boxId: user, masterRegistryUri: masterRegistryUri });
 
const readBoxResult = yield rchainToolkit.http.exploreDeploy(
    state.reducer.readOnlyUrl,
    {
      term: term2
    }
  )
  // console.log('readBoxResult:',readBoxResult);

const box = rchainToolkit.utils.rhoValToJs(JSON.parse(readBoxResult).expr[0]);
// console.log('box:',box);
const pursesIds = Object.keys(box.purses).length > 0 ? box.purses[storeStr] : [];
// console.log(pursesIds);

const term1 = readPursesTerm({
    masterRegistryUri: registryUri,
    contractId: storeStr,
    pursesIds: pursesIds || [],
  });

const readAllPursesResult = yield rchainToolkit.http.exploreDeploy(
    state.reducer.readOnlyUrl,
    {
      term: term1
    }
  )
// console.log('readAllPursesResult',readAllPursesResult);

const expr = JSON.parse(readAllPursesResult).expr;
const boxData = rchainToolkit.utils.rhoValToJs(expr ? expr[0] : {});
// console.log('boxData',boxData)

const purses =  boxData;
const pursesKeys = Object.keys(purses || {});
let readPursesDataResult;

if (pursesKeys.length > 0) {
    const term3 = readPursesDataTerm(
    {
      masterRegistryUri: registryUri,
      pursesIds: pursesKeys,
      contractId: storeStr,
    });

    readPursesDataResult = yield rchainToolkit.http.exploreDeploy(
      state.reducer.readOnlyUrl,
      {
        term: term3
      }
    )
  }
// console.log('readAllPursesDataResult',readPursesDataResult);

const rchainTokenValues = rchainToolkit.utils.rhoValToJs(JSON.parse(readBoxResult).expr[0]);

    let bagsData = Object();

if (readPursesDataResult) {
      bagsData = rchainToolkit.utils.rhoValToJs(JSON.parse(readPursesDataResult).expr[0]);

      // console.log('this is bagsData',bagsData);
      const newBagsData = {};

  Object.keys(bagsData).forEach(key => {
    const dataObject = JSON.parse(replaceAllBackSlash(bagsData[key]));

    Object.keys(dataObject).forEach(key => {
      newBagsData[addressFromPurseId(action.payload.registryUri, key)] = dataObject[key]
    })
    return;
  })

  // console.log('this is new bags data:',newBagsData);

  yield put (
    {
      type: 'SAVE_USER_NFT_DATA_COMPLETED',
      payload: newBagsData
    }
  )

  yield put(
    {
      type: "SET_LOADING",
      payload: false
    }
  );

  }
    return true;
};
      
  export const initSaga = function* () {
      yield takeLatest('INIT', load);
  }