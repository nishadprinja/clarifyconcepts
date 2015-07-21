var db = require('../db.js');

module.exports.User = {
	create: function (obj, cb) {
		db.create('users', obj, function (user) {
			cb(user);
		});
	},

	find: function (string, cb) {
		db.getUser(string, function (user) {
			cb(user);
		})
	}
}