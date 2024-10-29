import React, { useEffect, useState } from "react";
import axios from "axios";
import TaskList from "../components/TaskList";
import AddTaskForm from "../components/AddTaskForm";
import useTaskStore from "../store/taskStore";

const Index = () => {
  const { setTasks } = useTaskStore();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axios.get(
          "https://q9jjt3-9000.csb.app/api/tasks"
        );
        setTasks(response.data);
      } catch (error) {
        setError("Error fetching tasks");
      } finally {
        setLoading(false);
      }
    };
    fetchTasks();
  }, [setTasks]);

  if (loading) return <p>Loading tasks...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
    <div>
      <h1>To-Do List</h1>
      <TaskList />
      <AddTaskForm />
    </div>
  );
};

export default Index;
