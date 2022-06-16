const express = require("express");
const cors = require("cors");
require("dotenv/config");
require("./db");

const projectsRouter = require("./routes/projects");
const techRouter = require("./routes/techStack");

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(cors({ origin: "https://frozen-retreat-92725.herokuapp.com/" }));
app.use("/projects", projectsRouter);
app.use("/tech", techRouter);

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
