import React, { useEffect } from "react";
import axios from "axios";
import TaskList from "../components/TaskList";
import useTaskStore from "../store/taskStore";

const Index = () => {
  const { setTasks } = useTaskStore();

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axios.get("/api/tasks");
        setTasks(response.data);
      } catch (error) {
        console.error("Error fetching tasks", error);
      }
    };
    fetchTasks();
  }, [setTasks]);

  return (
    <div>
      <h1>To-Do List</h1>
      <TaskList />
    </div>
  );
};

export default Index;
