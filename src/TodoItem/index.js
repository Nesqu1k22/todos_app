import React from "react";
import './TodoItem.css'
import trash from '../img/trash.svg'
import check from '../img/check.svg'

function TodoItem(props){ 

    return(
        
        <li className="TodoItem">
            <div className={`Icon check ${props.completed && 'check--active'}`} onClick={props.onCompleted}><img src= {check}/></div>
            <p className={`TextItem ${props.completed && 'TodoItem-p--complete'}`}>{props.text}</p>
            <div className="delete Icon" onClick={props.onDelete}><img src= {trash}/> </div>
        </li>
          
    )
}


export { TodoItem };