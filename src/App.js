import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Todo from './components/Todo';
import React, { useState } from 'react';
import TodoForm from './components/TodoForm';

function App() {
  const [todos, setTodos] = useState([
    {
      text: "learn about react",
      isCompleted: false
    },
    {
      text: "Meet Friend For Dinner",
      isCompleted: false
    },
    {
      text: "Building really cool react apps",
      isCompleted: false
    }
  ]);

  const addTodo = (text) => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  }
  const completeTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos)
  }
  return (
    <div className="bg-primary pt-5" style={{ height: "100vh" }}>
      <div className="container">
        <h1 className=" align-item-center">This is a Simple TODO App with CRUD Operations</h1>

        {todos.map((todo, index) => (
          <Todo
            key={index}
            index={index}
            todo={todo}
            completeTodo={completeTodo}
          />
        ))}
        <TodoForm
          addTodo={addTodo}
        />
      </div>
    </div>
  );
}

export default App;
