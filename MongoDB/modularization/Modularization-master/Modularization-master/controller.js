const Quotes = require("./models");

module.exports = {
    home: (req, res) => {
        Quotes.find({}, function (err, data) {
            if (err) {
                console.log(err);
            } else {
                console.log(data);
                res.render('index', { info: data });
            }
        })
    },
    processquotes: (req, res) => {
        Quotes.create({name:req.body.name, quote:req.body.quote}, function(err, quotes){
            if (err) {
                // if there is an error upon saving, use console.log to see what is in the err object 
                console.log("We have an error!", err);
                // adjust the code below as needed to create a flash message with the tag and content you would like
                for (var key in err.errors) {
                    req.flash('registration', err.errors[key].message);
                }
                // redirect the user to an appropriate route
                res.redirect('/');
            }
            else {
                res.redirect('/quotes');
            }
        });
    },

    quote: (req, res) => {
        Quote.find({}, function (err, quotes) {
            res.render('quotes', { info: quotes });
        }).sort({ createdAt: 'desc' });
    }

}



