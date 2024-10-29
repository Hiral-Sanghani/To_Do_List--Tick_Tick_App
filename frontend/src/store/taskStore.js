import { create } from "zustand";
import axios from "axios";

const useTaskStore = create((set) => ({
  tasks: [],
  setTasks: (tasks) => set({ tasks }),
  deleteTask: async (taskId) => {
    try {
      await axios.delete(`https://q9jjt3-9000.csb.app/api/task/${taskId}`);
      set((state) => ({
        tasks: state.tasks.filter((task) => task.id !== taskId),
      }));
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  },
}));

export default useTaskStore;
