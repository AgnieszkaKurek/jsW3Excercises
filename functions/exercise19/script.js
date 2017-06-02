"use strict";

function returnElementsLargerThanNumber(referenceNumber, sequence) {
    return sequence.filter(function (item => item > referenceNumber));
}

//(v => v % 2 == 0);