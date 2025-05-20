import { useState, useRef } from "react";
import Modal from "./Modal";

export default function NewTask({ onAdd }) {
  const [enteredTask, setEnteredTask] = useState("");
  const modal = useRef();

  function handleChange(event) {
    setEnteredTask(event.target.value);
  }

  function handleClick() {
    if (enteredTask.trim() === "") {
      modal.current.open();
      return;
    }

    setEnteredTask("");
    onAdd(enteredTask);
  }

  return (
    <>
      <Modal ref={modal} buttonText="OK">
        <h2 className="text-xl font-bold text-stone700 my-4">Invalid Input</h2>
        <p className="text-stone-600 mb-4">Give your task a name.</p>
      </Modal>
      <div className="flex items-center gap-4">
        <input
          onChange={handleChange}
          type="text"
          className="w-64 px-2 py-1 rounded-sm bg-stone-200"
          value={enteredTask}
        />
        <button
          className="text-stone-700 hover:text-stone-950"
          onClick={handleClick}
        >
          Add Task
        </button>
      </div>
    </>
  );
}
