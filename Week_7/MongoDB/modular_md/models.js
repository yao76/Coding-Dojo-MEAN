const mongoose = require("mongoose");

mongoose.connect('mongodb://localhost/basic_mongoose');

var TitanSchema = new mongoose.Schema({
    name: { type: String, required: true, minlength: 5 },
    height: { type: Number, required: true }
}, { timestamps: true });

mongoose.model('Titan', TitanSchema); 
var Titan = mongoose.model('Titan');

module.exports = Titan;