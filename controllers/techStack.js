const techStackModel = require("../models/techStack");

const getTechs = async (req, res, next) => {
  try {
    const techItems = await techStackModel.find({});
    res.json(techItems);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const getTech = async (req, res, next) => {
  try {
    const {
      params: { id },
    } = req;
    const techItem = await techStackModel.findById(id);
    res.json(techItem);
  } catch (err) {}
};

const createTech = async (req, res, next) => {
  try {
    const {
      body: { title, svg },
    } = req;
    const newTech = techStackModel.create({
      title,
      svg,
    });
    res.json(newTech);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const updateTech = async (req, res, next) => {
  try {
    const {
      params: { id },
    } = req;
    const { body } = req;
    const updatedTech = await techStackModel.findByIdAndUpdate(id, body);
    res.json(updatedTech);
  } catch (err) {
    res.send(500).send(err.message);
  }
};

const deleteTech = async (req, res, next) => {
  try {
    const {
      params: { id },
    } = req;
    const deletedTech = await techStackModel.findByIdAndDelete(id);
    res.json(deletedTech);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

module.exports = {
  getTechs,
  getTech,
  createTech,
  updateTech,
  deleteTech,
};
