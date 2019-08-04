const Product = require("./models");

module.exports = {

    // retrieve all tasks
    index: (req, res) => {
        console.log("in controller index");
        Product.find({}, function (err, products) {
            if (err) {
                res.json(err);
            }
            else {
                // console.log("in controller index");
                // console.log(cakes);
                res.json(products);
            }
        })
    },

    new_product: (req, res) => {
        // console.log("controller req.body")
        // console.log(req.body.baker);
        // console.log(req.body.image);
        Product.create(req.body, function (err,data) {
            if (err) {
                console.log(err);
                res.json(err);
            } else {
                res.json({message: "Success", data: data});
            }
        })
    },

    remove_product: (req, res) => {

        Product.findByIdAndDelete(req.params.id, function (err,data) {
            if (err) {
                res.json(err);
            } else {
                res.json({message: "Success", data: data});
            }
        })
    },

    // retreive cake by id
    view: (req, res) => {
        Product.findById(req.params.id, function (err, product) {
            if (err) {
                res.json(err);
            } else {
                res.json(product);
            }
        })
    },

    add_review: (req, res) => {
        console.log("in controller add_review");
        console.log(req.body);
        Review.create(req.body, function( err,newReview) {
            if(err) {
                res.json(err);
            } else {
                Cake.findByIdAndUpdate({_id: req.params.cakeId}, {$push: {reviews: newReview}}, function(err,data){
                    if(err) {
                        res.json(err);
                    } else {
                        res.json(data);
                    }
                })
            
            }
        })
    },

    // findbyBaker: (req, res) => {
    //     console.log("In findbyBaker controller");
    //     Cake.find({baker: req.params.baker}, function(err, baker) {
    //         if(err) {
    //             console.log("In err");
    //             res.json(err);
    //         } else {
    //             console.log("In else");
    //             res.json(baker);
    //         }
    //     })
    // },

    update: (req, res) => {
        console.log("In controller update: ", req.body)
        Product.findByIdAndUpdate(req.params.id, req.body, function(err, product) {
            if(err) {
                res.json(err);
            } else {
                console.log("product update: ", product);
                res.json({message: "Success", data: product});
            }
        })
    }
}





