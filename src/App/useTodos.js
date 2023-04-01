
import React from "react";
import {useLocalStore} from './useLocalStorage.js';

function useTodos() {

    const {
        item: todos, 
        saveItem: saveTodos,
        loading,
        error,
      }= useLocalStore('TODOS_V1', []);
      
    
      const [searchValue, setSearchValue] = React.useState('');
    
      
      const completedTodos = todos.filter(todo => todo.completed).length;
      
      const totalTodos = todos.length;
      
      let searchedTodos = [];
    
    
      if (searchValue.length >= 1) {
      
        searchedTodos = todos.filter(todo => {
            const todoText = todo.text.toLowerCase();
            const searchText = searchValue.toLocaleLowerCase();
            return todoText.includes(searchText);
        } )
      } else{
        searchedTodos = todos;
      }
    
    
      const completeTodo = (text) => {
        const todoIndex = todos.findIndex(todo => todo.text === text);
        const newTodos = [...todos];
        newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
        saveTodos(newTodos);
      };
    
      const deleteTodo = (text) => {
          const todoIndex = todos.findIndex(todo => todo.text === text);
          const newTodos = [...todos];
          newTodos.splice([todoIndex],1);
          saveTodos(newTodos);
      }

      const [valueTodo,setValueTodo] = React.useState()

      const showNewTodo = (valueImput) => {
        setValueTodo(valueImput);  
      }

      const createNewTodo = () => {
        const newTodos = [...todos];
        let valueTodoClear = valueTodo.replace(/[\s\t\n]+/g, ' ').trim();
        valueTodoClear = valueTodoClear.replace(/[\s](\.|,)/g, function(match) {
           if (match === " .") {
             return ".";
           } else if (match === " ,") {
             return ",";
           } else if (match === " . ") {
             return ". ";
           } else if (match === " , ") {
             return ", ";
           }
        });
        let newTodo = {text: valueTodoClear, completed: false,};
        validateNewTodo(newTodos,newTodo)
      } 
      
      const validateNewTodo = (newTodos,newTodo) =>{
        
        const errorInSimilar = () => {
            alert (`this task already exists`)
        }
        if ( (newTodo.text === ' ' ||newTodo.text === '')){
          alert ('should conten a text string, please complete de text area')
        }
        else {
          let similar = false;

          for (let i = 0; i < newTodos.length; i++) {
            if (newTodo.text === newTodos[i].text) {similar = true}
          }
          if (similar === true) {
            errorInSimilar()
          }
          else {
            newTodos.push(newTodo);
            saveTodos(newTodos);
            closeModal ();
          }
        }
      }
      const [display, setDisplay] = React.useState(false)
      
      const displayModal = ()=>{
        setDisplay(true);
      };

      const closeModal = () => {
        setDisplay(false);
      }


    return {
            error,
            loading,
            totalTodos,
            completedTodos,
            searchValue,
            setSearchValue,
            searchedTodos,
            completeTodo,
            deleteTodo,
            displayModal,
            closeModal,
            display,
            createNewTodo,
            showNewTodo,
        };
}


export { useTodos };
