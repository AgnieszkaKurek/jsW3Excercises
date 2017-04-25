"use strict";

function getSecondLowestAndSecondGreatestNumbers(numericalSequence) {
    var smallestNumber;
    var secondSmallest;
    var largestNumber;
    var secondLargest;
    for (var i = 0; i < numericalSequence.length; i++) {
        var current = numericalSequence[i];
        if (largestNumber === undefined) { largestNumber = current; }
        if (largestNumber != undefined && largestNumber < current) { largestNumber = secondLargest; largestNumber = current; }
        if (largestNumber > current && secondLargest === undefined || secondLargest < current) { current = secondLargest; }
        if (smallestNumber === undefined) { smallestNumber = current; }
        if (smallestNumber < current) { smallestNumber = secondSmallest; smallestNumber = current; }
        if (smallestNumber > current && secondSmallest === undefined || secondSmallest < current) { secondSmallest = current; }
    }

    return {
        secondSmallest: secondSmallest,
        secondLargest: secondLargest,
    };
}
