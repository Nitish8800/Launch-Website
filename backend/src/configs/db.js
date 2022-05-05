const mongoose = require("mongoose");
require("dotenv").config();

const connect = () => {
  return mongoose.connect(
    `mongodb+srv://Nitish8800:8800@bhumitech.anzew.mongodb.net/userData?retryWrites=true&w=majority`
  );
};

module.exports = connect;
