/// <reference path="../../typings/globals/jasmine/index.d.ts" />
/*globals getPossibleSubset*/

describe("Getting all possible subset with a fixed length combinations in an array", (() => {
    it("If the array [1, 2, 3] we will get all subsets of length 2, we get subsets [2, 1], [3, 1], [3, 2]", (() => {
        var subsets = getPossibleSubset([1, 2, 3], 2);
        //var subsets = [[3, 2], [2, 1], [3, 1]];
        expect(subsets.length).toEqual(3);
        expect(subsets.filter(x => x.length === 2 && x.includes(2) && x.includes(3)).length).toBeTruthy();
        expect(subsets.filter(x => x.length === 2 && x.includes(2) && x.includes(1)).length).toBeTruthy();
        expect(subsets.filter(x => x.length === 2 && x.includes(3) && x.includes(1)).length).toBeTruthy();
    }));
}));