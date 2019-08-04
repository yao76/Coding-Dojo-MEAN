// Load the express module and store it in the variable express (Where do you think this comes from?)
var express = require("express");
console.log("Let's find out what express is", express);
// invoke express and store the result in the variable app
var app = express();
console.log("Let's find out what app is", app);


app.use(express.static(__dirname + "/static"));
app.set('view engine', 'ejs');

// use app's get method and pass it the base route '/' and a callback
app.get('/', function (request, response) {
    // just for fun, take a look at the request and response objects
    console.log("The request object", request);
    console.log("The response object", response);
    // use the response object's .send() method to respond with an h1
    response.render(index.html);
})
// tell the express app to listen on port 8000, always put this at the end of your server.js file
app.listen(8000, function () {
    console.log("listening on port 8000");
})
app.get("/cats", function (request, response){
    
    response.render('cats');
})

app.get("/cats/1", function (request, response){
    var cat_array = {
        "Favorite food" : "Spaghetti",
        "Age" : 3,
        "Sleeping Spots" : ["under the bed", "in a sunbeam"]
    };
    response.render('details', {cat_array: cat_array});
})

app.get("/cats/2", function (request, response){
    var cat_array = {
        "Favorite food" : "People",
        "Age" : 7,
        "Sleeping Spots" : ["over vents", "my homework"]
    };
    response.render('details', {cat_array: cat_array});
})

app.get("/cats/3", function (request, response){
    var cat_array = {
        "Favorite food" : "Fish",
        "Age" : 9,
        "Sleeping Spots" : ["warm places", "my head"]
    };
    response.render('details', {cat_array: cat_array});
})

app.get("/cats/4", function (request, response){
    var cat_array = {
        "Favorite food" : "Cat nip",
        "Age" : 2,
        "Sleeping Spots" : ["sinks", "boxes"]
    };
    response.render('details', {cat_array: cat_array});
})
