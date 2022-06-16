const express = require("express");
const techRouter = express.Router();
const {
  getTechs,
  getTech,
  createTech,
  updateTech,
  deleteTech,
} = require("../controllers/techStack");

techRouter.route("/").get(getTechs).post(createTech);

techRouter.route("/:id").get(getTech).put(updateTech).delete(deleteTech);

module.exports = techRouter;
