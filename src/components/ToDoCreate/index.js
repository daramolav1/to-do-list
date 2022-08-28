import React, { useState } from "react";
import "./styles.css";

function ToDoCreate({ createToDo }) {
  const [newToDo, setNewToDo] = useState("");

  const handleKeyPress = (e) => {
    if (newToDo) {
      if (e.key === "Enter") {
        handleSubmit();
      }
    }
  };

  const handleTaskChange = ({ target }) => {
    setNewToDo(target.value);
  };

  const handleSubmit = (e) => {
    if (newToDo) {
      createToDo(newToDo);
      setNewToDo("");
    }
  };

  return (
    <div className="add-container">
      <input
        type="text"
        placeholder="Get Apples"
        onKeyPress={(e) => handleKeyPress(e)}
        onChange={handleTaskChange}
        value={newToDo}
      />
      <button type="submit" onClick={handleSubmit}>
        Add Item
      </button>
    </div>
  );
}

export default ToDoCreate;
