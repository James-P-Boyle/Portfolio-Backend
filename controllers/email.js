const sendEmail = async (req, res, next) => {
  try {
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
  } catch (error) {}
};

module.exports = {
  sendEmail,
};
