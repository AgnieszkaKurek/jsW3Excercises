"use strict";

function getPossibleSubset(set, numberOfItems) {
    if (numberOfItems === 2) {
        let subset = [];
        for (let i = 0; i < set.length; ++i)
            for (let j = i + 1; j < set.length; ++j)
                subset.push([set[i], set[j]]);
        return subset;
    } else {
        throw new Error("Number of subset different than 2 not implemented yet.");
    }
}