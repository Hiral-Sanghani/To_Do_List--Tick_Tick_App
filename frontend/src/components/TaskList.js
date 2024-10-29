import React, { useEffect, useState } from "react";
import TaskItem from "./TaskItem";
import axios from "axios";
const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axios.get(
          "https://q9jjt3-9000.csb.app/api/tasks"
        );
        const data = response.data;
        console.log("Fetched tasks:", data);

        if (Array.isArray(data)) {
          setTasks(data);
        } else {
          console.error("Expected an array but got:", data);
          setTasks([]);
        }
      } catch (error) {
        console.error("Error fetching tasks:", error);
        setTasks([]);
      }
    };

    fetchTasks();
  }, []);

  return (
    <div>
      <table className="task-table">
        <thead>
          <tr>
            <th>Task Title</th>
            <th>Task Description</th>
            <th>Recurring</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {tasks.length === 0 ? (
            <tr>
              <td colSpan="3">No tasks available.</td>
            </tr>
          ) : (
            tasks.map((task) => <TaskItem key={task.id} task={task} />)
          )}
        </tbody>
      </table>
    </div>
  );
};

export default TaskList;
