const controller = require("./controller");

module.exports = function(app){
    app.get('/', controller.home)
    app.get('/quotes', controller.quotes)
    app.post('/processquotes', controller.processquotes)
}
