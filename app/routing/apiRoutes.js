// Load data and API routes

// Require js file that contains anime data
var anime = require("../data/anime.js");

// Routes

module.exports = function(app) {
  
  //a GET route that displays JSON of all possible friends
  app.get('/api/anime', function(req,res){
    res.json(anime);
  });

  //Post route to compare user input to anime api
  app.post('/api/anime', function(req,res){
    var userInput = req.body.scores;
    var scoreDiffArray = [];
    var match = 0;

    for(var i=0; i < anime.length; i++) {

      var scoreDifference = 0;

      for (var j=0; j < userInput.length; j++) {
        scoreDifference += (Math.abs(parseInt(anime[i].scores[j]) - parseInt(userInput[j])));
      }

      scoreDiffArray.push(scoreDifference);

    }

    for(var i=0; i < scoreDiffArray.length; i++){
      if(scoreDiffArray[i] <= scoreDiffArray[match]){
        match = i;
      }
    }

    var best = anime[match]
    res.json(best);
 
  });

}