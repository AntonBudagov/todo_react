import {
  ADD_TODO,
  TOGGLE_TODO_DONE,
  TOGGLE_TODO_IMPORTANT,
  REMOVE_TODO,
  SET_VISIBILITY_FILTER
} from './actionTypes';

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
  },

  filterTodo: (filter) => {
    return {
      type: SET_VISIBILITY_FILTER,
      filter
    }
  },
  VisibilityFilters: () => {
    return {
      SHOW_ALL: 'SHOW_ALL',
      SHOW_COMPLETED: 'SHOW_COMPLETED',
      SHOW_ACTIVE: 'SHOW_ACTIVE'
    }
  }
};


export default actions