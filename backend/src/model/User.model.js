const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    id: { type: String },
    name: { type: String, required: false },
    email: { type: String, required: true },
    password: { type: String, required: true },
    isAdmin: { type: Boolean, default: false },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const User = mongoose.model("user", userSchema);

module.exports = User;
