//the basics

var express = require('express');
var app = express();
var logger = require('morgan');

app.listen(1337);

app.use(logger('dev'));

app.use(express.static('public'));

//path and handlebars

var path = require('path');
var exphbs = require('express-handlebars');

app.engine('handlebars', exphbs({extname:'handlebars', defaultLayout:'main.handlebars'}));

app.set('view engine', 'handlebars');

app.set('views', path.join(__dirname, 'views'));

//bodyparser

var bodyParser = require('body-parser');

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
var fs = require('fs');

fs.readdirSync('./controllers').forEach(function (file) {
	if(file.substr(-3) == '.js') {
		route = require('./controllers/' + file);
		route.controller(app);
	}
});

