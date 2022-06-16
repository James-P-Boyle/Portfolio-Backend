const express = require("express");
const {
  getProjects,
  getProject,
  createProject,
  updateProject,
  deleteProject,
} = require("../controllers/projects");

const projectsRouter = express.Router();

projectsRouter.route("/").get(getProjects).post(createProject);

projectsRouter
  .route("/:id")
  .get(getProject)
  .put(updateProject)
  .delete(deleteProject);

module.exports = projectsRouter;
