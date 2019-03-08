import React, {Component} from 'react';


export default class ItemStatusFilter extends Component {
  filterButtons = [
    {name: 'all', label: 'All'},
    {name: 'active', label: 'Active'},
    {name: 'done', label: 'Done'}
  ];


  render() {
    const {filter, onFilterChange} = this.props;
    const buttons = this.filterButtons.map((item) => {
      // Деструкторизацяи
      // в key передовать index плохая практика
      const isActive = filter === item.name;
      // const classNames = 'btn ' + isActive ? 'btn-info': 'btn-outline-secondary';
      const clazz = isActive ? 'btn-info': 'btn-outline-secondary';
      return <button key={item.name}
                     type="button"
                     onClick={() => onFilterChange(item.name)}
                     className={`btn ${clazz}`}>{item.label}</button>
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
