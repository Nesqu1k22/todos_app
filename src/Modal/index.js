import React, { useState } from "react";
import ReactDOM from "react-dom";
import './modal.css'
import { TodoContext } from '../TodoContext';



function Modal(props) {
    
    const{ 
        valueTodo,
        showNewTodo,
     }= React.useContext(TodoContext);

    const onInputModalValue = (e) =>  {
        showNewTodo(e.target.value);
    };

    return ReactDOM.createPortal(
        <section className= {`hide ${props.show && 'modal-container'}`}>
        <h2 className="modal-title">write your next task to do</h2>
        <form className="modal-form">
           <textarea
               className="modal-input"
               placeholder="start writing here..."
               value={valueTodo}
               onChange={onInputModalValue}
           />
        </form>
        <div className="modal-buttons-container">
        <div className="modal-button cancel" onClick={()=>props.hideModal(false)}><p>cancel</p><img /></div>
        <div className="modal-button save" onClick={()=> props.newTodo()}><p>save</p><img /></div>
        </div>
       </section>,
        document.getElementById('modal')
      
    );
}

export {Modal};