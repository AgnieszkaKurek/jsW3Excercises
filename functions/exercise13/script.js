"use strict";

function getFactorsOfPositiveInteger(number) {
    var array = [];
    for (var i = 1; i <= number; i++)
        if (number % i === 0)
        array.push(i);
    return array;
}
