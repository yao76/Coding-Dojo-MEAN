const Author = require("./models");



module.exports = {

    // retrieve all tasks
    index: (req, res) => {
        console.log("in controller index");
        Author.find({}, function (err, authors) {
            if (err) {
                res.json(err);
            }
            else {
                // console.log("in controller index");
                // console.log(cakes);
                res.json(authors);
            }
        })
    },

    add_author: (req, res) => {
        // console.log("controller req.body")
        // console.log(req.body.baker);
        // console.log(req.body.image);
        Author.create({name: req.body.name}, function (err,data) {
            if (err) {
                res.json(err);
            } else {
                res.json({message: "Success", data: data});
                // res.redirect("");
            }
        })
    },

    remove_author: (req, res) => {

        Author.findByIdAndDelete({ _id: req.params._id }, function (err,data) {
            if (err) {
                console.log(err);
                res.json(err);
            } else {
                res.json({message: "Success", data: data});
            }
        })
    },

    //retreive author by id
    view: (req, res) => {
        Author.findById(req.params._id, function (err, author) {
            if (err) {
                res.json(err);
            } else {
                res.json(author);
            }
        })
    },

    // add_review: (req, res) => {
    //     console.log("in controller add_review");
    //     console.log(req.body);
    //     Review.create(req.body, function( err,newReview) {
    //         if(err) {
    //             res.json(err);
    //         } else {
    //             Cake.findByIdAndUpdate({_id: req.params.cakeId}, {$push: {reviews: newReview}}, function(err,data){
    //                 if(err) {
    //                     res.json(err);
    //                 } else {
    //                     res.json(data);
    //                 }
    //             })
            
    //         }
    //     })
    // },

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
    // }

    update: (req, res) => {
        var name = req.body;
        console.log("controller update: " + name);
        var obj = {"name": name};
        Author.findByIdAndUpdate(req.params._id, req.body, function(err, task) {
            if(err) {
                res.json(err);
            } else {
                res.json({message: "Success", data: task});
            }
        })
    }
}





