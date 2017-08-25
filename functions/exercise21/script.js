"use strict";

function getPossibleSubsets(set, numberOfItems) {
    if (numberOfItems === 2) {
        let subsets = [];
        for (let i = 0; i < set.length; ++i) {
            for (let j = i + 1; j < set.length; ++j) {
                subsets.push([set[i], set[j]]);
            }
        }
        return subsets;
    } else {
        throw new Error("Size of subsets different than 2 not implemented yet.");
    }
}