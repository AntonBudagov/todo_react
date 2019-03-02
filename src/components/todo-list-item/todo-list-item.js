import React, {Component} from 'react';
import './todo-list-item.css';
// props
// props.label

export default class TodoListItem extends Component {

  // constructor() {
  //   super();
  //   this.state = {
  //     done: false
  //   }
  // this.onLabelClick = () => {
  //   console.log('Done:', this.props.label)
  // }
  // }
  // or
  state = {
    done: false,
    important: false
  }
  onLabelClick = () => {
    this.setState(({done}) => {
      return {
        done: !done
      }
    })
    // console.log('Done:', this.props.label)
  }
  onMarkImportant = () => {
    this.setState((state) => {
      return {
        important: !state.important
      }
    })
  };

  render() {
    const {label, onDeleted} = this.props;
    const {done, important} = this.state;
    let classNames = 'todo-list-item';

    if (done) classNames += ' done';
    if (important) classNames += ' important';

    return (<div>
        <span className={classNames}>
          <span className="todo-list-item-label"
                onClick={this.onLabelClick}>
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
                onClick={this.onMarkImportant}
                className="btn btn-outline-success btn-sm float-right">
          <i className="fa fa-exclamation"></i>
        </button>
      </div>
    )
  }
}
//     // constructor() {
//     //     super();
//     //
//     //     this.onLabelClick = () => {
//     //         console.log('Done:', this.props.label)
//     //     }
//     //     this.state = {
//     //     done: false
//     // }
//     // or
//     state = {
//         done: false,
//         important: false
//     };
//     onLabelClick = () => {
//         // console.log('Done:', this.props.label)
//         this.setState(({done}) => {
//             return {
//                 done: !done
//             }
//         })
//     };
//     onMarkImportant = () => {
//         this.setState((state) => {
//             return {
//                 important: !state.important
//             }
//         })
//     };
//
//     render() {
//         const {label, onDeleted} = this.props;
//         // const style = {
//         //     color: important ? 'steelblue' : 'black',
//         //     fontWeight: important ? 'bold' : 'normal'
//         // };
//         let classNames = 'todo-list-item';
//         const {done, important} = this.state;
//         if (done) {
//             classNames += ' done';
//         }
//         if (important) {
//             classNames += ' important';
//         }
//         return (
//             <div className={classNames}>
//                 <span onClick={this.onLabelClick} className="todo-list-item-label"> {label}</span>
//                 <button onClick={onDeleted} type="button" className="btn btn-outline-danger btn-sm float-right">
//                     <i className="fa fa-trash-o"></i>
//                 </button>
//                 <button onClick={this.onMarkImportant} type="button"
//                         className="btn btn-outline-success btn-sm float-right">
//                     <i className="fa fa-exclamation"></i>
//                 </button>
//             </div>
//         );
//     }
// }
//
//


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