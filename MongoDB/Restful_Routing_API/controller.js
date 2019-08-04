const Task = require("./models");

module.exports = {

    // retrieve all tasks
    index: (req, res) => {
        Task.find({}, function (err, tasks) {
            if (err) {
                res.json(err);
            }
            else {
                res.json(tasks);
            }
        })
    },

    new_task: (req, res) => {
        Task.create(req.body, function (err,data) {
            if (err) {
                res.json(err);
            } else {
                res.json({message: "Success", data: data});
            }
        })
    },

    remove_task: (req, res) => {

        Task.remove({ _id: req.params._id }, function (err,data) {
            if (err) {
                res.json(err);
            } else {
                res.json({message: "Success", data: data});
            }
        })
    },

    // retreive task by id
    view: (req, res) => {
        Task.findOne({ _id: req.params._id }, function (err, task) {
            if (err) {
                res.json(err);
            } else {
                res.json(task);
            }
        })
    },

    update: (req, res) => {
        var title = req.body.title;
        var description = req.body.description;
        var completed = req.body.completed;
        var obj = {"title": title, "description": description, "completed" : completed};
        Task.update({_id: req.params._id},{$set: obj}, function(err, task) {
            if(err) {
                res.json(err);
            } else {
                res.json({message: "Success", data: task});
            }
        })
    }
}





