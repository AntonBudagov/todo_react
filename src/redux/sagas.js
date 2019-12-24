import {all} from 'redux-saga/effects';

import task from '../redux/reducers/task/saga';

export default function* rootSaga() {
  yield all[task()]
}