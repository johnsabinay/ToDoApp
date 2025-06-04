import "./ToDoinput.css";
import ToDoCounter from "./TodoCounter";
import { useState } from "react";

function ToDoInput() {
  const [tasks, setTask] = useState([
    {
      todo: "Feed the dog",
      completed: false,
    },
    {
      todo: "Feed the Cat",
      completed: false,
    },
    {
      todo: "Go to School",
      completed: false,
    },
    {
      todo: "Read any book (atleast 5 pages)",
      completed: true,
    },
  ]);
  const [newTask, setNewTask] = useState("");
  const addTask = (text: string) => {
    if (newTask.length > 0) {
      const newTask = {
        todo: text,
        completed: false,
      };
      setTask([...tasks, newTask]);
      setNewTask("");
    }
  };

  const toggleTaskComplete = (index: number) => {
    const updatedTask = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTask(updatedTask);
  };

  const deleteTask = (index: number) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTask(updatedTasks);
  };

  type Task = {
    todo: string;
    completed: boolean;
  };

  const toDoCounter = (tasks: Task[]): number => {
    return tasks.filter((task) => !task.completed).length;
  };
  return (
    <div className="container mt-4">
      <h2 className="fw-bold">Your To-do-List</h2>
      <div className="to-do-input">
        <input
          type="text"
          className="text-box form-control"
          placeholder="Add new task"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button
          className="add-button btn btn-dark"
          onClick={() => addTask(newTask)}
        >
          +
        </button>
      </div>
      <div className="to-do-list">
        <ul className="list-group">
          {tasks.map((task, index) => (
            <li className="list-group-item task-item" key={index}>
              <input
                checked={task.completed}
                type="checkbox"
                className="form-check-input task-checkbox"
                onChange={() => toggleTaskComplete(index)}
              />
              <span className={task.completed ? "task done" : "task"}>
                {task.todo}
              </span>
              <i
                className="bi bi-trash-fill"
                onClick={() => deleteTask(index)}
              ></i>
            </li>
          ))}
        </ul>
      </div>
      <ToDoCounter taskCount={toDoCounter(tasks)} />
    </div>
  );
}

export default ToDoInput;
