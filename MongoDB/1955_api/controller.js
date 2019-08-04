const People = require("./models");

module.exports = {
    index: (req, res) => {
        People.find({}, function (err, persons) {
            if (err) {
                res.json(err);
            }
            else {
                res.json(persons);
            }
        })
    },

    new_person: (req, res) => {
        People.create({ name: req.params.name }, function (err) {
            if (err) {
                res.json(err);
            } else {
                res.json({ added: true });
            }
        })
    },

    remove_person: (req, res) => {

        People.remove({ name: req.params.name }, function (err) {
            if (err) {
                res.json(err);
            } else {
                res.json({ removed: true });
            }
        })
    },

    view: (req, res) => {
        People.find({ name: req.params.name }, function (err, person) {
            if (err) {
                res.json(err);
            } else {
                res.json(person);
            }
        })
    }

    // People.findOne({name: req.params.name}, function (err, person) {
    //     if(err) {
    //         res.json(err);
    //     } else {
    //         People.remove({name: person.name}, function(err) {
    //             if(err) {
    //                 res.json(err);
    //             } else {
    //                 res.json({removed:true});
    //             }
    //         })
    //     }
    // })
}





