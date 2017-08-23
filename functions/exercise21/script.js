"use strict";

function getPossibleSubset(set) {
    var subset = [];
    for (var i = 0; i < set.length; ++i)
        for (var j = i + 1; j < set.length; ++j)
            subset.push([set[i], set[j]]);
    return subset;
}

