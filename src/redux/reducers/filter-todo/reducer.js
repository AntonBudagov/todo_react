import {
  SET_VISIBILITY_FILTER,
  SEARCH_TODO
} from './types';


const initialState = {
  filter: 'all',
  term: ''
};



const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return {
        ...state,
        filter: action.filter
      };

    case SEARCH_TODO:
      return {
        ...state,
        term: action.term
      };

    default:
      return state;
  }
};

export default reducer;