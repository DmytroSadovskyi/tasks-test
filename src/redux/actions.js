import { nanoid } from "nanoid";

export const addTask = (title, text) => {
  return {
    type: "tasks/addTask",
    payload: {
      id: nanoid(),
      completed: false,
      title,
      text,
    },
  };
};

export const updateTask = (taskId, newTitle, newText) => {
  return {
    type: "tasks/updateTask",
    payload: {
      id: taskId,
      title: newTitle,
      text: newText,
    },
  };
};

export const deleteTask = (taskId) => {
  return {
    type: "tasks/deleteTask",
    payload: taskId,
  };
};

export const toggleCompleted = (taskId) => {
  return {
    type: "tasks/toggleCompleted",
    payload: taskId,
  };
};

export const setStatusFilter = (value) => {
  return {
    type: "filters/setStatusFilter",
    payload: value,
  };
};
