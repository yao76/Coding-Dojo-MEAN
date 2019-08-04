const controller = require("./controller");

module.exports = function(app){
    app.get('/tasks', controller.index)
    app.post('/tasks', controller.new_task)
    app.delete('/tasks/:_id', controller.remove_task)
    app.get('/tasks/:_id', controller.view)
    app.put('/tasks/:_id', controller.update)
}
