var express = require("express");
var path = require("path");
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var bcrypt = require("bcryptjs");
var validate = require('mongoose-validator');



app.use(bodyParser.urlencoded());
app.use(express.static(path.join(__dirname, "./static")));

app.set('views', path.join(__dirname, './views'));
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

mongoose.connect('mongodb://localhost/login_registration');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    first_name: {
        type: String,
        required: [true, "First name is required!"],
        validate: {
            validator: function (value) {
                return /^[A-z]+$/.test(value)
            },
            message: "Please enter a valid first name!"
        }
    },

    last_name: {
        type: String,
        required: [true, "Last name is required!"],
        validate: {
            validator: function (value) {
                return /^[A-z]+$/.test(value)
            },
            message: "Please enter a valid last name!"
        }
    },

    email: {
        type: String,
        required: [true, "Email is required!"],
        unique: true,
        validate: {
            validator: function (value) {
                return /^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$/.test(value)
            },
            message: "Please enter a valid email!"
        }
    },

    password: {
        type: String,
        required: true
    },

    // password_confirm: {
    //     type: String,
    //     required: true,
    //     validate: {
    //         validator: function(value) {
    //             return value == this.password;
    //         },
    //         message: "Password confirmation must match!"
    //     }
    // },

    birthday: {
        type: Date,
        required: [true, "Birthdate is required!"],
        validate: {
            validator: function (value) {
                return value instanceof Date;
            },
            message: "Please enter a valid birthday!"
        }
    },

}, { timestamps: true });

mongoose.model("User", UserSchema);
var User = mongoose.model("User");

// Routes
// Root Request
app.get('/', function (req, res) {
    // This is where we will retrieve the users from the database and include them in the view page we will be rendering.
    res.render('index');
})

// Add User Request 
app.post('/processregistration', function (req, res) {
    // console.log("POST DATA", req.body);
    // This is where we would add the user from req.body to the database.
    console.log(req.body.password);
    console.log(req.body.confirmpw);

    if (req.body.password != req.body.confirmpw) {
        console.log("Passwords do not match!");
        res.redirect("/");
    }
    else {
        User.create({ first_name: req.body.first_name, last_name: req.body.last_name, email: req.body.email, birthday: req.body.bday, password: req.body.password },
            function (err, user) {
                if (err) {
                    console.log("There was an error!" + err);
                    for (var key in err.errors) {
                        req.flash('register', err.errors[key].message);
                    }
                    res.redirect("/");
                } else {
                    req.session.user_id = user.id;
                    console.log("Succesfully registered a user!");
                    res.redirect("/success");
                }
            })
    }
});

app.post("/processlogin", function (req, res) {
    console.log("POST DATA", req.body);

    User.findOne({ email: req.body.loginemail }, (err, user) => {
        console.log("err" + err);
        console.log("user" + user);
        if (user == null) {
            console.log("User not found");
            res.redirect("/");
        } else {
            if (req.body.loginpassword == user.password) {
                req.session.user_id = user._id;
                console.log("Succesfully logged in!");
                res.redirect("/success");
            } else {
                console.log("Incorrect password");
                res.redirect("/");
            }
        }
    })
})

app.get('/success', function (req, res) {
    // This is where we will retrieve the users from the database and include them in the view page we will be rendering.
    res.render('success');
});


// Setting our Server to Listen on Port: 8000
app.listen(8000, function () {
    console.log("listening on port 8000");
});