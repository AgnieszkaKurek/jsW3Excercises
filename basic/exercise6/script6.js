'use strict';

function getNumber(min, max) {
    var number = Math.ceil(Math.random() * (max - min + 1)) + min;
    var gnum = prompt('Guess the number between 1 and 10 inclusive');
    if (gnum == number)
        alert('Matched');
    else
        alert('Not matched, the number was ' + number);
};
var numericalInterval = getNumber(1, 10);
console.log(numericalInterval);

