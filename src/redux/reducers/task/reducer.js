import {
  ADD_TASK_REQUEST,
  ADD_TASK,
  DELETE_TASK,
  DELETE_REQUEST_TASK,
  TOGGLE_TASK_DONE,
  TASK_IMPORTANT_REQUEST,
  TASK_IMPORTANT,
  TASKS_REQUEST,
  TASKS
} from './types';


const initialState = {
  filter: 'all',
  term: '',
  todoData: [],
  loading: false
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

    case TASKS_REQUEST:
      return {...state, loading: true}

    case TASKS:
      return {...state, todoData: [...action.payload]};

    case ADD_TASK_REQUEST:

      return { ...state, loading: true }

    case ADD_TASK:
      return {...state, loading: false, todoData: [...state.todoData, action.payload]};

    case DELETE_REQUEST_TASK:
      return { ...state, loading: true }
    case DELETE_TASK:
      const id = action.payload;
      const idx = state.todoData.findIndex((el) => el.id === id);
      const newArray = [...state.todoData.slice(0, idx), ...state.todoData.slice(idx + 1)];
      return {
        ...state,
        loading: false,
        todoData: newArray
      };
    case TOGGLE_TASK_DONE:
      return {
        ...state,
        todoData: toggleProperty(state.todoData, action.payload, 'done')
      };

    case TASK_IMPORTANT_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case TASK_IMPORTANT:
      return {
        ...state,
        loading: false,
        // todoData: toggleProperty(state.todoData, action.payload.task, 'important')
      };

    default:
      return state;
  }
};

export default reducer;