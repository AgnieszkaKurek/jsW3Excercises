/// <reference path="../../typings/globals/jasmine/index.d.ts" />
/*globals getPossibleSubset*/

describe("Getting all possible subset with a fixed length combinations in an array", (() => {
    it("If the array [1, 2, 3] we will get all subsets of length 2, we get subsets [2, 1], [3, 1], [3, 2]",  (() => {
        var subsets = getPossibleSubset([1, 2, 3], 2);
        expect(subsets).toHaveSameItems([
            [3, 2],
            [3, 1],
            [2, 1]
        ]);
    }));
    it("If the array [[3, 2],[3, 1],[2, 1]] we will get array [[2, 1], [3, 1], [3, 2]]",  (() => {
        expect([[3, 2],[3, 1],[2, 1]]).toHaveSameItems([
            [3, 2],
            [3, 1],
            [2, 1]
        ]);
    }));
    it("If the array[[3, 2],[3, 1],[2, 1]] we will get array [[2, 1], [3, 1], [3, 2]]",  (() => {
        expect([[3, 2],[3, 1],[2, 1]]).toHaveSameItems([
            [2, 3],
            [1, 3],
            [1, 2]
        ]);
    }));
}));