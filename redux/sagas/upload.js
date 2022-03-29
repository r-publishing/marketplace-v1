import { put, takeEvery } from 'redux-saga/effects';
import * as rchainToolkit from 'rchain-toolkit';
import { deflate } from 'pako';

import { store } from '../store';
import replacer from '../../utils/replacer';
import prepareDeploy from '../../utils/prepareDeploy';
import waitForUnforgeable from '../../utils/waitForUnforgeable';
//import validAfterBlockNumber from '../../utils/validAfterBlockNumber';
//import { getPrivateKey } from '../index';
const { createPursesTerm } = require('rchain-token');

const uploadFile = function*(action) {
    console.log('uploading file', action.payload);
    let user = action.payload.user;
    const newBagId = action.payload.id;
    const state = store.getState();

    const contractId = action.payload.contractId;
    const privateKey = action.payload.privateKey;
    console.log('checking private key',action.payload.privateKey);
    const publicKey = rchainToolkit.utils.publicKeyFromPrivateKey(privateKey);

    const fileDocument = action.payload.file;
  

    localStorage.setItem('loading', JSON.stringify(true));

    const documentAsJson = JSON.stringify(fileDocument);

    const payload = {
        purses: {
            [newBagId]: {
                id: newBagId,
                boxId: user,
                type: '0',
                quantity: 1,
                price: null
            }
        },
        data: {
            [newBagId]: documentAsJson
        },
        masterRegistryUri: 't3t3yg8aw6gj4h46bf97cjegwrfps1m3gq7ogp4dtjrr9aryg6h514', 
        contractId: contractId,
        boxId: user
    };

    console.log(payload);

    const term = createPursesTerm(payload);

    console.log('state before finalized block', state.reducer);

    let validAfterBlockNumberResponse;
  try {
    validAfterBlockNumberResponse = JSON.parse(
      yield rchainToolkit.http.blocks(state.reducer.readOnlyUrl, {
        position: 1,
      })
    )[0].blockNumber;
  } catch (err) {
    console.log(err);
    throw new Error('Unable to get last finalized block');
  }

  console.log('validAfterBlockNumber', validAfterBlockNumberResponse);

  const timestamp = new Date().getTime();

  const pd = yield prepareDeploy(
      state.reducer.readOnlyUrl,
      publicKey, 
      timestamp
  )

  const deployOptions = yield rchainToolkit.utils.getDeployOptions(
    'secp256k1',
    timestamp,
    term,
    privateKey,
    publicKey,
    1,
    4000000000,
    validAfterBlockNumberResponse
  )

  try {
    const deployResponse = yield rchainToolkit.http.deploy(state.reducer.validatorUrl, deployOptions);
    // if (deployResponse.startsWith('"Success!')) {
    //   Swal.fire({
    //     text: 'Upload is in progress',
    //     showConfirmButton: false,
    //   });
    // }

    yield waitForUnforgeable(JSON.parse(pd).names[0], state.reducer.readOnlyUrl);
  } catch(err){
    console.info("Unable to deploy");
    console.error(err);
  }

  console.log(state);

  return true;
};

export const uploadFileSaga = function*() {
    yield takeEvery('UPLOAD', uploadFile);
}