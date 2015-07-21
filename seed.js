var db = require('./db.js');

//making users
var usernames = ['Charmander', 'Charmeleon', 'Charizard', 'Mew', 'Lapras', 'Bulbasaur']
var passwords = ['ember', 'flamethrower', 'fireblast', 'swift', 'surf', 'vinewhip']
var profilePic = ['http://cdn.bulbagarden.net/upload/thumb/7/73/004Charmander.png/250px-004Charmander.png', 
'http://cdn.bulbagarden.net/upload/thumb/4/4a/005Charmeleon.png/250px-005Charmeleon.png',
'http://img.pokemondb.net/artwork/charizard.jpg', 
'http://cdn.bulbagarden.net/upload/thumb/b/b1/151Mew.png/250px-151Mew.png',
'http://cdn.bulbagarden.net/upload/thumb/a/ab/131Lapras.png/250px-131Lapras.png',
'http://img3.wikia.nocookie.net/__cb20140903033555/pokemon/images/e/ea/001Bulbasaur_AG_anime.png']

//making fields
var fields = ['Biology', 'Chemistry', 'Physics']
var unies = ['Cornell', 'Cambridge', 'USC']
var graduated = ['2013', '1998', '2018']
var degrees = ['Bachelors', 'Bachelors, Masters', 'Bachelors']
var summary = ['I went to Cornell for Biology', 'I studied at Cambridge for Chemistry', 'I studied at USC for Physics']


var charmander = {
	username: usernames[0],
	password: passwords[0],
	profile_img: profilePic[0]
};

var charmeleon = {
	username: usernames[1],
	password: passwords[1],
	profile_img: profilePic[1]
};

var charizard = {
	username: usernames[2],
	password: passwords[2],
	profile_img: profilePic[2]
};

var mew = {
	username: usernames[3],
	password: passwords[3],
	profile_img: profilePic[3]
};

var lapras = {
	username: usernames[4],
	password: passwords[4],
	profile_img: profilePic[4]
};

var bulbasaur = {
	username: usernames[5],
	password: passwords[5],
	profile_img: profilePic[5]
};

var cornellBio = {
	field: fields[0],
	university: unies[0],
	graduated: graduated[0],
	degrees: degrees[0],
	summary: summary[0],
	user_id: null
};

var cambridgeChem = {
	field: fields[1],
	university: unies[1],
	graduated: graduated[1],
	degrees: degrees[1],
	summary: summary[1],
	user_id: null
};

var uscPhysics = {
	field: fields[2],
	university: unies[2],
	graduated: graduated[2],
	degrees: degrees[2],
	summary: summary[2],
	user_id: null
};

function createCharmander () {
	db.create('users', charmander, function (user) {
		cornellBio.user_id = user.id
		db.create('field', cornellBio, function (biostudent) {
			console.log('Charmander worked');
		});
	});
}

function createCharmeleon () {
	db.create('users', charmeleon, function (user) {
		cambridgeChem.user_id = user.id
		db.create('field', cambridgeChem, function (chemstudent) {	
			console.log('Charmeleon worked');
		});
	});
}

function createCharizard () {
	db.create('users', charizard, function (user) {
		uscPhysics.user_id = user.id
		db.create('field', uscPhysics, function (physicsstudent) {
			console.log('Charizard worked');
		});
	});
}

function createMew () {
	db.create('users', mew, function (user) {
		console.log('Mew worked')
	});
}

function createLapras () {
	db.create('users', lapras, function (user) {
		console.log('Lapras worked')
	});
}

function createBulbasaur () {
	db.create('users', bulbasaur, function (user) {
		console.log('Bulbasaur worked')
	});
}


function createStep1 () {
	createCharmander();
	function createStep2 () {
		createCharmeleon();
		function createStep3 () {
			createCharizard();
			function createStep4 () {
				createMew();
				function createStep5 () {
					createLapras();
					function createStep6 () {
						createBulbasaur();
					}
					createStep6();
				}
				createStep5();
			}
			createStep4();
		}
		createStep3();
	}
	createStep2();
}
createStep1();

var forum = ['Biology', 'Chemistry', 'Physics']
var descr = ['A forum to discuss Biology', 'A forum to discuss Chemistry', 'A forum to discuss Physics']

var topic = ['Invertebrate Mating Patterns', 'Molecular Collision Experiments', 'Real Life Kinematics']
var content = ['Invertebrates were found to mate most during spring, according to reports at National Geographic', 'Molecular collision experiments reveal why new compounds can have a new color when formed', 'Shooting rockets at these trajectories experimentally allowed us to prove that our calculations were accurate. Check it out.']
var vote = [10, 12, 7]
var comments = [2, 1, 3]

var com_content = ['sweet, nice share dude!', 'I never knew that about invertebrates, 23 years as a biologist and counting!', 'whoa, no way', 'dude, this is boring', 'guy above me is a troll', 'I never knew you could test physics like this, nice!']
var com_vote = [0, 3, 0, -3, 4, 1]

var bioForum = {
	forum: forum[0],
	description: descr[0]
};

var chemForum = {
	forum: forum[1],
	description: descr[1]
};

var physForum = {
	forum: forum[2],
	description: descr[2]
};

var bioPost = {
	topic: topic[0],
	user_id: 1,
	content: content[0],
	vote: vote[0],
	num_comments: comments[0],
	forum_id: null,
};

var chemPost = {
	topic: topic[1],
	user_id: 2,
	content: content[1],
	vote: vote[1],
	num_comments: comments[1],
	forum_id: null,
};

var physPost = {
	topic: topic[2],
	user_id: 3,
	content: content[2],
	vote: vote[2],
	num_comments: comments[2],
	forum_id: null,
};

var bioComment1 = {
	user_id: null,
	content: com_content[0],
	vote: com_vote[0],
	post_id: null
};

var bioComment2 = {
	user_id: null,
	content: com_content[1],
	vote: com_vote[1],
	post_id: null
};

var chemComment1 = {
	user_id: null,
	content: com_content[2],
	vote: com_vote[2],
	post_id: null
};

var physComment1 = {
	user_id: null,
	content: com_content[3],
	vote: com_vote[3],
	post_id: null
};

var physComment2 = {
	user_id: null,
	content: com_content[4],
	vote: com_vote[4],
	post_id: null
};

var physComment3 = {
	user_id: null,
	content: com_content[5],
	vote: com_vote[5],
	post_id: null
};

function createBio() {
	db.create('forums', bioForum, function (bioForum) {
		bioPost.forum_id = bioForum.id
		db.create('posts', bioPost, function (bioPost) {
			bioComment1.post_id = bioPost.id
			bioComment2.post_id = bioPost.id
			db.create('comments', bioComment1, function (bioComment1) {
				db.create('comments', bioComment2, function (bioComment2) {
					console.log('Biology worked')
				});
			});
		});
	});
}

function createChem() {
	db.create('forums', chemForum, function (chemForum) {
		chemPost.forum_id = chemForum.id
		db.create('posts', chemPost, function (chemPost) {
			chemComment1.post_id = chemPost.id
			db.create('comments', chemComment1, function (chemComment1) {
					console.log('Chemistry worked')
			});
		});
	});
}

function createPhys() {
	db.create('forums', physForum, function (physForum) {
		physPost.forum_id = physForum.id
		db.create('posts', physPost, function (physPost) {
			physComment1.post_id = physPost.id
			physComment2.post_id = physPost.id
			physComment3.post_id = physPost.id
			db.create('comments', physComment1, function (physComment1) {
				db.create('comments', physComment2, function (physComment2) {
					db.create('comments', physComment3, function (physComment3) {
					console.log('Physics worked')	
					});
				});
			});
		});
	});
}

function createForumStep1 () {
	createBio();
	function createForumStep2 () {
		createChem();
		function createForumStep3 () {
			createPhys();
			}
		createForumStep3();
	}
	createForumStep2();
}
createForumStep1();