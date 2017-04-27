"use strict";

function getSecondLowestAndSecondGreatestNumbers(numericalSequence) {
    var smallest;
    var secondSmallest;
    var largest;
    var secondLargest;
    for (var i = 0; i < numericalSequence.length; i++) {
        var current = numericalSequence[i];

        if (largest === undefined) {
            largest = current;
        } else if (current > largest) {
            secondLargest = largest;
            largest = current;
        } else if ((current < largest) && (secondLargest === undefined || secondLargest < current)) {
            secondLargest = current;
        }

        if (smallest === undefined) {
            smallest = current;
        } else if (current < smallest) {
            secondSmallest = smallest;
            smallest = current;
        } else if ((current > smallest) && (secondSmallest === undefined || secondSmallest > current)) {
            secondSmallest = current;
        }
    }

    return {
        secondSmallest: secondSmallest,
        secondLargest: secondLargest,
    };
}
