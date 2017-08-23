/// <reference path="../../typings/globals/jasmine/index.d.ts" />
/*globals getPossibleSubset*/
/*globals arrayOfArraysHaveTheSameItems*/

describe("Getting all possible subset with a fixed length combinations in an array", (() => {
    it("If the array [1, 2, 3] we will get all subsets of length 2, we get subsets [2, 1], [3, 1], [3, 2]", (() => {
        let subsets = getPossibleSubset([1, 2, 3], 2);
        let expetedArray = [[3, 2], [2, 1], [3, 1]];
        let arraysAreEquvalent = arrayOfArraysHaveTheSameItems(subsets, expetedArray);
        expect(arraysAreEquvalent).toBe(true);
    }));

    it("If the array [1, 2, 3, 4] we will get all subsets of length 2, we get subsets [[1,2],[3,4],[1,3],[2,4],[1,4],[2,3]]", (() => {
        let subsets = getPossibleSubset([1, 2, 3, 4], 2);
        let expetedArray = [[1,2],[3,4],[1,3],[2,4],[1,4],[2,3]];
        let arraysAreEquvalent = arrayOfArraysHaveTheSameItems(subsets, expetedArray);
        expect(arraysAreEquvalent).toBe(true);
    }));
}));