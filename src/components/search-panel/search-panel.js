import React from "react";
import './search-panel.css'
const SearchPanel = () => {
    const searchText = 'Type here to search';
    const searchStyle = {
        fontSize: '20px'
    };
    return <input
        className="form-control search-input"
        type="text"
        placeholder={searchText}
        tabIndex={1}
        style={searchStyle}/>
};

export default SearchPanel;