import React, {Component} from "react";
import TodoListItem from '../todo-list-item'
import './todo-list.css';


const TodoList = (props) => {

  const {todos, onDeleted, onToggleDone, onToggleImportant} = props;
  const elements = todos.map((item) => {
    // Деструкторизацяи
    // в key передовать index плохая практика
    const {id, ...itemProps} = item;
    return (
      <li key={id} className="list-group-item">
        <TodoListItem
          {...itemProps}
          onToggleImportant={() => onToggleImportant(id)}
          onToggleDone={() => onToggleDone(id)}
          onDeleted={() => onDeleted(id)}/>
      </li>
    )
  });
  return (
    <ul className="list-group todo-list">
      {elements}
    </ul>
  )

};

export default TodoList;