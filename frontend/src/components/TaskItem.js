import React from "react";

const TaskItem = ({ task }) => (
  <div className="p-4 border-b">
    <h3>{task.title}</h3>
    <p>{task.description}</p>
    <p>{task.isRecurring ? "Recurring" : "One-time"}</p>
  </div>
);

export default TaskItem;
