module.exports = function(app) {

	app.get("/", (req, res) => {
		return res.render("home");
	});

	app.get('/table/:leagueid', (req, res) => {
		return res.render("table", {id: req.params.leagueid});
	});
};