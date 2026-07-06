import { useState } from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

function TaskCard({ task, deleteTask, editTask }) {
  const [editing, setEditing] = useState(false);
  const [text, setText] = useState(task.text);

  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id: task.id,
  });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  const borderColor = {
    High: "border-red-500",
    Medium: "border-yellow-500",
    Low: "border-green-500",
  };

  const saveEdit = () => {
    if (!text.trim()) return;

    editTask(task.id, text.trim());
    setEditing(false);
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className={`
        rounded-xl
        border-l-4
        bg-white
        p-4
        shadow
        cursor-grab
        active:cursor-grabbing
        transition
        ${borderColor[task.priority]}
        ${isDragging ? "opacity-40 scale-95" : ""}
      `}
    >
      {editing ? (
        <input
          autoFocus
          value={text}
          onChange={(e) => setText(e.target.value)}
          onBlur={saveEdit}
          onKeyDown={(e) => {
            if (e.key === "Enter") saveEdit();
          }}
          className="w-full rounded border px-2 py-1"
        />
      ) : (
        <h3
          onDoubleClick={() => setEditing(true)}
          className="font-semibold"
        >
          {task.text}
        </h3>
      )}

      <p className="mt-2 text-sm text-gray-500">
        {task.priority}
      </p>

      <button
        onClick={() => deleteTask(task.id)}
        className="mt-4 rounded bg-red-500 px-3 py-1 text-white hover:bg-red-600"
      >
        Delete
      </button>
    </div>
  );
}

export default TaskCard;