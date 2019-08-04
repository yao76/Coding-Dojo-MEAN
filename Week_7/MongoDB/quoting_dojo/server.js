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
mongoose.connect('mongodb://localhost/basic_mongoose');

var QuoteSchema = new mongoose.Schema({
    name:  { type: String, required: true, minlength: 6},
    quote: { type: String, required: true }
}, {timestamps: true });

mongoose.model('Quote', QuoteSchema); // We are setting this Schema in our Models as 'User'
var Quote = mongoose.model('Quote') // We are retrieving this Schema from our Models, named 'User'

// Routes
// Root Request
app.get('/', function (req, res) {
    res.render("index");

});
app.get('/quotes', function (req, res) {
    // This is where we will retrieve the quotes from the database and include them in the view page we will be rendering.
    Quote.find({}, function (err, quotes) {
        res.render('quotes', { info: quotes });
    }).sort({ createdAt: 'desc' });

});

app.post('/processquotes', function (req, res) {
    var quote = new Quote(req.body);
    quote.save(function (err) {
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
});

// Setting our Server to Listen on Port: 8000
app.listen(8000, function () {
    console.log("listening on port 8000");
});