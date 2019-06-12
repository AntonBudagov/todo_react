import actions from './actions'



const initialState  = {
  todoData: [
    {label: 'Drink Coffee', important: false, id: 23},
    {label: 'Make Awesome App', important: true, id: 43},
    {label: 'Have a lunch', important: false, id: 34}
  ]
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.ADD_TODO:
      // return {
      //   todoData: [...state.todoData, action.]
      // }
    default: return state;
  }
};

export default reducer;