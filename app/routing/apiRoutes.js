var friendData = require("data/friend.js");


module.exports = function (app){




    app.get("api/friends.js", function(res, req){

        res.json(friendData);

    });

    app.post("app/friends", function(res, req){




    });
};



