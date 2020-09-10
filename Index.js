express = require("express");

App = express();

App.get("", function(req,res){res.sendFile(__dirname + "/Index.html")})
App.listen(8080, function(){console.log("Running")} )
