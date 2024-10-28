const Task = require("../models/task");

exports.createTask = async (req, res) => {
  const { title, description, isRecurring, recurrencePattern } = req.body;
  try {
    const task = await Task.create({
      title,
      description,
      isRecurring,
      recurrencePattern,
    });
    res.status(201).json(task);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getTask = async (req, res) => {
  try {
    const tasks = await Task.findAll();
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getTaskById = async (req, res) => {
  const { id } = req.params;
  try {
    const task = await Task.findByPk(id);
    if (task) {
      res.status(200).json(task);
    } else {
      res.status(404).json({ message: "Task Not Found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateTask = async (req, res) => {
  const { id } = req.params;
  const { title, description, isRecurring, recurrencePattern } = req.body;
  try {
    const task = await task.findByPk(id);
    if (task) {
      task.title = title || task.title;
      task.description = description || task.description;
      task.isRecurring = isRecurring || task.isRecurring;
      task.recurrencePattern = recurrencePattern || task.recurrencePattern;

      await task.save();
      res.status(200).json(task);
    } else {
      res.status(404).json({ message: "Task Not Found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteTask = async (req, res) => {
  const { id } = req.params;

  try {
    const task = await Task.findByPk(id);

    if (task) {
      await task.destroy();
      res.status(204).send();
    } else {
      res.status(404).json({ message: "Task Not Found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
