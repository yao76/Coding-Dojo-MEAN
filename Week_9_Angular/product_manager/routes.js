const controller = require("./controller");
var path = require("path");

module.exports = function(app){
    app.get('/api/products', controller.index)
    app.post('/api/products', controller.new_product)
    // app.post('/cakes/:cakeId', controller.add_review)
    app.delete('/api/products/:id', controller.remove_product)
    app.get('/api/products/:id', controller.view)
    // app.get('/cakes/baker/:baker', controller.findbyBaker)
    app.put('/api/products/:id', controller.update)

    app.all("*", (req,res,next) => {
        res.sendFile(path.resolve("./public/dist/public/index.html"))
    });
}
