import React, { useState, useEffect } from 'react';
import Todo from './Components/Todo';
import { Button, FormControl,Input, InputLabel } from '@material-ui/core'
import './Todo.css';
import db from './firebase';
import firebase from 'firebase';

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  useEffect(() => {
  db.collection('todos').orderBy('timestamp','desc').onSnapshot(snapshot => {
  setTodos(snapshot.docs.map(doc => doc.data().todo))
  })
  }, []);

  const addTodo = (event) => {
    event.preventDefault();
    db.collection('todos').add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
   
    setInput('');
  }

  return (
    <div className="App">
     <h1>Hello Here are your Todos!</h1>
     
      <form>
         <FormControl>
           <InputLabel>Write a Todo</InputLabel>
           <Input value ={input} onChange={event => setInput(event.target.value)}/>
         </FormControl>
        <Button disabled={!input} type="submit" onClick={addTodo} variant="contained" color="primary">
         Add Todos
        </Button>
      </form>

     <ul>
        {todos.map(todo => (
        <Todo text={todo}/>     
         ))} 
     </ul>
    </div>
  );
}

export default App;
