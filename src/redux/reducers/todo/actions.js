const actions = Object.freeze({
  ADD_TODO: "ADD_TODO",
  addTodo: (todo) => ({
    type: actions.ADD_TODO,
    todo,
  })
})

export default actions