import React, {Component} from 'react';
import SearchPanel from '../search-panel';
import AppHeader from '../app-header';
import TodoList from '../todo-list';
import ItemStatusFilter from '../items-status-filter';
import AddForm from '../item-add-form';

import './app.css'

export default class App extends Component {
  maxId = 100;
  state = {
    term: '',
    filter: 'all',
    // done: false,
    // important: false,
    todoData: [
      this.createTodoItem('Drink Coffee'),
      this.createTodoItem('Make Awesome App'),
      this.createTodoItem('Have a lunch'),
      // {label: 'Drink Coffee', important: false, id: 23},
      // {label: 'Make Awesome App', important: true, id: 43},
      // {label: 'Have a lunch', important: false, id: 34}
    ]
  };


  // searchElement = (event) => {
  //  // let searchQuery = event.target.value.toLowerCase();
  //  // if (searchQuery === '') {
  //  //   return this.state.todoData;
  //  // }
  //  // const d = [...this.state.todoData]
  //  //  var displayedContacts = d.filter(function(el) {
  //  //    var searchValue = el.label.toLowerCase();
  //  //    return searchValue.indexOf(searchQuery) !== -1;
  //  //  });
  //  //  this.setState({
  //  //    todoData: displayedContacts
  //  //  });
  //
  // }
  searchChange = (term) => {
    this.setState({term})
  };

  searchElement(items, term) {
    if (term === '') {
      return items;
    }
    return items.filter((item) => item.label
      .toLowerCase()
      .indexOf(term.toLowerCase()) > -1)
  }

  filterChange = (filter) => {
    this.setState({filter})
  }

  _filterItems(items, filter) {
    switch (filter) {
      case 'all':
        return items;
        // console.log(1);
        break;
      case 'active':
        return items.filter(({done}) => !done)
        // console.log(2);
        break;
      case 'done':
        return items.filter((item) => item.done)
        // console.log(3);
        break;
      default:
        return items;
    }
  }


  createTodoItem(label) {
    return {
      label,
      important: false,
      done: false,
      id: this.maxId++
    }
  }

  toggleProperty(arr, id, propName) {
    const idx = arr.findIndex((el) => el.id === id);
    const oldItem = arr[idx];
    // update object
    const newItem = {...oldItem, [propName]: !oldItem[propName]};
    // create new array
    const newArray = [
      ...arr.slice(0, idx),
      newItem,
      ...arr.slice(idx + 1)];
    return newArray
  }

  onToggleImportant = (id) => {
    this.setState(({todoData}) => {
      const idx = todoData.findIndex((el) => el.id === id);
      const oldItem = todoData[idx];
      // update object
      const newItem = {...oldItem, done: !oldItem.done};
      // create new array
      const newArray = [
        ...todoData.slice(0, idx),
        newItem,
        ...todoData.slice(idx + 1)];
      return {
        todoData: newArray
      }
    });
    console.log('onToggleImportant', id)
  };

  onToggleDone = (id) => {
    this.setState(({todoData}) => {
      console.log('onToggleDone', id)
      return {
        todoData: this.toggleProperty(todoData, id, 'important')
      }
    });
  };

  addItem = (text) => {
    // generate id
    // const newItem = {
    //   label:  text,
    //   important: false,
    //   id: this.maxId++
    // };
    const newItem = this.createTodoItem(text);

    this.setState(({todoData}) => {
      const newArray = [...todoData, newItem]
      return {
        todoData: newArray
      }
    })
  }
  deleteItem = (id) => {
    console.log(id);
    // // плохая практика так как мы меняем state
    // this.setState(({todoData}) => {
    //     const idx = todoData.findIndex((el) => el.id === id);
    //     return todoData.splice(idx, 1)
    // })
    // best way
    this.setState(({todoData}) => {
      const idx = todoData.findIndex((el) => el.id === id);
      // const before = todoData.slice(0, idx);
      // const after =  todoData.slice(idx + 1);
      const newArray = [...todoData.slice(0, idx), ...todoData.slice(idx + 1)]
      return {
        todoData: newArray
      }
    })

  };

  render() {
    // search
    const {todoData, term, filter} = this.state;

    // const visibleItems = this.searchElement(todoData, term);
    const visibleItems = this._filterItems(this.searchElement(todoData, term), filter)
    // this.filter(, filter);


    //
    const doneCount = this.state.todoData
      .filter((el) => el.done).length;
    const todoCount = this.state.todoData.length - doneCount;

    const isLoggedIn = false;
    const loginBox = <div><b>Welcome Back</b></div>;
    return (<div className="todo-app">
      {isLoggedIn ? loginBox : ''}
      <AppHeader toDo={todoCount} done={doneCount}/>
      <div className="search-panel d-flex">
        <SearchPanel
          onSearchChange={this.searchChange}/>
        <ItemStatusFilter filter={filter}
                          onFilterChange={this.filterChange}/>
      </div>
      <TodoList
        todos={visibleItems}
        onDeleted={this.deleteItem}
        onToggleImportant={this.onToggleImportant}
        onToggleDone={this.onToggleDone}
      />
      <AddForm
        onAdded={this.addItem}/>
    </div>)
  }
}
// const App = () => {
//     const isLoggedIn = false;
//     const loginBox = <div><b>Welcome Back</b></div>;
//     const todoData = [
//         {label: 'Drink Coffee', important: false, id: 23},
//         {label: 'Make Awesome App', important: true, id: 43},
//         {label: 'Have a lunch', important: false, id: 34}
//     ];
//
//     return (
//
//         <div className="todo-app">
//             {isLoggedIn ? loginBox : ''}
//             <AppHeader/>
//             <div className="search-panel d-flex">
//                 <SearchPanel/>
//                 <ItemStatusFilter/>
//             </div>
//             <TodoList
//                 todos={todoData}
//                 onDeleted={(id) => console.log('del', id)}
//             />
//         </div>
//     )
// };
//
// export default App