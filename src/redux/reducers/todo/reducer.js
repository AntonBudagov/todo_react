import actions from './actions'



const initialState  = {
  filter: 'done',
  term: '',
  todoData: [
    {label: 'Drink Coffee', important: false, id: 23},
    {label: 'Make Awesome App', important: true, id: 43},
    {label: 'Have a lunch', important: false, id: 34}
  ]
};
const reducer = (state, action) => {
  if (typeof state === 'undefined') {
    return initialState
  }
  switch (action.type) {
    case 'ADD_TODO': {
      console.log('ADD_TODO',action);
      return {
        todoData: [
          ...state.todoData, {
            label: action.text,
            completed: false
          }
        ]
      }
    }

    default: return state;
  }
};

export default reducer;