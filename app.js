/**
 * Module dependencies.
 */

var express = require('express'),
    routes = require('./routes'),
    user = require('./routes/user'),
    twitterRoute = require('./routes/twitterRoute'),
    http = require('http'),
    path = require('path'),
    socketio = require('socket.io'),
    twitter = require('ntwitter'),
    app = express();


// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
    app.use(express.errorHandler());
}


var server = http.createServer(app),
    io = socketio.listen(server);

server.listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
});

//Routing
app.get('/', routes.index);
app.get('/users', user.list);
app.get('/twitter', twitterRoute.index);

var twit = new twitter({
    consumer_key: 'fill in',
    consumer_secret: 'fill in',
    access_token_key: 'fill in',
    access_token_secret: 'fill in'
});

io.sockets.on('connection', function (socket) {
    twit.stream('statuses/filter', {'track': ['#lanz']},
        function (stream) {
            stream.on('data', function (data) {
                console.log('Got data: ' + data.text);
                socket.emit('twitter', data);
            });
        });
});

