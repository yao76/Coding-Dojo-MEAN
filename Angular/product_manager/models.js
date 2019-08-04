const mongoose = require("mongoose");

mongoose.connect('mongodb://localhost/product_api');


var ProductSchema = new mongoose.Schema({
    title: { type: String, default:"", required: true, minlength: 4},
    price: { type: Number, default:"", required: true},
    image: {type: String, default:""},
}, { timestamps: true });

mongoose.model('Product', ProductSchema); 
var Product = mongoose.model('Product');

module.exports = Product;