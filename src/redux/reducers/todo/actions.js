// const actions = Object.freeze({
//   ADD_TODO: "ADD_TODO",
//   addTodo: (text) => ({
//     type: actions.ADD_TODO,
//     text,
//   })
// });

const actions = {
  addTodo: (text) => {
    console.log(1);
    return {
      type: 'ADD_TODO',
      payload: text,
    }
  }
};

export default actions