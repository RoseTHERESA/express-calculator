//bring in the express module
var express = require ("express");

//call the express function, return an object
var app = express();

app.set("view engine", "ejs");

app.get("/add/:num1/:num2", function(request, response){
	var sum = request.params.num1 + request.params.num2;
	response.render("math", {number:sum});
});




app.listen(300, function(){
	console.log("Server starting on port 3000");
})