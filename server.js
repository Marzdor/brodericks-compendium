const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require("path");

const plants = require("./routes/api/plants");
const materials = require("./routes/api/materials");

const app = express();

// Bodyparser Middleware

app.use(bodyParser.json());

// DB Config
let db;
if (process.env.NODE_ENV === "production") {
  const db = process.env.mongodb;
} else {
  db = require("./config/key").mongoURI;
}

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

// Serve static assests if in production
if (process.env.NODE_ENV === "production") {
  // set static folder
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "clint", "build", "index.html"));
  });
}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log("Server Started on port " + port));
