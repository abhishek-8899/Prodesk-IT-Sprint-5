export const createTask = (text, priority) => ({
    id: crypto.randomUUID(),
    text,
    priority,
    status: "todo",
});