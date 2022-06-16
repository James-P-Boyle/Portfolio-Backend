const projectsModel = require("../models/projects");

const getProjects = async (req, res, next) => {
  try {
    const projects = await projectsModel.find({});
    res.json(projects);
  } catch (error) {
    res.status(500).send(err.message);
  }
};

const getProject = async (req, res, next) => {
  try {
    const {
      params: { id },
    } = req;

    const project = await projectsModel.findById(id);
    /*     const deletedProject = await projectsModel.deleteOne({ _id: id }); */
    res.json(project);
  } catch (error) {
    res.status(500).send(err.message);
  }
};

const createProject = async (req, res, next) => {
  console.log(req.body);
  try {
    const {
      body: { title, tech, description, imageUrl },
    } = req;

    const newProject = await projectsModel.create({
      title,
      tech,
      description,
      imageUrl,
    });

    res.json(newProject);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const updateProject = async (req, res, next) => {
  try {
    const {
      params: { id },
    } = req;

    const { body } = req;

    const updatedProject = await projectsModel.findByIdAndUpdate(id, body);

    res.json(updatedProject);
  } catch (error) {
    res.status(500).send(err.message);
  }
};

const deleteProject = async (req, res, next) => {
  try {
    const {
      params: { id },
    } = req;

    const deletedProject = await projectsModel.findByIdAndDelete(id);
    /*     const deletedProject = await projectsModel.deleteOne({ _id: id }); */
    res.json(deletedProject);
  } catch (error) {
    res.status(500).send(err.message);
  }
};
module.exports = {
  getProjects,
  getProject,
  createProject,
  updateProject,
  deleteProject,
};
