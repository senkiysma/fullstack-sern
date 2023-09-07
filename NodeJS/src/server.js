let express = require("express");
let bodyParser = require("body-parser");
let configViewEngine = require("./config/viewEngine.js");
let webRoutes = require("./route/web.js");
require('dotenv').config();
let connectDB = require("./config/connectDB.js");

let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

configViewEngine(app);
webRoutes(app);

connectDB();    

let port = process.env.PORT || 8001;

app.listen(port, () => {
    console.log("Backend NodeJS is running on the port:", port);
});