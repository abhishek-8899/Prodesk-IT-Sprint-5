import { useDroppable } from "@dnd-kit/core";
import TaskCard from "./TaskCard";

function Column({
  id,
  title,
  tasks,
  deleteTask,
  editTask,
}) {
  const { setNodeRef, isOver } = useDroppable({
    id,
  });

  return (
    <div
      ref={setNodeRef}
      className={`rounded-2xl p-5 shadow-md transition-all duration-200 ${
        isOver
          ? "bg-blue-100 ring-2 ring-blue-400"
          : "bg-white"
      }`}
    >
      <div className="mb-5 flex items-center justify-between">
        <h2 className="text-xl font-bold text-slate-800">
          {title}
        </h2>

        <span className="rounded-full bg-slate-200 px-3 py-1 text-sm font-semibold text-slate-700">
          {tasks.length}
        </span>
      </div>

      <div className="min-h-[350px] space-y-4">
        {tasks.length === 0 ? (
          <div className="flex h-32 items-center justify-center rounded-xl border-2 border-dashed border-slate-300 text-sm text-slate-400">
            Drop task here
          </div>
        ) : (
          tasks.map((task) => (
            <TaskCard
              key={task.id}
              task={task}
              deleteTask={deleteTask}
              editTask={editTask}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default Column;