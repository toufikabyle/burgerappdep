import React from "react";
import "./App.css";
import TodoApp from "./components/TodoApp";

function App() {
  return (
    <div className="App">
      <span className="title">Burger App</span> <br />
      <span className="title1">Burger Eaten</span> <br />
      <TodoApp />
      
    </div>
  );
}

export default App;
