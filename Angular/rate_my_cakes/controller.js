const allExports = require("./models");
Cake = allExports.Cakes;
Review = allExports.Reviews;



module.exports = {

    // retrieve all tasks
    index: (req, res) => {
        console.log("in controller index");
        Cake.find({}, function (err, cakes) {
            if (err) {
                res.json(err);
            }
            else {
                // console.log("in controller index");
                // console.log(cakes);
                res.json(cakes);
            }
        })
    },

    new_cake: (req, res) => {
        // console.log("controller req.body")
        // console.log(req.body.baker);
        // console.log(req.body.image);
        Cake.create({baker: req.body.baker, image: req.body.image}, function (err,data) {
            if (err) {
                res.json(err);
            } else {
                res.json({message: "Success", data: data});
            }
        })
    },

    // remove_task: (req, res) => {

    //     Task.remove({ _id: req.params._id }, function (err,data) {
    //         if (err) {
    //             res.json(err);
    //         } else {
    //             res.json({message: "Success", data: data});
    //         }
    //     })
    // },

    // retreive cake by id
    view: (req, res) => {
        Cake.findById(req.params._id, function (err, cake) {
            if (err) {
                res.json(err);
            } else {
                res.json(cake);
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

    findbyBaker: (req, res) => {
        console.log("In findbyBaker controller");
        Cake.find({baker: req.params.baker}, function(err, baker) {
            if(err) {
                console.log("In err");
                res.json(err);
            } else {
                console.log("In else");
                res.json(baker);
            }
        })
    }

    // update: (req, res) => {
    //     var title = req.body.title;
    //     var description = req.body.description;
    //     var completed = req.body.completed;
    //     var obj = {"title": title, "description": description, "completed" : completed};
    //     Task.update({_id: req.params._id},{$set: obj}, function(err, task) {
    //         if(err) {
    //             res.json(err);
    //         } else {
    //             res.json({message: "Success", data: task});
    //         }
    //     })
    // }
}





