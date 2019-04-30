import React, {useState , useEffect} from "react";
import './search-panel.css'


const SearchPanel = (props) => {

  const {onSearchChange} = props;
  // I
  // let [term, setTerm] = useState('');
  // const onChangeSearch = (event) => {
  //   term = event.target.value;
  //   setTerm(term);
  //   onSearchChange(term);
  // };
  // II
  const [term, setTerm] = useState('');
  const onChangeSearch = (event) => {
    setTerm(event.target.value);
  };

  useEffect(() => {
    onSearchChange(term);
  });

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
      style={searchStyle}/>)

};

export default SearchPanel;