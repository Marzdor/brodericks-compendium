const express = require("express");
const router = express.Router();

// Plant Model
const Plant = require("../../models/Plants");

const locations = {
  a: "Arctic",
  ci: "Cities",
  co: "Coastal",
  d: "Deserts",
  f: "Forests",
  j: "Jungles",
  m: "Mountains",
  o: "Oceans",
  p: "Plains",
  r: "Rivers",
  s: "Swamps",
  uc: "Underdark/Caves"
};
const raritys = {
  vc: "Very Common",
  c: "Common",
  uc: "Uncommon",
  r: "Rare",
  vr: "Very Rare",
  l: "Legendary"
};

// @route GET api/plants
// @desc  get all plants
// @access Public
router.get("/", (req, res) => {
  Plant.find().then(plants => res.json(plants));
});

// @route GET api/plants
// @desc  get based on rarity
// @access Public
router.get("/rarity=:rarity", (req, res) => {
  Plant.find({ rarity: raritys[req.params.rarity] }).then(plants =>
    res.json(plants)
  );
});

// @route GET api/plants
// @desc  get based on location
// @access Public
router.get("/location=:loc", (req, res) => {
  Plant.find({ location: { $all: [locations[req.params.loc]] } }).then(plants =>
    res.json(plants)
  );
});

// @route POST api/plants
// @desc  Create a plant
// @access Public
router.post("/", (req, res) => {
  newPlant = new Plant({
    name: req.body.name,
    locations: req.body.locations,
    rarity: req.body.rarity,
    description: req.body.description
  });

  newPlant.save().then(plant => res.json(plant));
});

// @route DELETE api/plants/:id
// @desc  Delete a plant
// @access Public
router.delete("/:id", (req, res) => {
  Plant.findById(req.params.id)
    .then(plant => plant.remove().then(() => res.json({ success: true })))
    .catch(err => res.status(404).json({ success: false }));
});

module.exports = router;
