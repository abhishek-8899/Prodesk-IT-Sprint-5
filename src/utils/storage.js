const STORAGE_KEY = "kanban-tasks";

export const getTasks = () => {
  const savedTasks = localStorage.getItem(STORAGE_KEY);

  if (!savedTasks) return [];

  return JSON.parse(savedTasks);
};

export const saveTasks = (tasks) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
};