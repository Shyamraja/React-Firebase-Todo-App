import React, { useState } from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState(['Go Shopping','Go To Sauna']);

  return (
    <div className="App">
     <h1>Hello Here are your Todos!</h1>
     <input />
     <button>Add Todo</button>
     <ul>
        {todos.map(todo => (
       <li>{todo}</li>      
        ))} 
     </ul>
    </div>
  );
}

export default App;
