const mongoose = require("mongoose");

mongoose.connect('mongodb://localhost/1955_api');

var PeopleSchema = new mongoose.Schema({
    name: { type: String, required: true },
}, { timestamps: true });

mongoose.model('People', PeopleSchema); 
var People = mongoose.model('People');

module.exports = People;