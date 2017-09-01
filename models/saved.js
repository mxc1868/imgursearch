var mongoose = require("mongoose");

var SavedSchema = new mongoose.Schema({
    html: String
});

module.exports = mongoose.model("Saved", SavedSchema);