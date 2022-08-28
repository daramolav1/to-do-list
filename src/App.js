import { useState, useEffect } from "react";
import "./App.css";
import ToDoHeader from "./components/ToDoHeader";
import ToDoList from "./components/ToDoList";
import ToDoCreate from "./components/ToDoCreate";
import ToDoData from "./data/ToDoData";

function App() {
  const [toDos, setToDos] = useState([...ToDoData]);

  useEffect(() => {
    setToDos(toDos);
  }, [toDos]);

  const editToDo = (targetIndex, updatedToDo) => {
    let selectedToDoId = toDos.findIndex((toDo) => toDo.id === targetIndex);

    if (updatedToDo && toDos[selectedToDoId].task !== updatedToDo) {
      let updatedList = [...toDos];
      updatedList[selectedToDoId].task = updatedToDo;
      setToDos(updatedList);
    }

    document.querySelector(".list-item-text-" + targetIndex).style.display =
      "initial";
    document.querySelector(".editBarFor-" + targetIndex).style.display = "none";
  };

  const deleteToDo = (targetIndex) => {
    if (window.confirm(`Are you sure you want to mark off this task?`)) {
      setToDos((currentToDos) =>
        currentToDos.filter((toDos) => toDos.id !== targetIndex)
      );
    }
  };

  const createToDo = (newToDo) => {
    setToDos((currentToDos) => [
      ...currentToDos,
      { id: toDos.length * 20, task: newToDo },
    ]);
  };

  return (
    <div className="App">
      <ToDoHeader />
      <div className="list-container">
        <ToDoList toDos={toDos} editToDo={editToDo} deleteToDo={deleteToDo} />
      </div>
      <ToDoCreate createToDo={createToDo} />
    </div>
  );
}

export default App;
