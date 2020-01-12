import { put, takeEvery, fork, all, takeLatest} from 'redux-saga/effects';
import {
  ADD_TASK_REQUEST,
  TASKS_REQUEST,
  TASKS,
  ADD_TASK,
  DELETE_TASK,
  DELETE_REQUEST_TASK,
  TASK_IMPORTANT,
  TASK_IMPORTANT_REQUEST
} from './types'
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

export function* deleteTask(action) {

  try {
    const data  = yield API.delete(action.payload);
    // send action.payload  because data just {}
    yield put({ type: DELETE_TASK, payload: action.payload })

  } catch (e) {
    yield put({type: "FETCH_FAILED", e});
  }
};

export function* importantTask(action) {

  try {

    const data  = yield API.update(action.payload.id, action.payload.task);
    // send action.payload  because data just {}
    yield put({ type: TASK_IMPORTANT, payload: action.payload })

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

function* watchDeleteTask() {
  yield takeEvery(DELETE_REQUEST_TASK, deleteTask)
}

function* watchImportantTask() {
  yield takeEvery(TASK_IMPORTANT_REQUEST, importantTask)
}

export default function* rootSaga() {
  yield all([fork(watchFetchTasks), fork(watchAddTask), fork(watchDeleteTask), fork(watchImportantTask)]);
  // yield takeEvery('TASKS_REQUEST', fetchTasks);
}