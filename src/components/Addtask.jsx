import { useState } from "react";

function AddTask({ addTask }) {
    const [task, setTask] = useState("");
    const [priority, setPriority] = useState("High");

    const handleSubmit = () => {
        if (!task.trim()) return;

        addTask(task.trim(), priority);

        setTask("");
        setPriority("High");
    };
    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            handleSubmit();
        }
    };

    return (
        <div className="mb-8 rounded-xl bg-white p-5 shadow-md">
            <div className="flex flex-col gap-4 md:flex-row">
                <input
                    type="text"
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                    placeholder="Enter a task..."
                    className="flex-1 rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
                />

                <select
                    value={priority}
                    onChange={(e) => setPriority(e.target.value)}
                    className="rounded-lg border border-gray-300 px-4 py-3"
                >
                    <option>High</option>
                    <option>Medium</option>
                    <option>Low</option>
                </select>

                <button
                    onClick={handleSubmit}
                    onKeyDown={handleKeyDown}
                    className="rounded-lg bg-blue-600 px-6 py-3 font-medium text-white hover:bg-blue-700"
                >
                    Add Task
                </button>
            </div>
        </div>
    );
}

export default AddTask;