import { put, takeEvery} from 'redux-saga/effects';
import Task from '../../../service/mock-task';
const API = new Task();

export function* fetchTasks() {
  try {
    const data  = yield API.getAllTask();
    yield put({ type: "TASKS", payload: data })

  } catch (e) {
    yield put({type: "FETCH_FAILED", e});
  }
};



export default function* rootSaga() {
  // yield all([fork(fetchTasks)]);
  yield takeEvery('TASKS_REQUEST', fetchTasks);
}