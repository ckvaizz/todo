import {useState,useEffect} from 'react'
import Form from './components/form'
import './components/style.css';

function App() {
  const [inputText, setinputText] = useState("")
  const [todos,setTodos] = useState([])
  const [status,setstatus]= useState("all")
  const [filtered,setfilerted]= useState([]) 
  //functions
  const filter =()=>{
    
    switch (status) {
      case "Completed":
        setfilerted(todos.filter(todo => todo.status === true));
        
        break;
      case "Uncompleted":
        setfilerted(todos.filter(todo=> todo.status === false));
        break;
      
      default:
        setfilerted(todos);
        break;
    }
  }
  const savelocalTodos=()=>{
    
      localStorage.setItem("todos",JSON.stringify(todos));
    
  }
  const getlocalTodos=()=>{
    if(localStorage.getItem("todos")===null){
      localStorage.setItem("todos",JSON.stringify([]))
    }else{
      const localtodos=JSON.parse(localStorage.getItem("todos"));
      
      setTodos(localtodos)
    }
  }  
  //useEffect
  
  useEffect(()=>{
    getlocalTodos();

  },[])
  useEffect(()=>{
    filter();
    savelocalTodos();
  },[todos,status]);

  


  return (
    <div className="app">
      <header className="header">ToDo List</header>
      <Form inputText={inputText}
      setinputText={setinputText}
      todos={todos}
      setTodos={setTodos}
       status={status}
       setstatus={setstatus}
       filtered={filtered}
      />
      
    </div>
  );
}

export default App;
