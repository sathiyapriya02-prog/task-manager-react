import { useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  /**If we click add button, tasks with specific date will be stored into the array */
  const [tasks, setTasks] = useState([]);

  /**Adding the Task */
  const addTask = () => {
    if (!input.trim()) return;
    setTasks([...tasks, { id: Date.now(), text: input }]);

    setInput("");
    console.log("tasks", tasks);
  };
  /**Deleting the task */
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };
  return (
    <div className="task-input">
      <h1>Task Manager</h1>
      <input
        value={input}
        placeholder="Enter task"
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={addTask}>Add</button>

      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.text}
            <button onClick={() => deleteTask(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
