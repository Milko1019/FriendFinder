var path = require("path");

module.exports = function(app) {

	// app.get("/", function(req, res){
	// 	res.send('hello world');
	// })
	// if user enters survey in URL or presses survey button, serves the survey HTML file
	app.get("/survey", function(req, res) {
		res.sendFile(path.join(__dirname, "/../public/survey.html"));
	});

	app.get("/", function(req, res) {
		res.sendFile(path.join(__dirname, "/../public/home.html"));
	});
};