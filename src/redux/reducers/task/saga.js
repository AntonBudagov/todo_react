import { put, takeEvery, fork, all, take, takeLatest} from 'redux-saga/effects';
import {ADD_TASK_REQUEST, TASKS_REQUEST, TASKS, ADD_TASK} from './types'
import Task from '../../../service/mock-task';
const API = new Task();


export function* fetchTasks() {
  try {
    const data  = yield API.list();
    yield put({ type: TASKS, payload: data })

  } catch (e) {
    yield put({type: "FETCH_FAILED", e});
  }
};

export function* addTask(action) {
  try {
    const data  = yield API.add(action.payload);

    yield put({ type: ADD_TASK, payload: data })

  } catch (e) {
    yield put({type: "FETCH_FAILED", e});
  }
};

function* watchFetchTasks() {
  yield takeEvery(TASKS_REQUEST, fetchTasks)
}

function* watchAddTask() {
  yield takeLatest(ADD_TASK_REQUEST, addTask)
}

export default function* rootSaga() {
  yield all([fork(watchFetchTasks), fork(watchAddTask)]);
  // yield takeEvery('TASKS_REQUEST', fetchTasks);
}