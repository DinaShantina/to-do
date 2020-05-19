import React, { useState } from "react";
import "./App.css";
import Todo from "./Todo";

function App() {
  let name = "Dina";
  // we need a list of todo's
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    setTodos([...todos, input]);
    setInput("");
  };
  const handleKeyDown = (event) => {
    if (event.keyCode === 13) {
      handleSubmit(event);
    }
  };
  const deleteTodo = (todoIndex) => {
    const newTodos = todos.filter((_, index) => index !== todoIndex);
    console.log(newTodos);
    setTodos(newTodos);
  };

  return (
    <div className="App">
      <h1>To-Do App made by {name}</h1>
      <input
        type="Add Todo"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <br />
      <button disabled={!input} onClick={handleSubmit}>
        Add Todo
      </button>
      {todos.length > 0 ? (
        <div
          style={{
            borderRadius: "10px",
            backgroundColor: "transparent",
            border: "1px solid black",
            height: "350px",
            overflowY: "scroll",
            width: "25%",
            margin: "0 auto",
            marginTop: "50px",
          }}
        >
          {todos.map((todo, i = 0) => (
            <Todo
              title={todo}
              key={i}
              id={i}
              onDelete={(id) => deleteTodo(id)}
            />
          ))}
        </div>
      ) : null}
    </div>
  );
}

export default App;
