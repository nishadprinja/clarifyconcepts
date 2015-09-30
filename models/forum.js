var db = require('../db.js');
var pg = require('pg');
var dbUrl = "pg://localhost/clarifyconceptsforum_db";

module.exports.Forum = {

	displayForums: function (callback) {
		db.all('forums', function (data) {
			callback(data);
		});
	},

	displayPosts: function (id, callback) {
		db.find('forums', id, function (forums) {
			db.findRelations('posts', 'forum_id', id, function (data) {
				var stuff = {
					forumStuff: forums[0],
					allPostData: data
				};
			callback(stuff);
			});
		});
	},

	displayComments: function (id, callback) {

		pg.connect(dbUrl, function (err, client, done) {
			db.find('posts', id, function (data) {
				client.query('SELECT u.id, u.username, u.password, u.profile_img, u.city, u.region, u.country, p.id AS post_id, p.topic, p.content FROM users u LEFT JOIN posts p ON p.user_id = u.id WHERE p.id=' + id, function (err, result) {
					client.query('SELECT u.id, u.username, u.password, u.profile_img, u.city, u.region, u.country, c.id AS comment_id, c.content, c.post_id FROM users u LEFT JOIN comments c ON c.user_id = u.id WHERE post_id=' + id, function (errr, resultt) {	
						var entireView = {
						post: data[0],
						comment: resultt.rows,
						user: result.rows[0]
						};
						callback(entireView);
					});	
				});
			});
		});
	},

	commentInfo: function (id, callback) {
		db.find('comments', id, function (data) {
			var commentDetails = {
				comment: data[0]
			};
			callback(commentDetails);
		});
	},

	createPost: function (obj, callback) {
		db.create('posts', obj, function (data) {
			console.log('made it');
		});
	},

	editPost: function (obj, id, callback) {
		db.update('posts', obj, id, function (content) {
			console.log('done');
			callback();
		});
	},

	deletePost: function (id, callback) {
		db.find('posts', id, function (data) {
			callback(data[0]);
		});
		db.delete('posts', id, function () {
		});
	},

	createComment: function (obj, callback) {
		db.create('comments', obj, function (data) {
			console.log('created');
		});
	},

	editComment: function (obj, id, callback) {
		db.find('comments', id, function (data) {
			callback(data[0]);
		});

		db.update('comments', obj, id, function (content) {
		});
	},

	deleteComment: function (id, callback) {
		db.find('comments', id, function (data) {
			callback(data[0]);
		});

		db.delete('comments', id, function () {
		});
	}
}