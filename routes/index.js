var express = require("express");
var router = express.Router({mergeParams: true});
var request = require("request");
var mongoose = require("mongoose");
var myutil = require("../utils/util");


router.get("/", function(req, res) {
    res.render("mainpage");
})

router.get("/show", function (req, res) {
        var q = req.query.q;
        if (q) {
            q = encodeURIComponent(req.query.q);
            request(myutil.setHeader(q, 1), function(error, response, body) {
                if (!error && response.statusCode == 200) {
                    body = JSON.parse(body);
                    var data = body.value;
                    res.render("show",{data: data});
                }
            });
        } else {
            var data;
            res.render("show",{data: data});
        }
});

router.get("/result/:page", function(req, res) {
        var page = req.params.page;
        var q = req.query.q;
        if (q) {
            q = encodeURIComponent(req.query.q);
            request(myutil.setHeader(q, page), function(error, response, body) {
                if (!error && response.statusCode == 200) {
                    body = JSON.parse(body);
                    var data = body.value;
                    res.render("imagesResult",{data: data});
                }
            });
        }
});

module.exports = router;
