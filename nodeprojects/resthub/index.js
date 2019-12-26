// fileName: index.js

// import Express, mongoose, body-parser
let express = require("express");
let mongoose = require("mongoose");
let bodyParser = require("body-parser");

// import API Router
let apiRoutes = require("./api-routes");

// initialize app
let app = express();

// setup server
var port = process.env.PORT || 8080;

// config body-parser
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.use(bodyParser.json());

// connect mongodb use mongoose and set connection variable
mongoose.connect("mongodb://localhost/resthub");
var db = mongoose.connection;

// send messagge for default URL
app.get("/", (req, res) =>
  res.json({
    status: "success",
    message: "Running Server resthub w/ modules",
    modules: "{express, nodemon, mongoose, body-parser}"
  })
);

// use app apiRoutes
app.use("/api", apiRoutes);

// launch app to listen specified PORT
app.listen(port, function() {
  console.log("Runing Server resthub on PORT: " + port);
});
