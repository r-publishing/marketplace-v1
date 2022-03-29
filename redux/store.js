import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { all } from 'redux-saga/effects';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createSelector } from 'reselect';
import { CombinedState } from 'redux';
import { DID, JWSSignature } from 'dids';

import { sagas } from './sagas';
import rootReducer from './reducers';

const sagaMiddleware = createSagaMiddleware();

const sagasFunction = function* rootSaga() {
    try {
      yield all([sagas()]);
    } catch (err) {
      console.error('An error occured in sagas:', err);
    }
  };

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(sagasFunction);

//   export const getPublicKey = createSelector(
//     (state) => state,
//     (state) => state.reducer.publicKey
//   );

//   export const getUser = createSelector(
//     (state) => state,
//     (state) => state.reducer.user
//   );
//   export const getPlatform = createSelector(
//     (state) => state,
//     (state) => state.reducer.platform
//   );
//   export const getPrivateKey = createSelector(
//     getPublicKey,
//     getPlatform,
//     (publicKey, platform) => {
//       return new Promise(async (resolve, reject) => {
//         if (["ios", "android"].includes(platform)) {
//           FingerprintAIO.isAvailable()
//           .then(available => {
//             FingerprintAIO.loadBiometricSecret({
//               description: "Allow the app to access your PrivateKey?",
//               disableBackup: true, // always disabled on Android
//             }).then(privateKey => {
//               resolve(privateKey)
//             })
//           })
//           .catch(err => {
//             console.info(
//               "Biometrics not available. Reason: " + JSON.stringify(err)
//             );
//             reject(err)
//           });
//         }
//         else {
//           const info = await SecureStoragePlugin.get({ key: publicKey })
//           const parsedInfo = JSON.parse(info.value)
//           resolve(parsedInfo.privateKey);
//         }
//       });
//     }
//   );
//   export const getBags = createSelector(
//     (state) => state,
//     (state) => state.reducer.bags
//   );
//   export const getBagsData = createSelector(
//     (state) => state,
//     (state) => state.reducer.bagsData
//   );
// //   export const getConnected = createSelector(
// //     (state) => state,
// //     (state): 'owner' | 'guest' => state.reducer.contractPublicKey === state.reducer.publicKey ? "owner" : "guest"
// //   );
  
//   export const getDocumentsCompleted = createSelector(
//     (state) => state,
//     (state) => {
//       const bagsData = state.reducer.bagsData;
//       const documentsComplete = {};
//       Object.keys(bagsData).forEach(bagId => {
//         const folder = bagsData[bagId];
//         if (
//           folder && folder.signatures && 
//           folder.signatures['0'] &&
//           folder.signatures['1']
//         ) {
//           documentsComplete[bagId] = folder;
//           return;
//         }
//       });
  
//       return documentsComplete;
//     }
//   );
  
//   export const getDocumentsAddressesInOrder = createSelector(
//     getBagsData,
//     (bagsData) => {
//       const addresses = Object.keys(bagsData).sort((a, b) => {
//         if (bagsData[a].date === bagsData[b].date) {
//           return 1;
//         } else {
//           return bagsData[a].date > bagsData[b].date ? 1 : -1
//         }
//       })
  
//       return addresses;
//     }
//   );
  
//   export const getDocumentsAddressesForSale = createSelector(
//     getBags,
//     getDocumentsAddressesInOrder,
//     (bags, $documentsAddressesInOrder) => {
//       const addresses = $documentsAddressesInOrder.filter((a) => {
//         let price = bags[a].price || 0;
//         return price > 0;
//       })
//       return addresses;
//     }
//   );
  
//   export const getOwnedDocumentsAddresses = createSelector(
//     getBags,
//     getUser,
//     getDocumentsAddressesInOrder,
//     (bags, user, $documentsAddressesInOrder) => {
//       const addresses = $documentsAddressesInOrder.filter((a) => {
//         return bags[a].boxId === user;
//       })
//       return addresses;
//     }
//   )
  
//   export const getDocumentsAwaitingSignature = createSelector(
//     getBagsData,
//     getPublicKey,
//     (bagsData, publicKey) => {
//       const documentsAwaitingSignature = {};
//       Object.keys(bagsData).forEach(bagId => {
//         const folder = bagsData[bagId];
  
//         if (
//           folder && folder.signatures &&
//           folder.signatures['0'] &&
//           !folder.signatures['1'] &&
//           folder.signatures['0'].publicKey !== publicKey
//         ) {
//           documentsAwaitingSignature[bagId] = folder;
//           return;
//         }
//       });
  
//       return documentsAwaitingSignature;
//     }
//   );
  