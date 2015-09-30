module.exports.controller = function (app) {
	app.get('/careers', function (req, res) {
		res.render('../views/career-shop/career-shop')
	});

	app.get('/careers/performer-path', function (req, res) {
		res.render('../views/career-shop/performer')
	});

	app.get('/careers/service-path', function (req, res) {
		res.render('../views/career-shop/service')
	});

	app.get('/careers/research-path', function (req, res) {
		res.render('../views/career-shop/research')
	});
}