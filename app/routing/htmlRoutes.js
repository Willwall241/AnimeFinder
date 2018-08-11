// Dependencies
var path = require("path");


//Routes for html pages
module.exports = function (app) {

  // Get method to display home page
  app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });

  // Get method to display survey page
  app.get("/survey", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
  });

}