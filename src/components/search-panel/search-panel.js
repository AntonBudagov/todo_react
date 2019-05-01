import React, {useEffect} from "react";
import './search-panel.css'


const SearchPanel = (props) => {

  const {term, setTerm} = props;

  const onChangeSearch = (event) => {
    setTerm(event.target.value);
  };

  useEffect(() => {}, [term]);

    const searchText = 'Type here to search';
    const searchStyle = { fontSize: '20px'};

    return (<input
      onChange={onChangeSearch}
      className="form-control search-input"
      type="text"
      placeholder={searchText}
      tabIndex={1}
      style={searchStyle}/>)

};

export default SearchPanel;