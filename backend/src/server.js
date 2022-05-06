const express = require("express");

const connect = require("./configs/db");
require("dotenv").config();

//controller filelist
const cors = require("cors");

const userController = require("./controller/User.controller");

const app = express();

app.use(express.json());

app.use("/users", userController);

app.use(cors());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

let port = process.env.PORT;

const start = async () => {
  await connect();
  app.listen(port, () => {
    console.log("listing to port " + port);
  });
};

module.exports = start;
