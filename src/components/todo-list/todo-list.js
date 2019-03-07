import React, {Component} from "react";
import TodoListItem from '../todo-list-item'
import './todo-list.css';

// -----------------------------------------------------------//
// const TodoList = ({todos}) => {
//     const elements = todos.map((item) => {
//         // Деструкторизацяи
//         // в key передовать index плохая практика
//         const {id, ...itemProps} = item;
//         return (
//             <li key={id} className="list-group-item">
//                 <TodoListItem {...itemProps} />
//             </li>
//         )
//     });
//     return (
//         <ul className="list-group todo-list">
//             {elements}
//         </ul>
//     )
// };
// export default TodoList
// -----------------------------------------------------------//
export default class TodoList extends Component {
    render() {
        const {todos, onDeleted, onToggleDone, onToggleImportant} = this.props;
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
}
