// const mongoose = require("mongoose");
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  // email:{type:String, required:true, unique:true},
  name: String,
  age: String,
  // name: String,
  // description: String,
});

export const Usermodel = mongoose.model("user", userSchema);
// module.exports = mongoose.model("Item", itemSchema);
