const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const plants = require("./routes/api/plants");
const materials = require("./routes/api/materials");

const app = express();

// Bodyparser Middleware

app.use(bodyParser.json());

// DB Config
const db = require("./config/keys").mongoURI;

// Connect to Mongo
mongoose
  .connect(
    db,
    { useNewUrlParser: true }
  )
  .then(() => console.log("MongoDB Connected..."))
  .catch(err => console.log(err));

// Use routes
app.use("/api/plants", plants);
app.use("/api/materials", materials);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log("Server Started on port " + port));
