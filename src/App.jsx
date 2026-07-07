import { useEffect, useState } from "react";
import Header from "./components/Header";
import AddTask from "./components/AddTask";
import Board from "./components/Board";
import { createTask } from "./utils/helpers";
import { getTasks, saveTasks } from "./utils/storage";

function App() {
  const [tasks, setTasks] = useState(getTasks);
  const [search, setSearch] = useState("");

  useEffect(() => {
    saveTasks(tasks);
  }, [tasks]);

  const addTask = (text, priority) => {
    setTasks((prev) => [...prev, createTask(text, priority)]);
  };

  const deleteTask = (id) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  const editTask = (id, text) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id
          ? {
              ...task,
              text,
            }
          : task
      )
    );
  };

  const moveTask = (id, direction) => {
    setTasks((prev) =>
      prev.map((task) => {
        if (task.id !== id) return task;

        let status = task.status;

        if (direction === "next") {
          if (status === "todo") status = "progress";
          else if (status === "progress") status = "done";
        } else {
          if (status === "done") status = "progress";
          else if (status === "progress") status = "todo";
        }

        return {
          ...task,
          status,
        };
      })
    );
  };

  const handleDragEnd = ({ active, over }) => {
    if (!over) return;

    setTasks((prev) =>
      prev.map((task) =>
        task.id === active.id
          ? {
              ...task,
              status: over.id,
            }
          : task
      )
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-slate-200 to-slate-300 py-10 px-4">
      <div className="mx-auto max-w-7xl">
        <Header
          search={search}
          setSearch={setSearch}
        />

        <AddTask addTask={addTask} />

        <Board
          tasks={tasks}
          deleteTask={deleteTask}
          moveTask={moveTask}
          editTask={editTask}
          search={search}
          handleDragEnd={handleDragEnd}
        />
      </div>
    </div>
  );
}

export default App;