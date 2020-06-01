import React, { useState, useEffect } from "react";
import "./App.css";
import Todo from "./Todo";
import db from "./firebase";
// firebase.firestore().collection("todo").add({
//   title: "Wash your clothes",
// });

function App() {
  let name = "Dina";
  // we need a list of todo's
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    db.collection("todos").onSnapshot((snapshot) => {
      setTodos(
        snapshot.docs.map((doc) => ({ id: doc.id, title: doc.data().title }))
      );
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    db.collection("todos").add({
      title: input,
    });

    // setTodos([...todos, input]);
    setInput("");
  };
  const handleKeyDown = (e) => {
    if (e.keyCode === 13) {
      handleSubmit(e);
    }
  };
  const deleteTodo = (todoId) => {
    db.collection("todos")
      .doc(todoId)
      .delete()
      .then(() => {
        console.log("Delete: ", todoId);
      })
      .catch(function (error) {
        console.error("Error removing document: ", error);
      });
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
        <div className="main-todo">
          {todos.map((todo, i = 0) => (
            <Todo
              title={todo.title}
              key={todo.id}
              onDelete={(id) => deleteTodo(todo.id)}
            />
          ))}
        </div>
      ) : null}
    </div>
  );
}

export default App;
