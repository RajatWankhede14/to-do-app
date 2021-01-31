import React, { useState } from 'react';
import './App.css';
import { FormControl, InputLabel, Input, Button  } from '@material-ui/core';
import Todo from './Todo'

function App() {

  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  const addTodo = event => {
    event.preventDefault(); // stop the refresh
    setTodos([...todos, input]); // add new todo while keeping old todos
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
      <Button type="submit" disabled={!input} variant="contained" color="primary" onClick={addTodo}>Add</Button>
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
