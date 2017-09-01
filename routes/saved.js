var express = require("express");
var router = express.Router({mergeParams: true});
var request = require("request");
var mongoose = require("mongoose");
var myutil = require("../utils/util");
var SavedSchema = require("../models/saved");

router.get("/", function(req, res) {
    SavedSchema.find({}, function(err, result) {
        if (err) {
            console.log(err);
        } else {
            res.render("saved/show", {data: result});
        }
    });
});

router.post("/", function(req, res) {
    var htmlBlock = req.body.html;
    SavedSchema.create({html:htmlBlock}, function(err, result) {
        if (err) {
            console.log(err);
        } else {
            res.send("success!");
        }
    });
});

router.delete("/:id", function(req, res) {
    SavedSchema.findByIdAndRemove(req.params.id, function(err, result) {
        if(err) {
            console.log(err);
        } else {
            res.send("success!");
        }
    })
})

module.exports = router;