const express = require("express");
const router = express.Router();
var bodyParser = require("body-parser");

router.use(bodyParser.json()); // to support JSON-encoded bodies
router.use(express.urlencoded({ extended: true })); // to support URL-encoded bodies

// Source Model
const Material = require("../../models/Material");

// @route GET api/materials
// @desc  get all materials
// @access Public
router.get("/", (req, res) => {
  Material.find()
    .sort({ name: 1 })
    .then(materials => res.json(materials));
});

// @route GET api/materials
// @desc  get spesific material
// @access Public
router.get("/edit=:name", (req, res) => {
  Material.find({ name: req.params.name }).then(materials =>
    res.json(materials)
  );
});

// @route POST api/materials
// @desc  Edit a material
// @access Public
router.post("/edit=:id", (req, res) => {
  const newData = {
    name: req.body.name,
    by: req.body.by,
    url: req.body.url
  };
  Material.findByIdAndUpdate(
    req.params.id,
    newData,
    { new: true },
    (err, Material) => {
      if (err) {
        console.log(err);
      } else {
        res.redirect("/edit");
      }
    }
  );
});

// @route POST api/materials
// @desc  Create a material
// @access Public
// router.post("/", (req, res) => {
//   newPlant = new Material({
//     name: req.body.name,
//     locations: req.body.locations,
//     rarity: req.body.rarity,
//     description: req.body.description
//   });

//   newPlant.save().then(material => res.json(material));
// });

// @route DELETE api/materials/:id
// @desc  Delete a material
// @access Public
// router.delete("/:id", (req, res) => {
//   Material.findById(req.params.id)
//     .then(material => material.remove().then(() => res.json({ success: true })))
//     .catch(err => res.status(404).json({ success: false }));
// });

module.exports = router;
