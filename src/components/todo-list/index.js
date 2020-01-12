import React from "react";
import todoActions from "../../redux/reducers/task/actions";
import {connect} from "react-redux";
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
          onToggleImportant={() => onToggleImportant(id, item)}
          onToggleDone={() => onToggleDone(id)}
          onDeleted={() => onDeleted(id)}/>
      </li>
    )
  });
  const content = elements.length ? elements : <h4>not found tasks</h4>;
  return (
    <ul className="list-group todo-list">
      {content}
    </ul>
  )

};


const mapStateToProps = ({todoData}) => ({todoData});
const mapDispatchToProps  = {
  onToggleDone: (id) => todoActions.toggleDone(id),
  onToggleImportant: (id, task) => todoActions.toggleImportantRequest(id, task),
  onDeleted: (id) => todoActions.deleteRequestTask(id)
};


export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
