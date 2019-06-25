import {
  ADD_TASK,
  TOGGLE_TASK_DONE,
  TOGGLE_TASK_IMPORTANT,
  REMOVE_TASK
} from './types';


const initialState = {
  filter: 'all',
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


const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        todoData: [...state.todoData, createTodoItem(action.payload, action.id)]
      };
    case REMOVE_TASK:
      const id = action.id;
      const idx = state.todoData.findIndex((el) => el.id === id);
      const newArray = [...state.todoData.slice(0, idx), ...state.todoData.slice(idx + 1)];
      return {
        ...state,
        todoData: newArray
      };
    case TOGGLE_TASK_DONE:
      return {
        ...state,
        todoData: toggleProperty(state.todoData, action.payload, 'done')
      };
    case TOGGLE_TASK_IMPORTANT:
      return {
        ...state,
        todoData: toggleProperty(state.todoData, action.payload, 'important')
      };

    default:
      return state;
  }
};

export default reducer;