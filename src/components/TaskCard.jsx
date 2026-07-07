import { useState } from "react";
import { useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";

function TaskCard({ task, deleteTask, editTask }) {
    const [editing, setEditing] = useState(false);
    const [value, setValue] = useState(task.text);

    const { attributes, listeners, setNodeRef, transform } = useDraggable({
        id: task.id,
    });

    const style = {
        transform: CSS.Translate.toString(transform),
    };

    const priorityStyle = {
        High: {
            border: "border-red-500",
            badge: "bg-red-100 text-red-600",
        },
        Medium: {
            border: "border-yellow-500",
            badge: "bg-yellow-100 text-yellow-700",
        },
        Low: {
            border: "border-green-500",
            badge: "bg-green-100 text-green-700",
        },
    };

    const saveTask = () => {
        if (!value.trim()) {
            setValue(task.text);
            setEditing(false);
            return;
        }

        editTask(task.id, value.trim());
        setEditing(false);
    };

    return (
        <div
            ref={setNodeRef}
            style={style}
            className={`rounded-xl border-l-4 bg-white p-4 shadow transition hover:shadow-lg cursor-grab active:cursor-grabbing ${priorityStyle[task.priority].border}`}
        >
            <div className="mb-3 flex items-center justify-between">


                <button
                    {...listeners}
                    {...attributes}
                    className="cursor-grab rounded p-1 text-slate-500 hover:bg-slate-100 active:cursor-grabbing"
                    title="Drag"
                >
                    ☰
                </button>
            </div>
            {editing ? (
                <input
                    onPointerDown={(e) => e.stopPropagation()}
                    autoFocus
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    onBlur={saveTask}
                    onKeyDown={(e) => {
                        if (e.key === "Enter") saveTask();
                    }}
                    className="w-full rounded border border-slate-300 px-2 py-1 outline-none focus:border-blue-500"
                />
            ) : (
                <h3
                    onPointerDown={(e) => e.stopPropagation()}
                    onClick={() => setEditing(true)}
                    className="cursor-pointer font-semibold text-slate-800"
                >
                    {task.text}
                </h3>
            )}

            <div className="mt-3 flex items-center justify-between">
                <span
                    className={`rounded-full px-3 py-1 text-xs font-semibold ${priorityStyle[task.priority].badge}`}
                >
                    {task.priority}
                </span>


            </div>

            <div className="mt-5 flex items-center justify-between">


                <button
                    onClick={() => deleteTask(task.id)}
                    className="rounded-lg bg-red-500 px-4 py-2 text-white transition hover:bg-red-600"
                >
                    Delete
                </button>


            </div>
        </div>
    );
}

export default TaskCard;