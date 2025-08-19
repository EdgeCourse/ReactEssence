import React, { createContext, useState, useEffect, useContext } from "react";

// Create the context
const TodoContext = createContext();

// Create the provider component that will wrap the app
export const TodoProvider = ({ children }) => {
  // Managing todos state
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  const [newTodo, setNewTodo] = useState("");

  // Save todos to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  // Function to add a new todo
  //not perfect
  /*
  const addTodo = (text) => {
    setTodos((prevTodos) => [
      ...prevTodos,
      { text, completed: false },
    ]);
    setNewTodo(""); // Clear the input after adding a todo
  };
  */

  const addTodo = (text) => {
    setTodos((prevTodos) => [
      ...prevTodos,
      { 
        id: Date.now() + Math.random(), // or use crypto.randomUUID()
        //id: crypto.randomUUID(),
        text, 
        completed: false 
      },
    ]);
    setNewTodo("");
  };

  // Function to toggle the completion status of a todo
  //not perfect
  /*
  const toggleTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index].completed = !updatedTodos[index].completed;
    setTodos(updatedTodos);
  };
  */

  const toggleTodo = (id) => {
    setTodos((prevTodos) => 
      prevTodos.map(todo => 
        todo.id === id 
          ? { ...todo, completed: !todo.completed }
          : todo
      )
    );
  };

  // Providing the context values to children components
  return (
    <TodoContext.Provider value={{ todos, addTodo, toggleTodo, newTodo, setNewTodo }}>
      {children}
    </TodoContext.Provider>
  );
};

// Custom hook to use the Todo context in any component
export const useTodos = () => useContext(TodoContext);
