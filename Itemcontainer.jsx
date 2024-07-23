import React from "react";
import TodoItems from "./TodoItems";

function Itemscontainer({ Items, onDeleteClick }) {
  return (
    <>
      {Items.map((item) => (
        <TodoItems
          todoname={item.name}
          tododate={item.date}
          onDeleteClick={onDeleteClick}
        />
      ))}
    </>
  );
}
export default Itemscontainer;
