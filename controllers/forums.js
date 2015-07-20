//require model file
var Forum = require('../models/forum.js').Forum;

module.exports.controller = function (app) {
//main route
	app.get('/', function (req, res) {
		Forum.displayForums(function(forums){
			res.render('home', forums);
		});
	});


//Index route
	app.get('/biology', function (req, res) {
		Forum.displayPosts(1, function (posts) {
			res.render('biology', posts);
		});
	});

	app.get('/chemistry', function (req, res) {
		Forum.displayPosts(2, function (posts) {
			res.render('chemistry', posts);
		});
	});	

	app.get('/physics', function (req, res) {
		Forum.displayPosts(3, function (posts) {
			res.render('physics', posts);
		});
	});	

//New route
	app.get('/biology/new', function (req, res) {
		res.render('createBioPost');
	});

//Create route

	app.post('/biology', function (req, res) {
		Forum.createBioPost(req.body)
			res.redirect('/biology')
	});

//Show route
	app.get('/biology/:id', function (req, res) {
		Forum.displayComments(req.params.id, function(info) {
			res.render('biocomments', info);
		});
	});

	app.get('/chemistry/:id', function (req, res) {
		Forum.displayComments(req.params.id, function(info) {
			res.render('chemcomments', info);
		});		
	});

	app.get('/physics/:id', function (req, res) {
		Forum.displayComments(req.params.id, function(info) {
			res.render('physcomments', info);
		});		
	});	


// //Edit route

	// app.get('', function (req, res) {
		
	// });

// //Update route

	// app.put('', function (req, res) {
		
	// });

// //Delete route

	// app.delete('', function (req, res) {
		
	// });
}

