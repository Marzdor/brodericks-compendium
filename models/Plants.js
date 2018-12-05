const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const PlantSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  locations: {
    type: Array,
    required: true
  },
  rarity: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  }
});

module.exports = Plant = mongoose.model("plant", PlantSchema);
