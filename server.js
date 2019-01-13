const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require("path");

const plants = require("./routes/api/plants");
const materials = require("./routes/api/materials");

const app = express();

// Bodyparser Middleware

app.use(bodyParser.json());
app.get("/*", (req, res) => {
  let url = path.join(__dirname, "../client/build", "index.html");
  if (!url.startsWith("/app/"))
    // we're on local windows
    url = url.substring(1);
  res.sendFile(url);
});

// DB Config
let db;
if (process.env.NODE_ENV === "production") {
  db = process.env.mongodb;
} else {
  db = require("./config/keys").mongoURI;
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
    res.sendFile(path.resolve(__dirname, "clinet", "build", "index.html"));
  });
}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log("Server Started on port " + port));
