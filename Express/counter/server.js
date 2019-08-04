// require express
var express = require("express");

// path module -- try to figure out where and why we use this
var path = require("path");

var session = require('express-session');

// create the express app
var app = express();

var bodyParser = require('body-parser');

// use it!
app.use(bodyParser.urlencoded({ extended: true }));

// static content
app.use(express.static(path.join(__dirname, "./static")));
// setting up ejs and our views folder
app.set('views', path.join(__dirname, './views'));

app.set('view engine', 'ejs');

app.use(session({
    secret: 'keyboardkitteh',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
}))

// // root route to render the index.ejs view
// app.get('/', function initViewsCount(req, res, next) {
//     if (typeof req.session.views === 'undefined') {
//         req.session.views = 0;
//         res.render('index',{session: req.session.views});
//     }
//     return next();
// });
// app.get('/', function incrementViewsCount(req, res, next) {
//     console.assert(typeof req.session.views === 'number',
//         'missing views count in the session', req.session);
//     req.session.views++;
//     console.log(req.session.views)
//     res.redirect('/');
// });

app.get('/', function (req, res) {
    var session = req.session;
    if (session.views) {

        session.views = session.views + 1;
        // res.setHeader('Content-Type', 'text/html');
        // res.write('<p>views: ' + session.views + '</p>');
        // res.write('<p>expires in: ' + (session.cookie.maxAge / 1000) + 's</p>');
        // res.end();
        res.render("index", {view_count: session.views});
    } else {
        session.views = 1;
        // res.end('welcome to the session demo. refresh!');
        res.render("index", {view_count: session.views});
    }
});

app.get("/addtwo", function (req, res){
    req.session.views += 1;
    res.redirect("/");
    // res.render("index", {view_count: req.session.views});
});

app.get("/reset", function (req, res){
    req.session.views = 0;
    // res.render("index", {view_count: req.session.views});
    res.redirect("/");
});

// tell the express app to listen on port 8000
app.listen(8000, function () {
    console.log("listening on port 8000");
});