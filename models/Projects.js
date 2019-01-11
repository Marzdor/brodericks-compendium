const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const ProjectSchema = new Schema({
  siteName: {
    type: String,
    required: true
  },
  imageBaseName: {
    type: String,
    required: true
  },
  tags: {
    type: Array,
    required: true
  },
  url: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  }
});

module.exports = Project = mongoose.model("project", ProjectSchema);
