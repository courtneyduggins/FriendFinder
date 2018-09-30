var path = require("path");
var friends = import("../data/friend.js");


module.exports = function (app){




    app.get("/api/friends", function(req, res){

        //create variable to capture input from new survery results
        
        res.json(friends);

    });



    app.post("/api/friends", function(req, res){

        var userInput = req.body;

        var responses = userInput.selections;


        var matchName = "";
        var matchPhoto = "";
        var totalDiff = 50;
        

        for (var i = 0; i < friends.length; i++){

            var diff = 0;

        for (var j = 0; j < responses.length; j++)   {

            diff += Math.abs(friends[i].selections[j] - responses[j]);

        }
        
        

        

        if (diff < totalDiff) {

            totalDiff = diff;
            matchName = friends[i].name;
            matchPhoto = friends[i].photo;
        }
    }

        friends.push(userInput);

        res.json({status: "Ok", matchName: matchName, matchPhoto: matchPhoto});
    });
};



