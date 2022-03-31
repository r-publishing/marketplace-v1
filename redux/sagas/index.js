import { all } from "redux-saga/effects";
import { initSaga } from "./init";
import { uploadFileSaga } from "./upload";
import { publishSaga } from "./publish";

export const sagas = function* rootSaga() {
  yield all([initSaga(), uploadFileSaga(), publishSaga()]);
};
