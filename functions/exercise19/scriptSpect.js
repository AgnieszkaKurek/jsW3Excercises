/// <reference path="../../typings/globals/jasmine/index.d.ts" />
/*globals getElementLargerThanNumber*/

describe("Returning array elements larger than a number", function () {
    it("in the array [2, 5, 10, 15, 20, 30] elements larger than 10 are [15, 20, 30]", function () {
        var elementsLargerThanNumber = getElementLargerThanNumber(10, [2, 5, 10, 15, 20, 30]);
        expect(elementsLargerThanNumber).toEqual([15, 20, 30]);
    });
});