var express = require("express");
var app = express();
var request = require("request");
var path = require("path");
var bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true})); 
app.use("/",express.static("public"));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));


function header(name) {
    var myurl =  "https://api.imgur.com/3/gallery/search?q="+name;
    var myheader = {"Authorization" : "Client-ID 44b98cb1fdadb60"};
    var options = {
        url: myurl,
        headers: myheader
    }
    return options;
}
app.get("/", function(req, res) {
    res.render("mainpage");
})
app.get("/show", function(req, res) {
        var name = req.query.name;
            if (name) {
                name = encodeURIComponent(req.query.name);
                request(header(name), function(error, response, body) {
                    if (!error && response.statusCode == 200) {
                        body = JSON.parse(body);
                        var data = body.data;
                        res.render("images", {data: data});
                    }
                });
            } else {
                var data;
                res.render("images",{data: data});
            }   
});

app.get("/result/:page", function(req, res) {
    var name = req.query.name;
    var page = req.params.page;
        if (name) {
            name = encodeURIComponent(req.query.name);
            request(header(name), function(error, response, body) {
                if (!error && response.statusCode == 200) {
                    body = JSON.parse(body);
                    var data = body.data.slice(20 * ((Number(page)) - 1), 20 * ((Number(page))));
                    res.render("imagesResult",{data: data});
                }
            });
        } 
});



app.listen(process.env.PORT, process.env.IP);