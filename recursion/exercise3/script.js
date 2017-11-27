"use strict";

function getTheIntegersInRangeExcluding(start, end) {
    if (start > end) {
        throw new Error("The first number must be less than or equal to the second");
    }
    if (!Number.isInteger(start) || !Number.isInteger(end)) {
        throw new Error("Number of range must be integers");
    }
    let range = [];
    for (let i = start + 1; i < end; i++) {
        range.push(i);
    }
    return range;
}