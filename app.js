var sum = function (a, b) {
    return a + b;
}

var compare = function (a, b) {
    var result;

    if (a === b) {
        result = a + ' und ' + b + ' sind gleich';
    } else if (a > b) {
        result = a + ' ist größer als ' + b;
    } else {
        result = a + ' ist kleiner als ' + b;
    }
    return result;
}

var repeater = function (text, count) {
    var i,
        result = '';

    for (i = 0; i < count; i++) {
        result += text + '\n';
    }

    return result;
}


console.log('Die Summe ist: ' + sum(2, 3));
console.log(compare(2, 3));
console.log(compare(3, 3));
console.log(compare(12, 3));
console.log(compare('a', 'b'));
console.log(repeater('dvg', 10));