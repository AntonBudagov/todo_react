import React, {useState} from "react";
import {connect} from 'react-redux';
import filterTodo from '../../redux/reducers/filter-task/actions';
import './search-panel.css';


const SearchPanel = (props) => {
    const [term, setTerm] = useState('');

    const onChangeSearch = (event) => {
        const term = event.target.value;
        setTerm(term);
        console.log(term);
        props.onSearchChange(term);
    };


    const searchText = 'Type here to search';
    const searchStyle = {
        fontSize: '20px'
    };
    return (<input
        onChange={onChangeSearch}
        className="form-control search-input"
        type="text"
        placeholder={searchText}
        tabIndex={1}
        value={term}
        style={searchStyle}/>)

};

const mapStateToProps = ({term}) => ({term});
// const mapStateToProps = state => ({
//   term: state.filterTasks.term
// });
const mapDispatchToProps = (dispatch) => ({
    onSearchChange: (payload) => dispatch(filterTodo.searchTodo(payload))
});


export default connect(mapStateToProps, mapDispatchToProps)(SearchPanel);
