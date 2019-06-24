import {ADD_TODO, TOGGLE_TODO_DONE, TOGGLE_TODO_IMPORTANT, REMOVE_TODO} from './actionTypes';


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

//   onToggleDone = (id) => {
//     this.setState(({todoData}) => {
//       console.log('onToggleDone', id)
//       return {
//         todoData: this.toggleProperty(todoData, id, 'important')
//       }
//     });
//   };


//   deleteItem = (id) => {
//     console.log(id);
//     // // плохая практика так как мы меняем state
//     // this.setState(({todoData}) => {
//     //     const idx = todoData.findIndex((el) => el.id === id);
//     //     return todoData.splice(idx, 1)
//     // })
//     // best way
//     this.setState(({todoData}) => {
//       const idx = todoData.findIndex((el) => el.id === id);
//       // const before = todoData.slice(0, idx);
//       // const after =  todoData.slice(idx + 1);
//       const newArray = [...todoData.slice(0, idx), ...todoData.slice(idx + 1)]
//       return {
//         todoData: newArray
//       }
//     })
//
//   };


const initialState = {
  filter: 'done',
  term: '',
  todoData: [
    createTodoItem('Drink Coffee 2', 21),
    {label: 'Drink Coffee', done: false, important: false, id: 23},
    {label: 'Make Awesome App', done: false, important: true, id: 43},
    {label: 'Have a lunch', done: false, important: false, id: 34}
  ]
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        todoData: [
          ...state.todoData, createTodoItem(action.payload, action.id)
        ]
      };
    case REMOVE_TODO:
      const id = action.id;
      const idx = state.todoData.findIndex((el) => el.id === id);
      const newArray = [... state.todoData.slice(0, idx), ... state.todoData.slice(idx + 1)]
      return {
        todoData: newArray
      };
    case TOGGLE_TODO_DONE:
      return {
        todoData: toggleProperty(state.todoData, action.payload, 'done')
      };
    case TOGGLE_TODO_IMPORTANT:
      return {
        todoData: toggleProperty(state.todoData, action.payload, 'important')
      };

    default:
      return state;
  }
};

export default reducer;