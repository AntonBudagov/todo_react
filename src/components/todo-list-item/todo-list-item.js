import React, {Component} from 'react';
import './todo-list-item.css';


export default class TodoListItem extends Component {


  render() {
    const {label, onDeleted, onToggleDone, onToggleImportant,
      done, important} = this.props;
    // const {done, important} = this.state;
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
        {/*this.onLabelClick.bind(this)*/}
        <button type="button"
                onClick={onDeleted}
                className="btn btn-outline-danger btn-sm float-right">
          <i className="fa fa-trash-o"></i>
        </button>
        <button type="button"
                onClick={onToggleImportant}
                className="btn btn-outline-success btn-sm float-right">
          <i className="fa fa-exclamation"></i>
        </button>
      </div>
    )
  }
}


// const TodoListItem = ({label, important = false}) => {
//   const style = {
//     color: important ? 'steelblue' : 'tomato',
//     fontWeight: important ? 'bold' : 'normal'
//   };
//   let classNames = 'todo-list-item';
//   // const {important} = this.state;
//   if (!important) {
//     classNames += ' done';
//   }
//   if (important) {
//     classNames += ' important';
//   }
//   return (<div>
//       <span className={classNames}>{label}</span>
//       <button type="button"
//               className="btn btn-outline-danger btn-sm float-right">
//         <i className="fa fa-trash-o"></i>
//       </button>
//       <button type="button"
//               className="btn btn-outline-success btn-sm float-right">
//         <i className="fa fa-exclamation"></i>
//       </button>
//     </div>
//   )
// };