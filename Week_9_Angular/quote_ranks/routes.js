const controller = require("./controller");
var path = require("path");


module.exports = function(app){
    app.get('/authors', controller.index)
    // app.get('/authors/new', controller.new_author)
    app.post('/authors', controller.add_author)
    app.delete('/authors/:_id', controller.remove_author)
    app.get('/authors/:_id', controller.view)
    app.get('/api/quotes/:id/:idx', controller.oneQuote)
    // app.get('/cakes/baker/:baker', controller.findbyBaker)
    app.put('/authors/:_id', controller.update)
    app.post('/api/quotes/:_id', controller.add_quote)
    app.put('/quotes/:_id', controller.edit_quote)
    app.put("/quotes/voteup/:_id/:idx", controller.voteUp)
    app.put("/quotes/votedown/:_id/:idx", controller.voteDown)
    app.delete("/quotes/:id", controller.deleteQuote)
    app.all("*", (req,res,next) => {
        res.sendFile(path.resolve("./public/dist/public/index.html"))
    });
}
