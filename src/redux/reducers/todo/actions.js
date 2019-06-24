import {
  ADD_TODO,
  TOGGLE_TODO_DONE,
  TOGGLE_TODO_IMPORTANT,
  REMOVE_TODO
} from './types';

// const actions = Object.freeze({

let id = 100;
const actions = {
  addTodo: (label) => {
    return {
      type: ADD_TODO,
      id: id++,
      payload: label,
    }
  },

  removeTodo: (id) => {
    return {
      type: REMOVE_TODO,
      id
    }
  },

  toggleDone: (id) => {
    return {
      type: TOGGLE_TODO_DONE,
      payload: id,
    }
  },

  toggleImportant: (id) => {
    return {
      type: TOGGLE_TODO_IMPORTANT,
      payload: id,
    }
  }
};


export default actions