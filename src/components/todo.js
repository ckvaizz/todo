import React from 'react'
import './style.css'

export const todo = ({text,todos,todo,setTodos}) => {
const todoCompleteHandler=()=>{
    setTodos(todos.map((el)=>{
        if(el.id===todo.id){
            return {
                ...el,status:!el.status
            }
        

        }
        return el;
    }));

}
const deleteHandler =()=>{
    setTodos(todos.filter(el=> el.id !== todo.id));


}
    return (
        <div > 
        <div className={`todo ${todo.status?"completed":''}`}>
            <h2> {text}</h2>
            <button onClick={todoCompleteHandler} className="complete-btn"><i className="fa fa-check" aria-hidden="true"></i></button>
            <button onClick={deleteHandler} className="trash"><i className="fa fa-trash" aria-hidden="true"></i></button>
        </div>
            
        </div>
    )
}


export default todo;