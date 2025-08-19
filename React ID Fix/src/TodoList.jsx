import React from "react";
import TodoItem from "./TodoItem";
//can remove index from map

const TodoList = ({ todos, toggleTodo }) => {
  return (
    <ul>
      {todos.map((todo, index) => (
        
        <TodoItem
          //key={index}
          key={todo.id}
          todo={todo}
          //index={index}
          toggleTodo={toggleTodo} // Passes the toggleTodo function from context
        />
      ))}
    </ul>
  );
};

export default TodoList;
