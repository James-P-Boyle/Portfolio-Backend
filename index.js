const express = require("express");
const cors = require("cors");
require("dotenv/config");
require("./db");

const projectsRouter = require("./routes/projects");
const techRouter = require("./routes/techStack");
const emailRouter = require("./routes/email");

const app = express();
const port = 3000;
//process.env.PORT ||

app.use(express.json());
app.use(cors({ origin: "*" }));

app.use("/projects", projectsRouter);
app.use("/email", emailRouter);
app.use("/tech", techRouter);

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
