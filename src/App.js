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
  const [id, setid] = useState(0);

  useEffect(() => {
    db.collection("todos").onSnapshot((snapshot) => {
      setTodos(snapshot.docs.map((doc) => doc.data().title));
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    var id = db.collection("todos").doc().id;
    db.collection("todos").add({
      title: input,
      id: id,
    });

    // setTodos([...todos, input]);
    setInput("");
  };
  const handleKeyDown = (e) => {
    if (e.keyCode === 13) {
      handleSubmit(e);
    }
  };
  const deleteTodo = (todoIndex) => {
    const newTodos = todos.filter((_, index) => index !== todoIndex);

    // const newTodos = db.collection("todo").doc().id.delete();
    // db.collection("todos").onSnapshot((snapshot) => {
    //   setTodos(snapshot.docs.filter((doc) => doc.data().id !== todoIndex));
    // });
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
        <div className="main-todo">
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
