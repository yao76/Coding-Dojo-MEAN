const express = require("express");
const app = express();
const bp = require("body-parser");
app.use(bp.json());
app.use(express.static( __dirname + '/public/dist/public' ));
var path = require("path");



// require('./routes')(app)


app.all("*", (req,res,next) => {
    res.sendFile(path.resolve("./public/dist/public/index.html"))
});

app.listen(4200, (err)=>{
    if(err){
        console.log(err);
    }else{
        console.log("listening on port 4200")
    }
})