const express = require("express");
const app = express();
const bp = require("body-parser")

app.set('views', __dirname+'/views');
app.set('view engine', 'ejs');
app.use(bp.urlencoded({extended:true}));


const flash = require('express-flash');
app.use(flash());

var session = require('express-session');
app.use(session({
    secret: 'keyboardkitteh',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
}))

require('./routes')(app)


app.listen(8000, (err)=>{
    if(err){
        console.log(err);
    }else{
        console.log("listening on port 8000")
    }
})