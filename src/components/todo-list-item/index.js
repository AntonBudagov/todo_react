import React from 'react';
import './todo-list-item.css';


const TodoListItem = (props) => {

  const {
    label, onDeleted, onToggleDone, onToggleImportant,
    done, important
  } = props;
  let classNames = 'todo-list-item';

  if (done) classNames += ' done';
  if (important) classNames += ' important';

  return (<div>
        <span className={classNames}>
          <span className="todo-list-item-label"
                onClick={onToggleDone}>
            {label}
          </span>
        </span>
      <button type="button"
              onClick={onDeleted}
              className="btn btn-outline-danger btn-sm float-right">
        <i className="fa fa-trash-o"/>
      </button>
      <button type="button"
              onClick={onToggleImportant}
              className="btn btn-outline-success btn-sm float-right">
        <i className="fa fa-exclamation"/>
      </button>
    </div>
  )
};


export default TodoListItem;
