export default class Task {
  getAllTask = () => {
    return [
      {label: 'Drink Coffee', done: false, important: false, id: 23},
      {label: 'Make Awesome App', done: false, important: true, id: 43},
      {label: 'Have a lunch', done: true, important: false, id: 34}
    ]
  }
}