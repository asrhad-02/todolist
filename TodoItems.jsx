import React from "react";
import { RiDeleteBinLine } from "react-icons/ri";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";

function TodoItems({ todoname, tododate, onDeleteClick }) {
  return (
    <>
      <div className="flex justify-start border-b-2 border-[#352F5B] pt-1">

        <div className=" text-2xl text-white font-bold mr-4 py-2">
          <MdOutlineKeyboardDoubleArrowRight  />
        </div>

        <div className="w-3/4 flex justify-center flex-col">
          <div className="text-xl font-medium mb-1 text-white">{todoname}</div>
          <div className="mb-4 text-xs font-medium text-white">{tododate}</div>
        </div>

        <div className="w-1/4 flex justify-end items-start pt-2">
          <button
            className="text-2xl font-bold text-white"
            onClick={() => onDeleteClick(todoname)}
          >
            <RiDeleteBinLine />
          </button>
        </div>
        

      </div>

    </>
  );
}
export default TodoItems;
