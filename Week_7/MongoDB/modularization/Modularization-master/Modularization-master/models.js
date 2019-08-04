const mongoose = require("mongoose");

mongoose.connect('mongodb://localhost/basic_mongoose');

var QuoteSchema = new mongoose.Schema({
    name:  { type: String, required: true, minlength: 6},
    quote: { type: String, required: true }
}, {timestamps: true });

mongoose.model('Quote', QuoteSchema); 
var Quote = mongoose.model('Quote')

module.exports = Quote;