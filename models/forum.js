var db = require('../db.js');

module.exports.Forum = {

	displayForums: function (callback) {
		db.all('forums', function (data) {
			callback(data);
		});
	},

	displayPosts: function (id, callback) {
		db.findRelations('posts', 'forum_id', id, function (data) {
			var stuff = {
				allData: data
			};
		callback(stuff);
		});
	},

	displayComments: function (id, callback) {
		db.find('posts', id, function (data) {
			db.findRelations('comments', 'post_id', id, function (content) {
				var commentsView = {
					post: data,
					comment: content
				};
				callback(commentsView);
			});
		});
	},	

	createBioPost: function (obj, callback) {
		db.create('posts', obj, function (data) {
			console.log('made it')
		});
	}
}