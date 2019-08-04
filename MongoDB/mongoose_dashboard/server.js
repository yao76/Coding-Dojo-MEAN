// Require the Express Module
var express = require('express');

// Create an Express App
var app = express();

var mongoose = require('mongoose');

// Require body-parser (to receive post data from clients)
var bodyParser = require('body-parser');

// Integrate body-parser with our App
app.use(bodyParser.urlencoded({ extended: true }));

// Require path
var path = require('path');

// Setting our Static Folder Directory
app.use(express.static(path.join(__dirname, './static')));

// Setting our Views Folder Directory
app.set('views', path.join(__dirname, './views'));

// Setting our View Engine set to EJS
app.set('view engine', 'ejs');

const flash = require('express-flash');
app.use(flash());

var session = require('express-session');
app.use(session({
    secret: 'keyboardkitteh',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
}))

// This is how we connect to the mongodb database using mongoose -- "basic_mongoose" is the name of
//   our db in mongodb -- this should match the name of the db you are going to use for your project.
mongoose.connect('mongodb://localhost/mongoose_dashboard');

var TitanSchema = new mongoose.Schema({
    name: { type: String, required: true, minlength: 5 },
    height: { type: Number, required: true }
}, { timestamps: true });

mongoose.model('Titan', TitanSchema); // We are setting this Schema in our Models as 'User'
var Titan = mongoose.model('Titan') // We are retrieving this Schema from our Models, named 'User'

// Routes
// Root Request
app.get('/', function (req, res) {
    Titan.find({}, function (err, titans) {
        res.render("index", { info: titans });
    }).sort({ createdAt: 'desc' });
});

app.get('/titans/new', function (req, res) {
    res.render('new_titan');
});

// post route for new titan form
app.post('/titans', function (req, res) {
    var titan = new Titan(req.body);
    titan.save(function (err) {
        if (err) {
            // if there is an error upon saving, use console.log to see what is in the err object 
            console.log("We have an error!", err);
            // adjust the code below as needed to create a flash message with the tag and content you would like
            for (var key in err.errors) {
                req.flash('registration', err.errors[key].message);
            }
            // redirect the user to an appropriate route
            res.redirect('/titans/new');
        }
        else {
            res.redirect('/titans/' + titan._id);
        }
    });
});

app.get('/titans/:_id', function (req, res) {
    var titan_id = req.params._id;
    Titan.find({ _id: titan_id }, function (err, titans) {
        console.log(titans);
        res.render("titan_info", { info: titans });
    })
});

app.get('/titans/edit/:_id', function (req, res) {
    var titan_id = req.params._id;
    Titan.findOne({ _id: titan_id }, function (err, titans) {
        console.log(titans);
        res.render("edit_titan", { info: titans });
    });
});


// app.post('/titans/edit/:name', function (req, res) {
//     var titan_name = req.params.name;
//     Titan.findOne({name=titan_name})
//     titan.save(function (err) {
//         if (err) {
//             // if there is an error upon saving, use console.log to see what is in the err object 
//             console.log("We have an error!", err);
//             // adjust the code below as needed to create a flash message with the tag and content you would like
//             for (var key in err.errors) {
//                 req.flash('registration', err.errors[key].message);
//             }
//             // redirect the user to an appropriate route
//             res.redirect('/titans/new');
//         }
//         else {
//             res.redirect('/titans/' + titan.name);
//         }
//     });
// });

// processing edit titan
app.post("/titans/:_id", function (req, res) {
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
                        req.flash('registration', err.errors[key].message);
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
});


// destroy
app.post("/titans/destroy/:_id", function (req, res) {
    console.log("~Destroy~");
    // Titan.findOne({_id:req.params._id}, function(err, titan){
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
});

// Setting our Server to Listen on Port: 8000
app.listen(8000, function () {
    console.log("listening on port 8000");
});