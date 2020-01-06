import {
  ADD_TASK_REQUEST,
  ADD_TASK,

  TOGGLE_TASK_DONE,
  TOGGLE_TASK_IMPORTANT,

  DELETE_REQUEST_TASK,
  DELETE_TASK,

  TASKS_REQUEST,
  TASKS
} from './types';


let id = 100;
const actions = {

  getRequestTasks: () => ({type: TASKS_REQUEST}),
  getTasks: (data) => ({type: TASKS, payload: data}),


  // post task
  addRequestTask: (label) => ({type: ADD_TASK_REQUEST, payload: label}),
  addTask: (label) => ({type: ADD_TASK,  payload: label}),

  // delete task

  deleteRequestTask: (id) => ({type: DELETE_REQUEST_TASK, payload: id}),
  deleteTask: (id) => ({type: DELETE_TASK, payload: id}),

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