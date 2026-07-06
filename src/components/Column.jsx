import { SortableContext, verticalListSortingStrategy } from "@dnd-kit/sortable";
import TaskCard from "./TaskCard";

function Column({
  id,
  title,
  tasks,
  deleteTask,
  editTask,
}) {
  return (
    <div className="rounded-xl bg-slate-100 p-4 min-h-125">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-xl font-bold">
          {title}
        </h2>

        <span className="rounded-full bg-white px-3 py-1 text-sm font-semibold shadow">
          {tasks.length}
        </span>
      </div>

      <SortableContext
        items={tasks.map((task) => task.id)}
        strategy={verticalListSortingStrategy}
      >
        <div className="space-y-4">
          {tasks.length === 0 ? (
            <div className="rounded-lg border-2 border-dashed border-gray-300 py-12 text-center text-gray-400">
              Drop tasks here
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
      </SortableContext>
    </div>
  );
}

export default Column;