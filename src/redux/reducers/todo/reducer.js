import {ADD_TODO, TOGGLE_TODO_DONE, TOGGLE_TODO_IMPORTANT, REMOVE_TODO, SET_VISIBILITY_FILTER} from './actionTypes';


const initialState = {
  filter: 'done',
  term: '',
  todoData: [
    // createTodoItem('Drink Coffee 2', 21),
    {label: 'Drink Coffee', done: false, important: false, id: 23},
    {label: 'Make Awesome App', done: false, important: true, id: 43},
    {label: 'Have a lunch', done: true, important: false, id: 34}
  ]
};


const createTodoItem = (label, id) => {
  return {
    id,
    label,
    important: false,
    done: false
  }
};

const toggleProperty = (arr, id, propName) => {
  // you can use index instead ID
  const idx = arr.findIndex((el) => el.id === id);
  const oldItem = arr[idx];
  // update object
  const newItem = {...oldItem, [propName]: !oldItem[propName]};
  // create new array
  const newArray = [
    ...arr.slice(0, idx),
    newItem,
    ...arr.slice(idx + 1)];
  return newArray
};


const searchElement = (items, term) => {
  if (term === '') {
    return items;
  }
  return items.filter((item) => item.label
    .toLowerCase()
    .indexOf(term.toLowerCase()) > -1)
}


const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todoData: [
          ...state.todoData, createTodoItem(action.payload, action.id)
        ]
      };
    case REMOVE_TODO:
      const id = action.id;
      const idx = state.todoData.findIndex((el) => el.id === id);
      const newArray = [... state.todoData.slice(0, idx), ... state.todoData.slice(idx + 1)]
      return {
        ...state,
        todoData: newArray
      };
    case TOGGLE_TODO_DONE:
      return {
        ...state,
        todoData: toggleProperty(state.todoData, action.payload, 'done')
      };
    case TOGGLE_TODO_IMPORTANT:
      return {
        ...state,
        todoData: toggleProperty(state.todoData, action.payload, 'important')
      };

    case SET_VISIBILITY_FILTER:
      // const visibleItems = filterItems(searchElement(state.todoData, ''), action.filter);
      return {
        ...state,
        filter: action.filter,
        // todoData: filterItems(state.todoData, action.filter)
      };

    default:
      return state;
    // return {
    //   term: '',
    //   filter: state.filter,
    //   todoData: filterItems(state.todoData, state.filter)
    //
    // };
  }
};

export default reducer;