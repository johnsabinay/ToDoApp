import "./ToDoItem.css";
import { useState } from "react";

function ToDoItem() {
  const [isCheck, setCheck] = useState(false);
  const handleClick = () => {
    setCheck(!isCheck);
    console.log(isCheck);
  };
  return (
    <>
      <div className="border mt-3 mb-3 todo-item">
        <input
          className="form-check-input complete-checkbox"
          type="checkbox"
          value=""
          onClick={handleClick}
        />
        <p className={isCheck ? "task-item done" : "task-item"}>
          Work-out for 30 mins.
        </p>
        <button className="fw-bold deleteBtn"> ❌ </button>
      </div>
    </>
  );
}

export default ToDoItem;
