import React, { useState } from 'react';
import './App.css';

function App() {

  const [todos, setTodos] = useState(['code everyday', 'read books']);
  const [input, setInput] = useState('');
  return (
    <div className="App">
      <h1>Hi Ender Let's Code 🚀</h1>

      <input type="text" value={input} onChange={event => setInput(event.target.value)} />
      <button>Add</button>

      <ul>
        {todos.map(todo => (
          <li>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
