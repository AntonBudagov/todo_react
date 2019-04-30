import React, {useState} from 'react';
import SearchPanel from '../search-panel';
import AppHeader from '../app-header';
import TodoList from '../todo-list';
import ItemStatusFilter from '../items-status-filter';
import AddForm from '../item-add-form';

import './app.css';


const App = () => {

  const createTodoItem = (label, customId) => {
    return {
      label,
      important: false,
      done: false,
      id: customId ? customId: id

    }
  };

  const [term, setTerm] = useState('');
  const [filter, setSetFilter] = useState('all');
  const [id, setId] = useState(100);
  const [todoData, setTodo] = useState([
    createTodoItem('Drink Coffee', 31),
    createTodoItem('Make Awesome App', 32),
    createTodoItem('Learn React App', 33)]);


  const searchChange = (term) => {
    setTerm(term);
  };

  const searchElement = (items, term) => {
    if (term === '') {
      return items;
    }
    return items.filter((item) => item.label
      .toLowerCase()
      .indexOf(term.toLowerCase()) > -1)
  };

  const filterChange = (filter) => setSetFilter(filter);

  const _filterItems = (items, filter) => {
    switch (filter) {
      case 'all': return items;
      case 'active': return items.filter(({done}) => !done);
      case 'done': return items.filter((item) => item.done)
      default: return items;
    }
  };


  const toggleProperty = (arr, id, propName) => {
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
  };

  const onToggleDone = (id) => {
    // const idx = todoData.findIndex((el) => el.id === id);
    // const oldItem = todoData[idx];
    // // update object
    // const newItem = {...oldItem, done: !oldItem.done};
    // // create new array
    // const newArray = [
    //   ...todoData.slice(0, idx),
    //   newItem,
    //   ...todoData.slice(idx + 1)];
    // // set new array
    // setTodo(newArray)
    const newArray = toggleProperty(todoData, id, 'done');
    setTodo(newArray)
  };

  const onToggleImportant = (id) => {
    const newArray = toggleProperty(todoData, id, 'important');
    setTodo(newArray)
  };

  const addItem = (text) => {
    setId(1 + id);
    const newItem = createTodoItem(text);
    const newArray = [...todoData, newItem];
    setTodo(newArray);
  };

  const deleteItem = (id) => {
    const idx = todoData.findIndex((el) => el.id === id);
    const newArray = [...todoData.slice(0, idx), ...todoData.slice(idx + 1)]
    setTodo(newArray);
  };

  const visibleItems = _filterItems(searchElement(todoData, term), filter);
  const doneCount = todoData.filter((el) => el.done).length;
  const todoCount = todoData.length - doneCount;
  const isLoggedIn = false;
  const loginBox = <div><b>Welcome Back</b></div>;

  return (<div className="todo-app">
    {isLoggedIn ? loginBox : ''}
    <AppHeader toDo={todoCount} done={doneCount}/>
    <div className="search-panel d-flex">
      <SearchPanel
        onSearchChange={searchChange}/>
      <ItemStatusFilter filter={filter}
                        onFilterChange={filterChange}/>
    </div>
    <TodoList
      todos={visibleItems}
      onDeleted={deleteItem}
      onToggleImportant={onToggleImportant}
      onToggleDone={onToggleDone}
    />
    <AddForm
      onAdded={addItem}/>
  </div>)

};

export default App;
