const controller = require("./controller");

module.exports = function(app){
    app.get('/cakes', controller.index)
    app.post('/cakes', controller.new_cake)
    app.post('/cakes/:cakeId', controller.add_review)
    // app.delete('/tasks/:_id', controller.remove_task)
    app.get('/cakes/:_id', controller.view)
    app.get('/cakes/baker/:baker', controller.findbyBaker)
    // app.put('/tasks/:_id', controller.update)
}
