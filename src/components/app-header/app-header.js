import React from 'react';
import {connect} from 'react-redux';
import './app-header.css'


const AppHeader = ({toDo, done}) => {
  // const doneCount = this.state.todoData.filter((el) => el.done).length;
  return (
    <div className="app-header d-flex">
      <h1>Todo List</h1>
      <h2>{toDo} more to do, {done} done</h2>
    </div>
  )
};
export default AppHeader