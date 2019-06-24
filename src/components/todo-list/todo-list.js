import React from "react";
import TodoListItem from '../todo-list-item'
import './todo-list.css';
import actions from "../../redux/reducers/todo/actions";
import connect from "react-redux/es/connect/connect";


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


const mapStateToProps = ({todoData}) => ({todoData});
const mapStateToAction = (dispatch) => ({
  onToggleDone: (id) => dispatch(actions.toggleDone(id)),
  onToggleImportant: (id) => dispatch(actions.toggleImportant(id)),
  onDeleted: (id) => dispatch(actions.removeTodo(id))
});

export default connect(mapStateToProps,mapStateToAction)(TodoList);