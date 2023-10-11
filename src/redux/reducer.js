import { combineReducers } from "redux";
import { statusFilters } from "./constants";

const tasksInitialState = [
  { id: 0, title: "Task 1", text: "Learn HTML and CSS", completed: true },
  { id: 1, title: "Task 2", text: "Get good at JavaScript", completed: true },
  { id: 2, title: "Task 3", text: "Master React", completed: false },
  { id: 3, title: "Task 4", text: "Discover Redux", completed: false },
  { id: 4, title: "Task 5", text: "Build amazing apps", completed: false },
];

const tasksReducer = (state = tasksInitialState, action) => {
  switch (action.type) {
    case "tasks/addTask":
      return [...state, action.payload];
    case "tasks/updateTask":
      return state.map((task) => {
        if (task.id !== action.payload.id) {
          return task;
        }
        return {
          ...task,
          title: action.payload.title,
          text: action.payload.text,
        };
      });
    case "tasks/deleteTask":
      return state.filter((task) => task.id !== action.payload);
    case "tasks/toggleCompleted":
      return state.map((task) => {
        if (task.id !== action.payload) {
          return task;
        }
        return { ...task, completed: !task.completed };
      });
    default:
      return state;
  }
};

const filtersInitialState = {
  status: statusFilters.all,
};

const filtersReducer = (state = filtersInitialState, action) => {
  switch (action.type) {
    case "filters/setStatusFilter":
      return {
        ...state,
        status: action.payload,
      };
    default:
      return state;
  }
};

export const rootReducer = combineReducers({
  tasks: tasksReducer,
  filters: filtersReducer,
});
