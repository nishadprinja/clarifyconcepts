//require model file
var Forum = require('../models/forum.js').Forum;

module.exports.controller = function (app) {

//main route

	app.get('/forum', function (req, res) {
		Forum.displayForums(function(forums){
			var data = {
				forums: forums
			};
			res.render('../views/forum/forums', data);
		});
	});

//Index route

	app.get('/forum/:id', function (req, res) {
		Forum.displayPosts(req.params.id, function (posts) {
			res.render('../views/forum/forum', posts);
		});
	});

//New route

	app.get('/forum/:id/new', function (req, res) {
		var data = {
			forums: req.params.id,
			user: req.session.currentUser
		};
		res.render('../views/forum/create_post', data);
	});

	app.get('/forum/post/comment/:id/new', function (req, res) {
		var data = {
			post: req.params.id,
			user: req.session.currentUser
		};
		res.render('../views/forum/create_comment', data);
	});

//Create route

	app.post('/forum/:id', function (req, res) {
		Forum.createPost(req.body)
			res.redirect('/forum/' + req.params.id);
	});

	app.post('/forum/post/comment/:id', function (req, res) {
		Forum.createComment(req.body)
			res.redirect('/forum/post/' + req.params.id);
	});

//Show route

	app.get('/forum/post/:id', function (req, res) {
		Forum.displayComments(req.params.id, function (info) {
			res.render('../views/forum/comments', info);
		});
	});

//Edit route

	app.get('/forum/post/edit/:id', function (req, res) {
		Forum.displayComments(req.params.id, function (info) {
			res.render('../views/forum/edit_post', info.post);		
		});
	});

	app.get('/forum/post/comment/edit/:id', function (req, res) {
		Forum.commentInfo(req.params.id, function (info) {
			res.render('../views/forum/edit_comment', info.comment);
		});
	});

//Update route

	app.put('/forum/post/edit/:id', function (req, res) {
		Forum.editPost(req.body, req.params.id, function () {
			res.redirect('/forum/post/' + req.params.id);
		});
	});

	app.put('/forum/post/comment/edit/:id', function (req, res) {
		Forum.editComment(req.body, req.params.id, function (info) {
			res.redirect('/forum/post/' + info.post_id);
		});
	});

//Delete route

	app.delete('/forum/post/delete/:id', function (req, res) {
		Forum.deletePost(req.params.id, function (info) {
			res.redirect('/forum/' + info.forum_id);
		});
	});

	app.delete('/forum/post/comment/delete/:id', function (req, res) {
		Forum.deleteComment(req.params.id, function (info) {
			res.redirect('/forum/post/' + info.post_id);
		});
	});

}

