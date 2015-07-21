var db = require('../db.js');

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
					allData: data
				};
			callback(stuff);
			});
		});
	},

	displayComments: function (id, callback) {
		db.find('posts', id, function (data) {
			db.findRelations('comments', 'post_id', id, function (content) {
				var commentsView = {
					post: data[0],
					comment: content
				};
				callback(commentsView);
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