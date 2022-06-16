const express = require("express");
const cors = require("cors");
require("dotenv").config();

const projectsRouter = require("./routes/projects");
const techRouter = require("./routes/techStack");

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use("/projects", projectsRouter);
app.use("/tech", techRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
