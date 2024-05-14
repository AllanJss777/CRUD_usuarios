const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  nome: String,
  email: String,
  idade: Number,
});

const UserModel = mongoose.model("users", UserSchema);

module.exports = UserModel;
