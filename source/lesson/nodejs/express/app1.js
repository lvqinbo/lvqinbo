var express = require('express');
var app = express();
var handlebars = require('express3-handlebars').create({
	defaultLayout: 'main'
});
var fortunes = require('./lib/fortune.js');
// set engine
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

// 静态文件目录
app.use(express.static(__dirname + '/public'));

// set port
app.set('port', process.env.PORT || 3000);

// 测试文件内容
app.use(function(req, res, next) {
	res.locals.showTests = app.get('env') !== 'production' &&
		req.query.test === '1';

	next();
})
app.get('/tours/hood-river', function(req, res) {
	res.render('tours/hood-river');
});
app.get('/tours/request-group-rate', function(req, res) {
	res.render('tours/request-group-rate');
})

app.get('/headers', function(req, res) {
	res.set('Content-Type', 'text/plain');
	var s = '';
	for (var name in req.headers) s += name + ': ' + req.headers[name] + '\n';
	res.send(s);
});


// home page
app.get('/', function(req, res) {
		res.render('home', {
			title: 'Home Page'
		})
	})
	// about page
app.get('/about', function(req, res) {
		res.render('about', {
			title: 'About Us Page',
			fortune: fortunes.getFortunes(),
			pageTestScript: '/qa/tests-about.js'
		})
	})
	// 400 page
app.use(function(req, res, next) {
		res.status(400);
		res.render('400');
	})
	// 500 page
app.use(function(err, req, res, next) {
	console.log(err.stack);
	res.status(500);
	res.render('500');
})

app.get('*', function(req, res) {
		res.sned('Bad Router');
	})
	// listening to port
app.listen(app.get('port'), function() {
	console.log('the server is start and listening to port 3000');
})
