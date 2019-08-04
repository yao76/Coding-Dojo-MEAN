var express = require("express");
var path = require("path");
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded());
app.use(express.static(path.join(__dirname, "./static")));

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

var server = app.listen(8000, function () { })
var io = require('socket.io').listen(server);
io.sockets.on('connection', function (socket) {
    socket.on("posting_form", function (data) {
        io.emit('updated_message', {
            response: "You emitted the following information to the server: ",
            info: data
        });
    });
});

app.get('/', function (req, res) {
    res.render('index');
})

// app.post('/', function(req, res) {
//   res.render('index', {info: req.body});
// })