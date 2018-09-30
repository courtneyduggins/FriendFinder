var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
//node packages required to run app

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());



require(path.join(__dirname, "/app/routing/apiRoutes.js"))(app);
require(path.join(__dirname, "/app/routing/htmlRoutes.js"))(app);


// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});




