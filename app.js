var fs = require('fs');

var getLibrary = function (callback) {
    fs.readFile('library.json', 'utf8', function (err, data) {
        var library;

        if (err) {
            console.error('Error: ' + err);
            return;
        }
        library = JSON.parse(data);
        callback(library.books);

    });
}

getLibrary(function (library) {
    var i;
    var book;
    console.log('Folgende Bücher stehen in der Bibliothek: ');
    for (i = 0; i < library.length; i++) {
        book = library[i];

        if (book.author == 'dvg') {
            console.log('Buch Nummer ' + i + ' ist ein ' + book.genre + ' und hat den Titel: "' + book.title + '" und wurde von "' + book.author + '" geschrieben.');
        }
    }
});






