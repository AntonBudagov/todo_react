import React from 'react';
import {connect} from 'react-redux';
import actions from '../../redux/reducers/filter-task/actions';


const ItemStatusFilter = (props) => {
  const filterButtons = [
    {name: 'all', label: 'All'},
    {name: 'active', label: 'Active'},
    {name: 'done', label: 'Done'}
  ];
  const {filter, onFilterChange} = props;

  const buttons = filterButtons.map((item) => {
    // Деструкторизацяи
    // в key передовать index плохая практика
    const isActive = filter === item.name;
    // const classNames = 'btn ' + isActive ? 'btn-info': 'btn-outline-secondary';
    const clazz = isActive ? 'btn-info' : 'btn-outline-secondary';
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



const mapStateToProps = state => ({
  filter: state.filterTasks.filter
});
const mapDispatchToProps = (dispatch) => ({
  onFilterChange: (filter) => dispatch(actions.filterTodo(filter))
});


export default connect(mapStateToProps, mapDispatchToProps)(ItemStatusFilter);
