import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { all } from "redux-saga/effects";
import { composeWithDevTools } from "redux-devtools-extension";
import { createSelector } from "reselect";
import { CombinedState } from "redux";
import { DID, JWSSignature } from "dids";

import { sagas } from "./sagas";
import rootReducer from "./reducers";

const sagaMiddleware = createSagaMiddleware();

const sagasFunction = function* rootSaga() {
  try {
    yield all([sagas()]);
  } catch (err) {
    console.error("An error occured in sagas:", err);
  }
};

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(sagasFunction);

