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

        return { ...task, status };
      })
    );
  };

  const handleDragEnd = (event) => {
    const { active, over } = event;

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

  return (
    <div className="min-h-screen bg-slate-100 px-5 py-10">
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