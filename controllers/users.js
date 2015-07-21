'use strict';

var bcrypt = require('bcrypt');
var User = require('../models/user.js').User;

module.exports.controller = function (app) {
	
	//SIGN UP FORM
	app.get('/signup', function (req, res) {
		res.render('newUser');
	})
	//SIGN UP POST
	app.post('/signup', function (req, res) {
		bcrypt.hash(req.body.password, 10, function (err, hash) {
			var newUser = {
				username: req.body.username,
				home_location: req.body.home_location,
				password: hash
			};
			User.create(newUser, function (user) {
				req.session.currentUser = user.id;
				res.redirect('/')
			});
		});
	});

	//LOGIN FORM
	app.get('/login', function (req, res) {
		res.render('login');
	});
	//LOGIN POST
	app.post('/login', function (req, res) {
		User.find(req.body.username, function (user) {
			bcrypt.compare(req.body.password, user.password, function (err, result) {
				if(result) {
					req.session.currentUser = user.id;
					res.redirect('/');
				}  else{
					res.redirect('/login');
				}
			})
		});
	});

	//LOGOUT
	app.delete('/logout', function (req, res) {
		req.session.currentUser = null;
		res.redirect('/')
	});

}