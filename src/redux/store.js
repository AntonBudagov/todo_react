import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import createSagaMiddleware  from 'redux-saga';


import tasks from './reducers/task/reducer';
import filterTasks from './reducers/filter-task/reducer';

import rootSaga from '../redux/reducers/task/saga';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleware = createSagaMiddleware();
const rootReducer = combineReducers({
  tasks,
  filterTasks,
});

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(sagaMiddleware)));
sagaMiddleware.run(rootSaga);


export default store;
