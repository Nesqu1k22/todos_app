import React from "react";
import './TodoSearch.css';

function TodoSearch({searchValue,setSearchValue}) {    
    const onSearchValueChange = (event) => {

      setSearchValue(event.target.value);
      
    };
  
    return (
      <div className="TodoSearch__container">
      <input
      className="TodoSearch__input"
      placeholder="search your tasks"
      value={searchValue}
      onChange={onSearchValueChange}
      />
      </div>
    );
  }

export { TodoSearch };