import React, { useState, useEffect } from "react";
import "./styles.css";

function ToDoList({ toDos, editToDo, deleteToDo }) {
  const [list, setList] = useState(toDos);

  useEffect(() => {
    setList(list);
  }, [list]);

  const markAsCompleted = (item) => {
    let element = document.querySelector(".list-item-text-" + item);
    if (element.classList.contains("completed-item")) {
      element.classList.remove("completed-item");
    } else {
      element.classList.add("completed-item");
    }
  };

  const handleKeyPress = (e, itemId) => {
    if (e.key === "Enter") {
      handleEdit(itemId);
    }
  };

  const handleEdit = (itemId) => {
    editToDo(itemId, document.querySelector(".editValueFor-" + itemId).value);
  };

  const handleDelete = (itemId) => {
    deleteToDo(itemId);
  };

  const toDoItems = toDos.map((toDo, index) => {
    return (
      <li key={toDo.task + "-" + index}>
        <div className={"list-item item-" + toDo.id}>
          <span
            className={"list-item-text-" + toDo.id}
            onClick={() => markAsCompleted(toDo.id)}
          >
            {toDo.task}
          </span>
        </div>
        <div className={"edit-bar editBarFor-" + toDo.id}>
          <input
            type="text"
            className={"edit-input editValueFor-" + toDo.id}
            onKeyPress={(e) => handleKeyPress(e, toDo.id)}
            defaultValue={toDo.task}
          />
          <button
            type="submit"
            className="submit-edit"
            onClick={() => handleEdit(toDo.id)}
          >
            Submit
          </button>
        </div>
        <div className="item-btns">
          <button
            className="btn edit-btn"
            onClick={() => {
              document.querySelector(
                ".list-item-text-" + toDo.id
              ).style.display = "none";
              document.querySelector(".editBarFor-" + toDo.id).style.display =
                "initial";
            }}
          >
            Edit
          </button>
          <button
            className={"btn delete-btn item-" + index}
            onClick={() => handleDelete(toDo.id)}
          >
            x
          </button>
        </div>
      </li>
    );
  });

  return <ul>{toDoItems}</ul>;
}

export default ToDoList;
