import {
  DndContext,
  closestCenter,
} from "@dnd-kit/core";

import Column from "./Column";

function Board({
  tasks,
  deleteTask,
  editTask,
  search,
  handleDragEnd,
}) {
  const filteredTasks = tasks.filter((task) =>
    task.text.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <DndContext
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
    >
      <div className="grid gap-6 lg:grid-cols-3">
        <Column
          id="todo"
          title="To Do"
          tasks={filteredTasks.filter(
            (task) => task.status === "todo"
          )}
          deleteTask={deleteTask}
          editTask={editTask}
        />

        <Column
          id="progress"
          title="In Progress"
          tasks={filteredTasks.filter(
            (task) => task.status === "progress"
          )}
          deleteTask={deleteTask}
          editTask={editTask}
        />

        <Column
          id="done"
          title="Done"
          tasks={filteredTasks.filter(
            (task) => task.status === "done"
          )}
          deleteTask={deleteTask}
          editTask={editTask}
        />
      </div>
    </DndContext>
  );
}

export default Board;