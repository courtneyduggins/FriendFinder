var path = require("path");
var friends = import("../data/friend.js");


module.exports = function (app){




    app.get("/api/friends", function(req, res){

        //create variable to capture input from new survery results
        
        res.json(friends);

    });



    app.post("/api/friends", function(req, res){

        
        var userInput = req.body;
        friends.push(userInput);

        var responses = userInput.scores;


        var matchName = "";
        var matchPhoto = "";


        var totalDifference = 50;
        

        for (var i = 0; i < friends.length; i++){

            var difference = 0;

        for (var j = 0; j < responses.length; j++)   {

            difference += Math.abs(friends[i].scores[j] - responses[j]);

        }
        
        

        

        if (difference < totalDifference) {

            totalDifference = difference;
            matchName = friends[i].name;
            matchPhoto = friends[i].photo;
        }
    }

        
        // res.json(true);

        res.json({status: "Ok", matchName: matchName, matchPhoto: matchPhoto});
    });
};



