const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Task = sequelize.define("Task", {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: DataTypes.TEXT,
  isRecurring: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  recurrencePattern: {
    type: DataTypes.JSON,
    allowNull: true,
  },
});

module.exports = Task;
