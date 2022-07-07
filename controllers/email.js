const nodemailer = require("nodemailer");

const sendEmail = async (req, res, next) => {
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    auth: {
      user: "james.patick.boyle92@gmail.com",
      pass: "Jamesboyle5145-!",
    },
  });
  transporter.verify((error, success) => {
    if (error) {
      console.log(error);
    } else {
      console.log("Server is ready to take our messages");
    }
  });

  /*  try {
    const {
      body: { email, subject, message },
    } = req;

    const mailOptions = {
      from: "",
      to: email,
      subject: subject,
      text: message,
    };
    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log("Email sent: " + info.response);
      }
    });
    res.json({ message: "Email sent" });
  } catch (error) {} */
};

module.exports = {
  sendEmail,
};
