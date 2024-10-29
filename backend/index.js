const express = require("express");
const app = express();
const cors = require("cors");
const taskRoutes = require("./routes/taskRoutes");
const sequelize = require("./config/database");
require("dotenv").config();

app.use(express.json());

app.use(
  cors({
    origin: "https://q9jjt3-3000.csb.app",
  })
);

app.use("/api", taskRoutes);

sequelize
  .sync({ force: true })
  .then(() => {
    app.listen(9000, () => {
      console.log("Backend server running on http://localhost:9000");
    });
  })
  .catch((error) => {
    console.error("Error syncing database:", error);
  });
