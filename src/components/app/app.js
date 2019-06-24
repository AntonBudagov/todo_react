import React, {useState} from 'react';
import {connect} from 'react-redux';
import SearchPanel from '../search-panel';
import AppHeader from '../app-header';
import TodoList from '../todo-list';
import ItemStatusFilter from '../items-status-filter';
import AddForm from '../item-add-form';
import './app.css'


import actions from './../../redux/reducers/todo/actions'

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
  ;
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
        {/*<SearchPanel*/}
        {/*onSearchChange={this.searchChange}/>*/}
        <ItemStatusFilter/>
      </div>
      <TodoList
        todos={todoData}
      />
      <AddForm/>
    </div>)
};

const mapStateToProps = state => ({
  todoData: filterItems(state.todoData, state.filter),
  filter: state.filter
});


const mapStateToAction = (dispatch) => ({
  // addItem: () => dispatch(actions.addTodo()),
  // onFilterItems: (filter) => dispatch(actions.filterTodo(filter))
});

export default connect(mapStateToProps, mapStateToAction)(App);
// export default connect(mapStateToProps)(class App extends Component {

//   // searchElement = (event) => {
//   //  // let searchQuery = event.target.value.toLowerCase();
//   //  // if (searchQuery === '') {
//   //  //   return this.state.todoData;
//   //  // }
//   //  // const d = [...this.state.todoData]
//   //  //  var displayedContacts = d.filter(function(el) {
//   //  //    var searchValue = el.label.toLowerCase();
//   //  //    return searchValue.indexOf(searchQuery) !== -1;
//   //  //  });
//   //  //  this.setState({
//   //  //    todoData: displayedContacts
//   //  //  });
//   //
//   // }
//   searchChange = (term) => {
//     this.setState({term})
//   };
//
//   searchElement(items, term) {
//     if (term === '') {
//       return items;
//     }
//     return items.filter((item) => item.label
//       .toLowerCase()
//       .indexOf(term.toLowerCase()) > -1)
//   }
//

//
//   render() {
//     // search
//     const {todoData, term, filter} = this.state;
//
//     // const visibleItems = this.searchElement(todoData, term);
//     const visibleItems = this._filterItems(this.searchElement(todoData, term), filter)
//     // this.filter(, filter);
//
//
//     console.log(this.props.state)
//
//     //
//     const doneCount = this.state.todoData
//       .filter((el) => el.done).length;
//     const todoCount = this.state.todoData.length - doneCount;
//
//     const isLoggedIn = false;
//     const loginBox = <div><b>Welcome Back</b></div>;
//     return (<div className="todo-app">
//       {isLoggedIn ? loginBox : ''}
//       <AppHeader toDo={todoCount} done={doneCount}/>
//       <div className="search-panel d-flex">
//         <SearchPanel
//           onSearchChange={this.searchChange}/>
//         <ItemStatusFilter filter={filter}
//                           onFilterChange={this.filterChange}/>
//       </div>
//       <TodoList
//         todos={visibleItems}
//         onDeleted={this.deleteItem}
//         onToggleImportant={this.onToggleImportant}
//         onToggleDone={this.onToggleDone}
//       />
//       <AddForm
//         onAdded={this.addItem}/>
//     </div>)
//   }
// })
