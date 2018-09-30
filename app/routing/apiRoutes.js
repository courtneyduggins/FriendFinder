var path = require("path");
var friends = require("../data/friends.js");


module.exports = function(app){




    app.get("/api/friends", function(req, res){
        
        res.json(friends);

    });



    app.post("/api/friends", function(req, res){

        const userInput = req.body;
        
        

        // const responses = userInput.scores;


        let matchName = "";
        let matchPhoto = "";


        let totalDifference = 50;
        
        for (let i = 0; i < friends.length; i++){

            let difference = 0;

        for (let j = 0; j < responses.length; j++)   {

            difference += Math.abs(friends[i].scores[j] - responses[j]);

        }
        
        

        

        if (difference < totalDifference) {

            totalDifference = difference;
            matchName = friends[i].name;
            matchPhoto = friends[i].photo;
        }
    }

    friends.push(userInput);
        
        // res.json(true);

        // res.json({ok: true});
    });
};



