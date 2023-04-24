/* eslint-disable react/prop-types */

import { useState } from "react";

export default function Todo({ item, onUpdate, onDelete }) {
  const [isEdit, setIsedit] = useState(false);

  function FormEdit() {
    const [newValue, setNewValue] = useState(item.title);

    function handleSubmit(e) {
      e.preventDefault();
    }

    function handleChange(e) {
      const value = e.target.value;
      setNewValue(value);
    }

    function handleClickUpdate() {
      onUpdate(item.id, newValue);
      setIsedit(false);
    }

    return (
      <form className="todoUpdateForm" onSubmit={handleSubmit}>
        <input
          type="text"
          className="todoInputUpdate"
          onChange={handleChange}
          value={newValue}
        />
        <button className="botonUpdate" onClick={handleClickUpdate}>
          upDate
        </button>
      </form>
    );
  }
  function TodoElement() {
    return (
      <div className="todoInfo">
        {item.title}
        <div>
          <button
            onClick={() => {
              setIsedit(true);
            }}
          >
            editar
          </button>
          <button
            onClick={() => {
              onDelete(item.id);
            }}
          >
            eliminar
          </button>
        </div>
      </div>
    );
  }

  return <div className="todo">{isEdit ? <FormEdit /> : <TodoElement />}</div>;
}
