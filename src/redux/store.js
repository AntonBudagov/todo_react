import { createStore } from 'redux'
import rootReducer  from './reducers'
const store = createStore(rootReducer);
// const store = createStore(todoApp, window.STATE_FROM_SERVER)
export default store;