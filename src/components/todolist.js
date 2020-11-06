import React from 'react'
import Todo from './todo'
import './style.css'

function todolist({todos,setTodos,filtered}) {
    return (
        <div className="todo-list">
        <ul>
            {filtered.map((todo)=>{
                return(
                <Todo setTodos={setTodos} 
                todo={todo}
                key={todo.id}
                 text={todo.text} 
                 todos={todos}/>
            
            )})}
            
            
            
            </ul>
        </div>
    )
}

export default todolist;
