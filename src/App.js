import React, { useState, useEffect } from 'react';
import './App.css';
import { FormControl, InputLabel, Input, Button  } from '@material-ui/core';
import Todo from './Todo'
import db from "./firebase";
import firebase from 'firebase';
import AddIcon from '@material-ui/icons/Add';


function App() {

  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  useEffect(() => {
    db.collection('todos').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
      setTodos(snapshot.docs.map(doc => ({id: doc.id ,todo: doc.data().todo})))
    })

  }, []);

  const addTodo = event => {
    event.preventDefault(); // stop the refresh
    db.collection('todos').add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })

    
    setInput(''); // clears the input field
  }
  return (
    <div className="App">
      <h1>Hi Ender Let's Code 🚀</h1>
      <form>
      <FormControl>
        <InputLabel>Write a Task</InputLabel>
        <Input type="text" value={input} onChange={event => setInput(event.target.value)} />
      </FormControl>
      <Button type="submit" disabled={!input} variant="contained" color="secondary" onClick={addTodo}><AddIcon/>Add</Button>
      </form>

      <ul>
        {todos.map(todo => (
          <Todo todo={todo}/>
        ))}
      </ul>
    </div>
  );
}

export default App;
