import actions from './actions'
import {ADD_TODO, TOGGLE_TODO_DONE} from './actionTypes';



const toggleProperty = (arr, id, propName) => {
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

//   onToggleDone = (id) => {
//     this.setState(({todoData}) => {
//       console.log('onToggleDone', id)
//       return {
//         todoData: this.toggleProperty(todoData, id, 'important')
//       }
//     });
//   };


const initialState  = {
  filter: 'done',
  term: '',
  todoData: [
    {label: 'Drink Coffee', important: false, id: 23},
    {label: 'Make Awesome App', important: true, id: 43},
    {label: 'Have a lunch', important: false, id: 34}
  ]
};
let maxId = 100;
const reducer = (state = initialState, action) => {
  // if (typeof state === 'undefined') {
  //   return initialState
  // }

  switch (action.type) {
    case ADD_TODO: {
      return {
        todoData: [
          ...state.todoData, {
            label: action.payload,
            completed: false,
            id: maxId++
          }
        ]
      }
    }
    case TOGGLE_TODO_DONE: {
      return {
        todoData: toggleProperty(state.todoData, action.id, 'done')
      }
    }


    default: return state;
  }
};

export default reducer;