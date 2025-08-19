import React from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import { useTodos } from "./TodoContext"; // Importing the custom hook to access the context

const App = () => {
  const { todos, addTodo, toggleTodo, newTodo, setNewTodo } = useTodos(); // Use the custom hook to access the context

  return (
    <div>
      <h1>To-Do List</h1>
      <TodoForm newTodo={newTodo} setNewTodo={setNewTodo} addTodo={addTodo} />
      <TodoList todos={todos} toggleTodo={toggleTodo} />
    </div>
  );
};

export default App;
