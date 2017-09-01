var express = require("express");
var app = express();
var request = require("request");
var path = require("path");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");

mongoose.connect("---");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true})); 
app.use("/",express.static("public"));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

var indexRoute = require("./routes/index");
var savedRoute = require("./routes/saved");

app.use("/", indexRoute);
app.use("/saved", savedRoute);





app.listen(process.env.PORT, process.env.IP);