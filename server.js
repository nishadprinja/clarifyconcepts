//the basics
var express = require('express');
var app = express();
var logger = require('morgan');
var sassMiddleware = require('node-sass-middleware');
var path = require('path');
var session = require('express-session');
var exphbs = require('express-handlebars');
var bodyParser = require('body-parser');
var fs = require('fs');

app.listen(1337);
// app.set('port', (process.env.PORT || 3000));
// app.listen(app.get('port'), function () {
// 	console.log('App running on port: ', app.get('port'));
// });

app.use(logger('dev'));

//setup session
app.use(session({
	secret: 'keyboard cat',
	resave: false,
	saveUninitialized: false
}));

//path and handlebars
app.engine('handlebars', exphbs({extname:'handlebars', defaultLayout:'main.handlebars'}));

app.set('view engine', 'handlebars');

app.set('views', path.join(__dirname, 'views'));

//bodyparser
app.use(bodyParser.urlencoded({extended: true}));

//method-override
var methodOverride = require('method-override');

//enable PUT and DELETE with forms
app.use(methodOverride(function (req, res) {
	if (req.body && typeof req.body === 'object' && '_method' in req.body)
		//look in urlencoded POST bodies and delete it
		var method = req.body._method
		delete req.body._method
		return method
}));

//setup fs
fs.readdirSync('./controllers').forEach(function (file) {
	if(file.substr(-3) == '.js') {
		route = require('./controllers/' + file);
		route.controller(app);
	}
});

app.use(sassMiddleware({
    src: __dirname + '/sass',
    dest: __dirname + '/public/css',
    prefix: '/css',
    debug: true
}));

app.use(express.static(path.join(__dirname, 'public')));