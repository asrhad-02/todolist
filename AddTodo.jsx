import React, { useState } from "react";
import { IoIosAddCircleOutline } from "react-icons/io";

function AddTodo({ onNewItem }) {
  const [todoName, settodoName] = useState("");
  const [dueDate, setdueDate] = useState("");

  const handleNameChange = (event) => {
    settodoName(event.target.value);
  };

  const handleDateChange = (event) => {
    setdueDate(event.target.value);
  };

  const handleAddButtonClicked = () => {
    onNewItem(todoName, dueDate);
    settodoName("");
    setdueDate("");
  };

  return (
    <div className="w-full">
      <h1 className="text-white text-center text-xl pb-2">Add a new todo...</h1>
      <div className="flex justify-center mb-4 gap-4">
        <div className="w-full md:w-6/7 flex md:gap-4 gap-2 md:flex-row flex-col">
          <div className="md:w-3/5">
            <input
              type="text"
              placeholder="Enter To Do Here"
              className="w-full p-2 rounded-lg bg-[#2A2649] text-white"
              onChange={handleNameChange}
              value={todoName}
            />
          </div>
          <div className="md:w-2/5">
            <input
              type="date"
              className="w-full p-2 rounded-lg bg-[#2A2649] text-white"
              onChange={handleDateChange}
              value={dueDate}
            />
          </div>
        </div>
        <div className="w-1/7 flex justify-end md:items-center items-start">
          <button
            className="text-3xl font-bold text-white"
            onClick={handleAddButtonClicked}
          >
            <IoIosAddCircleOutline />
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
