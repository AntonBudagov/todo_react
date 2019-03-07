import React, {Component} from "react";
import './app-header.css'
export default class AppHeader extends Component {

  render() {
    const {toDo, done} = this.props;
    return (
      <div className="app-header d-flex">
        <h1>Todo List</h1>
        <h2>{toDo} more to do, {done} done</h2>
      </div>
    )
  }
};

//
// const AppHeader = () => {
//   const doneCount = this.state.todoData.filter((el) => el.done).length;
//   return (
//     <div className="app-header d-flex">
//       <h1>Todo List</h1>
//       <h2>{1} more to do, {doneCount} done</h2>
//     </div>
//   )
// };
// export default AppHeader