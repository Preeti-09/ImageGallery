var express = require('express'),
	bodyParser = require('body-parser');

var app = express();
app.set('view engine', 'ejs');

var indexRoute = require('./routes/index');

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(process.env.PORT || 3500, function () {
	console.log('Server is running....');
});

app.use(indexRoute);