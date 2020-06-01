import React from "react";
// import logo from './logo.svg';
import "./App.css";

const Todo = ({ id, title, onDelete }) => {
  return (
    <div className="todo" id={id}>
      <h3>
        {/* <span>{count + 1}. </span>&nbsp; */}
        {title}
      </h3>
      <i onClick={() => onDelete(id)} className="far fa-trash-alt"></i>
    </div>
  );
};

export default Todo;
