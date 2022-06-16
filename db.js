const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://admin:1234@cluster0.w09fdxp.mongodb.net/?retryWrites=true&w=majority"
  )
  .catch((error) => console.log(error));
