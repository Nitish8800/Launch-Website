const express = require("express");

const connect = require("./configs/db");
require("dotenv").config();

//controller filelist
const cors = require("cors");

const userController = require("./controller/User.controller");

const app = express();

app.use(express.json());

app.use("/users", userController);

app.use(
  cors({
    origin: "*",
  })
);

let port = process.env.PORT;

const start = async () => {
  await connect();
  app.listen(port, () => {
    console.log("listing to port " + port);
  });
};

module.exports = start;
