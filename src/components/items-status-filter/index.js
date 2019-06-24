import React, {useState} from 'react';
import {connect} from 'react-redux';
import actions from "../../redux/reducers/todo/actions";


const Index = (props) => {
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
  filter: state.filter
});
const mapDispatchToProps = (dispatch) => ({
  onFilterChange: (filter) => dispatch(actions.filterTodo(filter))
});


export default connect(mapStateToProps, mapDispatchToProps)(Index);
