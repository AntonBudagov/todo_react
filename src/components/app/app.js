import React from 'react';
import {connect} from 'react-redux';
import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import ItemStatusFilter from '../items-status-filter';
import AddForm from '../item-add-form';
import './app.css'


const searchElement = (items, term) => {
  if (term === '') {
    return items;
  }
  return items.filter((item) => item.label
    .toLowerCase()
    .indexOf(term.toLowerCase()) > -1)
};

const filterItems = (items, filter) => {
  switch (filter) {
    case 'all':
      return items;
    case 'active':
      return items.filter(({done}) => !done);
    case 'done':
      return items.filter((item) => item.done);
    default:
      return items;
  }
};


const App = (props) => {
  const {todoData} = props;

  const doneCount = todoData
    .filter((el) => el.done).length;
  const todoCount = todoData.length - doneCount;

  return (
    <div className="todo-app">
      <AppHeader toDo={todoCount} done={doneCount}/>
      <div className="search-panel d-flex">
        <SearchPanel/>
        <ItemStatusFilter/>
      </div>
      <TodoList todos={todoData}/>
      <AddForm/>
    </div>)
};

const mapStateToProps = state => ({
  todoData: filterItems(searchElement(state.tasks.todoData , state.filterTasks.term), state.filterTasks.filter),
});


export default connect(mapStateToProps, null)(App);

