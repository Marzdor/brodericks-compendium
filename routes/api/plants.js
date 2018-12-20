const express = require("express");
const router = express.Router();
var bodyParser = require("body-parser");

router.use(bodyParser.json()); // to support JSON-encoded bodies
router.use(express.urlencoded({ extended: true })); // to support URL-encoded bodies

// Plant Model
const Plant = require("../../models/Plants");

// @route GET api/plants
// @desc  get all plants
// @access Public
router.get("/", (req, res) => {
  Plant.find()
    .sort({ name: 1 })
    .then(plants => res.json(plants));
});

// @route GET api/plants
// @desc  get spesific plant
// @access Public
// router.get("/edit=:name", (req, res) => {
//   Plant.find({ name: req.params.name }).then(plants => res.json(plants));
// });

// @route POST api/plants
// @desc  Edit a plant
// @access Public
// router.post("/edit=:id", (req, res) => {
//   const newData = {
//     name: req.body.name,
//     rarity: req.body.rarity,
//     location: req.body.location.split(","),
//     description: req.body.description
//   };
//   Plant.findByIdAndUpdate(
//     req.params.id,
//     newData,
//     { new: true },
//     (err, Plant) => {
//       if (err) {
//         console.log(err);
//       } else {
//         res.redirect("/edit");
//       }
//     }
//   );
// });

// @route POST api/plants
// @desc  Create a plant
// @access Public
// router.post("/", (req, res) => {
//   newPlant = new Plant({
//     name: req.body.name,
//     locations: req.body.locations,
//     rarity: req.body.rarity,
//     description: req.body.description
//   });

//   newPlant.save().then(plant => res.json(plant));
// });

// @route DELETE api/plants/:id
// @desc  Delete a plant
// @access Public
// router.delete("/:id", (req, res) => {
//   Plant.findById(req.params.id)
//     .then(plant => plant.remove().then(() => res.json({ success: true })))
//     .catch(err => res.status(404).json({ success: false }));
// });

module.exports = router;
