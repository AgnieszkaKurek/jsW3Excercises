"use strict";

function isPerfectNumber(number) {
    var isPerfect = 0;
    for (var i = 1; i <= number / 2; i++) {
        if (number % i === 0) {
            isPerfect += i;
        }
    }
    if (isPerfect === number && isPerfect !== 0) {
        return true;
    }
    else {
        return false;
    }
}