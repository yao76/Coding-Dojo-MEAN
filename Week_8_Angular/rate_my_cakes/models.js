const mongoose = require("mongoose");

mongoose.connect('mongodb://localhost/cake_api');


var ReviewSchema = new mongoose.Schema({
    rating: {type: Number, required: true},
    comment: {type: String, default: ""}
}, { timestamps: true });

mongoose.model('Review', ReviewSchema); 
var Review = mongoose.model('Review');
//module.exports = Review;

var CakeSchema = new mongoose.Schema({
    baker: { type: String, default:"", required: true},
    image: {type: String, default:"", required: true},
    reviews: [ReviewSchema]
}, { timestamps: true });

mongoose.model('Cake', CakeSchema); 
var Cake = mongoose.model('Cake');





module.exports = {Reviews: Review, Cakes: Cake};