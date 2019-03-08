import React, {Component} from "react";
import './search-panel.css'

// const SearchPanel = () => {
//
//
//   const searchText = 'Type here to search';
//   const searchStyle = {
//     fontSize: '20px'
//   };
//   return <input
//     className="form-control search-input"
//     type="text"
//     placeholder={searchText}
//     tabIndex={1}
//     style={searchStyle}/>
// };
//
// export default SearchPanel;
export default class SearchPanel extends Component {
  state = {
    term: '',
  };
  onChangeSearch = (event) => {
    const term = event.target.value
    this.setState({term});
    this.props.onSearchChange(term)
  }

  render() {
    // const {onSearchChange} = this.props;
    const searchText = 'Type here to search';
    const searchStyle = {
      fontSize: '20px'
    };
  return (<input
    onChange={this.onChangeSearch}
    className="form-control search-input"
    type="text"
    placeholder={searchText}
    tabIndex={1}
    style={searchStyle}/>)
  }
}