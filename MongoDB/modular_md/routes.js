const controller = require("./controller");

module.exports = function(app){
    app.get('/', controller.index)
    app.get('/titans/new', controller.new_titan)
    app.post('/titans', controller.titans)
    app.get('/titans/:_id', controller.titan_info)
    app.get('/titans/edit/:_id', controller.edit_titan)
    app.post('/titans/:_id', controller.process_edit_titan)
    app.post('/titans/destroy/:_id', controller.delete_titan)
}
