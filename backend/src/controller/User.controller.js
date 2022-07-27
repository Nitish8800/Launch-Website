const express = require("express");

const router = express.Router();
const User = require("../model/User.model");

const crypto = require("crypto");

if (process.env.NODE_ENV !== "PRODUCTION") {
  require("dotenv").config({
    path: "backend/.env",
  });
}

const jwt = require("jsonwebtoken");

const JWT_SECRET = process.env.ACCESS_TOKEN_SECRET;

const newToken = (user) => {
  return jwt.sign({ id: user.id }, JWT_SECRET, {
    expiresIn: "7days",
  });
};

const verifyToken = (token) => {
  // new Promise((resolve, reject) => {
  //   jwt.verify(token, JWT_SECRET, (err, decoded) => {
  //     if (err) {
  //       return reject(err);
  //     } else {
  //       return resolve(decoded);
  //     }
  //   });
  // });

  return jwt.verify(token, JWT_SECRET);
};

router.post("/register", async (req, res) => {
  try {
    const user = await User.create({
      ...req.body,
      id: crypto.randomBytes(16).toString("hex"),
    });
    const token = newToken(user);
    return res.status(201).json({ token });
  } catch (err) {
    return res.status(400).send({ err });
  }
});

router.post("/login", async (req, res) => {
  let { email, password } = req.body;
  try {
    const user = await User.findOne({ email, password }).lean().exec();
    if (!user) {
      return res.status(404).send({ message: "User not found", status: false });
    }
    let token = newToken(user);
    return res.status(200).json({ token, status: true });
  } catch (err) {
    return res.status(400).send({ err, status: false });
  }
});

router.get("/", async (req, res) => {
  try {
    const { id } = verifyToken(req.headers.authorization);
    const user = await User.findOne({ id }).lean().exec();
    if (!user) {
      return res.status(404).send({ message: "User not found" });
    }

    return res.status(200).json(user);
  } catch (err) {
    return res.status(400).send(err);
  }
});

module.exports = router;
