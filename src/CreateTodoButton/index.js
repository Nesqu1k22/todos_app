import './CreateTodoButton.css'
import plus from '../img/plus.svg';

function CreateTodoButton(props) {

    return(
        <button className={"TodoButton"}><img className="plus" onClick={()=>props.onShow(true)} src= {plus} alt="plus"/></button>
    )
}


export { CreateTodoButton };
