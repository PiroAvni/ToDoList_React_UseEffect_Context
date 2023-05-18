import React, { useState, useContext, useRef, useEffect} from "react";
import { TodoContext } from "../../contexts/TodoContext";

function TodoForm() {
  const [inputText, setInputText] = useState("");
  const  { addTodo, filterHandler } = useContext(TodoContext);
  const inputRef = useRef();

  function handleInput(e) {
    setInputText(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    addTodo(inputText);
    setInputText("");
  }

  function handleStatus(e) {
    filterHandler(e.target.value);
  }

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <form onSubmit={handleSubmit}>
      <input
      id="todos"
        value={inputText}
        type="text"
        placeholder="Add a Task"
        autoComplete="off"
        className="todo-input"
        onChange={handleInput}
        ref={inputRef}
      />
      <button type="submit" className="todo-button">
        Add
      </button>
      <div className="select">
        <select onChange={handleStatus} name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
}

export default TodoForm;
