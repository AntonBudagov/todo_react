import {
  ADD_TASK_REQUEST,
  ADD_TASK,
  TOGGLE_TASK_DONE,
  TOGGLE_TASK_IMPORTANT,
  REMOVE_TASK, TASKS_REQUEST,
  TASKS
} from './types';


const initialState = {
  filter: 'all',
  term: '',
  todoData: [],
  loading: false
};


const createTodoItem = (label) => {
  // console.log('dd', newTask);
  return {
    // id: newTask.id,
    label: label,
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

    case TASKS_REQUEST:
      return {
        ...state,
        loading: true
      }

    case TASKS:
      console.log('TASKS', action);
      return {
        ...state,
        todoData: [...action.payload]
      };


    case ADD_TASK_REQUEST:
      console.log(action);
      return { ...state, loading: true }

    case ADD_TASK:
      // console.log('ADD_TASK', action);
      return {...state, loading: false, todoData: [...state.todoData, createTodoItem(action.payload)]};

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