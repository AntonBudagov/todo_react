import React, {Component} from 'react';

const filterButtons = [
  {name: 'all', label: 'All'},
  {name: 'active', label: 'Active'},
  {name: 'done', label: 'Done'}
];
export default class ItemStatusFilter extends Component {
  render() {
    const buttons = filterButtons.map((item) => {
      // Деструкторизацяи
      // в key передовать index плохая практика
      const isActive = false;
      const classNames = 'btn ' + (isActive ? 'btn-info' : 'btn-outline-secondary');
      return <button key={item.name}
                     type="button"
                     className={classNames}>{item.label}</button>
    });

    return (
      <div className="btn-group">
        {buttons}
      </div>
    );
  };
}

// const ItemStatusFilter = ({fi}) =>  {
//     const buttons = filterButtons.map((item) => {
//         // Деструкторизацяи
//         // в key передовать index плохая практика
//         const isActive = false;
//         const classNames = 'btn ' + (isActive ? 'btn-info' : 'btn-outline-secondary');
//         return <button key={item.name}
//            type="button"
//            className={classNames}>{item.label}</button>
//     });
//
//   return (
//     <div className="btn-group">
//       { buttons }
//     </div>
//   );
// };
// export default ItemStatusFilter;
