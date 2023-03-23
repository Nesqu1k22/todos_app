import React from "react";
import { TodoContext } from "../TodoContext";
import './TodoSearch.css';

function TodoSearch() {
    const {
        searchValue,
        setSearchValue,
      }= React.useContext(TodoContext)
    
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