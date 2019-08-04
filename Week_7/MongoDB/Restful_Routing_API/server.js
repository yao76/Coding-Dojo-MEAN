const express = require("express");
const app = express();
const bp = require("body-parser");
app.use(bp.json());


require('./routes')(app)


app.listen(8000, (err)=>{
    if(err){
        console.log(err);
    }else{
        console.log("listening on port 8000")
    }
})