import { useState } from "react";

function AddTask({ addTask }) {
  const [taskName, setTaskName] = useState("");
  const [priority, setPriority] = useState("High");

  const handleSubmit = () => {
    if (!taskName.trim()) return;

    addTask(taskName.trim(), priority);

    setTaskName("");
    setPriority("High");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  return (
    <div className="mb-8 rounded-2xl bg-white p-6 shadow-md">
      <div className="flex flex-col gap-4 lg:flex-row">
        <input
          type="text"
          placeholder="Enter your task..."
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
          onKeyDown={handleKeyDown}
          className="flex-1 rounded-lg border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-500"
        />

        <select
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
          className="rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-blue-500"
        >
          <option>High</option>
          <option>Medium</option>
          <option>Low</option>
        </select>

        <button
          onClick={handleSubmit}
          className="rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-700"
        >
          Add Task
        </button>
      </div>
    </div>
  );
}

export default AddTask;