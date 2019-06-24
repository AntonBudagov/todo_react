import {ADD_TODO, TOGGLE_TODO_DONE} from './actionTypes'
// const actions = Object.freeze({
//   ADD_TODO: "ADD_TODO",
//   addTodo: (text) => ({
//     type: actions.ADD_TODO,
//     text,
//   })
// });

const actions = {
  addTodo: (text) => {
    console.log('actions: addTodo', text);
    return {
      type: ADD_TODO,
      payload: text,
    }
  },

  toggleDone: (id) => {
    console.log('actions: toggleDone', id);
    return {
      type: TOGGLE_TODO_DONE,
      payload: id,
    }
  }
};



export default actions