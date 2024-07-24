import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  today: [
    { id: 1, title: "DataBase create for company", status: false },
    { id: 2, title: "Website templates", status: false },
    { id: 3, title: "Meet work team", status: true },
  ],
  tomorrow: [
    { id: 1, title: "Work team", status: false },
    { id: 2, title: "Job interview", status: false },
  ],
  thisWeek: [
    { id: 1, title: "Research content ideas", status: false },
    { id: 2, title: "Consult accountant", status: false },
    { id: 3, title: "Print business card", status: true },
  ],
};

export const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action) => {
      const { type, task } = action.payload;
      if (type === "today") state.today.push(task);
      else if (type === "tomorrow") state.tomorrow.push(task);
      else if (type === "thisWeek") state.thisWeek.push(task);
    },
    toggleTaskStatus: (state, action) => {
      const { type, taskId } = action.payload;
      const taskList = state[type];
      const task = taskList.find((t) => t.id === taskId);
      if (task) {
        task.status = !task.status;
      }
    },
  },
});

export const { addTask, toggleTaskStatus } = tasksSlice.actions;
export default tasksSlice.reducer;
