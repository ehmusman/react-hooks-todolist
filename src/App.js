import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Todo from './components/Todo';
import React, { useState } from 'react';

function App() {
  const [todos, setTodos] = useState([
    {
      text: "learn about react",
      inCompleted: true
    },
    {
      text: "Meet Friend For Dinner",
      inCompleted: true
    },
    {
      text: "Building really cool react apps",
      inCompleted: true
    }
  ])
  return (
    <div className="bg-primary pt-5" style={{ height: "100vh" }}>
      <div className="container">
        <h1 className=" align-item-center">This is a Simple TODO App with CRUD Operations</h1>

        {todos.map((todo, index) => (
          <Todo
            key={index}
            index={index}
            todo={todo}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
