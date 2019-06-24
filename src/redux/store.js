import { createStore } from 'redux'
import rootReducer  from './reducers/todo/reducer';
const store = createStore(rootReducer);
// const store = createStore(todoApp, window.STATE_FROM_SERVER)
export default store;