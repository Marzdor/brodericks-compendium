const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const MaterialSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  by: {
    type: String,
    required: true
  },
  url: {
    type: String,
    required: true
  }
});

module.exports = Material = mongoose.model("material", MaterialSchema);
