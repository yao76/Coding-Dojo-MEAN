const mongoose = require("mongoose");

mongoose.connect('mongodb://localhost/quotes_api');

var QuoteSchema = new mongoose.Schema({
    content: {type: String, minlength: [3, "too short"], maxlength:[20, "too long"],default: ""},
    votes: {type: Number, default: 0}
}, {timestamps: true})

mongoose.model("Quote", QuoteSchema);
var Quote = mongoose.model("Quote");

var AuthorSchema = new mongoose.Schema({
    name: {type: String, minlength : [3, "too short"], maxlength:[20,"too long"], required: true},
    quotes: [QuoteSchema]
}, { timestamps: true });

mongoose.model('Author', AuthorSchema); 
var Author = mongoose.model('Author');

module.exports = Author;