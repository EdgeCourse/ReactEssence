import React from "react";

//can remove index from props
const TodoItem = ({ todo, index, toggleTodo }) => {
  return (
    <li
      style={{
        textDecoration: todo.completed ? "line-through" : "none", // Apply strikethrough if completed
      }}
      //onClick={() => toggleTodo(index)} // Toggle completion on click
      onClick={() => toggleTodo(todo.id)}
    >
      {todo.text}
    </li>
  );
};



export default TodoItem;
