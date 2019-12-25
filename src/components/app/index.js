import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import ItemStatusFilter from '../items-status-filter';
import AddForm from '../item-add-form';
import actions from "../../redux/reducers/task/actions";
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
  const {todoData, getTasks} = props;

  const doneCount = todoData
    .filter((el) => el.done).length;
  const todoCount = todoData.length - doneCount;

  useEffect(() => {
   getTasks()
  }, [getTasks]);

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

// const mapDispatchToProps = {
//   getTasks: () => actions.getRequestTasks()
// };


export default connect(mapStateToProps, {getTasks: actions.getRequestTasks})(App);

