import {
  ADD_TASK_REQUEST,
  ADD_TASK,

  TOGGLE_TASK_DONE,
  TOGGLE_TASK_IMPORTANT,
  REMOVE_TASK,


  TASKS_REQUEST,
  TASKS
} from './types';


let id = 100;
const actions = {

  getRequestTasks: () => ({type: TASKS_REQUEST}),
  getTasks: (data) => ({type: TASKS, payload: data}),


  // post task
  addRequestTask: (label) => ({type: ADD_TASK_REQUEST, payload: label}),
  addTask: (data) => ({type: ADD_TASK,  payload: data}),

  removeTask: (id) => {
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