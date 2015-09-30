module.exports.controller = function (app) {
	app.get('/', function (req, res) {
		var sessionId = {
			session: req.session.currentUser
		};
		res.render('home', sessionId);
	});
}