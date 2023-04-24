/* eslint-disable react/jsx-key */
import { useState } from "react";
import Todo from "./Todo";
import './style.css'

export default function TodoApp() {
  const [title, setTitle] = useState("");
  const [todos, setTodos] = useState([]);

  function handleChange(e) {
    const value = e.target.value;
    setTitle(value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const newTodo = {
      id: crypto.randomUUID(),
      title: title,
      completed: false,
    };
//unshift agrega de primeras al array push de ultimas 
    const temp = [...todos];
    temp.unshift(newTodo);
    setTodos(temp);
    setTitle("");
  }

  function handleUpdate(id, value) {
    const temp = [...todos];
    const item = temp.find((element) => element.id === id);
    item.title = value;
    setTodos(temp);
  }

  function handleDelete(id) {
    const temp = todos.filter((item) => item.id !== id);
    setTodos(temp);
  }
  return (
    <div className="todoContainer">
      <form className="todoCreateForm" onSubmit={handleSubmit}>
        <input onChange={handleChange} 
          placeholder="Your Task"
        className="todoInput" value={title} />
        <input
          onClick={handleSubmit}
          type="submit"
          value="create to-do"
          className="botonCreate"
        />
      </form>
      <div className="todosContainer">
        {todos.map((item) => (
          <Todo
            key={item.id}
            item={item}
            onUpdate={handleUpdate}
            onDelete={handleDelete}
          />
        ))}
      </div>
    </div>
  );
}
