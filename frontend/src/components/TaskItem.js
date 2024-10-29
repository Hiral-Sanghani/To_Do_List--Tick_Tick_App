import React from "react";
import useTaskStore from "../store/taskStore";

const TaskItem = ({ task }) => {
  const { deleteTask } = useTaskStore();

  const handleDelete = async () => {
    await deleteTask(task.id);
  };

  return (
    <tr>
      <td>{task.title}</td>
      <td>{task.description}</td>
      <td className={task.isRecurring ? "recurring" : "one-time"}>
        {task.isRecurring ? "Yes" : "No"}
      </td>
      <td>
        <button onClick={handleDelete}>Delete</button>
      </td>
    </tr>
  );
};

export default TaskItem;
