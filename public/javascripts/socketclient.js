$(function () {
    var socket = io.connect('http://localhost:3000');

    socket.on('twitter', function (data) {
        $('.tweets').prepend('<li>' + data.text + '</li>');
    });
});
