var path = require("path");

module.exports = function(app) {

app.get("/", function(req,res){

    res.send("app/public/home.html");
});


app.get("/survey", function(req, res) {
  // res.send("Welcome to the Star Wars Page!")
  res.sendFile(path.join(__dirname, "app/public/survey.html")); //allows this code to be run on a windows or other computer
  // res.sendFile("view.html");
});


};

