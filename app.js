//bring in the express module
var express = require ("express");

//call the express function, return an object
var app = express();

app.set("view engine", "ejs");

app.get("/add/:num1/:num2", function (req, res){
	var result = Number(req.params.num1) + Number(req.params.num2);
	res.render("math", {number:result});
});

app.get("/subract/:num1/:num2", function (req, res){
	var result = Number(req.params.num1) - Number(req.params.num2);
	res.render("math", {number:result});
});

app.get("/multiply/:num1/:num2", function (req, res){
	var result = Number(req.params.num1) * Number(req.params.num2);
	res.render("math", {number:result});
});

app.get("/divide/:num1/:num2", function (req, res){
	var result = Number(req.params.num1) / Number(req.params.num2);
	res.render("math", {number:result});
});



app.listen(3000, function(){
	console.log("Server starting on port 3000");
});