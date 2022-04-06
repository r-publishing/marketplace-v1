import { all } from "redux-saga/effects";
import { initSaga } from "./init";
import { uploadFileSaga } from "./upload";
import { publishSaga } from "./publish";
import { purchaseSaga } from "./purchase";
import { initStoreSaga } from "./initStore";
import { initWalletSaga } from "./initUserWallet";

export const sagas = function* rootSaga() {
  yield all([
    initSaga(),
    uploadFileSaga(),
    publishSaga(),
    purchaseSaga(),
    initStoreSaga(),
    initWalletSaga(),
  ]);
};
