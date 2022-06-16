const { Schema, model } = require("mongoose");

const projectsSchema = new Schema({
  title: { type: String, require: true, default: "App" },
  tech: [{ type: String, require: true }],
  description: { type: String, require: true },
  imageUrl: { type: String },
  createdAt: { type: Date, default: Date.now() },
  isActive: { type: Boolean, default: true },
});

const projectsModel = model("Project", projectsSchema);

module.exports = projectsModel;
