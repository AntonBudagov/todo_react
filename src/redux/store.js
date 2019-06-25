import { createStore, combineReducers } from 'redux';


import tasks from './reducers/task/reducer';
import filterTasks from './reducers/filter-task/reducer';


const rootReducer = combineReducers({
  tasks,
  filterTasks,
});

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
