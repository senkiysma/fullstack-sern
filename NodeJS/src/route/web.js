let express = require("express");
const homeController = require("../controllers/homeController.js");

let router = express.Router();

let initWebRoutes = (app) => {
    router.get("/", homeController.getHomePage);
    router.get("/about", homeController.getAboutPage);
    router.get('/crud/store', homeController.getCRUDPage);
    router.post('/crud/post', homeController.postCRUD);
    router.get('/crud/index',homeController.getCRUDPageIndex);
    router.get('/crud/edit',homeController.getEditCRUDPage);
    router.post('/crud/edit/update',homeController.putCRUD);
    return app.use("/", router);
}

module.exports = initWebRoutes;