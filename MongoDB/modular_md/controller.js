const Titan = require("./models");

module.exports = {
    index: (req, res) => {
        Titan.find({}, function (err, titans) {
            res.render("index", { info: titans });
        }).sort({ createdAt: 'desc' });
    },

    new_titan: (req, res) => {
        res.render('new_titan');
    },

    titans: (req, res) => {
        var titan = new Titan(req.body);
        titan.save(function (err) {
            if (err) {
                // if there is an error upon saving, use console.log to see what is in the err object 
                console.log("We have an error!", err);
                // adjust the code below as needed to create a flash message with the tag and content you would like
                for (var key in err.errors) {
                    req.flash('new_titan', err.errors[key].message);
                }
                // redirect the user to an appropriate route
                res.redirect('/titans/new');
            }
            else {
                res.redirect('/titans/' + titan._id);
            }
        });
    },

    titan_info: (req, res) => {
        var titan_id = req.params._id;
        Titan.find({ _id: titan_id }, function (err, titans) {
            console.log(titans);
            res.render("titan_info", { info: titans });
        })
    },

    edit_titan: (req, res) => {
        var titan_id = req.params._id;
        Titan.findOne({ _id: titan_id }, function (err, titans) {
            console.log(titans);
            res.render("edit_titan", { info: titans });
        });
    },

    process_edit_titan: (req, res) => {
        Titan.findOne({ _id: req.params._id }, function (err, titans) {
            if (err) {
                res.redirect("/")
            }
            else {
                titans.name = req.body.name;
                titans.height = req.body.height;
                titans.save(function (err) {
                    if (err) {
                        // if there is an error upon saving, use console.log to see what is in the err object 
                        console.log("We have an error!", err);
                        // adjust the code below as needed to create a flash message with the tag and content you would like
                        for (var key in err.errors) {
                            req.flash('edit_titan', err.errors[key].message);
                        }
                        // redirect the user to an appropriate route
                        res.redirect("/titans/edit/" + titans._id)
                    }
                    else {
                        res.redirect('/');
                    }
                });
            }
        })
    },

    delete_titan: (req, res) => {
        Titan.findOne({ _id: req.params._id }, function (err, titan) {
            if (err) {
                console.log("~Error matching DB request!~", err);
            }
            else {
                Titan.remove({ _id: titan._id }, function (err) {
                    if (err) {
                        console.log("~Error on delete!~", err);
                    }
                    else {
                        res.redirect("/");
                    }
                })
            }
        })
    }

}



