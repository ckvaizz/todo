import React from 'react'
import './style.css';
import Todolist from './todolist'

export const form = ({inputText,setinputText,todos,setTodos,status,setstatus,filtered}) => {
     const inputHandler =(e)=>{
        
        setinputText(e.target.value);
        
    }
    const submitHandler=(e)=>{
        e.preventDefault();
        setTodos([
            ...todos,{text:inputText,status:false,id:Math.random()*1000},
        ]);
        setinputText("");
        
    }
    const selectHandler=(e)=>{
        setstatus(e.target.value);

    }
    return (
        <div className="form-body">
            <form>
                <div className="form-input">
                    <input value={inputText} onChange={inputHandler} type="text" ></input>
                    <button onClick={submitHandler} className="plus-btn"><i className="fa fa-plus" aria-hidden="true"></i></button>
                    <select onChange={selectHandler} className="select">
                        <option> All</option>
                        <option>Completed</option>
                        <option>Uncompleted</option>

                    </select>
                </div>
            </form>
            <Todolist todos={todos}
            setTodos={setTodos}
            filtered={filtered}

            />
            
           
        </div>
    )
}

export default form;