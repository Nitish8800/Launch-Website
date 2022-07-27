const express = require("express");
const app = express();

const cors = require("cors");

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

const connect = require("./configs/db");
require("dotenv").config();

const userController = require("./controller/User.controller");
//controller filelist

app.use(express.json());

app.use("/users", userController);


let port = process.env.PORT;

const start = async () => {
  await connect();
  app.listen(port, () => {
    console.log("listening to the port " + port);
  });
};

module.exports = start;
