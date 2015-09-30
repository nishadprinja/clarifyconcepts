'use strict';

var bcrypt = require('bcrypt');
var User = require('../models/user.js').User;

module.exports.controller = function (app) {
	
	//SIGN UP FORM
	app.get('/signup', function (req, res) {
		res.render('../views/signup-signin/new_user');
	});

	//SIGN UP POST
	app.post('/signup', function (req, res) {
		bcrypt.hash(req.body.password, 10, function (err, hash) {
			var newUser = {
				username: req.body.username,
				password: hash,
				profile_img: req.body.profile_img,
				city: req.body.city,
				region: req.body.region,
				country: req.body.country
			};
			User.create(newUser, function (user) {
				console.log(req.session);
				req.session.currentUser = user.id;
				res.redirect('/');
			});
		});
	});

	//LOGIN FORM
	app.get('/login', function (req, res) {
		res.render('../views/signup-signin/login');
	});

	//LOGIN POST
	app.post('/login', function (req, res) {
		User.find(req.body.username, function (user) {
			bcrypt.compare(req.body.password, user.password, function (err, result) {
				if (result) {
					var sessionId = {
						session: req.session.currentUser
					};
					req.session.currentUser = user.id;
					res.render('home', sessionId);
				} else {
					res.redirect('/login');
				}
			});
		});
	});

	//LOGOUT
	app.delete('/logout', function (req, res) {
		var sessionId = {
			session: req.session.currentUser
		};
		req.session.currentUser = null;
		res.render('home', sessionId);
	});
}