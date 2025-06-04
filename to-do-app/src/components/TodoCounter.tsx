import "./TodoCounter.css";

type ToDoCounterProps = {
  taskCount: number;
};

function ToDoCounter({ taskCount }: ToDoCounterProps) {
  return (
    <>
      <div className="task-counter-container">
        <p>
          {taskCount
            ? `Your remaining todos: ${taskCount}`
            : "You have no task for today"}
        </p>
      </div>
    </>
  );
}

export default ToDoCounter;
