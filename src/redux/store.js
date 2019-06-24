import { createStore, combineReducers } from 'redux';

// import rootReducer  from './reducers/todo/reducer';
import tasks from  './reducers/todo/reducer';
import filterTasks from './reducers/filter-todo/reducer';



const rootReducer = combineReducers({
  tasks,
  filterTasks,
});

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
// const store = createStore(rootReducer);
export default store