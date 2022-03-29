import { all } from 'redux-saga/effects';
import { initSaga } from './init';
import { uploadFileSaga } from './upload';

export const sagas = function* rootSaga() {
    yield all([
        initSaga(),
        uploadFileSaga()
    ])
}