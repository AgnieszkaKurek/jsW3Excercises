"use strict";

function getFactorsOfPositiveInteger(checkedNumber) {
    var factorsNumbers = [];
    for (var i = 1; i <= checkedNumber; i++)
        if (checkedNumber % i === 0) {
            factorsNumbers.push(i);
        }
    return factorsNumbers;
}
