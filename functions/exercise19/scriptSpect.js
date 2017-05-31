/// <reference path="../../typings/globals/jasmine/index.d.ts" />
/*globals returnElementsLargerThanNumber*/

describe("Returning array elements larger than a number", function () {
    it("empty array aren't any elements larger than 10", function () {
        var elementsLargerThanANumber = returnElementsLargerThanNumber(10, []);
        expect(elementsLargerThanANumber).toEqual([]);
    });
    it("in the array whit white space [ ]  aren't any elements larger than 10", function () {
        var elementsLargerThanANumber = returnElementsLargerThanNumber(10, []);
        expect(elementsLargerThanANumber).toEqual([]);
    });
    it("in the array [a] aren't any elements larger than 10", function () {
        var elementsLargerThanANumber = returnElementsLargerThanNumber(10, ["a"]);
        expect(elementsLargerThanANumber).toEqual([]);
    });
    it("in the array [10] aren't any elements larger than 10", function () {
        var elementsLargerThanANumber = returnElementsLargerThanNumber(10, [10]);
        expect(elementsLargerThanANumber).toEqual([]);
    });

    it("in the array [2, 5, 10] aren't any elements larger than 10 ", function () {
        var elementsLargerThanANumber = returnElementsLargerThanNumber(10, [2, 5, 10]);
        expect(elementsLargerThanANumber).toEqual([]);
    });
    it("in the array [2, 5, 10, 15, 20, 30] elements larger than 10 are [15, 20, 30]", function () {
        var elementsLargerThanNumber = returnElementsLargerThanNumber(10, [2, 5, 10, 15, 20, 30]);
        expect(elementsLargerThanNumber).toEqual([15, 20, 30]);
    });
});