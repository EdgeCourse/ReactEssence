import React from "react";
import ReactDOM from "react-dom/client";
import { TodoProvider } from "./TodoContext"; // Import the TodoProvider
import TodoApp from "./App";
import "./index.css";

// Wrap the app with the TodoProvider to provide context
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <TodoProvider>
      <TodoApp />
    </TodoProvider>
  </React.StrictMode>
);
