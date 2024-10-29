import React, { useState } from "react";
import axios from "axios";
import useTaskStore from "../store/taskStore";

const AddTaskForm = () => {
  const { setTasks } = useTaskStore();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [isRecurring, setIsRecurring] = useState(false);
  const [error, setError] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://q9jjt3-9000.csb.app/api/task",
        {
          title,
          description,
          isRecurring,
        }
      );
      setTasks((prevTasks) => [...prevTasks, response.data]);
      setTitle("");
      setDescription("");
      setIsRecurring(false);
      setError("");
      setShowPopup(true);

      setTimeout(() => {
        setShowPopup(false);
      }, 2000);
    } catch (error) {
      setError("Error adding task");
    }
  };

  return (
    <div>
      <form className="task-form" onSubmit={handleSubmit}>
        <h2>Add New Task</h2>
        <div className="form-group">
          <label>Task Title</label>
          <input
            type="text"
            placeholder="Enter task title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Task Description</label>
          <textarea
            placeholder="Enter task description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>
            <input
              type="checkbox"
              checked={isRecurring}
              onChange={(e) => setIsRecurring(e.target.checked)}
            />
            Recurring
          </label>
        </div>

        <button type="submit" className="add-task-button">
          Add Task
        </button>
        {error && <p style={{ color: "red" }}>{error}</p>}
      </form>

      {showPopup && <div className="popup">Task successfully added!</div>}
    </div>
  );
};

export default AddTaskForm;
