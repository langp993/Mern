const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
  Name: String,
  Age: String,
  // name: String,
  // description: String,
});

module.exports = mongoose.model("Item", itemSchema);
