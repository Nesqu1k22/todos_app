import React from 'react';
import { TodoHeader } from '../TodoHeader';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';
import {Modal} from '../Modal';
import pintando from '../img/pintandoTodos.jpg'
import carga from '../img/cargaTodos.jpg'
import todos404 from '../img/404Todos.jpg'
import './App.css'
import { useTodos } from './useTodos';




function App() {
  
  const {
    error,
    loading,
    searchedTodos,
    completeTodo,
    deleteTodo,
    closeModal,
    createNewTodo,
    display,
    displayModal,
    totalTodos,
    completedTodos,
    searchValue,
    setSearchValue,
    valueTodo,
    showNewTodo
  } = useTodos();

  
  return (
       <React.Fragment> 

            <TodoHeader>
                <TodoCounter totalTodos={totalTodos} completedTodos={completedTodos}/>
        
                <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue}/>
            </TodoHeader>

            <TodoList>

                {error && <div className="alert__container"><p className="alert__text">Hay un error, estamos trabajando en ello...</p><img className="alert__img" src={todos404} alt="biblioteca mujer"/></div>}
                {loading && <div className="alert__container"><p className="alert__text">Estamos cargando tus datos, ten paciencia</p><img className="alert__img" src={pintando} alt="personas pintando"/></div>}
                {(!loading && !searchedTodos.length) && <div className="alert__container"><p className="alert__text">Nada por aquí...</p><img className="alert__img" src={carga} alt="personas cajas"/></div>}

                {searchedTodos.map(todo => (
                    <TodoItem key= {todo.text} text= {todo.text} completed= {todo.completed} onCompleted= {()=>completeTodo(todo.text)} onDelete= {()=>deleteTodo(todo.text)}/>
                ))}

            </TodoList>

            <Modal valueTodo={valueTodo} showNewTodo={showNewTodo} show = {display} hideModal = {()=>closeModal()} newTodo = {()=>createNewTodo()}/>

            <CreateTodoButton onShow= {()=>displayModal(display)}/>
      
        </React.Fragment>
  );

}

export default App;
