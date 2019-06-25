import {
  ADD_TASK,
  TOGGLE_TASK_DONE,
  TOGGLE_TASK_IMPORTANT,
  REMOVE_TASK
} from './types';

// const actions = Object.freeze({

let id = 100;
const actions = {
  addTodo: (label) => {
    return {
      type: ADD_TASK,
      id: id++,
      payload: label,
    }
  },

  removeTodo: (id) => {
    return {
      type: REMOVE_TASK,
      id
    }
  },

  toggleDone: (id) => {
    return {
      type: TOGGLE_TASK_DONE,
      payload: id,
    }
  },

  toggleImportant: (id) => {
    return {
      type: TOGGLE_TASK_IMPORTANT,
      payload: id,
    }
  }
};


export default actions