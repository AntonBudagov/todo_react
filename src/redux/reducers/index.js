import {ADD_TODO} from './todo/actionTypes'


const initialState  = {
  todoData: [
    {label: 'Drink Coffee', important: false, id: 23},
    {label: 'Make Awesome App', important: true, id: 43},
    {label: 'Have a lunch', important: false, id: 34}
  ]
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO: {

    }
    default: return state;
  }
};

export default reducer;