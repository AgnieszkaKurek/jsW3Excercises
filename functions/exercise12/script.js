"use strict";

function isPerfectNumber(number) {
    var counter = 0;
    for (var i = 1; i <= number / 2; i++) {
        if (number % i === 0) {
            counter += i;
        }
    }
    return counter === number && counter !== 0;
}