import {useState} from 'react';
import TodoItem from "./Components/TodoItem";



function App() {
  const [todos, setTodos] = useState([
    "Do a thing", 
    "Do another thing", 
    "Build an app",
  ]);
  



  return (
  <>
    <h1>My To Do List</h1>
    {todos.map((todo, index) => (
      <TodoItem text={todo} key={index} />
    ))}
  </>
  );
    
  
}

export default App
