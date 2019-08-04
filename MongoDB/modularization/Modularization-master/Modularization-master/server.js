const express = require("express");
const app = express();
const bp = require("body-parser")

app.set('views', __dirname+'/views');
app.set('view engine', 'ejs');
app.use(bp.urlencoded({extended:true}));





require('./routes')(app)


app.listen(8000, (err)=>{
    if(err){
        console.log(err);
    }else{
        console.log("listening on port 8000")
    }
})