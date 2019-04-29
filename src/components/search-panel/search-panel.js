import React, {Component, useState , useEffect} from "react";
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
// export default class SearchPanel extends Component {
//   state = {
//     term: '',
//   };
//   onChangeSearch = (event) => {
//     const term = event.target.value
//     this.setState({term});
//     this.props.onSearchChange(term)
//   }
//
//   render() {
//     // const {onSearchChange} = this.props;
//     const searchText = 'Type here to search';
//     const searchStyle = {
//       fontSize: '20px'
//     };
//   return (<input
//     onChange={this.onChangeSearch}
//     className="form-control search-input"
//     type="text"
//     placeholder={searchText}
//     tabIndex={1}
//     style={searchStyle}/>)
//   }
// }
const SearchPanel = (props) => {


  const {onSearchChange} = props;

  let [term, setTerm] = useState('');
  const onChangeSearch = (event) => {
    // term = ;
    setTerm(event.target.value);
    // onSearchChange(term);
  };

  useEffect(() => {
    onSearchChange(term);
  }, [term])


    // const {onSearchChange} = this.props;
    const searchText = 'Type here to search';
    const searchStyle = {
      fontSize: '20px'
    };
    return (<input
      value={term}
      onChange={onChangeSearch}
      className="form-control search-input"
      type="text"
      placeholder={searchText}
      tabIndex={1}
      style={searchStyle}/>)

};

export default SearchPanel;