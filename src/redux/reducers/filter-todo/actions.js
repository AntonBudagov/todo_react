import {SEARCH_TODO, SET_VISIBILITY_FILTER} from "./types";

const actions = {
  filterTodo: (filter) => {
    return {
      type: SET_VISIBILITY_FILTER,
      filter
    }
  },

  searchTodo: (term) => {
    return {
      type: SEARCH_TODO,
      term
    }
  }
};

export default actions;