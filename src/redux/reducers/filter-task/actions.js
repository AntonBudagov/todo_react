import {SEARCH_TASK, SET_VISIBILITY_FILTER} from "./types";

const actions = {
  filterTodo: (filter) => {
    return {
      type: SET_VISIBILITY_FILTER,
      filter
    }
  },

  searchTodo: (term) => {
    return {
      type: SEARCH_TASK,
      term
    }
  }
};

export default actions;