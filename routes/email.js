const express = require("express");
const { sendEmail } = require("../controllers/email");

const emailRouter = express.Router();

emailRouter.route("/").post(sendEmail);

module.exports = emailRouter;
