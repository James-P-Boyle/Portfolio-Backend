const { Schema, model } = require("mongoose");

const techStackSchema = new Schema({
  title: { type: String, require: true },
  svg: { type: String, require: true },
  createdAt: { type: Date, default: Date.now() },
  isActive: { type: Boolean, default: true },
});

const techStackModel = model("TechStack", techStackSchema);

module.exports = techStackModel;
